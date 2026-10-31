import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Countdown } from "@/app/components/countdown";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Launching November 17",
  description:
    "The SkillzPath campus will be fully live on November 17, 2026. Join early access now.",
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="w-full max-w-xl text-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-righteous)] text-[1.4rem] leading-none tracking-[-0.01em] text-[#0b0b12]"
        >
          {site.name}
        </Link>

        <span className="mx-auto mt-10 flex size-12 items-center justify-center rounded-full bg-[#eef0ff] text-[#4f46e5]">
          <CalendarDays className="size-5" />
        </span>

        <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b0b12] sm:text-[3rem]">
          The campus opens on{" "}
          <span className="text-gradient">{site.launchDateLabel}</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[14.5px] leading-relaxed text-[#5b5f70]">
          This page is not open yet. Join early access to reserve your founding
          seat, lock in the founding price, and be first through the door at
          launch.
        </p>

        <div className="mx-auto mt-8 max-w-sm">
          <Countdown target={site.launchDate} />
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/enroll" className="btn btn-primary">
            Join early access
            <ArrowUpRight className="size-4" />
          </Link>
          <Link href="/courses" className="btn btn-secondary">
            See the campuses
          </Link>
        </div>

        <Link
          href="/"
          className="mt-6 inline-block text-[12.5px] text-[#8b90a3] transition-colors hover:text-[#0b0b12]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
