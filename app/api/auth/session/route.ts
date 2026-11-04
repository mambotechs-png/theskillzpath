import { NextResponse } from "next/server";
import { getSessionEmailFromRequest, toPublicMember } from "@/lib/auth";
import { getMemberByEmail } from "@/lib/db";

export async function GET(request: Request) {
  const email = await getSessionEmailFromRequest(request);
  const member = email ? await getMemberByEmail(email) : null;
  return NextResponse.json({ member: member ? toPublicMember(member) : null });
}
