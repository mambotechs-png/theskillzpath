import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Countdown } from "@/app/components/countdown";
import { MemberDashboard } from "@/app/components/member-dashboard";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getSessionEmail } from "@/lib/auth";
import { getMemberByEmail } from "@/lib/db";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your SkillzPath founding member dashboard.",
};

export const instant = false;

export default async function DashboardPage() {
  const email = await getSessionEmail();

  if (!email) {
    // Server-side authorization: no valid founding member session → no access.
    redirect("/enroll");
  }

  const member = getMemberByEmail(email);

  if (!member || member.accessStatus !== "ACTIVE") {
    redirect("/enroll");
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <MemberDashboard firstName={member.firstName} />
      </main>
      <SiteFooter />
    </>
  );
}
