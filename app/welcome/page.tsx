import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Check, Mail } from "lucide-react";
import { Countdown } from "@/app/components/countdown";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { markMemberPaidByReference, getMemberByEmail } from "@/lib/db";
import { checkPayment } from "@/lib/pesepay";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "You're on the list",
  description:
    "Your SkillzPath founding seat is reserved. The campus opens on November 17, 2026.",
};

export const instant = false;

const nextSteps = [
  "Check your inbox for a confirmation and your founding member details.",
  "We will email you before launch with everything you need to prepare.",
  "On November 17, 2026, the full campus opens: courses, projects, portfolio tools, and the opportunity board.",
  "Your founding price stays locked for as long as your membership remains active.",
];

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; ref?: string }>;
}) {
  const { email: emailParam, ref } = await searchParams;
  const email = typeof emailParam === "string" ? emailParam.trim().toLowerCase() : "";
  const memberEmail = email;

  let member = memberEmail ? getMemberByEmail(memberEmail) : null;

  // Read the real transaction status from Pesepay whenever a reference is present.
  let paymentOutcome: "paid" | "pending" | "failed" = "pending";
  let transactionStatus = "UNKNOWN";

  if (ref) {
    const check = await checkPayment(ref);
    transactionStatus = check.status;
    paymentOutcome = check.outcome;
    if (paymentOutcome === "paid") {
      member = markMemberPaidByReference(ref, memberEmail);
    }
  }

  const isPaid =
    paymentOutcome === "paid" && member?.accessStatus === "ACTIVE";
  const isFailed = paymentOutcome === "failed" || member?.paymentStatus === "FAILED";
  const awaitingPayment = !isPaid && !isFailed;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="shell py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <Check className="size-7" strokeWidth={2.5} />
            </span>

            {isPaid ? (
              <>
                <p className="eyebrow mx-auto mt-6">Founding member</p>
                <h1 className="mt-5 text-[2.3rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.2rem]">
                  Welcome to the founding group.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#5b5f70]">
                  Your founding membership payment of{" "}
                  <span className="font-medium text-[#0b0b12]">
                    ${site.pricing.earlyBird}
                  </span>{" "}
                  was confirmed. Your founding seat is secured and your access
                  unlocks when the campus opens on {site.launchDateLabel}.
                </p>
              </>
            ) : isFailed ? (
              <>
                <p className="eyebrow mx-auto mt-6">Payment update</p>
                <h1 className="mt-5 text-[2.3rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.2rem]">
                  Your payment didn&apos;t go through.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#5b5f70]">
                  No founding seat was reserved. You can pay the{" "}
                  <span className="font-medium text-[#0b0b12]">
                    ${site.pricing.earlyBird}
                  </span>{" "}
                  founding membership fee and get back in the queue.
                </p>
              </>
            ) : (
              <>
                <p className="eyebrow mx-auto mt-6">Seat reserved</p>
                <h1 className="mt-5 text-[2.3rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.2rem]">
                  You&apos;re on the list.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#5b5f70]">
                  {transactionStatus !== "UNKNOWN"
                    ? `We checked your payment (${transactionStatus}) and your seat is reserved. Complete the ${site.pricing.earlyBird} founding membership payment to activate it. `
                    : "Your founding seat is reserved. Complete the "}
                  <span className="font-medium text-[#0b0b12]">
                    ${site.pricing.earlyBird}
                  </span>{" "}
                  founding membership payment to activate it. You&apos;ll be the
                  first to know when the campus opens on {site.launchDateLabel}.
                  {memberEmail ? (
                    <>
                      {" "}
                      Updates will go to{" "}
                      <span className="font-medium text-[#0b0b12]">{memberEmail}</span>.
                    </>
                  ) : null}
                </p>
              </>
            )}

            <div className="mx-auto mt-8 max-w-sm">
              <Countdown target={site.launchDate} />
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {isPaid ? (
                <Link href="/dashboard" className="btn btn-primary">
                  Go to your dashboard
                  <ArrowUpRight className="size-4" />
                </Link>
              ) : (
                <Link href="/enroll" className="btn btn-primary">
                  Pay ${site.pricing.earlyBird} — reserve founding access
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
              <Link href="/" className="btn btn-secondary">
                Back to home
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#eef0ff] text-[#4f46e5]">
                  <CalendarDays className="size-4" />
                </span>
                <h2 className="text-[14px] font-semibold text-[#0b0b12]">
                  {isPaid ? "Welcome to SkillzPath" : "What happens next"}
                </h2>
              </div>

              <ol className="mt-5 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0b0b12] font-mono text-[10px] font-medium text-white">
                      {index + 1}
                    </span>
                    <span className="text-[12.5px] leading-relaxed text-[#5b5f70]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-start gap-2.5 border-t border-[#0b0b12]/[0.07] pt-5">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#4f46e5]" />
                <p className="text-[12px] leading-relaxed text-[#8b90a3]">
                  Didn&apos;t get the email? Check your spam folder or write to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-[#4f46e5] underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
