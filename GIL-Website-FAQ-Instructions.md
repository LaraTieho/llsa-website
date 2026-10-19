# GIL website — FAQ / Questions & Answers section — instructions for VS Code

**Prepared:** 19 October 2026 (revised the same day after Committee decisions)  **Applies to:** `llsa-website/` (Next.js 15, TypeScript, Tailwind, Framer Motion)
**Builds on:** `GIL-Website-Update-Instructions.md` (17 Oct 2026). Do that file first if it is not yet done.

This file adds a public **Questions & Answers** page (`/faq`) that answers the questions people
keep sending the Secretary: membership eligibility, licensing, the Land Surveyors' Board, the
recognised qualifications, candidacy and mentorship, CPD, and questions from the public about
surveys, beacons and complaints. It is modelled on the FAQ pages of **SAGI** (voluntary institute)
and **SAGC** (statutory council) in South Africa, adapted to Lesotho, where **GIL** plays the SAGI
role and the **Land Surveyors' Board** plays the statutory role.

## How to use this file

1. Open the `llsa-website` folder in VS Code.
2. Open Claude Code (or GitHub Copilot Chat in Agent mode).
3. Paste the **Master prompt** below. It runs Tasks 1–8 in order.
   If you prefer to go step by step, paste each task's **Prompt** box instead.
4. Review each change, run the checks in **Verify**, then commit.

> **Rule for every task:** the questions and answers in **Section 0** are the single source of
> truth. Copy them as written. Do not invent names, fees, dates, section numbers, institutions or
> legal effects. If wording must change to fit the UI, change layout only, never meaning. Anything
> not in Section 0 gets a `// TODO: [GIL CONTENT]` comment, not invented text.

---

## Master prompt (paste this once)

```
Read GIL-Website-FAQ-Instructions.md in full. Then carry out Tasks 1 to 8 in that file, in order,
using ONLY the content in Section 0 as the source of truth for every question, answer, label,
legal reference and link. Match the existing code style: the PageHero, AnimatedSection,
SectionLabel and GoldDivider components in src/components/shared, the colour tokens in
tailwind.config.ts, the font-display / font-sans classes, and the metadata pattern used in
src/app/cpd/page.tsx. Do not add new npm dependencies. After each task, run `npm run lint`;
after Task 7, run `npm run build` and fix any errors. Show me a summary of changed files at the end.
Do not commit until I say so.
```

---

## 0. Content (single source of truth)

### 0.1 Page settings

| Item | Value |
|---|---|
| Route | `/faq` |
| Nav label | `FAQ` (between `CPD` and `News`) |
| Page title (H1 via PageHero) | `Questions & Answers` |
| Subtitle | `Membership, licensing, qualifications and surveying in Lesotho — answered` |
| Meta description | `Answers to common questions about joining the Geomatics Institute of Lesotho, licensing by the Land Surveyors' Board, recognised qualifications, candidacy, CPD, and land surveys in Lesotho.` |
| Last reviewed | `19 October 2026` |
| Disclaimer (show above the questions and again at the foot) | `These answers are general guidance from the Geomatics Institute of Lesotho. They are not legal advice. Where they differ from the Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of 2019), the Land Survey Regulations, 1982, or a decision of the Land Surveyors' Board, the law and the Board prevail. Answers marked "GIL position — before the Board" are adopted by the Institute and are awaiting the Board's consideration; they may change.` |
| "Still have a question?" box | Heading `Didn't find your answer?` · text `Write to the Secretary and we will reply. Questions that come up often are added to this page.` · buttons: `Email the Secretary` → `mailto:geomaticsinstitute.ls@gmail.com?subject=Question%20for%20GIL` and `Contact page` → `/contact` |

### 0.2 Basis labels (a small badge on every answer)

| Key | Badge text | Meaning | Colour |
|---|---|---|---|
| `law` | `The law` | Stated in the Land Survey Act / Regulations | primary (navy) |
| `constitution` | `GIL Constitution (draft)` | From the GIL constitution draft | secondary (green) |
| `position` | `GIL position — before the Board` | Adopted by GIL (Categorisation and Transitional Licensing Framework, 29 Sep 2026), awaiting the Board | accent (gold) |
| `guidance` | `Guidance` | Practical guidance from the Institute | muted |

Each answer also shows a one-line **Source** in small text (given below as *Source:*).

### 0.3 Categories (filter chips, in this order)

| id | Label |
|---|---|
| `about` | About GIL |
| `board` | The Board and the law |
| `licensing` | Licensing and registration |
| `qualifications` | Does my qualification count? |
| `membership` | Membership |
| `training` | Candidacy, training and mentorship |
| `cpd` | CPD and conduct |
| `public` | For the public and clients |

### 0.4 Questions and answers

Formatting notes: a blank line = new paragraph; lines starting `-` = bullet list; a markdown
table = render as a small responsive table; `[text](/path)` = internal link (use next/link);
`id` = anchor and React key.

---

#### Category: About GIL (`about`)

**Q `what-is-gil` — What is the Geomatics Institute of Lesotho?**
The Geomatics Institute of Lesotho (GIL) is the voluntary professional body for land surveyors and geospatial professionals in Lesotho. It was founded in April 1997 as the Lesotho Land Surveyors Association (LLSA). In 2026 it began its transition from an association of land surveyors to an institute covering all geospatial disciplines — land surveying, engineering surveying, geographic information science (GISc) and related fields.
GIL promotes professional standards, runs continuing professional development (CPD), speaks for the profession, and advises the Land Surveyors' Board on the categorisation and training of practitioners.
Basis: `guidance` · *Source:* GIL Constitution (draft); Institute history.

**Q `why-the-name` — Why "Geomatics Institute of Lesotho" and not "Lesotho Geomatics Institute"?**
The Law Office no longer allows the name of an association to begin with "Lesotho". The Institute is therefore registered as the Geomatics Institute of Lesotho, short form GIL.
Basis: `guidance` · *Source:* Institute records.

