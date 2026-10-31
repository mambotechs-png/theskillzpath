import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn to earn",
  description:
    "See how SkillzPath takes you from your first lesson to a portfolio and real client opportunities. No income is guaranteed.",
};

const pathway = [
  {
    step: "01",
    title: "Choose a campus",
    body: "Pick a skill that businesses actually pay for, from web development and design to data, AI, and administration.",
  },
  {
    step: "02",
    title: "Complete the lessons",
    body: "Follow structured lessons with practical assignments and assessments. Start at the foundations, move at your pace.",
  },
  {
    step: "03",
    title: "Build projects",
    body: "Every track ends with work based on a real client brief. These become the proof of what you can deliver.",
  },
  {
    step: "04",
    title: "Publish your portfolio",
    body: "Turn completed projects into a professional profile that shows clients your skills, process, and outcomes.",
  },
  {
    step: "05",
    title: "Discover opportunities",
    body: "Browse the moderated board for projects that match your skills, budget expectations, and availability.",
  },
  {
    step: "06",
    title: "Submit proposals",
    body: "Learn how to write clear proposals, communicate professionally, and price your work without underselling it.",
  },
  {
    step: "07",
    title: "Deliver and build reputation",
    body: "Complete the work, collect feedback, and strengthen your profile. Each project makes the next conversation easier.",
  },
];

const skillToProject: Record<string, string[]> = {
  "Website Development": [
    "Landing page build",
    "Business website",
    "WordPress setup",
    "Site maintenance",
  ],
  "Graphic Design": [
    "Logo and identity",
    "Social media templates",
    "Flyer design",
    "Brand kit",
  ],
  "Video Editing": [
    "Short-form edits",
    "YouTube production",
    "Captions and subtitles",
    "Thumbnail design",
  ],
  "Digital Marketing": [
    "Social media management",
    "Ad campaign setup",
    "Content strategy",
    "SEO audit",
  ],
  "Data Analytics": [
    "Spreadsheet cleanup",
    "Dashboard build",
    "Data entry",
    "Report generation",
  ],
  "AI & Automation": [
    "Chatbot setup",
    "Workflow automation",
    "AI content support",
    "Tool integration",
  ],
  "Virtual Assistance": [
    "Inbox management",
    "Calendar scheduling",
    "Online research",
    "CRM updates",
  ],
};

export default function LearnToEarnPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div className="shell relative py-14 sm:py-20">
            <p className="eyebrow">Learn to earn</p>
            <h1 className="mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.5rem]">
              Don&apos;t just learn it.
              <br />
              <span className="text-gradient">Put it to work.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5b5f70]">
              Most courses stop at the final video. SkillzPath is designed around
              what happens next: a portfolio, a professional profile, and a
              moderated board of client projects you can apply to.
            </p>
          </div>
        </section>

        <section className="shell pb-16">
          <Reveal>
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.025em] text-[#0b0b12]">
              The pathway
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pathway.map((item, index) => (
              <Reveal key={item.step} delay={Math.min(index, 6) * 40}>
                <div className="glass-card h-full rounded-2xl p-5">
                  <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-[#4f46e5]">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-[14px] font-semibold text-[#0b0b12]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#5b5f70]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell pb-16">
          <Reveal>
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.025em] text-[#0b0b12]">
              Skill-to-project examples
            </h2>
            <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-[#5b5f70]">
              These are the kinds of projects members can apply for once their
              portfolio is published. Availability depends on what clients post.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skillToProject).map(([skill, projects], index) => (
              <Reveal key={skill} delay={Math.min(index, 5) * 40}>
                <div className="glass-card h-full rounded-2xl p-5">
                  <h3 className="text-[14px] font-semibold text-[#0b0b12]">
                    {skill}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {projects.map((project) => (
                      <li
                        key={project}
                        className="flex items-center gap-2 text-[12.5px] text-[#5b5f70]"
                      >
                        <Check className="size-3.5 shrink-0 text-[#4f46e5]" strokeWidth={2.5} />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell pb-20">
          <Reveal>
            <div className="glass-soft rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#eef0ff] text-[#4f46e5]">
                  <ShieldCheck className="size-4" />
                </span>
                <div>
                  <h2 className="text-[14px] font-semibold text-[#0b0b12]">
                    An honest note about work
                  </h2>
                  <p className="mt-1.5 max-w-3xl text-[12.5px] leading-relaxed text-[#5b5f70]">
                    We do not fabricate client listings and we do not promise
                    income. Opportunities are competitive and selection depends on
                    the client. If no matching project exists, we will say so and
                    suggest portfolio work or other ways to find opportunities.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-[#0b0b12]/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12.5px] text-[#8b90a3]">
                  Campus opens {site.launchDateLabel}. Founding access is open now.
                </p>
                <Link href="/enroll" className="btn btn-primary shrink-0">
                  Join early access
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
