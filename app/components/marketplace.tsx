import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Clock3,
  Code2,
  PenTool,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const examples = [
  {
    icon: Code2,
    campus: "Website Development",
    title: "Landing page build",
    meta: "Fixed price · Remote",
  },
  {
    icon: PenTool,
    campus: "Graphic Design",
    title: "Social media design pack",
    meta: "Fixed price · Remote",
  },
  {
    icon: Video,
    campus: "Video Editing",
    title: "Short-form video edits",
    meta: "Per project · Remote",
  },
  {
    icon: Briefcase,
    campus: "Virtual Assistance",
    title: "Ongoing admin support",
    meta: "Monthly · Remote",
  },
];

const points = [
  "Approved businesses can publish real paid projects.",
  "Your portfolio is your application — show the work, not just a CV.",
  "Listings are reviewed before they go live.",
  "Selection is competitive and always depends on the client.",
];

export function Marketplace() {
  return (
    <section className="py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <p className="eyebrow">Learn to earn</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.7rem]">
              A marketplace,
              <br />
              not a promise.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#5b5f70]">
              Most courses stop at the final video. SkillzPath is built around
              what happens next: a portfolio, a professional profile, and a
              moderated board of client projects you can apply to.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-[#4f46e5]">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-[#3b3f4d]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/opportunities" className="btn btn-primary">
                See the opportunity board
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/learn-to-earn" className="btn btn-secondary">
                How the pathway works
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} direction="scale">
          <div className="glass rounded-[1.6rem] p-2">
            <div className="rounded-[1.3rem] border border-white/80 bg-white/80 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#0b0b12] text-white">
                    <Briefcase className="size-4" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0b0b12]">
                      Opportunity board
                    </p>
                    <p className="text-[10.5px] text-[#8b90a3]">
                      Example project types
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-amber-700">
                  Example
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {examples.map((example) => {
                  const Icon = example.icon;
                  return (
                  <div
                    key={example.title}
                    className="flex items-center gap-3 rounded-xl border border-[#0b0b12]/[0.06] bg-white/70 px-3.5 py-3"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#f2f3f9] text-[#5b5f70]">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-medium text-[#0b0b12]">
                        {example.title}
                      </p>
                      <p className="truncate text-[10.5px] text-[#8b90a3]">
                        {example.campus}
                      </p>
                    </div>
                    <div className="hidden shrink-0 items-center gap-1 text-[10.5px] text-[#8b90a3] sm:flex">
                      <Clock3 className="size-3" />
                      {example.meta}
                    </div>
                  </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#f7f8fc] px-3.5 py-3">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#4f46e5]" />
                <p className="text-[11.5px] leading-relaxed text-[#5b5f70]">
                  These are example project types, not live listings. Real work
                  appears only when verified clients post it. No income is
                  guaranteed.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
