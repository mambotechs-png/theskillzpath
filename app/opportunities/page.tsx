import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client opportunities",
  description:
    "A moderated board where approved businesses can publish paid projects and SkillzPath members can apply. Example listings are clearly labelled.",
};

const demoOpportunities = [
  {
    title: "Landing page rebuild",
    category: "Website Development",
    description:
      "Rebuild a five-page marketing site with a provided design. Responsive, fast, and ready for handover.",
    budget: "$800–$1,200",
    type: "Fixed price",
    deadline: "Example timeline: 3 weeks",
  },
  {
    title: "Social media design pack",
    category: "Graphic Design",
    description:
      "Create a set of Instagram post and story templates for a small brand, delivered as editable files.",
    budget: "$300–$500",
    type: "Fixed price",
    deadline: "Example timeline: 1–2 weeks",
  },
  {
    title: "Short-form video editing",
    category: "Video Editing",
    description:
      "Edit a batch of short-form videos from raw footage with captions, music, and clean pacing.",
    budget: "$400–$600",
    type: "Fixed price",
    deadline: "Example timeline: 2 weeks",
  },
  {
    title: "Spreadsheet cleanup",
    category: "Data Analytics",
    description:
      "Clean and organise a customer database, remove duplicates, and build a simple summary view.",
    budget: "$150–$250",
    type: "Fixed price",
    deadline: "Example timeline: 1 week",
  },
  {
    title: "Chatbot setup",
    category: "AI & Automation",
    description:
      "Set up a simple WhatsApp or website chatbot for a small business using a no-code tool.",
    budget: "$500–$800",
    type: "Fixed price",
    deadline: "Example timeline: 2–3 weeks",
  },
  {
    title: "Virtual assistant support",
    category: "Virtual Assistance",
    description:
      "Ongoing inbox management, calendar scheduling, and online research for a busy founder.",
    budget: "$200–$300/mo",
    type: "Ongoing",
    deadline: "Example timeline: monthly",
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div className="shell relative py-14 sm:py-20">
            <p className="eyebrow">Opportunities</p>
            <h1 className="mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.5rem]">
              Real briefs. Real clients.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5b5f70]">
              Approved businesses can publish paid projects on the SkillzPath
              board. Members apply with their portfolio. Every listing is reviewed
              before publication, and selection always depends on the client.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3.5 backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-amber-700" />
              <p className="text-[12px] leading-relaxed text-amber-900">
                <strong className="font-semibold">Example listings.</strong> The
                projects below illustrate the types of work the board will carry.
                They are not live client briefs. Real listings appear only when
                verified businesses post work. Income is not guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section className="shell pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demoOpportunities.map((opportunity, index) => (
              <Reveal key={opportunity.title} delay={Math.min(index, 5) * 50}>
                <article className="glass-card flex h-full flex-col rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-[#eef0ff] px-2.5 py-1 text-[10px] font-medium text-[#4f46e5]">
                      {opportunity.category}
                    </span>
                    <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-amber-700">
                      Example
                    </span>
                  </div>

                  <h2 className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#0b0b12]">
                    {opportunity.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-[#5b5f70]">
                    {opportunity.description}
                  </p>

                  <div className="mt-4 space-y-1.5 text-[11.5px] text-[#5b5f70]">
                    <p className="flex items-center gap-1.5">
                      <Wallet className="size-3.5 text-[#8b90a3]" />
                      {opportunity.budget}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-[#8b90a3]" />
                      {opportunity.type}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-[#8b90a3]" />
                      Remote · {opportunity.deadline}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="glass-soft mt-8 flex flex-col items-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eef0ff] text-[#4f46e5]">
                  <Briefcase className="size-[18px]" />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#0b0b12]">
                    The board opens with the campus.
                  </p>
                  <p className="mt-1 max-w-xl text-[12.5px] leading-relaxed text-[#5b5f70]">
                    Join early access now. When verified clients start posting
                    projects on {site.launchDateLabel}, members will be the first
                    to know.
                  </p>
                </div>
              </div>
              <Link href="/enroll" className="btn btn-primary shrink-0">
                Join early access
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 flex items-center gap-2 text-[11.5px] text-[#8b90a3]">
              <CalendarDays className="size-3.5" />
              Campus opens {site.launchDateLabel} · Listings are moderated
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
