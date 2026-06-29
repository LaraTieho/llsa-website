# LLSA Website — Content Needed Before Go-Live

Generated: 2026-06-29  
Each item maps to a `// TODO: [LLSA CONTENT]` comment in the source files listed below.

---

## GLOBAL / SITE-WIDE

| # | Item | File | Notes |
|---|------|------|-------|
| 1 | **Production domain** — confirm whether the live URL is `llsa.org.ls` or `www.llsa.org.ls` | `src/app/layout.tsx` | Used in all SEO metadata and JSON-LD schema |
| 2 | **OG image** — 1200×630 px branded image for social sharing (Facebook, WhatsApp, LinkedIn link previews) | `src/app/layout.tsx` → `public/og-image.png` | No image file exists yet; all social previews will be broken |
| 3 | **Logo on dark backgrounds** — ideally supply a white/cream variant of the logo PNG for use in the navbar (dark mode) and footer; the current `brightness-0 invert` CSS filter renders a solid-white logo as a fallback | `src/components/layout/Logo.tsx` | |
| 4 | **Social media profile URLs** — LinkedIn, Facebook, X/Twitter; used in Contact page, Footer, and JSON-LD `sameAs` | `src/components/contact/ContactContent.tsx`, `src/components/layout/Footer.tsx`, `src/app/layout.tsx` | Currently `href="#"` on all platforms |

---

## CONTACT PAGE (`/contact`)

| # | Item | File | Notes |
|---|------|------|-------|
| 5 | **Office street address** | `src/components/contact/ContactContent.tsx` | Currently `[Placeholder address], Maseru District, Lesotho` |
| 6 | **General enquiry email** | `src/components/contact/ContactContent.tsx` | Currently `info@llsa.org.ls` (unverified) |
| 7 | **Office phone number** | `src/components/contact/ContactContent.tsx` | Currently `+266 XXXX XXXX`; update both the `tel:` href and display text |
| 8 | **Council officer names** (President, Secretary, CPD Coordinator) | `src/components/contact/ContactContent.tsx` | Currently `[Name TBC]` |
| 9 | **Council officer emails** (president@, secretary@, cpd@) | `src/components/contact/ContactContent.tsx` | Placeholder addresses; confirm actual mailboxes exist |
| 10 | **Map embed** — Google Maps or OpenStreetMap embed once address is confirmed | `src/components/contact/ContactContent.tsx` | Map section currently shows a decorative placeholder |
| 11 | **Contact form endpoint** — wire `onSubmit` to a real API (e.g. Resend, Formspree, or custom Next.js route handler) | `src/components/contact/ContactContent.tsx:121` | Currently logs to console and simulates a 1.2s delay |

---

## FOOTER (appears on all pages)

| # | Item | File | Notes |
|---|------|------|-------|
| 12 | **Footer address** — currently `123 Kingsway Avenue, Maseru 100` (fictitious) | `src/components/layout/Footer.tsx` | Must match contact page address |
| 13 | **Footer email** — currently `llsa@lesotho.ls`; note this differs from the contact page address (`info@llsa.org.ls`) — consolidate to one canonical email | `src/components/layout/Footer.tsx` | |
| 14 | **Footer phone** | `src/components/layout/Footer.tsx` | Currently `+266 XXXX XXXX` |
| 15 | **Constitution PDF** — upload to `public/constitution.pdf` | `src/components/layout/Footer.tsx` | Footer link currently 404s |

---

## ABOUT PAGE (`/about`)

| # | Item | File | Notes |
|---|------|------|-------|
| 16 | **LLSA founding year** — exact year the Association was established | `src/components/about/WhoWeAre.tsx` | Paragraph currently says "Established under the framework of the Land Survey Act No. 14 of 1980" without a founding date |
| 17 | **Council member names × 6** (President, Vice-President, Secretary, Treasurer, 2× Ordinary Members) | `src/components/about/Governance.tsx` | Currently `[Placeholder]` for all six cards |
| 18 | **Council member photos** (optional) — if photos are available, extend the card component to show a real avatar instead of the initial-letter fallback | `src/components/about/Governance.tsx` | |

---

## MEMBERSHIP PAGE (`/membership`)

| # | Item | File | Notes |
|---|------|------|-------|
| 19 | **Annual membership fees** — Professional Land Surveyor, Survey Technologist, Student | `src/components/membership/MembershipContent.tsx` | Currently "Contact Secretary" for all three |
| 20 | **Land Survey Act section number** — replace `s.XX` in Professional requirements | `src/components/membership/MembershipContent.tsx:41` | Likely s.6 but confirm against the Act |
| 21 | **Membership application form PDF** — upload to `public/docs/llsa-membership-application.pdf` | `src/components/membership/MembershipContent.tsx` | Download button currently returns 404 |
| 22 | **Application links** — replace `href="#"` on the three "Apply — [Category]" buttons with actual form or submission URL | `src/components/membership/MembershipContent.tsx` | |
| 23 | **Member directory** — replace the three sample entries (M. Mokoena, T. Letsie, S. Nthati) with real LAA/LLSA register data | `src/components/membership/MembershipContent.tsx` | Note: site currently shows disclaimer that live search is inactive |

