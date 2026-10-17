# GIL website update — instructions for VS Code

**Prepared:** 17 October 2026  **Applies to:** `llsa-website/` (Next.js 15, TypeScript, Tailwind)

This file updates the website with the Institute's history, its transition to the
Geomatics Institute of Lesotho, the profession's licensing status, contact details,
the elected Committee, the Land Surveyors' Board, all nine membership categories, and
working downloads.

## How to use this file

1. Open the `llsa-website` folder in VS Code.
2. Open your AI assistant panel (Claude Code, or GitHub Copilot Chat in Agent mode).
3. Work through **Tasks 1–12 in order**. For each task, paste the text in the
   **"Prompt"** box into the assistant, review the change it proposes, and accept it.
   Each task can also be done by hand: the prompt says exactly which file and lines to change.
4. After Task 12, run the checks in **"Verify"** and commit (see the end of this file).

> **Rule for every task:** use only the facts in **Section 0**. Do not invent names,
> numbers, dates, fees, addresses or quotations. If something is not in Section 0,
> leave the existing text and add a `// TODO: [GIL CONTENT]` comment.

---

## 0. Facts (single source of truth)

### Name and history
| Item | Value |
|---|---|
| Name | **Geomatics Institute of Lesotho** (short form **GIL**) |
| Not | "Lesotho Geomatics Institute" / "LGI" — never use this |
| Why the name order | The Law Office no longer allows an association's name to begin with "Lesotho" |
| Former name | Lesotho Land Surveyors Association (LLSA) |
| Founded | **April 1997**, as the Lesotho Land Surveyors Association |
| Transition | 2026 — from a land surveyors' association to an institute covering all geospatial disciplines |

### Licensing status of the profession
| Item | Value |
|---|---|
| Licensed land surveyors in Lesotho | **2** |
| Candidate surveyors | **11** — expected to be awarded licences by **March 2027** |
| Regulator | **Land Surveyors' Board**, established under the Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of 2019) — **not a "Council"** |
| Board appointed by | Land Surveyors (Appointment of Members of the Board) Notice, 2026 — **Legal Notice No. 71 of 2026**, made under section 4(1) of the Land Survey Act, 1980 |
| Gazette | Lesotho Government Gazette, **Vol. 71, No. 65, Friday 31 July 2026** (contains L.N. No. 69–72 of 2026) |

### Land Surveyors' Board (as gazetted, L.N. No. 71 of 2026)
| Member | Capacity |
|---|---|
| Mr. Pheello Ramotubei | Chairperson |
| Adv. Moupo Ntoko | Representative of the Ministry of Local Government and Chieftainship |
| Mr. Moleli Mochoni | Representative of the Land Administration Authority |
| Mr. Martin Nts'ihlele | Representative of registered land surveyors |
| Mr. Lipholo Motlalane | Representative of the Ministry of Education |

### Executive Committee (elected by members, October 2026)
| Office | Name | Election |
|---|---|---|
| President | Martin Nts'ihlele | 4–5 October 2026 |
| Vice-President | Tieho Lara | 4–5 October 2026 |
| Secretary | Maphoma Monaheng | 4–5 October 2026 |
| Vice-Secretary | Rethabile Mafatle | 4–5 October 2026 |
| Treasurer | Molefi Bokaako | 4–5 October 2026 |
| Ordinary Member | Mohau Molokeng | 6–8 October 2026 |
| Ordinary Member | Basia Lebajoa | 6–8 October 2026 |