**Q `gil-vs-board` — Is GIL the same as the Land Surveyors' Board?**
No. They are two different bodies with different roles.
- **The Land Surveyors' Board** is the statutory regulator established under section 4 of the Land Survey Act No. 14 of 1980. It grants licences to practise land surveying, keeps the register of licensed surveyors and disciplines licensed surveyors.
- **GIL** is a voluntary professional institute of members. It does not issue licences. It supports its members' professional development, sets out recommended standards and training, and advises the Board.
South Africa has the same arrangement: the South African Geomatics Institute (SAGI) is the voluntary institute and the South African Geomatics Council (SAGC) is the statutory council. In Lesotho, GIL corresponds to SAGI and the Land Surveyors' Board to SAGC.
Basis: `law` · *Source:* Land Survey Act No. 14 of 1980, ss. 4–5.

**Q `what-gil-does` — What does GIL do?**
- Runs a CPD programme and technical events for members.
- Recommends categories, qualifications and practical-training requirements to the Land Surveyors' Board.
- Supports graduates and candidates through its Young Surveyors Chapter and links with practising members.
- Follows new technology and standards (GNSS, drones, LiDAR, spatial data infrastructure) through its Technology and Innovation Sub-committee.
- Handles complaints from the public about its members.
- Seeks liaison with the South African Geomatics Council (SAGC), the International Federation of Surveyors (FIG), the African Association of Remote Sensing of the Environment (AARSE) and SADC bodies.
Basis: `constitution` · *Source:* GIL Constitution (draft) — objectives, sub-committees, liaison.

**Q `who-runs-gil` — Who runs GIL?**
An Executive Committee elected by the members. The current Committee was elected in October 2026: President Martin Nts'ihlele, Vice-President Tieho Lara, Secretary Maphoma Monaheng, Vice-Secretary Rethabile Mafatle, Treasurer Molefi Bokaako, and Ordinary Members Mohau Molokeng and Basia Lebajoa. Committee terms are two years. See [About GIL](/about).
Basis: `constitution` · *Source:* Committee elections, 4–8 October 2026; GIL Constitution (draft).

**Q `contact-gil` — How do I contact GIL?**
Email Geomaticsinstitute.ls@gmail.com or call +266 6234 9190. The office is at the Chief Surveyor's Office, Ministry of Local Government and Chieftainship, Maseru. See the [Contact page](/contact).
Basis: `guidance` · *Source:* Institute contact details.

---

#### Category: The Board and the law (`board`)

**Q `what-is-board` — What is the Land Surveyors' Board?**
The Land Surveyors' Board is the body established by section 4 of the Land Survey Act No. 14 of 1980 to license and regulate land surveyors. As amended by the Land Survey (Amendment) Act No. 2 of 2019, the Board is chaired by the Chief Surveyor — currently Mr Pheello Ramotubei — and includes representatives of the Land Administration Authority, of registered land surveyors, of the Ministry of Local Government and Chieftainship, and of the Ministry of Education. The Board sits quarterly and as the need arises.
The current members were appointed by Legal Notice No. 71 of 2026 (Government Gazette Vol. 71 No. 65, 31 July 2026). See [About GIL](/about) and the [Legislation page](/legislation).
Basis: `law` · *Source:* Land Survey Act 1980, s. 4, as amended by Act No. 2 of 2019; L.N. No. 71 of 2026.

**Q `board-functions` — What does the Board do?**
Under section 5 of the Land Survey Act, the Board:
- grants licences to practise land surveying in Lesotho to persons duly qualified under the Act;
- provides for examinations, where necessary, for applicants for licences;
- keeps a register of all licensed surveyors;
- takes disciplinary proceedings against licensed surveyors;
- hears and decides disputes between a licensed surveyor and a client about fees, and between a licensed surveyor and the Chief Surveyor.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 5, 8, 9, 13.

