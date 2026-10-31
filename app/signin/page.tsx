import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { SigninForm } from "@/app/components/signin-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to your SkillzPath founding member account. Founding access requires the $19.99 monthly membership payment.",
};

export const instant = false;

export default function SigninPage() {
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

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div>
              <p className="eyebrow">Welcome back</p>
              <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.2rem]">
                Sign in to your
                <br />
                <span className="text-gradient">seat.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-[#5b5f70]">
                Founding access requires the ${site.pricing.earlyBird} monthly
                membership payment. Sign in with the email you used to reserve
                your founding seat.
              </p>

              <div className="glass mt-7 rounded-2xl p-5 sm:p-6">
                <SigninForm />
              </div>

              <div className="mt-5 flex items-start gap-2.5 text-[11.5px] leading-relaxed text-[#8b90a3]">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#4f46e5]" />
                <p>
                  Only founding members with an active paid seat are granted
                  access. Paid work is not guaranteed; opportunities depend on
                  available projects and client selection.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="glass rounded-[1.6rem] p-1.5">
                <div className="rounded-[1.3rem] border border-white/80 bg-white/85 p-6">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8b90a3]">
                    Founding membership
                  </p>
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
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">
                      Opens
                    </p>
                    <p className="mt-1 text-[11.5px] font-medium text-[#0b0b12]">
                      {site.launchDateLabel}
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link href="/dashboard" className="btn btn-primary w-full">
                      Go to dashboard
                      <ArrowRight className="size-4" />
                    </Link>
                    <p className="mt-3 text-center text-[11px] text-[#8b90a3]">
                      New founding members usually start at{" "}
                      <Link href="/enroll" className="font-medium text-[#4f46e5] underline-offset-4 hover:underline">
                        /enroll
                      </Link>
                    </p>
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
