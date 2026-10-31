"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [memberEmail, setMemberEmail] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setMemberEmail(data?.member?.email ?? null);
      })
      .catch(() => {
        if (!cancelled) setMemberEmail(null);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b12]">
      <div className="border-b border-[#0b0b12]/[0.06] bg-[#eef0ff]/85 backdrop-blur-xl">
        <div className="shell flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-[family-name:var(--font-righteous)] text-[1.5rem] leading-none tracking-[-0.01em] text-[#0b0b12]"
            >
              {site.name}
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <a href="/courses" className="rounded-full px-3.5 py-2 text-[13.5px] font-medium">
              Campuses
            </a>
            <a href="/opportunities" className="rounded-full px-3.5 py-2 text-[13.5px] font-medium">
              Client Opportunities
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {memberEmail ? (
              <>
                <a href="/" className="btn btn-secondary hidden sm:inline-flex">
                  Home
                </a>
                <button type="button" className="btn btn-secondary hidden sm:inline-flex">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/signin" className="btn btn-secondary hidden sm:inline-flex">
                  Sign in
                </a>
                <a href="/enroll" className="btn btn-primary hidden sm:inline-flex">
                  Join early access <ArrowUpRight className="size-3.5" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#0b0b12]/[0.06] bg-white/90 backdrop-blur-2xl lg:hidden"
        >
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile">
            <a href="/courses" className="rounded-xl px-3 py-3">
              Campuses
            </a>
            <a href="/opportunities" className="rounded-xl px-3 py-3">
              Client Opportunities
            </a>
            {memberEmail ? (
              <>
                <a href="/dashboard" className="btn btn-primary mt-2 w-full">
                  Dashboard
                </a>
                <button type="button" className="btn btn-secondary mt-2 w-full">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/signin" className="btn btn-secondary mt-2 w-full">
                  Sign in
                </a>
                <a href="/enroll" className="btn btn-primary mt-2 w-full">
                  Join early access <ArrowUpRight className="size-4" />
                </a>
              </>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}