### Contact
| Item | Value |
|---|---|
| Email (single address for everything) | **Geomaticsinstitute.ls@gmail.com** — write `mailto:` links in lower case: `mailto:geomaticsinstitute.ls@gmail.com` |
| Phone | Display **+266 6234 9190** · link `tel:+26662349190` |
| Office | **Chief Surveyor's Office**, Ministry of Local Government and Chieftainship, Maseru, Lesotho |
| Coordinates | -29.3142148, 27.481942 |
| Google Maps link ("Get directions") | `https://www.google.com/maps/place/Ministry+of+Local+Government/@-29.3142148,27.481942,16z/data=!3m1!4b1!4m6!3m5!1s0x1e8dcb14ffc991bd:0x91b91d8bc59485eb!8m2!3d-29.3142148!4d27.481942!16s%2Fg%2F11gfd8v8h_?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D` |
| Map embed (no API key needed) | `https://www.google.com/maps?q=-29.3142148,27.481942&z=16&output=embed` |

### Membership categories (Constitution draft, Art. 6.7)
| Category | Eligibility (summary) | Voting | CPD (Art. 8) |
|---|---|---|---|
| Honorary Life Member | Nominated by the Committee; elected by a two-thirds majority of members | Yes | — |
| Fellow | Professional Member with ≥10 years' continuous membership and distinguished contribution to the profession | Yes | — |
| Professional Member | Licensed Professional Land Surveyor registered under the Land Survey Act | Yes | 25 hrs/yr |
| Technologist Member | Recognised National Diploma (or equivalent) in surveying/geomatics; registered with the relevant authority or practising under a Professional Member | Yes | 20 hrs/yr |
| GIS Practitioner Member | Recognised qualification in GIS, geospatial science or related field; actively practising | Yes | 20 hrs/yr |
| Graduate Member | Recognised degree in land surveying, geomatics, GIS or related; completing training/experience towards professional registration | No | 10 hrs/yr (encouraged) |
| Associate Member | Allied professional whose qualifications/experience benefit the Institute; admitted at the Committee's discretion | No | — |
| Retired Member | Former active member in good standing, retired from full-time practice | Yes | — |
| Student Member | Enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline | No | Exempt |

**Branches of practice** (from the categorisation framework): Land Surveying · GISc · Mine Surveying · Engineering Surveying.

**Admission** (Art. 6.4, 6.8): apply on the prescribed form **in duplicate**, signed by a **proposer and seconder** who are subscribed members (an applicant may propose themself). Submit to the **Secretary** with the registration fee and documents. The **Committee** decides complete applications **within 30 days** and informs the applicant in writing; refused applicants may appeal within 30 days. Membership starts on written acceptance and payment of the annual subscription. **Fees** are set by the AGM (Art. 7.3) — do not publish amounts.

