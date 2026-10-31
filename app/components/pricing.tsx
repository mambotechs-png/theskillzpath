import Link from "next/link";
import { ArrowUpRight, Check, LockKeyhole, Sparkles } from "lucide-react";
import { Countdown } from "@/app/components/countdown";
import { Reveal } from "@/app/components/reveal";
import { site } from "@/lib/site";

const benefits = [
  "Every published course, across all 12 campuses",
  "Practical projects and assessments",
  "Portfolio builder and professional profile",
  "Access to the moderated opportunity board",
  "Progress tracking and completion certificates",
  "Learning community and assigned mentorship",
  "Founding price locked for as long as you stay",
  "Cancel anytime — no long contract",
];

export function Pricing() {
  const { earlyBird, launch } = site.pricing;

  return (
    <section className="py-20 sm:py-24" id="membership">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto">Membership</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.7rem]">
              One price. Everything included.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5b5f70]">
              Join before {site.launchDateLabel} and keep the founding price.
              After launch, new members join at ${site.pricing.launch}/month. Founding access requires the ${site.pricing.earlyBird} monthly membership payment before launch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="glass overflow-hidden rounded-[1.8rem] p-1.5">
              <div className="overflow-hidden rounded-[1.45rem] border border-white/80 bg-white/85">
                <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-[#0b0b12]/[0.07] p-7 md:border-b-0 md:border-r sm:p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4f46e5]">
                      <Sparkles className="size-3" />
                      Founding member
                    </span>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="font-mono text-[3.4rem] font-semibold leading-none tracking-[-0.04em] text-[#0b0b12]">
                        ${earlyBird}
                      </span>
                      <span className="pb-1.5 text-[13px] text-[#5b5f70]">
                        / month
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] text-[#8b90a3]">
                      <span className="line-through">${launch}/month</span> after
                      launch
                    </p>

                    <div className="mt-6">
                      <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8b90a3]">
                        Founding price ends in
                      </p>
                      <Countdown target={site.launchDate} />
                    </div>

                    <Link href="/enroll" className="btn btn-primary mt-6 w-full">
                      Join early access
                      <ArrowUpRight className="size-4" />
                    </Link>

                    <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#8b90a3]">
                      <LockKeyhole className="size-3.5" />
                      Pay ${earlyBird} today — founding price locked
                    </p>
                  </div>

                  <div className="p-7 sm:p-8">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8b90a3]">
                      Everything in the membership
                    </p>
                    <ul className="mt-4 space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-[#4f46e5]">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-[13px] leading-relaxed text-[#3b3f4d]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-center text-[12px] leading-relaxed text-[#8b90a3]">
              Membership includes access to learning and the opportunity board.
              Paid work depends on available projects and client selection. We do
              not guarantee income.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
