# SkillzPath

Pre-launch marketing site for an education platform that teaches practical
tech skills and connects members with real clients and remote jobs.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react icons
- Geist + Instrument Serif

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All copy, pricing and the launch date live in [`lib/site.ts`](./lib/site.ts).
Images live in [`public/images`](./public/images).

## Payments & waitlist

The waitlist form posts to `/api/waitlist`, which currently logs signups to
the server console. Wire it to your provider (Stripe Checkout, Resend, Loops,
Supabase, etc.) before launch — see the TODO in
[`app/api/waitlist/route.ts`](./app/api/waitlist/route.ts).
