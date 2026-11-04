import { NextResponse } from "next/server";
import { createSessionToken, setSessionCookie, toPublicMember } from "@/lib/auth";
import { saveMember } from "@/lib/db";
import { isTrustedRequest } from "@/lib/security";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type SignupPayload = {
  email?: unknown;
  firstName?: unknown;
  interest?: unknown;
  password?: unknown;
};

export async function POST(request: Request) {
  if (!isTrustedRequest(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  let payload: SignupPayload;
  try {
    payload = (await request.json()) as SignupPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const interest = typeof payload.interest === "string" ? payload.interest.trim() : "";
  const password = typeof payload.password === "string" ? payload.password.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 422 });
  }

  if (!password) {
    return NextResponse.json({ error: "Password is required." }, { status: 422 });
  }

  const member = await saveMember({
    email,
    firstName,
    interest,
    password,
    paymentStatus: "PENDING",
    accessStatus: "RESERVED",
  });

  if (!member) {
    return NextResponse.json({ error: "Could not create your account." }, { status: 500 });
  }

  const token = await createSessionToken(member.email);
  const response = NextResponse.json({ ok: true, member: toPublicMember(member) });
  setSessionCookie(response, token);
  return response;
}
