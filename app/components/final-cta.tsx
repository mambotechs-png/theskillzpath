import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/app/components/reveal";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <div className="shell">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
              aria-hidden
            >
              <Image
                src="/images/freelancer-cafe.jpg"
                alt=""
                fill
                priority
                className="object-cover opacity-40"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6366f1]/[0.08] via-transparent to-[#a855f7]/[0.08]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#6366f1]/10 blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow mx-auto">
                <CalendarDays className="size-3" />
                Opens {site.launchDateLabel}
              </p>
              <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0b0b12] sm:text-[3.2rem]">
                Your next skill could change your direction.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5b5f70]">
                Join the founding group for ${site.pricing.earlyBird}/month.
                Pay the founding membership fee of ${site.pricing.earlyBird} to
                reserve your founding seat now, lock in the founding price, and
                be first through the door when the campus opens.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/enroll" className="btn btn-primary">
                  Pay ${site.pricing.earlyBird} — Reserve founding seat
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <p className="mt-6 text-[12px] leading-relaxed text-[#8b90a3]">
                Founding access requires the ${site.pricing.earlyBird} monthly
                membership payment. The founding price is locked until launch.
                No card charged until the secure Pesepay checkout completes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
