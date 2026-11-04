import crypto from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { members, waitlist, type MemberRow } from "@/db/schema";
import { site } from "./site";

/**
 * Data layer for SkillzPath, backed by Netlify Database (managed Postgres).
 *
 * Tables (see db/schema.ts):
 *  - members:  early-access / founding members who paid (or attempted to pay)
 *  - waitlist: email-only early-access reservations collected before launch
 */

export type MemberStatus = "PENDING" | "PAID" | "FAILED";

export type MemberAccess = "RESERVED" | "ACTIVE" | "REVOKED";

export type Member = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  ageGroup: string;
  interest: string;
  experience: string;
  goal: string;
  source: string;
  agreeUpdates: boolean;
  paymentStatus: MemberStatus;
  accessStatus: MemberAccess;
  amountPaid: number;
  referenceNumber: string;
  createdAt: string;
  updatedAt: string;
  passwordHash: string;
};

function toMember(row: MemberRow): Member {
  return {
    ...row,
    id: String(row.id),
    paymentStatus: (row.paymentStatus || "PENDING") as MemberStatus,
    accessStatus: (row.accessStatus || "RESERVED") as MemberAccess,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export type SaveMemberInput = {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  city?: string;
  ageGroup?: string;
  interest?: string;
  experience?: string;
  goal?: string;
  source?: string;
  agreeUpdates?: boolean;
  password?: string;
  paymentStatus?: MemberStatus;
  accessStatus?: MemberAccess;
  amountPaid?: number;
  referenceNumber?: string;
};

function hashPassword(password: string): string {
  if (!password) return "";
  const salt = crypto.randomBytes(16).toString("hex");
  const dk = crypto.scryptSync(password, salt, 64);
  return `${salt}.${dk.toString("hex")}`;
}

export function verifyPassword(password: string, hash: string): boolean {
  if (!password || !hash) return false;
  const parts = hash.split(".");
  if (parts.length !== 2) return false;
  const [salt, storedKey] = parts;
  try {
    const dk = crypto.scryptSync(password, salt, 64);
    const stored = Buffer.from(storedKey, "hex");
    return stored.length === dk.length && crypto.timingSafeEqual(dk, stored);
  } catch {
    return false;
  }
}

// Strip HTML tags and control chars before persisting free-text fields.
// React already escapes on render; this is defense-in-depth server-side.
function sanitizeText(value: string | undefined, max = 160): string {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/[\r\n\t]/g, " ")
    .trim()
    .slice(0, max);
}

async function findMemberRow(email: string): Promise<MemberRow | undefined> {
  const [row] = await db.select().from(members).where(eq(members.email, email)).limit(1);
  return row;
}

export async function saveMember(input: SaveMemberInput): Promise<Member | null> {
  const email = input.email.trim().toLowerCase();
  const existing = await findMemberRow(email);

  if (existing) {
    const [updated] = await db
      .update(members)
      .set({
        firstName: input.firstName !== undefined ? sanitizeText(input.firstName, 80) : existing.firstName,
        lastName: input.lastName !== undefined ? sanitizeText(input.lastName, 80) : existing.lastName,
        phone: input.phone !== undefined ? sanitizeText(input.phone) : existing.phone,
        country: input.country !== undefined ? sanitizeText(input.country) : existing.country,
        city: input.city !== undefined ? sanitizeText(input.city) : existing.city,
        ageGroup: input.ageGroup !== undefined ? sanitizeText(input.ageGroup) : existing.ageGroup,
        interest: input.interest !== undefined ? sanitizeText(input.interest) : existing.interest,
        experience: input.experience !== undefined ? sanitizeText(input.experience) : existing.experience,
        goal: input.goal !== undefined ? sanitizeText(input.goal) : existing.goal,
        source: input.source !== undefined ? sanitizeText(input.source) : existing.source,
        agreeUpdates: input.agreeUpdates ?? existing.agreeUpdates,
        // Never downgrade a member who has already paid.
        paymentStatus: existing.paymentStatus === "PAID" ? "PAID" : input.paymentStatus ?? existing.paymentStatus,
        accessStatus: existing.accessStatus === "ACTIVE" ? "ACTIVE" : input.accessStatus ?? existing.accessStatus,
        amountPaid: existing.paymentStatus === "PAID" ? existing.amountPaid : input.amountPaid ?? existing.amountPaid,
        referenceNumber:
          input.referenceNumber !== undefined ? sanitizeText(input.referenceNumber, 80) : existing.referenceNumber,
        // Keep the existing password unless a new one is supplied.
        passwordHash: input.password ? hashPassword(input.password) : existing.passwordHash,
        updatedAt: new Date(),
      })
      .where(eq(members.email, email))
      .returning();
    return updated ? toMember(updated) : null;
  }

  const [created] = await db
    .insert(members)
    .values({
      email,
      firstName: sanitizeText(input.firstName, 80),
      lastName: sanitizeText(input.lastName, 80),
      phone: sanitizeText(input.phone),
      country: sanitizeText(input.country),
      city: sanitizeText(input.city),
      ageGroup: sanitizeText(input.ageGroup),
      interest: sanitizeText(input.interest),
      experience: sanitizeText(input.experience),
      goal: sanitizeText(input.goal),
      source: sanitizeText(input.source),
      agreeUpdates: input.agreeUpdates ?? true,
      paymentStatus: input.paymentStatus ?? "PENDING",
      accessStatus: input.accessStatus ?? "RESERVED",
      amountPaid: input.amountPaid ?? 0,
      referenceNumber: sanitizeText(input.referenceNumber, 80),
      passwordHash: input.password ? hashPassword(input.password) : "",
    })
    .returning();
  return created ? toMember(created) : null;
}

export async function getMemberByEmail(email: string): Promise<Member | null> {
  const row = await findMemberRow(email.trim().toLowerCase());
  return row ? toMember(row) : null;
}

export async function markMemberPaidByReference(
  referenceNumber: string,
  email: string,
  amountPaid: number = site.pricing.earlyBird,
): Promise<Member | null> {
  const reference = referenceNumber.trim();

  let targetEmail = (email || "").trim().toLowerCase();
  if (!targetEmail && reference) {
    const [byReference] = await db
      .select({ email: members.email })
      .from(members)
      .where(eq(members.referenceNumber, reference))
      .limit(1);
    targetEmail = byReference?.email ?? "";
  }
  if (!targetEmail) return null;

  const [updated] = await db
    .update(members)
    .set({
      paymentStatus: "PAID",
      accessStatus: "ACTIVE",
      amountPaid,
      referenceNumber: reference,
      updatedAt: new Date(),
    })
    .where(eq(members.email, targetEmail))
    .returning();
  return updated ? toMember(updated) : null;
}

export async function markMemberPaid(
  email: string,
  amountPaid: number,
  referenceNumber: string,
): Promise<Member | null> {
  const member = await getMemberByEmail(email);
  if (!member) return null;
  return markMemberPaidByReference(member.referenceNumber || referenceNumber, email, amountPaid);
}

export async function addWaitlistSignup(email: string, firstName?: string, interest?: string): Promise<void> {
  await db
    .insert(waitlist)
    .values({
      email: email.trim().toLowerCase(),
      firstName: sanitizeText(firstName, 80),
      interest: sanitizeText(interest, 120),
    })
    .onConflictDoNothing({ target: waitlist.email });
}