**Q `chief-surveyor` — What is the role of the Chief Surveyor?**
The Chief Surveyor is a public officer responsible to the Commissioner of Lands. The Chief Surveyor supervises, directs and controls public surveys; examines and authenticates survey plans; keeps all survey records; may cancel or amend surveys found to be incorrect, outdated or inadequate; issues copies of public maps and documents for the prescribed fee; prepares the official maps of Lesotho; controls aerial photography of Lesotho; establishes and maintains the spatial data infrastructure and the national control network; and chairs the Land Surveyors' Board.
Every survey made under the Act must follow the general directions issued by the Chief Surveyor (the Chief Surveyor's Directions).
Basis: `law` · *Source:* Land Survey Act 1980, ss. 3 and 15, as amended by Act No. 2 of 2019.

**Q `which-laws` — Which laws govern surveying in Lesotho?**
- Land Survey Act No. 14 of 1980 — the principal Act
- Land Survey Regulations, 1982
- Land Survey (Amendment) Act No. 2 of 2019 — the current amendment
- Land Act No. 8 of 2010
- Land Administration Authority Act No. 9 of 2010
- The Chief Surveyor's Directions
The Land Survey (Amendment) Act No. 15 of 2012 was **repealed** by the 2019 Act and is no longer in force. Copies are on the [Legislation page](/legislation).
Basis: `law` · *Source:* Act No. 2 of 2019, repeal section.

**Q `who-may-survey` — Who is allowed to carry out a boundary (cadastral) survey?**
Only a "surveyor" — meaning a licensed surveyor, or a public officer authorised by the Chief Surveyor — may survey land to mark out its boundaries for a plan attached to a document that must be registered (for example, a lease or a transfer), or carry out any survey that affects the boundaries or survey marks of land that has been or will be granted under any law. Anyone else who does this commits an offence under section 16 of the Act.
Other survey work, such as topographic, engineering or GIS mapping, is not reserved by the Act. Clients should still use a qualified practitioner, and GIL recommends a practitioner registered in the relevant branch.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 2 and 16.

**Q `when-official` — When is a survey "official"?**
Land is not regarded as surveyed until the plan and the survey have been authenticated by the Chief Surveyor. The licensed surveyor must send all plans, field notes and computations to the Chief Surveyor, and they become the property of the Government. An authenticated plan is conclusive evidence of the survey information on it unless its authentication is cancelled.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 18 and 20–21.

**Q `board-other-branches` — Does the Board license GIS practitioners or engineering surveyors?**
The Land Survey Act provides for licences to practise land surveying. GIL has placed before the Board a framework that also recognises Engineering Surveying and Geographic Information Science (GISc) as branches, each with Professional, Technologist and Technician categories. Whether and how the Board adopts those branches is for the Board to decide. Until then, the licence issued under the Act is a land-surveying licence.
Basis: `position` · *Source:* GIL Categorisation and Transitional Licensing Framework (29 Sep 2026); Land Survey Act 1980, s. 5.

**Q `drones-aerial` — Do I need permission to fly drones or take aerial photographs for mapping?**
Under section 22 of the Land Survey Act, anyone who intends to carry out aerial photography of Lesotho for mapping or similar purposes must give the Chief Surveyor at least one month's written notice. The Chief Surveyor may require the photographs to be kept in Lesotho, inspected, deposited or copied. Aerial photography by or for the Government or a parastatal is official aerial photography.
Drone flights are also subject to Lesotho's civil aviation rules. Check the current requirements with the civil aviation authorities before flying.
Basis: `law` · *Source:* Land Survey Act 1980, s. 22.
`// TODO: [GIL CONTENT] — name the civil aviation authority and link its drone rules once confirmed by the Committee`

---

#### Category: Licensing and registration (`licensing`)

**Q `gil-licences` — Does GIL issue licences?**
No. Licences to practise land surveying are granted by the Land Surveyors' Board under the Land Survey Act. GIL recommends categories and training requirements to the Board, evaluates candidates' practical training (articles), and supports members through the process.
Basis: `law` · *Source:* Land Survey Act 1980, s. 5.

**Q `how-licensed` — How do I become a licensed land surveyor in Lesotho?**
Under the framework GIL has placed before the Board, the standard route is:
- **1. Qualification.** Obtain a recognised qualification in surveying or geomatics for the category you are aiming for (see "What qualification do I need?").
- **2. Candidacy.** Register as a candidate and complete the prescribed period of practical training under the direct supervision of a registered professional in the same branch. Your practical training record (articles) is submitted to and evaluated by GIL.
- **3. Examination.** Pass the examinations the Board prescribes for the standard route (see "How long is the candidacy period?"). There is no examination on the transitional route — see "What is the transitional licensing arrangement?".
- **4. Licence.** The Board grants the licence, enters you in the register of licensed surveyors, and publishes the grant in the Government Gazette.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 3–4; Land Survey Act 1980, ss. 6, 8, 12.

**Q `branches-categories` — What branches and categories are there?**
The framework GIL has placed before the Board has three branches, each with three categories:

| Branch | Professional | Technologist | Technician |
|---|---|---|---|
| Land Surveying | GPr LS | GTg LS | GTc LS |
| Engineering Surveying | GPr ES | GTg ES | GTc ES |
| Geographic Information Science | GPr GISc | GTg GISc | GTc GISc |

Candidates carry the prefix **C** — for example CGPr LS (Candidate Professional Land Surveyor). **Mine Surveying** has not been adopted yet; it will be taken up separately.
These designations describe registration categories. They are different from the nine GIL **membership** categories (see [Membership](/membership)).
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 2.

**Q `qualification-needed` — What qualification do I need for each category?**

| Category | Academic requirement | Examples of recognised qualifications |
|---|---|---|
| Professional (GPr) | A 4-year professional Bachelor's degree in the branch (NQF 8), or an equivalent qualification certified by GIL. For GISc: a 4-year Bachelor's degree or a GISc qualification at NQF 7 or above. | BSc Geomatics (University of Cape Town); BSc Land Surveying (University of KwaZulu-Natal); equivalent 4-year surveying degrees; accredited GISc degrees |
| Technologist (GTg) | A National Diploma plus a B-Tech, or a 3-year Bachelor's degree in the branch (NQF 6→7) | Bachelor of Geomatics (Cape Peninsula University of Technology); National Diploma + B-Tech Surveying (Tshwane University of Technology); B-Tech Cartography (for GISc) |
| Technician (GTc) | A National Diploma in the branch (NQF 6) | National Diploma: Surveying (CPUT) and equivalents; National Diploma: Cartography (for GISc) |

In Land Surveying and Engineering Surveying, the qualification **must be in surveying or geomatics**. A qualification in another field — for example civil engineering — does not qualify for licensing in either branch, whatever the years of practice.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 3.

**Q `candidacy-length` — How long is the candidacy (practical training) period?**

| Category | Practical training | Examination |
|---|---|---|
| Professional Land Surveyor | 300 working days. 150 are compulsory: cadastral surveys of new townships 15; cadastral surveys of existing properties 30; control survey network 15; town planning and conveyancing 20; sectional title 15; engineering surveys 25; Chief Surveyor's office 30. The other 150 days are in at least two elective categories. | Three law and professional practice papers, 65% pass mark in each |
| Professional Engineering Surveyor | 300 working days across engineering, construction, topographic, deformation and set-out surveys, with compulsory control-survey and office-practice components. The detailed split is to be confirmed with the Board. | One law and professional practice paper, 65% |
| Professional GISc Practitioner | 260 working days. 120 are compulsory in cartography and geospatial information management; the other 140 across at least three categories, at least 10 days in each. | Two law and professional practice papers, 65% in each |
| Technologist and Technician categories | A candidacy period under a registered professional in the branch, of a length set by the Board on GIL's recommendation | One law and professional practice paper, 65% |

All candidacy is served under the direct supervision of a registered professional in the same branch.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 4.

**Q `transitional` — What is the transitional licensing arrangement?**
For several years Lesotho had no functioning Land Surveyors' Board, so graduates who entered practice had no way to become licensed. GIL has adopted a **once-off** transitional arrangement for them.
**Who is covered:** members who hold a recognised surveying qualification, are not licensed, and graduated **in or before 2025**.
**What it requires:**
- Six months' probation (about 120 working days) of extensive practical training under a licensed surveyor, across all land-survey streams: cadastral 45 days, control 15, engineering 25, topographic and mapping 15, town planning and conveyancing 10, office practice and lodgement 10 (indicative minimums).
- A letter of recommendation from the supervising licensed surveyor at the end of the probation.
**There is no examination on this route.** Competence is shown through the supervised practice itself and confirmed in the letter of recommendation; the legislation and the Chief Surveyor's Directions are covered within the training.
**Outcome:** a Professional receives a licence with full scope. A Technologist or Technician receives a licence restricted to the transitional scope: own cadastral work only, may sign only their own work, may not sign for anyone else, and may not take graduates in training.
The arrangement is not available to anyone who graduates after 2025.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 5.

**Q `graduated-2026` — I graduated in 2026 or later. Which route do I follow?**
The standard route: a recognised qualification, the full candidacy period for your category under a registered professional in the same branch, articles evaluated by GIL, and the examinations the Board prescribes. The transitional arrangement does not apply to you.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 4 and 5.2.

**Q `experience-category` — Can my years of experience move me into a higher category?**
No. Your category — Professional, Technologist or Technician — is set by your academic qualification. Years of practice are recognised through the transitional requirements, but they do not lift a practitioner into a higher category. To move up, you need the qualification for that category.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 5.2.

**Q `foreign-registration` — I am registered with SAGC (or in another country). Can I practise in Lesotho?**
Registration outside Lesotho does not by itself authorise you to carry out the boundary surveys that the Land Survey Act reserves for licensed surveyors. For that you need a licence from the Land Surveyors' Board. Your foreign registration, qualifications and logged practical training are useful evidence when you apply.
GIL is seeking a formal liaison with the South African Geomatics Council, including mutual recognition of qualifications and CPD. No mutual-recognition agreement is in place yet.
Basis: `guidance` · *Source:* Land Survey Act 1980, ss. 6 and 16; GIL Constitution (draft) — regional and international liaison.

**Q `dual-branch` — Can I be registered in more than one branch?**
Yes, where your qualification supports it. For example, a 4-year geomatics degree with surveying specialisation can make a graduate eligible as a Professional Land Surveyor and a Professional Engineering Surveyor, and — where the transcript shows enough GIScience content — as a Professional GISc Practitioner, subject to a separate GISc candidacy. The rules and fees for registration in more than one branch are still to be decided.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 7–8.

**Q `rpl` — Is there a recognition of prior learning (RPL) route?**
In the **GISc** branch, yes: practitioners whose qualifications pre-date GIS as a taught subject can be assessed individually against their documented GIS practice. In **Land Surveying** and **Engineering Surveying**, no: a qualification in surveying or geomatics is required.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 3 and 8.

---

#### Category: Does my qualification count? (`qualifications`)

**Q `how-assessed` — How does GIL assess my qualification?**
Send certified copies of your certificates and your **full academic transcripts**. GIL looks at the subject content and the level (NQF) of each qualification against the requirement for each branch and category. Transcripts matter most for GISc, where eligibility depends on the GIScience content of your studies.
Qualifications from outside Lesotho are assessed for equivalence; a SAQA evaluation helps for South African and other foreign qualifications. The GIL Constitution provides for a list of accredited institutions — Lerotholi Polytechnic and institutions with SAQA-equivalent qualifications — reviewed every three years.
Basis: `guidance` · *Source:* GIL Framework (29 Sep 2026); GIL Constitution (draft) — accredited institutions.

**Q `qual-surveying-levels` — I have a surveying or geomatics qualification. Where do I fit?**
- National Diploma in Surveying → Technician (GTc)
- National Diploma + B-Tech Surveying → Technologist in Land Surveying (GTg LS); in Engineering Surveying this route is a professional pathway (GPr ES)
- 3-year Bachelor of Geomatics → Technologist (GTg)
- 4-year BSc Geomatics / BSc Land Surveying / BSc Surveying → Professional (GPr)
Your membership category is separate: see [Membership](/membership).
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 3 and 7.

**Q `qual-cartography-gis` — I have a qualification in cartography, GIS or remote sensing.**
These lead to the **GISc** branch. A National Diploma in Cartography is a Technician-level qualification (GTc GISc) and a B-Tech in Cartography a Technologist-level one (GTg GISc). A 4-year Bachelor's degree or a GISc qualification at NQF 7 or above (for example an Honours or Master's degree in GIS or remote sensing) can meet the Professional (GPr GISc) requirement, subject to assessment. These qualifications do not lead to a land-surveying licence.
You can join GIL as a **GIS Practitioner Member** if you are actively practising.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 3; GIL Constitution (draft), membership.

