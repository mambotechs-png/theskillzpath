import { pgTable, serial, text, doublePrecision, boolean, timestamp } from "drizzle-orm/pg-core";

// Early-access / founding members who paid (or attempted to pay).
export const members = pgTable("members", {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  firstName: text("first_name").notNull().default(""),
  lastName: text("last_name").notNull().default(""),
  phone: text().notNull().default(""),
  country: text().notNull().default(""),
  city: text().notNull().default(""),
  ageGroup: text("age_group").notNull().default(""),
  interest: text().notNull().default(""),
  experience: text().notNull().default(""),
  goal: text().notNull().default(""),
  source: text().notNull().default(""),
  agreeUpdates: boolean("agree_updates").notNull().default(true),
  paymentStatus: text("payment_status").notNull().default("PENDING"),
  accessStatus: text("access_status").notNull().default("RESERVED"),
  amountPaid: doublePrecision("amount_paid").notNull().default(0),
  referenceNumber: text("reference_number").notNull().default(""),
  passwordHash: text("password_hash").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Email-only early-access reservations collected before launch.
export const waitlist = pgTable("waitlist", {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  firstName: text("first_name").notNull().default(""),
  interest: text().notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type MemberRow = typeof members.$inferSelect;
