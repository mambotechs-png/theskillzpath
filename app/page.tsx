import { Campuses } from "@/app/components/campuses";
import { Faq } from "@/app/components/faq";
import { FinalCta } from "@/app/components/final-cta";
import { Hero } from "@/app/components/hero";
import { HowItWorks } from "@/app/components/how-it-works";
import { Included } from "@/app/components/included";
import { Marketplace } from "@/app/components/marketplace";
import { Pricing } from "@/app/components/pricing";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Included />
        <Campuses />
        <HowItWorks />
        <Marketplace />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
