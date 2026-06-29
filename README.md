# LLSA Website

Official website for the **Lesotho Land Surveyors Association (LLSA)** — the professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
  app/                # Next.js App Router pages (one folder per route)
  components/
    about/            # About page sections
    contact/          # Contact form and office details
    cpd/              # CPD events and requirements
    decorative/       # LesothoTopoSVG background element
    home/             # Home page sections (Hero, News, Impact, etc.)
    layout/           # Navbar, Footer, Logo
    legislation/      # Acts and regulations listing
    membership/       # Member directory and application
    services/         # Services overview
    shared/           # Reusable primitives (PageHero, StatCounter, etc.)
  hooks/              # Custom React hooks
  lib/                # Utilities and Framer Motion animation presets
public/
  images/             # Logo and static images (llsa-logo.png)
  docs/               # Place PDF files here (see Documents section below)
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production | Base URL for SEO metadata and JSON-LD |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | When form is wired | POST endpoint for contact form |
| `CONTACT_FORM_API_KEY` | When form is wired | Server-side API key (Resend, etc.) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 ID |

The contact form currently uses a mock delay — wire it to a real endpoint by updating `onSubmit` in `src/components/contact/ContactContent.tsx`.

---

## Content Management

All placeholder content is marked with `// TODO: [LLSA CONTENT]` comments in the source.  
See [`CONTENT-NEEDED.md`](CONTENT-NEEDED.md) for the full list of 44 items to supply before go-live.

**Key files to update:**

| What to update | File |
|----------------|------|
| Email, phone, office address | `src/components/contact/ContactContent.tsx` · `src/components/layout/Footer.tsx` |
| Council member names (×6) | `src/components/about/Governance.tsx` |
| CPD events schedule | `src/components/cpd/CPDContent.tsx` |
| Annual CPD hours requirement | `src/components/cpd/CPDContent.tsx` |
| Membership fees | `src/components/membership/MembershipContent.tsx` |
| Member directory entries | `src/components/membership/MembershipContent.tsx` |
| News articles (×3) | `src/components/home/NewsSection.tsx` |
| Social media URLs | `src/components/contact/ContactContent.tsx` · `src/components/layout/Footer.tsx` |
| Legislation PDF links | `src/components/legislation/LegislationContent.tsx` |
| Production domain + JSON-LD | `src/app/layout.tsx` |
| LLSA founding year | `src/components/about/WhoWeAre.tsx` |

---

## PDF Documents

Place PDF files in `public/docs/` and the download buttons will work automatically.

| Filename | Used on |
|----------|---------|
| `land-survey-act-1980.pdf` | Legislation page |
| `land-survey-regulations-1982.pdf` | Legislation page |
| `land-survey-amendment-act-2012.pdf` | Legislation page |
| `laa-act-2010.pdf` | Legislation page |
| `land-act-2010.pdf` | Legislation page |
| `llsa-membership-application.pdf` | Membership page |
| `llsa-cpd-log-template.pdf` | CPD page |
| `llsa-constitution.pdf` | Footer · Contact strip |

Download `href` values are in `src/components/legislation/LegislationContent.tsx` (legislation acts) and the other component files above. All paths follow the pattern `/docs/<filename>.pdf`.

---

## Pages

| Route | Status | Notes |
|-------|--------|-------|
| `/` | Live | Home — Hero, Services overview, Impact stats, News, CTA |
| `/about` | Live | Who We Are, Mission & Vision, Objectives, Governance |
| `/membership` | Live | Member directory, fee schedule, application |
| `/cpd` | Live | Upcoming events, CPD requirements, log template |
| `/legislation` | Live | Acts and regulations with PDF downloads |
| `/services` | Live | Services overview |
| `/contact` | Live | Contact form, office details, council contacts |
| `/news` | 404 | Not yet built — linked from Home and navbar |
| `/privacy-policy` | 404 | Not yet built — linked from Footer |

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js
3. Add environment variables from `.env.example` in the Vercel dashboard
4. Deploy — `vercel.json` provides explicit build config

All 11 built pages are prerendered as static HTML at build time (`○ Static`), so the site is fast and CDN-cacheable with no server required.

### Other Platforms

Any Node.js 18+ host works:

```bash
npm run build
npm run start
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server at localhost:3000 (hot reload) |
| `npm run build` | Production build — fails on TypeScript or ESLint errors |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint against all source files |

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^15 | App Router framework |
| `react` | ^18 | UI library |
| `react-dom` | ^18 | DOM renderer |
| `framer-motion` | ^12 | Page and scroll animations |
| `next-themes` | ^0.4.6 | Dark / light mode |
| `lucide-react` | ^1.22.0 | Icon set |
| `react-hook-form` | ^7.80.0 | Form state management |
| `@hookform/resolvers` | ^5.4.0 | Zod schema adapter for RHF |
| `zod` | ^4.4.3 | Runtime schema validation |
| `@radix-ui/react-slot` | ^1.3.0 | Polymorphic `asChild` primitive |
| `class-variance-authority` | ^0.7.1 | Typed variant styles (CVA) |
| `clsx` | ^2.1.1 | Conditional className helper |
| `tailwind-merge` | ^3.6.0 | Merge Tailwind classes safely |
| `tailwindcss-animate` | ^1.0.7 | CSS animation utilities |
| `react-intersection-observer` | ^10.0.3 | Scroll-triggered animation hooks |

### Dev

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5 | Type checking (strict mode) |
| `tailwindcss` | ^3.4.1 | Utility-first CSS |
| `postcss` | ^8 | CSS processing |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | ^15 | Next.js ESLint rule set |
| `@types/node` | ^20 | Node.js type definitions |
| `@types/react` | ^18 | React type definitions |
| `@types/react-dom` | ^18 | React DOM type definitions |