---

## CPD PAGE (`/cpd`)

| # | Item | File | Notes |
|---|------|------|-------|
| 24 | **Annual CPD requirement** — number of hours per year required by Council | `src/components/cpd/CPDContent.tsx` | Currently `[X] hours` |
| 25 | **Upcoming CPD events** — confirmed titles, dates (not just month), locations, and CPD hour allocations | `src/components/cpd/CPDContent.tsx` | Four placeholder events with month-only dates (Aug–Nov 2026) |
| 26 | **Past CPD events** — actual historical event record with verified CPD hours | `src/components/cpd/CPDContent.tsx` | Three sample events (Mar 2026, Oct 2025, Nov 2025) |
| 27 | **CPD log template** — upload the LLSA-approved CPD log form to `public/docs/` | `src/components/cpd/CPDContent.tsx` | Download button currently `href="#"` |
| 28 | **CPD submission form/portal URL** — link for members to submit annual CPD records | `src/components/cpd/CPDContent.tsx` | "Submit CPD Record" button currently `href="#"` |
| 29 | **SAGC bilateral arrangement** — confirm whether the SAGC CPD recognition arrangement is active, pending, or not applicable; update the note text accordingly | `src/components/cpd/CPDContent.tsx` | Currently says "currently under discussion" |

---

## LEGISLATION PAGE (`/legislation`)

| # | Item | File | Notes |
|---|------|------|-------|
| 30 | **Land Survey Act 1980 PDF** | `src/components/legislation/LegislationContent.tsx` → `public/docs/land-survey-act-1980.pdf` | Available from LesLII (lesotholii.org) |
| 31 | **Land Survey Regulations 1982 PDF** | `src/components/legislation/LegislationContent.tsx` → `public/docs/land-survey-regulations-1982.pdf` | |
| 32 | **Land Survey (Amendment) Act 2012 PDF** | `src/components/legislation/LegislationContent.tsx` → `public/docs/land-survey-amendment-act-2012.pdf` | |
| 33 | **LAA Act 2010 PDF** | `src/components/legislation/LegislationContent.tsx` → `public/docs/laa-act-2010.pdf` | Available from Laws.Africa |
| 34 | **Land Act 2010 PDF** | `src/components/legislation/LegislationContent.tsx` → `public/docs/land-act-2010.pdf` | |
| 35 | **LAA website URL** — actual URL of the Land Administration Authority website | `src/components/legislation/LegislationContent.tsx` | Currently `href="#"` |
| 36 | **Office of Parliamentary Counsel URL** | `src/components/legislation/LegislationContent.tsx` | Currently `href="#"` |

---

## HOME PAGE (`/`)

| # | Item | File | Notes |
|---|------|------|-------|
| 37 | **News articles × 3** — real LLSA announcements to replace the three fabricated placeholder articles | `src/components/home/NewsSection.tsx` | All dated 29 June 2026, fabricated; the `/news` page they link to does not yet exist |
| 38 | **Statistics verification** — confirm that "40+ years", "10 districts", and "1 cadastre" figures are accurate and current | `src/components/home/ImpactSection.tsx` | These are currently reasonable estimates based on legislative context |

---

## STRUCTURED DATA / JSON-LD (affects search engines)

| # | Item | File | Notes |
|---|------|------|-------|
| 39 | **Street address in JSON-LD** — add `streetAddress` and `postalCode` fields | `src/app/layout.tsx` | Currently only locality and country |
| 40 | **Secretary email in JSON-LD** — currently `secretary@llsa.org.ls` | `src/app/layout.tsx` | Must match the real address when confirmed |
| 41 | **`sameAs` social profile URLs** — add once social accounts are confirmed | `src/app/layout.tsx` | Currently empty array |

---

## MISSING PAGES (nav links that currently 404)

| # | Page | Notes |
|---|------|-------|
| 42 | `/news` | Linked from NewsSection, navbar, and all three home page news cards |
| 43 | `/services` | Linked in Navbar and Footer quick links |
| 44 | `/privacy-policy` | Linked in Footer bottom bar |

---

## DOCUMENTS NEEDED (`public/docs/`)

All five legislation PDFs (items 30–34 above) plus:

| File | Purpose |
|------|---------|
| `public/docs/llsa-membership-application.pdf` | Downloadable application form (Membership page) |
| `public/docs/llsa-cpd-log-template.pdf` | CPD log form (CPD page) |
| `public/docs/llsa-constitution.pdf` | LLSA Constitution (ContactStrip "Download Constitution" button) |
| `public/constitution.pdf` | Footer Constitution link (same file, different path — standardise to one) |

---

## LOGO NOTES

The logo (`public/images/llsa-logo.png`, 176×117 px, transparent background) renders correctly on light backgrounds. For dark backgrounds (Footer, Navbar in dark mode), a `brightness-0 invert` CSS filter is currently applied as a fallback, producing a solid-white version. This works but loses the gold accent colour. If LLSA has an approved white/cream logo variant, supply it and update `Logo.tsx` to conditionally switch between the two image files.
