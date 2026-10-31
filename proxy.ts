import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pre-launch: public pages are served, while any other page is shown with the
// "campus fully live" launch notice until the launch date.
const ALLOWED_PAGES = [
  "/",
  "/courses",
  "/learn-to-earn",
  "/opportunities",
  "/enroll",
  "/welcome",
  "/coming-soon",
  "/signin",
  "/signup",
];
const ALLOWED_API_PREFIXES = ["/api/pesepay", "/api/waitlist", "/api/auth"];

// Server-side authorization gate: the member dashboard requires a session token.
const PROTECTED_PAGES = ["/dashboard"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PROTECTED_PAGES.includes(pathname)) {
    const token = request.cookies.get("sp_session")?.value;
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/enroll";
      url.search = "";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  if (
    ALLOWED_PAGES.includes(pathname) ||
    ALLOWED_API_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  ) {
    return NextResponse.next();
  }

  // Any other page shows the "launching 17 November" notice.
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip Next internals and files in /public (anything with an extension)
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