**Q `qual-civil` — I am a civil engineer (or engineering technician). Can I be licensed as a surveyor?**
Not in Land Surveying or Engineering Surveying. Both branches require a qualification in surveying or geomatics, whatever your years of survey practice. You are welcome to join GIL as an **Associate Member**. If your studies included substantial GIS content, a GISc assessment is possible from your transcripts.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 3, 7 and 9.

**Q `qual-geology` — I am a geologist or earth scientist (including geo-resources). Can I join or be licensed?**
You can join. The category that fits most directly is **Associate Member**. If your studies included substantial GIS, remote sensing or spatial analysis and you practise geospatial work, you may qualify as a **GIS Practitioner Member**.
For licensing, a geology qualification does not meet the requirement for Land Surveying or Engineering Surveying. The realistic route is GISc, assessed from your transcripts. Mine Surveying, when it is introduced, will require a mine-surveying qualification.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026); GIL Constitution (draft), membership.

**Q `qual-geography` — I studied geography, environmental science or a related field.**
If your studies included GIS, remote sensing or spatial analysis, you may be eligible for the **GISc** branch, assessed from your transcripts, and to join as a **GIS Practitioner Member** if you practise geospatial work. These qualifications do not lead to a land-surveying licence. Otherwise you can join as an **Associate Member**.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026); GIL Constitution (draft), membership.

**Q `qual-planning` — I am a town planner.**
Town planners work closely with land surveyors on layouts, subdivisions and servitudes, and are welcome to join GIL as **Associate Members** — or as **GIS Practitioner Members** if they practise geospatial work. A planning qualification does not lead to a land-surveying licence; GISc eligibility depends on the GIScience content of your studies.
Basis: `guidance` · *Source:* GIL Constitution (draft), membership; GIL Framework (29 Sep 2026).

**Q `qual-other-surveyor` — I am a quantity surveyor, building surveyor, valuer or architect. Is that "surveying"?**
Not in the sense of the Land Survey Act. These are separate professions with their own bodies, even where the title includes "surveyor". They do not lead to a land-surveying licence. Allied professionals are welcome to join GIL as **Associate Members**.
Basis: `guidance` · *Source:* Land Survey Act 1980; GIL Constitution (draft), membership.

