import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { getMemberByEmail, type Member } from "./db";

const SECRET = process.env.AUTH_SECRET ?? process.env.PESEPAY_ENCRYPTION_KEY ?? "skillzpath-dev-secret";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const SESSION_COOKIE = "sp_session";

async function hmacHex(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(email: string): Promise<string> {
  const expMs = Date.now() + SESSION_TTL_SECONDS * 1000;
  const sig = await hmacHex(`${email}|${expMs}`);
  return `${email}|${expMs}|${sig}`;
}

export async function verifySessionToken(token: string): Promise<string | null> {
  const parts = token.split("|");
  if (parts.length !== 3) return null;
  const email = parts[0];
  const expMs = Number(parts[1]);
  const sig = parts[2];
  if (!email || !Number.isFinite(expMs) || expMs < Date.now()) return null;
  const expected = await hmacHex(`${email}|${expMs}`);
  if (expected.length !== sig.length) return null;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  if (diff !== 0) return null;
  return email;
}

export function setSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

function parseCookie(header: string, name: string): string | null {
  const match = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return null;
  const value = match.slice(name.length + 1);
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function getSessionEmailFromRequest(
  request: Request,
): Promise<string | null> {
  const token = parseCookie(request.headers.get("cookie") ?? "", SESSION_COOKIE);
  if (!token) return null;
  const email = await verifySessionToken(token);
  if (!email) return null;
  const member = await getMemberByEmail(email);
  if (!member || member.accessStatus !== "ACTIVE") return null;
  return email;
}

export async function getSessionEmail(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const email = await verifySessionToken(token);
  if (!email) return null;
  const member = await getMemberByEmail(email);
  if (!member || member.accessStatus !== "ACTIVE") return null;
  return email;
}

export function toPublicMember(member: Member) {
  return {
    id: member.id,
    email: member.email,
    firstName: member.firstName,
    lastName: member.lastName,
    phone: member.phone,
    country: member.country,
    city: member.city,
    ageGroup: member.ageGroup,
    interest: member.interest,
    experience: member.experience,
    goal: member.goal,
    source: member.source,
    paymentStatus: member.paymentStatus,
    accessStatus: member.accessStatus,
    amountPaid: member.amountPaid,
    referenceNumber: member.referenceNumber,
    createdAt: member.createdAt,
    updatedAt: member.updatedAt,
  };
}
