import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import { Countdown } from "@/app/components/countdown";
import { CheckoutForm } from "@/app/components/checkout-form";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join early access",
  description:
    "Pay the $19.99 founding membership fee to reserve your SkillzPath founding seat. The campus opens on November 17, 2026.",
};

const included = [
  "Every published course across 12 campuses",
  "Practical projects and assessments",
  "Portfolio builder and professional profile",
  "Access to the moderated opportunity board",
  "Progress tracking and eligible certificates",
  "Founding price locked until launch",
];

export default function EnrollPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="shell py-10 sm:py-14">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#5b5f70] transition-colors hover:text-[#0b0b12]"
          >
            <ArrowLeft className="size-3.5" />
            Back to home
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="eyebrow">Early access</p>
              <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.2rem]">
                Reserve your
                <br />
                <span className="text-gradient">founding seat.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#5b5f70]">
                Join the founding group for ${site.pricing.earlyBird}/month. One
                payment of ${site.pricing.earlyBird} secures your founding seat
                and locks in the founding price. We will email you the next step
                and remind you before the campus opens on {site.launchDateLabel}.
              </p>

              <div className="glass mt-7 rounded-2xl p-5 sm:p-6">
                <CheckoutForm />
              </div>

              <div className="mt-5 flex items-start gap-2.5 text-[11.5px] leading-relaxed text-[#8b90a3]">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#4f46e5]" />
                <p>
                  Founding access requires the ${site.pricing.earlyBird}{" "}
                  monthly membership payment. Paid work is not guaranteed;
                  opportunities depend on available projects and client selection.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="glass rounded-[1.6rem] p-1.5">
                <div className="rounded-[1.3rem] border border-white/80 bg-white/85 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8b90a3]">
                      Founding membership
                    </p>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
                      Open
                    </span>
                  </div>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="font-mono text-[3rem] font-semibold leading-none tracking-[-0.04em] text-[#0b0b12]">
                      ${site.pricing.earlyBird}
                    </span>
                    <div className="pb-1">
                      <p className="text-[12px] text-[#5b5f70]">/ month</p>
                      <p className="text-[10.5px] text-[#8b90a3] line-through">
                        ${site.pricing.launch} after launch
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#0b0b12]/[0.06] bg-[#f7f8fc]/80 p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">
                        <CalendarDays className="size-3.5" />
                        Opens
                      </p>
                      <p className="text-[11.5px] font-medium text-[#0b0b12]">
                        {site.launchDateLabel}
                      </p>
                    </div>
                    <Countdown target={site.launchDate} className="mt-2.5" />
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-[#0b0b12]/[0.07] pt-5">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-[#4f46e5]">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-[12.5px] leading-relaxed text-[#3b3f4d]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-center gap-1.5 rounded-xl bg-[#f7f8fc] px-3 py-2.5 text-[11px] text-[#8b90a3]">
                    <LockKeyhole className="size-3.5" />
                    Founding price locked until launch
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