**Q `qual-it` — I work in IT, computer science or data science with spatial data.**
If you are actively practising in the geospatial field, you can apply as a **GIS Practitioner Member**. Registration in the GISc branch depends on the GIScience content of your qualification, assessed from your transcripts.
Basis: `guidance` · *Source:* GIL Constitution (draft), membership; GIL Framework (29 Sep 2026).

**Q `qual-short-courses` — Do short courses, drone-pilot certificates or GIS certificates count?**
They do not on their own meet the academic requirement for any registration category. They do count towards CPD, and they support your application as evidence of practice. Whether a certificate is a "recognised qualification" for GIS Practitioner membership is decided by the Committee case by case.
Basis: `guidance` · *Source:* GIL Framework (29 Sep 2026); GIL Constitution (draft), CPD.

**Q `qual-masters` — I have a Master's degree but my first degree is not in surveying.**
For **Land Surveying** and **Engineering Surveying**, the requirement is a qualification in surveying or geomatics; a Master's degree in another field does not meet it. A surveying Master's built on a non-surveying first degree is assessed individually for equivalence. For **GISc**, a GISc qualification at NQF 7 or above can meet the Professional requirement.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), s. 3.

---

#### Category: Membership (`membership`)

**Q `who-can-join` — Who can join GIL?**
Anyone who meets one of the nine membership categories:

| Category | Who it is for | Voting |
|---|---|---|
| Honorary Life Member | Nominated by the Committee and elected by a two-thirds majority of members | Yes |
| Fellow (FLGI) | A Professional Member with at least 10 years' continuous membership and distinguished contribution to the profession | Yes |
| Professional Member (PLGI) | A licensed land surveyor registered under the Land Survey Act | Yes |
| Technologist Member | A recognised National Diploma or equivalent in surveying or geomatics; registered with the relevant authority or practising under a Professional Member | Yes |
| GIS Practitioner Member | A recognised qualification in GIS, geospatial science or a related field, and actively practising | Yes |
| Graduate Member | A recognised degree in land surveying, geomatics, GIS or a related discipline, completing training towards professional registration | No |
| Associate Member | An allied professional whose qualifications or experience benefit the Institute; admitted at the Committee's discretion | No |
| Retired Member | A former active member in good standing who has retired from full-time practice | Yes |
| Student Member | Enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline | No |

Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6.7.
`// TODO: [GIL CONTENT] — designatory letters (FLGI / PLGI) still reflect the old "LGI" name; update when the Committee confirms GIL designations`

**Q `which-category` — Which membership category is right for me?**
- Licensed land surveyor → Professional Member
- Surveying or geomatics graduate in training → Graduate Member
- National Diploma (or equivalent) in surveying, practising → Technologist Member
- Practising in GIS or geospatial science → GIS Practitioner Member
- Allied professional (engineering, geology, planning, law, conveyancing …) → Associate Member
- Studying → Student Member
If you are unsure, apply and the Committee will place you in the right category.
Basis: `guidance` · *Source:* GIL Constitution (draft), Art. 6.7.

**Q `licence-to-join` — Do I need to be licensed to join?**
No. Only the Professional Member category requires a licence. Every other category is open to unlicensed practitioners, graduates, students and allied professionals who meet its criteria.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6.7.

**Q `how-apply` — How do I apply?**
- Download the [membership application form](/docs/gil-membership-application-form.pdf) ([Word version](/docs/gil-membership-application-form.docx)).
- Have it signed by a proposer and a seconder who are subscribed members. You may propose yourself.
- Attach certified copies of your certificates, full academic transcripts and any professional registration.
- Submit it in duplicate to the Secretary with the registration fee.
- The Committee decides complete applications within 30 days and replies in writing. A refused applicant may appeal to the Committee within 30 days.
- Membership starts on written acceptance and payment of the annual subscription.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6.4 and 6.8.

**Q `fees` — How much does membership cost?**
Registration fees and annual subscriptions for each category are set by resolution at the Annual General Meeting and published by the Committee. Contact the Secretary for the current schedule. Members facing genuine financial hardship may apply in confidence for a fee deferral or reduction.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 7.3.
`// TODO: [GIL CONTENT] — publish amounts only after the AGM approves the fee schedule`

**Q `voting` — Which members can vote?**
Honorary Life, Fellow, Professional, Technologist, GIS Practitioner and Retired Members have full voting rights. Graduate, Associate and Student Members do not vote. An Associate Member can qualify for voting membership after one year of active probationary membership, once the Committee has found them competent.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6.

**Q `benefits` — What do I get from membership?**
- CPD events, workshops and technical sessions
- Contact with practising surveyors and geospatial professionals across Lesotho
- The Young Surveyors Chapter for graduates and early-career members
- A voice in the profession's standards and in GIL's recommendations to the Land Surveyors' Board
- Access to the Bursary and Professional Development Fund, once it is running
Basis: `constitution` · *Source:* GIL Constitution (draft).

**Q `good-standing` — How do I keep my membership in good standing?**
Pay your annual subscription on time, meet your CPD requirement, follow the Code of Ethics, and — if you are licensed — keep your licence from the Land Surveyors' Board valid. Membership can end if dues are unpaid three months after the close of the financial year (after written notice). Reinstatement requires the outstanding dues plus 10% interest.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6 — termination and maintenance of membership.

**Q `students` — I am a student. Can I join?**
Yes, as a Student Member if you are enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline. Student Members pay the student fee, are exempt from CPD, and can take part in the Young Surveyors Chapter.
Basis: `constitution` · *Source:* GIL Constitution (draft), Art. 6 and CPD article.

---

#### Category: Candidacy, training and mentorship (`training`)

**Q `find-supervisor` — How do I find a supervisor for my candidacy?**
Your supervisor must be a registered professional in the same branch. Lesotho currently has only two licensed land surveyors, and eleven candidate surveyors are expected to be licensed by March 2027, so supervision capacity will grow over the coming year. Write to the Secretary and the Committee will help link you with a supervisor.
Basis: `guidance` · *Source:* GIL Framework (29 Sep 2026), s. 4; profession status, October 2026.

