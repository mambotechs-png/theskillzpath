import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth";
import { isTrustedRequest } from "@/lib/security";

export async function POST(request: Request) {
  if (!isTrustedRequest(request)) {
    return NextResponse.json({ error: "Request blocked." }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  clearSessionCookie(response);
  return response;
}
