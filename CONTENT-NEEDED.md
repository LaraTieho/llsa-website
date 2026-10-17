# GIL Website — Content Needed Before Go-Live

Generated: 2026-06-29 · Updated: 2026-10-17 (GIL website update, Tasks 1–9)
Open items map to `// TODO: [LLSA CONTENT]` / `// TODO: [GIL CONTENT]` comments in the source files listed below.

---

## STILL OPEN

| # | Item | File | Notes |
|---|------|------|-------|
| 1 | **Production domain** — `BASE_URL` is still `https://www.llsa.org.ls` | `src/app/layout.tsx` | Used in all SEO metadata and JSON-LD; update once the GIL domain is confirmed |
| 4 | **Social media profile URLs** — Facebook, X/Twitter (LinkedIn done) | `src/components/contact/ContactContent.tsx`, `src/components/layout/Footer.tsx`, `src/app/layout.tsx` (`sameAs`) | Currently `href="#"` on all platforms |
| 4a | **Office hours** — confirm "Monday – Friday, 08:00 – 17:00 SAST" for the Chief Surveyor's Office | `src/components/contact/ContactContent.tsx` | Unverified |
| 11 | **Contact form endpoint** — wire `onSubmit` to a real API (e.g. Resend, Formspree, or a Next.js route handler) | `src/components/contact/ContactContent.tsx` | Currently logs to console and simulates a 1.2 s delay |
| 18 | **Committee member photos** (optional) | `src/components/about/Governance.tsx` | Cards show initials |
| 19 | **Membership fees** — set by the AGM (Constitution Art. 7.3) | `src/components/membership/MembershipContent.tsx` | Cards say "Set by the AGM — ask the Secretary"; publish amounts only once approved |
| 23 | **Public register** of licensed surveyors | `src/components/membership/MembershipContent.tsx` (`MEMBERS`) | Placeholder entries removed; notice shown until the Board licenses the 11 candidates (expected March 2027) |
| 25 | **Upcoming CPD events** — confirmed titles, dates, locations, CPD hours | `src/components/cpd/CPDContent.tsx` | Placeholder events |
| 26 | **Past CPD events** — actual event record | `src/components/cpd/CPDContent.tsx` | Sample events |
| 27 | **CPD log template** — upload to `public/docs/` | `src/components/cpd/CPDContent.tsx` | Download button still `href="#"` |
| 28 | **CPD submission link** — form/portal URL | `src/components/cpd/CPDContent.tsx` | "Submit CPD Record" still `href="#"` |
| 29 | **SAGC arrangement** — confirm status of CPD recognition | `src/components/cpd/CPDContent.tsx` | Says "currently under discussion" |
| 37 | **News items** — replace the sample articles (e.g. "LAA Circular 2026/3") with real news, or remove them | `src/components/home/NewsSection.tsx` | Sample content from the original build |
| 38 | **Impact statistics** — confirm "40+ years", "10 districts", "1 cadastre" | `src/components/home/ImpactSection.tsx` | |
| 39a | **Postal code** in JSON-LD | `src/app/layout.tsx` | `streetAddress` added; no postal code yet |
| 42 | `/news` page | — | Linked from NewsSection, navbar and footer; does not exist yet |
| 44 | `/privacy-policy` page | — | Linked in footer; does not exist yet |

---

## DONE (17 October 2026)

| # | Item | Resolution |
|---|------|------------|
| 2 | OG image | `public/og-image.png` (GIL branding) |
| 3 | Logo for dark backgrounds | `public/images/gil-logo-white.svg` |
| 5 | Office address | Chief Surveyor's Office, Ministry of Local Government and Chieftainship, Maseru |
| 6, 13 | Email | Single address everywhere: Geomaticsinstitute.ls@gmail.com |
| 7, 14 | Phone | +266 6234 9190 (`tel:+26662349190`) |
| 8, 9 | Committee contacts | President, Vice-President, Secretary, Treasurer named on the Contact page |
| 10 | Map | Google Maps embed + "Get Directions" link on the Contact page |
| 12 | Footer address | Matches Contact page; links to Google Maps |
| 15 | Constitution PDF | `public/docs/gil-constitution-draft-2026.pdf` (footer and home ContactStrip) — **the PDF still says "Lesotho Geomatics Institute" in Art. 1.1; replace the file once corrected** |
| 16 | Founding year | April 1997 (About → Who We Are; timeline) |
| 17 | Committee names | 7 Executive Committee members (About → Governance); Land Surveyors' Board (5 gazetted members) added |
| 20 | "s.XX" section reference | Removed; categories now follow Constitution Art. 6.7 |
| 21, 22 | Application form and links | `public/docs/gil-membership-application-form.docx` and `.pdf`; all category buttons link to the form |
| 24 | Annual CPD requirement | 25 / 20 / 10 hrs per Constitution Art. 8; records due 31 March |
| 30–34 | Act PDFs | All in `public/docs/`, plus the 2019 Amendment Act and the Gazette (L.N. No. 69–72 of 2026) |
| 35 | LAA website | https://www.laa.org.ls |
| 36 | Office of Parliamentary Counsel | Replaced with Government of Lesotho (https://www.gov.ls); LesLII now links to https://lesotholii.org/legislation/ |
| 39 | Street address in JSON-LD | Added |
| 40 | Email in JSON-LD | geomaticsinstitute.ls@gmail.com, plus telephone |
| 43 | `/services` page | Exists |
| 4 (part) | LinkedIn | https://www.linkedin.com/company/geomatics-institute-of-lesotho/ — footer, Contact page and JSON-LD `sameAs` |

---

## DOCUMENTS IN `public/docs/`

| File | Document |
|------|----------|
| `land-survey-act-1980.pdf` | Land Survey Act No. 14 of 1980 |
| `land-survey-regulations-1982.pdf` | Land Survey Regulations, 1982 |
| `land-survey-amendment-act-2012.pdf` | Land Survey (Amendment) Act No. 15 of 2012 (repealed) |
| `land-survey-amendment-act-2019.pdf` | Land Survey (Amendment) Act No. 2 of 2019 |
| `laa-act-2010.pdf` | Land Administration Authority Act No. 9 of 2010 |
| `land-act-2010.pdf` | Land Act No. 8 of 2010 |
| `gazette-ln-69-72-of-2026.pdf` | L.N. No. 69–72 of 2026 — Gazette Vol. 71 No. 65 (incl. L.N. No. 71, Board appointment) |
| `gil-constitution-draft-2026.pdf` | GIL Constitution (draft) |
| `gil-membership-application-form.docx` | Membership application form (Word) |
| `gil-membership-application-form.pdf` | Membership application form (PDF) |

Still needed: CPD log template (item 27).