**Q `who-supervise` — Who is allowed to supervise candidates?**
A registered professional in the same branch. Under the transitional arrangement, a Professional who receives a licence may supervise graduates in training. A Technologist or Technician licensed under the transitional arrangement may **not** take graduates in training.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 4 and 5.5.

**Q `articles` — What are "articles"?**
Articles are the record of your practical training as a candidate: the work you did, in which category, for how many days, under whose supervision. Your supervisor records the actual time in each category, and the record is submitted to and evaluated by GIL before you apply for registration.
Basis: `position` · *Source:* GIL Framework (29 Sep 2026), ss. 4–5.

**Q `mentorship` — I am not a surveying graduate. How can I gain practical experience and mentorship?**
- Attend GIL's CPD events and technical sessions.
- Join the Young Surveyors Chapter if you are a graduate or early in your career.
- Ask the Committee to introduce you to members in private practice or government who may host attachments or job-shadowing. These are arranged case by case and depend on members' capacity.
- Take part in the Technology and Innovation Sub-committee's work on drones, LiDAR and GNSS.
Attachments and shadowing build practical skills, but they count as candidacy towards a licence only if you hold a qualifying academic qualification.
Basis: `guidance` · *Source:* GIL Constitution (draft) — sub-committees and Young Surveyors Chapter; GIL Framework (29 Sep 2026).

**Q `bursaries` — Does GIL offer bursaries?**
The GIL Constitution provides for a Bursary and Professional Development Fund. Details will be announced when it is established.
Basis: `constitution` · *Source:* GIL Constitution (draft).
`// TODO: [GIL CONTENT] — add criteria and application dates when the Fund opens`

---

#### Category: CPD and conduct (`cpd`)

**Q `cpd-hours` — How much CPD do I need?**

| Category | Minimum CPD per calendar year |
|---|---|
| Professional Member | 25 hours |
| Technologist Member | 20 hours |
| GIS Practitioner Member | 20 hours |
| Graduate Member | 10 hours (encouraged, not compulsory) |
| Student Member | Exempt |

At most 60% may be structured CPD and at least 40% unstructured. Keep a record and submit it by 31 March of the following year. Failing the requirement for two consecutive years can lead to suspension of voting membership. See [CPD](/cpd).
Basis: `constitution` · *Source:* GIL Constitution (draft), CPD article.

**Q `cpd-what-counts` — What counts as CPD?**
- **Structured CPD** — formal courses, workshops and conferences with verifiable outcomes.
- **Unstructured CPD** — self-directed study, technical reading and mentoring.
The CPD Committee accredits activities and reviews records.
Basis: `constitution` · *Source:* GIL Constitution (draft), CPD article.

**Q `indemnity` — Do I need professional indemnity insurance?**
Professional indemnity cover is a condition of Professional Membership of GIL. The licensed surveyor is responsible in law for the correctness and completeness of every survey done by them or under their supervision.
Basis: `constitution` · *Source:* GIL Constitution (draft); Land Survey Act 1980, s. 14.

**Q `discipline` — What happens if a surveyor is accused of misconduct?**
There are two separate processes:
- **The Land Surveyors' Board** can inquire into a licensed surveyor's professional misconduct. The surveyor has the right to be heard, in person or with legal counsel. The Board may revoke the licence, suspend it for up to three years, impose a fine, or reprimand. An aggrieved surveyor may appeal to the High Court within two months.
- **GIL** deals with breaches of its constitution and Code of Ethics by its members through its Disciplinary Committee: the member has 21 days to respond, the inquiry is completed within 60 days, and an appeal can be lodged within 30 days.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 9–11; GIL Constitution (draft), discipline article.

---

#### Category: For the public and clients (`public`)

**Q `need-licensed` — Do I need a licensed surveyor?**
Yes, for any survey that marks out land boundaries for a lease, a transfer, a subdivision or any other document that must be registered, and for any survey that affects boundaries or survey marks. The law reserves this work for licensed surveyors and authorised public officers.
For topographic, engineering, construction set-out or GIS mapping work, the law does not require a licence, but you should still use a qualified practitioner.
Basis: `law` · *Source:* Land Survey Act 1980, s. 16.

**Q `check-licensed` — How can I check whether a surveyor is licensed?**
The Land Surveyors' Board keeps a register of licensed surveyors, and every grant, suspension or revocation of a licence is published in the Government Gazette. You can also ask GIL.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 8 and 12.
`// TODO: [GIL CONTENT] — link to a public register page if the Board agrees to publish one`

**Q `complaint` — How do I complain about a surveyor?**
- About **professional misconduct** by a licensed surveyor: write to the Land Surveyors' Board.
- About a **fee dispute** with a licensed surveyor: the Board hears and decides disputes over fees.
- About a **GIL member's conduct**: write to the GIL Secretary. GIL has a public complaints procedure and publishes summaries of outcomes.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 5 and 9; GIL Constitution (draft), public complaints procedure.

**Q `beacons` — Someone has moved or destroyed a boundary beacon. What can I do?**
Moving, hiding, damaging or destroying a survey mark that was lawfully placed is an offence under the Land Survey Act. Report it, and engage a licensed surveyor to re-establish the beacon from the authenticated survey records held by the Chief Surveyor.
Basis: `law` · *Source:* Land Survey Act 1980, s. 17(4).

**Q `entry-land` — Can a surveyor come onto my land?**
Yes. The Chief Surveyor, persons authorised by the Chief Surveyor, and surveyors may enter land, with assistants and equipment, to carry out their duties under the Act and place survey marks. If they cause damage that could have been avoided, the owner or occupier can claim compensation — but the claim must be made within two months of the damage. Disagreements over the amount are referred to a magistrate.
Basis: `law` · *Source:* Land Survey Act 1980, s. 17.

**Q `survey-records` — How do I get copies of survey plans or maps?**
The Chief Surveyor keeps all survey records and issues certified copies of public plans, maps and documents on request, for the prescribed fee. Before any survey, a licensed surveyor obtains the information on previous surveys of the land and neighbouring land from the Chief Surveyor.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 3 and 15(2).

**Q `defective-survey` — Who is responsible if a survey is wrong?**
The licensed surveyor is responsible for the correctness and completeness of every survey they carry out or supervise. The Government and public officers are not liable for a defective survey by a licensed surveyor, even if the plan has been authenticated. The Chief Surveyor can require the surveyor to correct an error at their own expense and can cancel the authentication of an inaccurate plan.
Basis: `law` · *Source:* Land Survey Act 1980, ss. 14, 19 and 21, as amended by Act No. 2 of 2019.

