"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Search, SlidersHorizontal, X } from "lucide-react";
import { categories, type Course, type CourseCategory } from "@/lib/courses";

const difficultyStyles: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-100",
  Advanced: "bg-rose-50 text-rose-700 border-rose-100",
};

export function CourseCatalogue({ initialCampus }: { initialCampus?: string }) {
  const validInitial =
    initialCampus && categories.some((category) => category.id === initialCampus)
      ? initialCampus
      : null;

  const [search, setSearch] = useState("");
  const [campus, setCampus] = useState<string | null>(validInitial);
  const [difficulty, setDifficulty] = useState<string>("all");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result: { category: CourseCategory; course: Course }[] = [];

    for (const category of categories) {
      if (campus && category.id !== campus) continue;

      for (const course of category.courses) {
        if (difficulty !== "all" && course.difficulty !== difficulty) continue;
        if (
          query &&
          !course.title.toLowerCase().includes(query) &&
          !course.description.toLowerCase().includes(query) &&
          !category.name.toLowerCase().includes(query)
        ) {
          continue;
        }
        result.push({ category, course });
      }
    }

    return result;
  }, [search, campus, difficulty]);

  const hasFilters = Boolean(search || campus || difficulty !== "all");

  function reset() {
    setSearch("");
    setCampus(null);
    setDifficulty("all");
  }

  return (
    <div className="shell pb-20 pt-10">
      <div className="glass-soft rounded-2xl p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8b90a3]" />
            <input
              id="course-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search courses, skills or campuses"
              className="h-11 w-full rounded-full border border-[#0b0b12]/10 bg-white/80 pl-11 pr-4 text-[13.5px] text-[#0b0b12] placeholder:text-[#a3a7b7] transition-colors hover:border-[#0b0b12]/20 focus:border-[#4f46e5] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <label htmlFor="course-level" className="sr-only">
                Filter by difficulty
              </label>
              <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-[#8b90a3]" />
              <select
                id="course-level"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                className="h-11 appearance-none rounded-full border border-[#0b0b12]/10 bg-white/80 pl-9 pr-8 text-[13px] text-[#3b3f4d] transition-colors hover:border-[#0b0b12]/20 focus:border-[#4f46e5] focus:outline-none"
              >
                <option value="all">All levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {hasFilters ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[#0b0b12]/10 bg-white/80 px-3.5 text-[12.5px] font-medium text-[#5b5f70] transition-colors hover:border-[#0b0b12]/20 hover:text-[#0b0b12]"
              >
                <X className="size-3.5" />
                Clear
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setCampus(null)}
            aria-pressed={campus === null}
            className={`rounded-full px-3 py-1.5 text-[11.5px] font-medium transition-colors ${
              campus === null
                ? "bg-[#0b0b12] text-white"
                : "border border-[#0b0b12]/10 bg-white/70 text-[#5b5f70] hover:border-[#0b0b12]/20 hover:text-[#0b0b12]"
            }`}
          >
            All campuses
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setCampus(category.id === campus ? null : category.id)
              }
              aria-pressed={campus === category.id}
              className={`rounded-full px-3 py-1.5 text-[11.5px] font-medium transition-colors ${
                campus === category.id
                  ? "bg-[#0b0b12] text-white"
                  : "border border-[#0b0b12]/10 bg-white/70 text-[#5b5f70] hover:border-[#0b0b12]/20 hover:text-[#0b0b12]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-[12.5px] text-[#8b90a3]">
          {filtered.length} course{filtered.length === 1 ? "" : "s"} found
        </p>
        <p className="hidden text-[12px] text-[#8b90a3] sm:block">
          All included in one membership
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ category, course }) => (
            <article
              key={`${category.id}-${course.title}`}
              className="glass-card flex flex-col rounded-2xl p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#8b90a3]">
                  {category.name}
                </span>
                {course.status === "in-development" ? (
                  <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-amber-700">
                    In development
                  </span>
                ) : null}
              </div>

              <h2 className="mt-3 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#0b0b12]">
                {course.title}
              </h2>
              <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-[#5b5f70]">
                {course.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${difficultyStyles[course.difficulty]}`}
                >
                  {course.difficulty}
                </span>
                <span className="rounded-full bg-[#f2f3f9] px-2 py-0.5 text-[10px] text-[#5b5f70]">
                  {course.duration}
                </span>
                <span className="rounded-full bg-[#f2f3f9] px-2 py-0.5 text-[10px] text-[#5b5f70]">
                  {course.lessons} lessons
                </span>
              </div>

              <div className="mt-4 border-t border-[#0b0b12]/[0.07] pt-3">
                <p className="text-[11.5px] leading-relaxed text-[#5b5f70]">
                  <span className="font-medium text-[#0b0b12]">Outcome:</span>{" "}
                  {course.outcome}
                </p>
              </div>

              <Link
                href="/enroll"
                className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-medium text-[#4f46e5] underline-offset-4 hover:underline"
              >
                Included with membership
                <ArrowUpRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass-soft mt-4 rounded-2xl px-6 py-16 text-center">
          <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-white text-[#8b90a3]">
            <BookOpen className="size-5" />
          </span>
          <p className="mt-4 text-[15px] font-medium text-[#0b0b12]">
            No courses match those filters
          </p>
          <p className="mt-1 text-[13px] text-[#5b5f70]">
            Try a different search term, campus or level.
          </p>
          <button type="button" onClick={reset} className="btn btn-secondary mt-5">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