### Downloads (already copied into `public/docs/`)
| File | Document |
|---|---|
| `/docs/land-survey-act-1980.pdf` | Land Survey Act No. 14 of 1980 |
| `/docs/land-survey-regulations-1982.pdf` | Land Survey Regulations, 1982 |
| `/docs/land-survey-amendment-act-2012.pdf` | Land Survey (Amendment) Act No. 15 of 2012 (repealed) |
| `/docs/land-survey-amendment-act-2019.pdf` | Land Survey (Amendment) Act No. 2 of 2019 |
| `/docs/laa-act-2010.pdf` | Land Administration Authority Act No. 9 of 2010 |
| `/docs/land-act-2010.pdf` | Land Act No. 8 of 2010 |
| `/docs/gazette-ln-69-72-of-2026.pdf` | **L.N. No. 69–72 of 2026** — Gazette Vol. 71 No. 65 (incl. appointment of the Land Surveyors' Board, L.N. No. 71) |
| `/docs/gil-constitution-draft-2026.pdf` | GIL Constitution (draft) |
| `/docs/gil-membership-application-form.docx` | Membership application form (Word, editable) |
| `/docs/gil-membership-application-form.pdf` | Membership application form (PDF, for printing) |

> Links to files in `public/` start with `/docs/...` — **never** `/public/docs/...`.

---

## Task 1 — Contact details everywhere

**Prompt**
```
Update the contact details across the site using Section 0 of GIL-Website-Update-Instructions.md.
1. src/components/layout/Navbar.tsx (top bar): email link -> mailto:geomaticsinstitute.ls@gmail.com,
   display "Geomaticsinstitute.ls@gmail.com"; phone -> tel:+26662349190, display "+266 6234 9190".
2. src/components/layout/Footer.tsx (Contact Us column): address becomes
   "Chief Surveyor's Office" / "Ministry of Local Government and Chieftainship" / "Maseru, Lesotho";
   make the address a link to the Google Maps URL in Section 0 (target _blank, rel noopener noreferrer);
   same email and phone as above. Change the copyright line to
   "© 2026 Geomatics Institute of Lesotho (formerly Lesotho Land Surveyors Association). All rights reserved."
3. src/components/contact/ContactContent.tsx: Office Address, Email and Phone blocks get the same values.
   Replace the map placeholder panel with a responsive Google Maps iframe
   (src = the "Map embed" URL in Section 0, title="Chief Surveyor's Office, Maseru on Google Maps",
   loading="lazy", referrerPolicy="no-referrer-when-downgrade", rounded corners, aspect 16/9, full width).
   Keep a "Get Directions" button below it linking to the Google Maps URL (new tab).
   Change the heading "LLSA Offices, Maseru District, Lesotho" to "Chief Surveyor's Office, Maseru".
4. src/app/layout.tsx JSON-LD: contactPoint.email -> "geomaticsinstitute.ls@gmail.com",
   add contactPoint.telephone "+266-6234-9190"; address.streetAddress
   "Chief Surveyor's Office, Ministry of Local Government and Chieftainship".
Remove the TODO comments these values resolve. Do not change anything else.
```
**Check:** no `llsa@lesotho.ls`, `@llsa.org.ls`, `+266 XXXX`, `+26600000000` or `123 Kingsway` remains:
`git grep -n -e "llsa@lesotho" -e "@llsa.org.ls" -e "XXXX" -e "26600000000" -e "Kingsway" src`

---

## Task 2 — History and the transition (About page and home hero)

**Prompt**
```
Rewrite the two paragraphs in src/components/about/WhoWeAre.tsx and change the heading to
"The Professional Body for Geomatics in Lesotho". Use exactly this copy:

P1: "The Geomatics Institute of Lesotho (GIL) is the voluntary professional body for land surveyors
and geomatics practitioners in the Kingdom of Lesotho. It was founded in April 1997 as the Lesotho
Land Surveyors Association (LLSA) and has represented the surveying profession ever since."

P2: "In 2026 the Association widened its scope from land surveying to the full range of geospatial
science — land surveying, geographic information science (GISc), mine surveying and engineering
surveying — and became the Geomatics Institute of Lesotho. The name is deliberately Geomatics
Institute of Lesotho, not 'Lesotho Geomatics Institute': the Law Office no longer allows an
association's name to begin with 'Lesotho'."

Add a third paragraph:
P3: "The Institute works alongside, and does not replace, the statutory bodies: the Land Surveyors'
Board, which licenses surveyors under the Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of
2019); the Chief Surveyor; and the Land Administration Authority."

Then in src/components/home/HeroSection.tsx change the sentence that starts
"Lesotho Land Surveyors Association — the professional body for licensed" so it starts
"Geomatics Institute of Lesotho — the professional body for licensed" (keep the rest).
Remove the WhoWeAre founding-year TODO.
```

---

## Task 3 — Profession status: 2 licensed, 11 candidates (home page stats + write-up)

**Prompt**
```
In src/components/home/HeroSection.tsx change the three stat counters:
- useCounter(1980, ...) -> useCounter(1997, ...), label stays "Established"
- countSurveyors: target 2, label "Licensed Surveyors", REMOVE the "+" suffix
- countPractices: rename to countCandidates, target 11, label "Candidate Surveyors", no suffix
Keep the animation code as it is.

In src/components/home/ImpactSection.tsx change the heading "Why LLSA Matters" to "Why GIL Matters"
and add a short paragraph under the stats (same text styles as the section) with exactly:
"Lesotho has 2 licensed land surveyors today. Following the appointment of the Land Surveyors'
Board, published in the Lesotho Government Gazette on 31 July 2026 (Legal Notice No. 71 of 2026),
11 candidate surveyors are expected to be awarded licences by March 2027."
Link the words "Legal Notice No. 71 of 2026" to /docs/gazette-ln-69-72-of-2026.pdf (download attribute).
```

---

## Task 4 — Governance: Committee names and the Land Surveyors' Board (replaces "Council Structure")

**Prompt**
```
Edit src/components/about/Governance.tsx:

1. Rename COUNCIL_ROLES to COMMITTEE and replace its entries with the 7 Executive Committee members in
   Section 0 (role, name, note). Notes: "Elected 4–5 October 2026" for the five office-bearers,
   "Elected 6–8 October 2026" for the two Ordinary Members. Show the real name in white (not white/45)
   and use the initials of the NAME (e.g. "MN") in the avatar circle instead of the role's first letter.
   Grid: grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 so 7 cards sit well. Rename councilRef/councilInView
   to committeeRef/committeeInView.
2. Change the heading "Council Structure" to "Executive Committee" and add a one-line subtitle:
   "Elected by members to run the Institute under its Constitution."
3. Below it add a new block "Land Surveyors' Board" with this intro text:
   "The surveying profession in Lesotho is regulated by the Land Surveyors' Board established under the
   Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of 2019) — not by a council. The Board's
   members were appointed by the Land Surveyors (Appointment of Members of the Board) Notice, 2026
   (Legal Notice No. 71 of 2026, Gazette Vol. 71 No. 65, 31 July 2026)."
   Then list the 5 Board members from Section 0 as cards in the same style (name + capacity), and a
   button "Download the Gazette (L.N. No. 69–72 of 2026)" linking to /docs/gazette-ln-69-72-of-2026.pdf.
4. Add three entries to TIMELINE, in date order:
   { year: "1997", event: "Lesotho Land Surveyors Association founded", detail: "The Association is established in April 1997 as the professional body for land surveyors in Lesotho." }
   { year: "2026", event: "Land Surveyors' Board appointed", detail: "Members of the Board appointed by Legal Notice No. 71 of 2026 (Gazette of 31 July 2026)." }
   { year: "2026", event: "Geomatics Institute of Lesotho", detail: "The Association becomes the Geomatics Institute of Lesotho, covering land surveying, GISc, mine surveying and engineering surveying." }
5. Change the sentence "LLSA is governed by its Constitution..." to start "GIL is governed by its Constitution...".

Then in src/components/contact/ContactContent.tsx rename COUNCIL to COMMITTEE, heading
"LLSA Council Contacts" -> "Committee Contacts", entries:
President — Martin Nts'ihlele; Vice-President — Tieho Lara; Secretary — Maphoma Monaheng;
Treasurer — Molefi Bokaako; all with email geomaticsinstitute.ls@gmail.com. Show the name under the role.
Remove the "CPD Coordinator" entry.
```
**Check:** `git grep -n -i "council" src` — the only remaining hits should be other bodies' names
(e.g. "South African Geomatics Council", "Maseru Municipal Council") — not GIL's own governance.

---

## Task 5 — All nine membership categories (Membership page)

**Prompt**
```
Edit src/components/membership/MembershipContent.tsx.

1. Replace the 3 entries in CATEGORIES with the 9 categories in Section 0, in this order:
   Professional, Technologist, GIS Practitioner, Graduate, Student, Associate, Retired, Fellow,
   Honorary Life. For each: label (short, e.g. "Voting" / "Non-voting"), title (category name),
   description (the eligibility summary), requirements (2–3 bullets drawn ONLY from Section 0,
   including "Voting rights: Yes/No" and the CPD hours where given), and cta.
   Icons (lucide-react): Professional BadgeCheck, Technologist Ruler, GIS Practitioner Globe,
   Graduate GraduationCap, Student BookOpen, Associate Handshake, Retired Hourglass, Fellow Medal,
   Honorary Life Award.
   Add an optional `href` to the Category type. For the first 7 categories href =
   "/docs/gil-membership-application-form.docx" and cta "Download application form".
   Fellow: cta "Apply via the Secretary", href "mailto:geomaticsinstitute.ls@gmail.com?subject=Fellowship%20application".
   Honorary Life: no button — show the text "By Committee nomination only".
   In CategoryCard, use cat.href for the CTA (add the download attribute for /docs/ links) and hide the
   button when href is missing.
2. Lay the cards out as a responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3.
3. Above the grid, replace "LLSA offers three categories of membership..." with:
   "The Institute has nine membership categories, set by Article 6.7 of its Constitution. Members practise
   in four branches: Land Surveying, GISc, Mine Surveying and Engineering Surveying." Render the four
   branches as small pill badges.
4. Replace STEPS with:
   1 "Download and complete the application form" — "Download the form from this page (Word or PDF) and complete it in full."
   2 "Get a proposer and seconder" — "Both must be subscribed members of the Institute. You may propose yourself; a seconder is still required."
   3 "Attach your documents" — "Certified copies of your ID, certificates and transcripts, and proof of licence or registration where applicable."
   4 "Submit two copies to the Secretary with the registration fee" — "Email Geomaticsinstitute.ls@gmail.com or deliver to the Chief Surveyor's Office, Maseru. Fees are set by the AGM; ask the Secretary for the current schedule."
   5 "The Committee decides within 30 days" — "You are informed in writing. If your application is refused you may appeal to the Committee within 30 days."
   6 "Membership starts on acceptance" — "Membership begins when you receive written acceptance and pay the annual subscription."
5. The "Download Application Form" button at the bottom of the process section: href
   "/docs/gil-membership-application-form.docx" with download attribute, label
   "Download Application Form (Word)"; add a second, outlined button "PDF version" ->
   "/docs/gil-membership-application-form.pdf".
6. Member register: delete the 3 placeholder entries in MEMBERS (they are not real people) and show
   this notice instead of the table when the list is empty:
   "Lesotho currently has 2 licensed land surveyors. The public register will be published here once the
   Land Surveyors' Board licenses the current 11 candidate surveyors, expected by March 2027."
7. Replace every remaining visible "LLSA" in this file with "GIL" and "Council" with "Committee".

Also in src/app/membership/page.tsx: description and subtitle "Join the Lesotho Land Surveyors
Association" -> "Join the Geomatics Institute of Lesotho"; title "Membership & Registration | GIL".
```

---

## Task 6 — Legislation page: working downloads, the Gazette, and a Document Library

**Prompt**
```
Edit src/components/legislation/LegislationContent.tsx.

1. ACTS: set every downloadHref to the matching file in Section 0 "Downloads" (the 2019 Act currently
   has "#": use /docs/land-survey-amendment-act-2019.pdf). Remove the "upload actual PDF" TODOs.
2. Add a new item at the end of ACTS:
   title: "Land Surveyors (Appointment of Members of the Board) Notice, 2026"
   number: "L.N. No. 69–72 of 2026"
   year: 2026
   adminBody: "Minister of Local Government and Chieftainship"
   status: "In Force"
   purpose: "Appoints the members of the Land Surveyors' Board under section 4(1) of the Land Survey Act,
   1980: Mr. Pheello Ramotubei (Chairperson); Adv. Moupo Ntoko (Ministry of Local Government and
   Chieftainship); Mr. Moleli Mochoni (Land Administration Authority); Mr. Martin Nts'ihlele (registered
   land surveyors); and Mr. Lipholo Motlalane (Ministry of Education). Published as Legal Notice No. 71
   in the Gazette containing L.N. No. 69–72 of 2026."
   downloadHref: "/docs/gazette-ln-69-72-of-2026.pdf"
   sourceNote: "Lesotho Government Gazette Vol. 71, No. 65, 31 July 2026"
3. Make sure the Download buttons render as <a href=... download> so the PDF downloads.
4. Add a new section "Document Library" (id="documents") ABOVE "External Resources", using the same
   card style. It lists every file in Section 0 "Downloads" (10 items) with a file-type label
   (PDF or Word) and a Download icon; each is an <a href="/docs/..." download>.
5. EXTERNAL_LINKS — make all four work:
   LesLII -> https://lesotholii.org/legislation/
   Laws.Africa -> https://laws.africa (unchanged)
   LAA Website -> https://www.laa.org.ls
   Replace "Office of Parliamentary Counsel" with:
     label "Government of Lesotho", description "Official government portal", href "https://www.gov.ls"
   Remove the TODO comments.
6. Change "practice for all LLSA members" to "practice for all GIL members".

In src/app/legislation/page.tsx change the title to "Acts & Regulations | GIL" and add
"the Land Surveyors' Board appointment notice (L.N. No. 71 of 2026)" to the description.
```

---

## Task 7 — Home page legislation cards and the constitution button

**Prompt**
```
1. src/components/home/LegislationSection.tsx: add an `href` field to each legislation item and set it
   to the matching /docs/... file in Section 0; in the card component replace the hard-coded href="#"
   on "Download PDF ↓" with the item's href and add the download attribute. Add a seventh card for
   "Land Surveyors Board Notice, 2026 (L.N. No. 71 of 2026)" -> /docs/gazette-ln-69-72-of-2026.pdf.
   Change "LLSA members practise within" to "GIL members practise within".
2. src/components/home/ContactStrip.tsx: fix the constitution button href from
   "/public/docs/llsa-constitution.pdf" to "/docs/gil-constitution-draft-2026.pdf" (use <a ... download>
   instead of next/link for a file), label "Download Constitution (draft)", and change
   "Have a question about LLSA membership, CPD, or licensing?" to
   "Have a question about GIL membership, CPD, or licensing?". Remove the TODO.
3. src/components/home/MembershipCTA.tsx: badge text "LLSA" -> "GIL" and
   "Lesotho Land Surveyors Association" -> "Geomatics Institute of Lesotho". Replace the sentence
   starting "LLSA membership is open to all persons licensed under..." with
   "GIL membership is open to licensed surveyors, technologists, GIS practitioners, graduates, students
   and allied professionals across nine membership categories."
```

---

## Task 8 — CPD requirements from the Constitution

**Prompt**
```
In src/components/cpd/CPDContent.tsx replace the "[X] hours" Annual Requirement card text with:
big figure "25 hours" and the line
"per year for Professional Members; 20 for Technologist and GIS Practitioner Members; 10 encouraged for
Graduate Members; Students exempt (Constitution Art. 8). Records are due by 31 March."
Replace "confirmed by Council" / "review by the Council" with "Committee". Replace visible "LLSA"
with "GIL" in this file (including event titles). Leave the "Submit CPD Record" and
"Download CPD Log Template" buttons as they are (no file exists yet) but keep their TODOs.
In src/app/cpd/page.tsx replace "LLSA" with "GIL" in the title and descriptions.
```

---

## Task 9 — Replace the remaining old name in page copy

**Prompt**
```
Search src/ for visible text containing "LLSA" or "Lesotho Land Surveyors Association" and replace it
with "GIL" / "Geomatics Institute of Lesotho", EXCEPT:
- historical statements (founded in 1997 as the Lesotho Land Surveyors Association; "formerly LLSA");
- the JSON-LD alternateName in src/app/layout.tsx;
- code comments and TODO markers (leave them).
Files to cover include about/Objectives.tsx ("Objectives of LLSA", "LLSA Constitution"),
services/ServiceBlocks.tsx, home/NewsSection.tsx ("Latest from LLSA"), contact/ContactContent.tsx
(thank-you message), and the page metadata in src/app/about, contact, services (titles end "| GIL";
"About LLSA" -> "About GIL"; "Contact LLSA" -> "Contact GIL").
Never write "Lesotho Geomatics Institute" or "LGI".
```
**Check:** `git grep -n -e "LLSA" -e "Land Surveyors Association" src` returns only historical
mentions, comments and the alternateName. `git grep -n -e "Lesotho Geomatics" -e "LGI" src` returns nothing.

---

## Task 10 — Update the site's CONTENT-NEEDED.md

**Prompt**
```
Update CONTENT-NEEDED.md: mark as DONE the items resolved by Tasks 1–9 (address, email, phone, map,
founding year, council/committee names, membership categories, application form, all Act PDFs,
constitution PDF, OG image, LAA and other external links). Keep open: production domain (BASE_URL still
www.llsa.org.ls), social media URLs, office hours, membership fees, CPD log template and CPD
submission link, news items, privacy policy page, contact form endpoint.
```

---

## Task 11 — Build and look at it

Run in the VS Code terminal:
```
npm run lint
npm run build
npm run dev
```
Open http://localhost:3000 and check every item in **Verify** below.

## Task 12 — Commit and push

```
git add -A public/docs src CONTENT-NEEDED.md GIL-Website-Update-Instructions.md
git commit -m "Add GIL history, Board, Committee, categories, contact details and document downloads"
git push origin main
```
(Use VS Code's Source Control panel if you prefer: stage, write the message, **Commit**, then **Sync Changes**.)

---

## Verify (tick each before pushing)

- [ ] Home hero shows **Established 1997**, **2 Licensed Surveyors**, **11 Candidate Surveyors** (no "+").
- [ ] Home/Impact paragraph about the Board and March 2027 is present, and the gazette link downloads.
- [ ] About → Who We Are: April 1997 founding and the "not Lesotho Geomatics Institute" explanation.
- [ ] About → Governance: heading **Executive Committee** with 7 names; **Land Surveyors' Board** block with 5 gazetted members; no "Council Structure".
- [ ] Membership: **9 category cards**; four branch badges; 6-step process; Word and PDF form buttons download; no placeholder member names.
- [ ] Legislation: every Act's **Download** button downloads a PDF (including the 2019 Act); the Board Notice (L.N. No. 69–72 of 2026) appears; **Document Library** lists 10 files; all four **External Resources** open real sites.
- [ ] Contact: Chief Surveyor's Office address, Geomaticsinstitute.ls@gmail.com, +266 6234 9190, a working map, and **Get Directions** opens Google Maps.
- [ ] Footer and top bar show the same email and phone; copyright reads Geomatics Institute of Lesotho.
- [ ] Nowhere on the site says "Lesotho Geomatics Institute".
- [ ] Phone (390 px wide): map, category grid and Document Library fit with no sideways scrolling.

## Notes for the Committee (not website tasks)

1. **Constitution PDF still has the old name.** `gil-constitution-draft-2026.pdf` reads
   "LESOTHO GEOMATICS INSTITUTE" in Art. 1.1. Correct the name in `LGI Constitution Draft.docx`,
   export to PDF, and overwrite `public/docs/gil-constitution-draft-2026.pdf` (same file name, so
   no code change is needed).
2. **Designatory letters.** The constitution uses PLGI and FLGI, which follow the old name. The site
   shows category names only, without these letters, until the Committee decides the new letters.
3. **Committee structure vs. constitution.** The October 2026 elections filled a Vice-Secretary post and
   two Ordinary Member seats. The draft constitution lists one Ordinary Member plus a co-opted
   Student/Graduate representative and no Vice-Secretary. Align the constitution with the elected
   structure before adoption.
4. **News items** on the home page (e.g. "LAA Circular 2026/3") are sample content from the original
   build. Replace them with real news or remove them.