**Q `leases` — Where do I go for a lease or land registration?**
Leases and land registration are handled by the Land Administration Authority (LAA) under the Land Act 2010 and the Land Administration Authority Act 2010. The boundary survey and plan for a lease must be done by a licensed surveyor and authenticated by the Chief Surveyor.
Basis: `law` · *Source:* Land Act No. 8 of 2010; LAA Act No. 9 of 2010; Land Survey Act 1980, ss. 16 and 20.

---

## Task 1 — FAQ data file

**Prompt**
```
Create src/data/faq.ts containing the FAQ content from Section 0 of
GIL-Website-FAQ-Instructions.md.
1. Export these types:
   type FaqBasis = "law" | "constitution" | "position" | "guidance"
   type FaqCategoryId = "about" | "board" | "licensing" | "qualifications" | "membership" | "training" | "cpd" | "public"
   interface FaqCategory { id: FaqCategoryId; label: string }
   type FaqBlock =
     | { type: "p"; text: string }
     | { type: "ul"; items: string[] }
     | { type: "table"; head: string[]; rows: string[][] }
   interface FaqItem { id: string; category: FaqCategoryId; question: string; answer: FaqBlock[]; basis: FaqBasis; source: string }
2. Export FAQ_CATEGORIES (Section 0.3, same order), FAQ_BASIS_LABELS (Section 0.2: key -> badge text),
   FAQ_ITEMS (every Q in Section 0.4, in order, with the exact id, question, answer, basis and source),
   FAQ_LAST_REVIEWED = "19 October 2026", and FAQ_DISCLAIMER (Section 0.1).
3. Inside text, keep **bold** and [label](/path) markdown exactly as written — Task 2 renders them.
   Keep curly apostrophes out; use straight ' and the en dash – / em dash — as written.
4. Copy the `// TODO: [GIL CONTENT]` notes as comments next to the matching item.
5. Add a plain-text helper faqItemToPlainText(item) that flattens an answer (strip ** and markdown links
   to their label, join table rows with " | ") for search and JSON-LD.
Do not paraphrase any answer.
```
**Check:** item count equals the number of `**Q` entries in Section 0.4 (62):
`grep -c '^\*\*Q `' GIL-Website-FAQ-Instructions.md` and compare with `FAQ_ITEMS.length`.

---

## Task 2 — FAQ components

**Prompt**
```
Create src/components/faq/ with these client components, styled to match the existing site
(navy/gold/green tokens, font-display headings, font-sans body, rounded-xl cards, border-border):

1. RichText.tsx — renders a string with **bold** and [label](/path) links. Internal paths use next/link;
   /docs/... links open in a new tab; mailto: links stay normal anchors. No dangerouslySetInnerHTML.

2. FaqAnswer.tsx — renders FaqBlock[]: "p" -> <p>, "ul" -> <ul> with gold bullet markers,
   "table" -> a responsive table in an overflow-x-auto wrapper (header row in primary/10 background,
   text-sm). Below the answer: a basis badge (Section 0.2 colours) and "Source: …" in text-xs muted text.

3. FaqAccordionItem.tsx — one question. Use a <button> with aria-expanded and aria-controls, the panel
   with role="region" and aria-labelledby. The item's wrapper has id={item.id} and scroll-mt-28 so
   /faq#id deep links land below the sticky navbar. Chevron rotates on open; animate height with
   framer-motion AnimatePresence (respect prefers-reduced-motion via useReducedMotion). Add a small
   "Copy link" icon button (lucide Link2) that copies `${location.origin}/faq#${id}` and shows
   "Copied" for 2 seconds.

4. FaqContent.tsx — the page body:
   a. Disclaimer box at the top (gold left border, FAQ_DISCLAIMER) and "Last reviewed: 19 October 2026".
   b. A search input (label "Search questions", placeholder "Search — e.g. licence, geology, CPD, beacon")
      that filters on question + faqItemToPlainText(answer), case-insensitive, all words must match.
   c. Category filter chips: "All" + FAQ_CATEGORIES, each showing its count; aria-pressed on the active chip.
      The selected category is kept in the URL as ?category=<id> (use useSearchParams + router.replace,
      scroll: false) so it can be shared. Wrap the part that reads search params in <Suspense>.
   d. Results grouped under category headings (SectionLabel + heading) when "All" is selected;
      a flat list otherwise. Show "N questions" result count with aria-live="polite".
   e. Empty state: "No questions match your search." plus a button to clear the search.
   f. On load, if location.hash matches an item id, open that item, select "All", and scroll to it.
   g. Footer of the page: the "Didn't find your answer?" box from Section 0.1, then the disclaimer again.
Use AnimatedSection for section reveal like the other pages. Keyboard-test: Tab reaches every chip and
question; Enter/Space toggles.
```

---

## Task 3 — The `/faq` route, metadata and structured data

**Prompt**
```
Create src/app/faq/page.tsx following the pattern of src/app/cpd/page.tsx:
- metadata: title "Questions & Answers", description = Section 0.1 meta description,
  alternates.canonical "/faq", openGraph { title "Questions & Answers | GIL", description (same), url "/faq" }.
- Render <PageHero title="Questions & Answers" subtitle="Membership, licensing, qualifications and
  surveying in Lesotho — answered" breadcrumbs={[{label:"Home",href:"/"},{label:"FAQ"}]} /> then <FaqContent />.
- Add schema.org FAQPage JSON-LD in a <script type="application/ld+json"> built from FAQ_ITEMS:
  mainEntity = each item as { "@type":"Question", name: question,
  acceptedAnswer: { "@type":"Answer", text: faqItemToPlainText(item) } }.
  Render it in the server component (page.tsx), not in the client component.
```

---

## Task 4 — Navigation, footer and sitemap

**Prompt**
```
1. src/components/layout/Navbar.tsx: add { href: "/faq", label: "FAQ" } between CPD and News in the
   links array (desktop and mobile both read from it — confirm). Check the desktop nav still fits at
   1024px and 1280px; if it wraps, reduce horizontal gap rather than dropping links.
