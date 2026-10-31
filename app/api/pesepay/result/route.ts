import { NextResponse } from "next/server";
import { decrypt, getEncryptionKey } from "@/lib/pesepay";
import { markMemberPaidByReference } from "@/lib/db";
import { site } from "@/lib/site";

function getCookie(request: Request, name: string): string {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return "";
  const value = match.slice(name.length + 1);
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function POST(request: Request) {
  let raw: { payload?: string };

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!raw.payload) {
    return NextResponse.json({ error: "Missing payload." }, { status: 400 });
  }

  let result: Record<string, unknown>;

  try {
    const encryptionKey = getEncryptionKey();
    const decrypted = decrypt(raw.payload, encryptionKey);
    result = JSON.parse(decrypted);
  } catch (error) {
    console.error("[pesepay] result decrypt error:", error);
    return NextResponse.json({ error: "Failed to decrypt payload." }, { status: 400 });
  }

  const status = (result.transactionStatus as string) ?? "UNKNOWN";
  const reference = (result.referenceNumber as string) ?? "";
  const email = getCookie(request, "sp_email");

  console.info("[pesepay] payment result:", JSON.stringify(result));

  // Only a confirmed SUCCESS grants founding member access.
  if (status === "SUCCESS") {
    try {
      const member = markMemberPaidByReference(
        reference,
        email,
        site.pricing.earlyBird,
      );
      console.info("[pesepay] founding member updated:", member?.email ?? "unknown");
    } catch (error) {
      console.error("[pesepay] failed to update member:", error);
    }
  }

  return NextResponse.json({ received: true, reference, status });
}

// Pesepay may also GET the result URL in some flows; accept it gracefully.
export async function GET() {
  return NextResponse.json({ ok: true });
}
