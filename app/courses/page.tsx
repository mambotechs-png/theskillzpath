import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { CourseCatalogue } from "@/app/components/course-catalogue";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { categories } from "@/lib/courses";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Campuses and courses",
  description:
    "Explore 100+ practical courses across 12 skill campuses. Every published course is included in one monthly SkillzPath membership.",
};

export const instant = false;

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ campus?: string }>;
}) {
  const { campus } = await searchParams;
  const courseCount = categories.reduce(
    (total, category) => total + category.courses.length,
    0,
  );

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div className="shell relative py-14 sm:py-20">
            <p className="eyebrow">Course catalogue</p>
            <h1 className="mt-5 max-w-3xl text-[2.4rem] font-semibold leading-[1.0] tracking-[-0.045em] text-[#0b0b12] sm:text-[3.5rem]">
              Explore the campuses.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5b5f70]">
              {courseCount} courses across {categories.length} skill campuses.
              Every published course is included in the one monthly membership.
              Courses marked in development are still being built.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b0b12]/10 bg-white/70 px-3.5 py-1.5 text-[11.5px] text-[#5b5f70]">
                <CalendarDays className="size-3.5 text-[#4f46e5]" />
                Full lessons unlock {site.launchDateLabel}
              </span>
              <Link
                href="/enroll"
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-[#4f46e5] underline-offset-4 hover:underline"
              >
                Join early access
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <CourseCatalogue initialCampus={campus} />
      </main>
      <SiteFooter />
    </>
  );
}
