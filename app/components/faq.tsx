import { Plus } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "What does the monthly membership include?",
    a: "Access to all published courses across 12 campuses, practical projects and assessments, portfolio development, freelancing and client acquisition training, the approved opportunity board, progress tracking, and eligible certificates.",
  },
  {
    q: "Do I pay separately for courses?",
    a: "No. One monthly membership gives you access to every published course. There are no separate course purchases or hidden fees.",
  },
  {
    q: "Can beginners join?",
    a: "Yes. Every course starts at the foundations and assumes no prior experience. If you can use a browser and commit a few focused hours a week, you can follow along.",
  },
  {
    q: "When does the campus open?",
    a: `The full campus opens on ${site.launchDateLabel}. Early access members reserve their founding seat now, lock in the founding price, and are the first to be notified when everything goes live.`,
  },
  {
    q: "How do I find client opportunities?",
    a: "Once you finish a track and publish your portfolio, you can browse the opportunity board and apply to projects posted by approved businesses. Applications are reviewed by the client, not guaranteed by us.",
  },
  {
    q: "Is work or income guaranteed?",
    a: "No. Opportunities are competitive and selection depends on the client. We provide the skills, training, portfolio tools, and platform, but results depend on your effort, skill, and market conditions.",
  },
  {
    q: "What happens if my membership expires?",
    a: "You lose access to premium courses and the opportunity board. Your progress and completed work are saved. You can renew at any time to regain access.",
  },
  {
    q: "Can I cancel or renew?",
    a: "You can manage your membership from your account once the platform opens. Cancellation takes effect at the end of your current billing period.",
  },
  {
    q: "Are certificates included?",
    a: "Yes. Certificates are issued based on genuine completion criteria: finishing all lessons, passing assessments, and completing the required projects.",
  },
  {
    q: "Can I learn on my phone?",
    a: "Yes. The platform is fully responsive and optimised for mobile, so you can learn on any device that fits your day.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-24" id="faq">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.5rem]">
                Questions before you join.
              </h2>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#5b5f70]">
                Still unsure? Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-[#4f46e5] underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>{" "}
                and a human replies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="divide-y divide-[#0b0b12]/[0.07] border-y border-[#0b0b12]/[0.07]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="text-[14px] font-medium text-[#2b2e3a] transition-colors group-hover:text-[#0b0b12]">
                      {faq.q}
                    </span>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#0b0b12]/10 text-[#8b90a3] transition-all group-open:rotate-45 group-open:border-[#4f46e5]/30 group-open:text-[#4f46e5]">
                      <Plus className="size-3.5" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 pr-8 text-[13px] leading-relaxed text-[#5b5f70]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
