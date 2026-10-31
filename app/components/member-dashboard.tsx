"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, BookOpen, GraduationCap, Briefcase, Compass, Wallet, Settings } from "lucide-react";
import { site } from "@/lib/site";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "learning", label: "My Learning", icon: BookOpen },
  { id: "campus", label: "My Campus", icon: GraduationCap },
  { id: "work", label: "My Work", icon: Briefcase },
  { id: "opportunities", label: "Opportunities", icon: Compass },
  { id: "earnings", label: "Earnings", icon: Wallet },
  { id: "settings", label: "Settings", icon: Settings },
];

const SECTIONS: Record<string, { title: string; intro: string; status: string; cta: string }> = {
  overview: {
    title: "Overview",
    intro: "Your founding member snapshot: learning progress, active gigs, and earnings — all waiting to go live with the campus.",
    status: "Preparing for launch",
    cta: "Everything opens live on November 17, 2026.",
  },
  learning: {
    title: "My Learning",
    intro: "Your course tracks, lesson progress and assessments are being prepared for launch.",
    status: "Under construction",
    cta: "All courses under construction. Live launch: November 17, 2026.",
  },
  campus: {
    title: "My Campus",
    intro: "Your assigned campus, mentors and cohorts are being prepared for launch.",
    status: "Under construction",
    cta: "Campus setup in progress. Live launch: November 17, 2026.",
  },
  work: {
    title: "My Work",
    intro: "The gigs you unlock after finishing your skill are being mapped to real client demand.",
    status: "Under construction",
    cta: "Gig mapping pending. Live launch: November 17, 2026.",
  },
  opportunities: {
    title: "Opportunities",
    intro: "The moderated opportunity board is being loaded with real client briefs.",
    status: "Under construction",
    cta: "Opportunity board launches with campus. November 17, 2026.",
  },
  earnings: {
    title: "Earnings",
    intro: "Earnings tracking and payout tooling are being prepared for launch.",
    status: "Under construction",
    cta: "Earnings system under construction. Live launch: November 17, 2026.",
  },
  settings: {
    title: "Settings",
    intro: "Account and membership settings are being prepared for launch.",
    status: "Under construction",
    cta: "Settings panel live November 17, 2026.",
  },
};

export function MemberDashboard({ firstName }: { firstName: string }) {
  const [section, setSection] = useState("overview");

  const selected = NAV_ITEMS.find((item) => item.id === section) ?? NAV_ITEMS[0];
  const sec = SECTIONS[section] ?? SECTIONS.overview;

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:ink]">
      {/* Topbar */}
      <header className="border-b border-[#0b0b12]/[0.06] bg-[#eef0ff]/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-[family-name:var(--font-righteous)] text-[1.3rem] leading-none tracking-[-0.01em] text-[#0b0b12] hover:underline underline-offset-4"
            >
              {site.name}
            </Link>

            <div className="hidden gap-2 items-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSection(item.id)}
                  className={`rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
                    section === item.id ? "bg-[#4338ca] text-white" : "text-[#3b3f4d] hover:bg-[#0b0b12]/[0.04]"}
                  `}
                >
                  <item.icon className="size-3.5 mr-2" /> {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
              Founding member
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
              Paid
            </span>
          </div>
        </div>
      </header>

      {/* Hero / Auth Check */}
      <section className="max-w-[1400px] mx-auto p-4 sm:p-8">
        {/* Auth-aware: if no session, redirect to enroll */}
        <div className="glass rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">
            Member area
          </p>
          <h1 className="mt-3 text-[1.8rem] font-semibold leading-[1.0] tracking-[-0.04em] text-[#0b0b12] sm:text-[2.2rem]">
            Welcome back, {firstName}.
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
              Founding member
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
              Paid
            </span>
          </div>

          <p className="mt-4 text-[13px] leading-relaxed text-[#5b5f70]">
            Your founding membership grants access to all courses, portfolio projects, and a moderated marketplace of real client opportunities. The campus opens fully on November 17, 2026.
          </p>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="max-w-[1400px] mx-auto p-4 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass rounded-2xl p-5">
              <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">Menu</p>
              <nav className="mt-4 flex flex-col gap-1" aria-label="Member">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSection(item.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-[13px] font-medium transition-colors ${
                      section === item.id ? "bg-[#eef0ff] text-[#4338ca]" : "text-[#3b3f4d] hover:bg-[#0b0b12]/[0.04]"}
                    `}
                  >
                    <item.icon className="size-4" /> {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">Member area</p>
                <h1 className="mt-2 text-[1.8rem] font-semibold leading-[1.0] tracking-[-0.04em] text-[#0b0b12] sm:text-[2.2rem]">
                  Welcome back, {firstName}.
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
                  Founding member
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
                  Paid
                </span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">
                {sec.title}
              </p>
              <h2 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.03em] text-[#0b0b12]">
                {sec.title}
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5b5f70]">
                {sec.intro}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0b0b12]/[0.06] bg-[#f7f8fc]/80 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">Status</p>
                  <p className="mt-1 text-[13px] font-medium text-[#0b0b12]">
                    {sec.status}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#0b0b12]/[0.06] bg-[#f7f8fc]/80 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">Access</p>
                  <p className="mt-1 text-[13px] font-medium text-[#0b0b12]">
                    Founding member · USD {site.pricing.earlyBird} <span className="text-[#0b0b12] font-normal">until Nov 17, then USD {site.pricing.launch}</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 sm:p-6 glass rounded-2xl text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8b90a3]">
                  Coming soon
                </p>
                <h3 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[#0b0b12]">
                  {sec.cta}
                </h3>
                <p className="mt-2 text-[13px] text-[#6b7280]">
                  {sec.status}. Everything opens live on {site.launchDateLabel}. Your founding membership secures your spot at the founding rate of USD {site.pricing.earlyBird}/month, locked in for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}