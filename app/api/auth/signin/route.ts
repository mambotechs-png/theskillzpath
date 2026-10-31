import { NextResponse } from "next/server";
import { createSessionToken, setSessionCookie, toPublicMember } from "@/lib/auth";
import { getMemberByEmail, verifyPassword } from "@/lib/db";
import { isTrustedRequest } from "@/lib/security";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type SigninPayload = {
  email?: unknown;
  password?: unknown;
};

export async function POST(request: Request) {
  if (!isTrustedRequest(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  let payload: SigninPayload;
  try {
    payload = (await request.json()) as SigninPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 422 });
  }

  const member = getMemberByEmail(email);

  if (!member) {
    return NextResponse.json(
      { error: "No founding member found for this email address." },
      { status: 404 },
    );
  }

  const password = typeof payload.password === "string" ? payload.password : "";
  const passwordValid = member.passwordHash ? verifyPassword(member.passwordHash, password) : false;

  if (!passwordValid) {
    return NextResponse.json(
      { error: "Invalid password." },
      { status: 401 },
    );
  }

  const token = await createSessionToken(member.email);
  const response = NextResponse.json({ ok: true, member: toPublicMember(member) });
  setSessionCookie(response, token);
  return response;
}
