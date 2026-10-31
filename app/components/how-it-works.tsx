import { Reveal } from "@/app/components/reveal";

const steps = [
  {
    number: "01",
    title: "Join early access",
    body: "Reserve your founding seat now — pay the $19.99 founding membership fee. Your founding price is locked until launch.",
  },
  {
    number: "02",
    title: "Choose a campus",
    body: "Pick the skill that fits the work you want to do. Start at the foundations and move at your own pace.",
  },
  {
    number: "03",
    title: "Build real projects",
    body: "Complete practical assignments based on real client briefs. Each one becomes part of your portfolio.",
  },
  {
    number: "04",
    title: "Apply for opportunities",
    body: "Publish your portfolio, then browse and apply to projects posted by approved businesses. The client decides.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-24" id="how-it-works">
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b0b12] sm:text-[2.7rem]">
              From first lesson to first brief.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5b5f70]">
              A clear path with no mystery steps. Learn the skill, prove it with
              work, then put yourself in front of real opportunities.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 60}>
              <div className="relative h-full rounded-2xl border border-[#0b0b12]/[0.07] bg-white/45 p-6 backdrop-blur-sm">
                <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-[#4f46e5]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.01em] text-[#0b0b12]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5b5f70]">
                  {step.body}
                </p>
                {index < steps.length - 1 ? (
                  <span
                    className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[#0b0b12]/15 lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
