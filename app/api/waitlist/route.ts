import { NextResponse } from "next/server";
import { addWaitlistSignup } from "@/lib/db";
import { isTrustedRequest } from "@/lib/security";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type WaitlistPayload = {
  firstName?: unknown;
  email?: unknown;
  country?: unknown;
  interest?: unknown;
  updates?: unknown;
};

function clean(value: unknown, max = 120): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Collects early-access signups into the database.
 */
export async function POST(request: Request) {
  if (!isTrustedRequest(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  let payload: WaitlistPayload;

  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = clean(payload.email, 254).toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 422 },
    );
  }

  const signup = {
    firstName: clean(payload.firstName, 80),
    email,
    country: clean(payload.country, 80),
    interest: clean(payload.interest, 120),
    updates: payload.updates !== false,
    receivedAt: new Date().toISOString(),
  };

  await addWaitlistSignup(email, signup.firstName, signup.interest);

  return NextResponse.json({ ok: true });
}
