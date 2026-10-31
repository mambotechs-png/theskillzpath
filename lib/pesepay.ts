import crypto from "node:crypto";

const ENV = process.env.PESEPAY_ENVIRONMENT ?? "sandbox";

export const PESEPAY_BASE_URL =
  ENV === "production"
    ? "https://api.pesepay.com/api/payments-engine/v1"
    : "https://api.test.sandbox.pesepay.com/payments-engine/v1";

export const PESEPAY_INITIATE_URL = `${PESEPAY_BASE_URL}/payments/initiate`;

export function getIntegrationKey(): string {
  const key = process.env.PESEPAY_INTEGRATION_KEY;
  if (!key) throw new Error("PESEPAY_INTEGRATION_KEY is not set");
  return key;
}

export function getEncryptionKey(): string {
  const key = process.env.PESEPAY_ENCRYPTION_KEY;
  if (!key) throw new Error("PESEPAY_ENCRYPTION_KEY is not set");
  if (key.length !== 32) throw new Error("PESEPAY_ENCRYPTION_KEY must be 32 characters");
  return key;
}

export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
}

/**
 * AES-256-CBC encrypt. Key = encryption key (32 chars), IV = first 16 chars.
 * Returns base64-encoded ciphertext.
 */
export function encrypt(plaintext: string, encryptionKey: string): string {
  const key = Buffer.from(encryptionKey, "utf8");
  const iv = Buffer.from(encryptionKey.substring(0, 16), "utf8");
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plaintext, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

/**
 * AES-256-CBC decrypt. Returns the decrypted string.
 */
export function decrypt(ciphertext: string, encryptionKey: string): string {
  const key = Buffer.from(encryptionKey, "utf8");
  const iv = Buffer.from(encryptionKey.substring(0, 16), "utf8");
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(ciphertext, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export type InitiateRequest = {
  amountDetails: { amount: number; currencyCode: string };
  reasonForPayment: string;
  resultUrl: string;
  returnUrl: string;
  merchantReference?: string;
  paymentMethodCode?: string;
  paymentMetadata?: Record<string, string>;
};

export type InitiateResponse = {
  referenceNumber: string;
  redirectUrl: string;
  pollUrl: string;
};

export async function initiateTransaction(
  request: InitiateRequest,
): Promise<InitiateResponse> {
  const integrationKey = getIntegrationKey();
  const encryptionKey = getEncryptionKey();

  const encryptedPayload = encrypt(JSON.stringify(request), encryptionKey);

  const response = await fetch(PESEPAY_INITIATE_URL, {
    method: "POST",
    headers: {
      authorization: integrationKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({ payload: encryptedPayload }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Pesepay initiate failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const decrypted = decrypt(data.payload, encryptionKey);
  const result = JSON.parse(decrypted) as InitiateResponse;

  if (!result.redirectUrl) {
    throw new Error("Pesepay did not return a redirectUrl");
  }

  return result;
}

export type PaymentOutcome = "paid" | "pending" | "failed";

const PENDING_STATUSES = ["INITIATED", "PROCESSING", "PENDING", "PARTIALLY_PAID", "CANCELLED", "WAITING_FOR_CUSTOMER"];

export function classifyStatus(status: string): PaymentOutcome {
  const s = status.toUpperCase();
  if (s === "SUCCESS") return "paid";
  if (PENDING_STATUSES.includes(s)) return "pending";
  return "failed";
}

/**
 * Asks Pesepay for the real status of a transaction. Only SUCCESS counts as paid.
 * Any lookup problem is treated as "failed" so access is never granted by mistake.
 */
export async function checkPayment(
  referenceNumber: string,
): Promise<{ outcome: PaymentOutcome; status: string }> {
  try {
    const url = new URL(`${PESEPAY_BASE_URL}/payments/check-payment`);
    url.searchParams.set("referenceNumber", referenceNumber);

    const response = await fetch(url, {
      headers: {
        authorization: getIntegrationKey(),
        "content-type": "application/json",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return { outcome: "failed", status: "LOOKUP_FAILED" };

    const data = await response.json();
    const result = JSON.parse(decrypt(data.payload, getEncryptionKey())) as {
      transactionStatus?: string;
    };
    const status = result.transactionStatus ?? "UNKNOWN";
    return { outcome: classifyStatus(status), status };
  } catch (error) {
    console.error("[pesepay] check-payment error:", error);
    return { outcome: "failed", status: "LOOKUP_FAILED" };
  }
}
