import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { categories } from "@/lib/courses";

export function Campuses() {
  return (
    <section className="py-20 sm:py-24" id="campuses">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">The campuses</p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.7rem]">
                Twelve campuses. One skill path.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5b5f70]">
                Start where you are. Each campus takes you from the foundations
                to work you can put in front of a client.
              </p>
            </div>
            <Link
              href="/courses"
              className="btn btn-secondary shrink-0 self-start sm:self-auto"
            >
              Browse all courses
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={Math.min(index, 6) * 40}>
              <Link
                href={`/courses?campus=${category.id}`}
                className="glass-card group flex h-full flex-col rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-[#a3a7b7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-[#f2f3f9] px-2.5 py-0.5 text-[10.5px] font-medium text-[#5b5f70]">
                    {category.courses.length} courses
                  </span>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#0b0b12]">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-[#6b6f80] line-clamp-2">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[11.5px] font-medium text-[#4f46e5] opacity-0 transition-opacity group-hover:opacity-100">
                  View campus
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