2. src/components/layout/Footer.tsx: add { href: "/faq", label: "FAQ" } to quickLinks after CPD.
3. public/sitemap.xml: add a <url> for /faq (changefreq monthly, priority 0.8) using the SAME base URL as
   the existing entries. Do not change the base URL here.
```

---

## Task 5 — Cross-links from other pages

**Prompt**
```
Add short "Common questions" links so visitors land on the right answer. Use next/link to /faq#<id>.
1. src/components/membership/MembershipContent.tsx — under the categories grid, a row of links:
   "Which category is right for me?" (#which-category), "Do I need to be licensed to join?" (#licence-to-join),
   "Does my qualification count?" (/faq?category=qualifications), "How much does membership cost?" (#fees).
2. src/components/legislation/LegislationContent.tsx — near the top: "Who may carry out a boundary survey?"
   (#who-may-survey), "Is GIL the same as the Land Surveyors' Board?" (#gil-vs-board),
   "Do I need permission to fly drones for mapping?" (#drones-aerial).
3. src/components/cpd/CPDContent.tsx — "How much CPD do I need?" (#cpd-hours), "What counts as CPD?" (#cpd-what-counts).
4. src/components/contact/ContactContent.tsx — above the form: "Before you write, see our Questions & Answers"
   linking to /faq.
5. src/components/home/MembershipCTA.tsx — a secondary text link "Questions about joining or licensing? Read the FAQ" -> /faq.
Keep the styling consistent with existing secondary links on each page.
```

---

## Task 6 — Correct the branch list on the Membership page

**Prompt**
```
In src/components/membership/MembershipContent.tsx, BRANCHES currently lists
["Land Surveying", "GISc", "Mine Surveying", "Engineering Surveying"]. The framework GIL has placed before
the Board has three branches; Mine Surveying is not yet adopted. Change it to
["Land Surveying", "Engineering Surveying", "GISc"] and, where the branches are displayed, add a one-line
note: "Mine Surveying is not yet adopted and will be taken up separately." Also check the sentence near
line 364 that mentions Engineering Surveying reads correctly after the change.
```

---

## Task 7 — Build and look at it

**Prompt**
```
Run npm run lint and npm run build and fix any errors. Then run npm run dev and check /faq at 375px,
768px and 1280px widths:
- search "geology" shows the geologist answer; search "beacon" shows the beacon answer;
- the "Does my qualification count?" chip shows 11 questions and updates the URL to ?category=qualifications;
- /faq#transitional opens and scrolls to the transitional arrangement answer;
- every table scrolls horizontally on mobile instead of overflowing the page;
- no horizontal page scroll at 375px.
Validate the JSON-LD by copying it into https://validator.schema.org (manual step — tell me the result
is for me to check).
```

---

## Task 8 — Update CONTENT-NEEDED.md

**Prompt**
```
Add a "FAQ page" section to CONTENT-NEEDED.md listing every `TODO: [GIL CONTENT]` added in Tasks 1–6
(civil aviation authority for drones; GIL designatory letters; fee schedule; Bursary Fund details;
public register link), marked "for the next AGM" where listed so in "Notes for the Committee" below,
and the items still open.
```

---

## Verify (tick each before pushing)

- [ ] `/faq` builds statically and appears in the navbar (desktop + mobile) and footer
- [ ] 62 questions in 8 categories (About 6, Board 8, Licensing 11, Qualifications 11, Membership 9, Training 5, CPD 4, Public 8); chip counts add up to 62
- [ ] No answer text differs from Section 0 (spot-check 10 at random)
- [ ] Every answer shows a basis badge and a Source line
- [ ] Disclaimer appears at top and bottom; "Last reviewed: 19 October 2026" shown
- [ ] Deep links (`/faq#id`) and `?category=` work and survive a refresh
- [ ] Search, chips and accordion are keyboard-operable; focus ring visible
- [ ] No "Lesotho Geomatics Institute", "LGI" (except the TODO on designatory letters), "Council" for the Board, or "Act No. 15 of 2012 … in force" anywhere:
  `git grep -n -e "Lesotho Geomatics Institute" -e "Surveyors Council" -e "Land Surveyors' Council" src`
- [ ] Membership page branches read Land Surveying · Engineering Surveying · GISc
- [ ] `npm run build` passes with no type errors

## Commit

```
git add -A
git commit -m "Add Questions & Answers page (/faq) with membership, licensing, qualification and public FAQs"
git push
```

---

## Notes for the Committee

### Resolved by the Committee (19 October 2026)

1. **Transitional route — no examination.** Confirmed: the transitional route has no examinations. Only the
   six months' probation, with extensive practice under licensed surveyors, applies. The FAQ says so in the
   `transitional` and `how-licensed` answers. (Section 6 of the Act lets the Board prescribe the examination;
   the Board's adoption of the framework is the record that the supervised probation stands in its place.)
2. **Board chair.** Confirmed: Mr Pheello Ramotubei is the Chief Surveyor and therefore chairs the Land
   Surveyors' Board. He is named in the `what-is-board` answer.

### For the next AGM

3. **Fees** — approve the fee schedule (Art. 7.3); then publish amounts in the `fees` answer and on the Membership page.
4. **Designatory letters** — decide the GIL designations to replace FLGI / PLGI (e.g. FGIL / PGIL); update the
   constitution and the `who-can-join` answer together.
5. **Drones** — confirm the civil aviation authority and its drone permit rules; link them in the `drones-aerial` answer.
6. **Public register** — agree with the Board whether the register of licensed surveyors (s. 8) is published on
   the website; link it in the `check-licensed` answer.

### Still open

7. **Board terms.** The 2019 amendment copy on file is partly illegible on members' terms of office, so the FAQ
   does not state them. Confirm from a clean Gazette copy.
8. **Standard-route examinations.** The standard route (2026+ graduates) still carries law and professional practice
   papers at 65%. If the Board cannot yet set them, revise the `candidacy-length` answer.
9. **Sitemap domain.** `public/sitemap.xml` still uses `https://www.llsa.org.ls`; update it when the production
   domain is settled.
10. **Review cycle.** Re-read the FAQ after each Board decision and each AGM, and update "Last reviewed".
