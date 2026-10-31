import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  FolderKanban,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { site } from "@/lib/site";

const items = [
  {
    icon: BookOpen,
    title: "Every published course",
    body: "All courses across every campus are included in the one monthly membership. No per-course purchases, no upsells.",
  },
  {
    icon: FolderKanban,
    title: "Portfolio projects",
    body: "Each course ends with practical work you can show a client. Your portfolio becomes the proof of what you can deliver.",
  },
  {
    icon: Briefcase,
    title: "Client opportunities",
    body: "Approved businesses can post real paid projects. Members can browse and apply. Selection always depends on the client.",
  },
  {
    icon: BadgeCheck,
    title: "Completion certificates",
    body: "Certificates are issued when the defined requirements are met: lessons completed, assessments passed, projects shipped.",
  },
  {
    icon: LayoutDashboard,
    title: "Progress tracking",
    body: "See what you have completed, what comes next, and how close you are to finishing a track and publishing your portfolio.",
  },
  {
    icon: Users,
    title: "Learning community",
    body: "Discussion groups, peer feedback, and mentorship where instructors are assigned. Learn alongside people on the same path.",
  },
];

export function Included() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">What is included</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.7rem]">
              One membership. The whole pathway.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5b5f70]">
              SkillzPath is built as a complete learning-to-earning pathway, not
              a bundle of disconnected videos. Everything below is part of the
              membership.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="glass-card h-full rounded-2xl p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#eef0ff] text-[#4f46e5]">
                  <item.icon className="size-[18px]" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-[#0b0b12]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b5f70]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-[12.5px] leading-relaxed text-[#8b90a3]">
            Access begins on {site.launchDateLabel}. Paid work is not guaranteed
            — opportunities are competitive and depend on available projects and
            client selection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
