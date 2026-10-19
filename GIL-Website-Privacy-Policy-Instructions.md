# GIL website — Privacy Policy page — instructions for VS Code

**Prepared:** 19 October 2026  **Policy:** Version 1.0 — adopted by the GIL Committee on 19 October 2026
**Applies to:** `llsa-website/` (Next.js 15, TypeScript, Tailwind, Framer Motion)
**Builds on:** `GIL-Website-FAQ-Instructions.md` (reuses `src/components/faq/RichText.tsx`)

The footer already links to **Privacy Policy** (`/privacy-policy`), but the page returns 404
(CONTENT-NEEDED.md item 44). This file adds the page with the Institute's adopted Privacy Policy,
short privacy notices on the contact form and the Membership page, and the updated membership
application form, which now carries the data protection consent the policy relies on.

The policy is written for Lesotho's **Data Protection Act, 2011 (Act No. 5 of 2012)**; each section
shows the relevant section of the Act.

## How to use this file

1. Open the `llsa-website` folder in VS Code.
2. Open Claude Code (or GitHub Copilot Chat in Agent mode).
3. Paste the **Master prompt** below. It runs Tasks 1–8 in order.
   If you prefer to go step by step, paste each task's **Prompt** box instead.
4. Review each change, run the checks in **Verify**, then commit.

> **Rule for every task:** Section 0 is the single source of truth. Copy the policy text as written.
> Do not invent names, periods, section numbers, providers or legal effects. If wording must change to
> fit the UI, change layout only, never meaning. Anything not in Section 0 gets a
> `// TODO: [GIL CONTENT]` comment, not invented text.

---

## Master prompt (paste this once)

```
Read GIL-Website-Privacy-Policy-Instructions.md in full. Then carry out Tasks 1 to 8 in that file, in
order, using ONLY the content in Section 0 as the source of truth for every heading, paragraph, table,
label, legal reference and link. Match the existing code style: PageHero, AnimatedSection, SectionLabel
and GoldDivider in src/components/shared, RichText in src/components/faq, the colour tokens in
tailwind.config.ts, the font-display / font-sans classes, and the metadata pattern in
src/app/cpd/page.tsx. Do not add npm dependencies. After each task run `npm run lint`; after Task 7 run
`npm run build` and fix any errors. Show me a summary of changed files at the end. Do not commit until
I say so.
```

---

## 0. Content (single source of truth)

### 0.1 Page settings

| Item | Value |
|---|---|
| Route | `/privacy-policy` (already linked in the footer — do not rename) |
| Page title (H1 via PageHero) | `Privacy Policy` |
| Subtitle | `How the Geomatics Institute of Lesotho collects, uses and protects personal information` |
| Breadcrumbs | `Home` → `Privacy Policy` |
| Meta description | `How the Geomatics Institute of Lesotho handles personal information from members, applicants and website visitors, in line with Lesotho's Data Protection Act, 2011.` |
| Version | `1.0` |
| Adopted | `By the GIL Committee, 19 October 2026` |
| Effective date | `19 October 2026` |
| Last updated | `19 October 2026` |

**Adoption line** (small box with a green left border, at the top of the policy):

> `Adopted by the Committee of the Geomatics Institute of Lesotho on 19 October 2026. Version 1.0.`

Each section also shows a one-line **Act reference** in small muted text under its heading,
given below as *Act:*. Omit the line where none is given.

### 0.2 At a glance (six cards above the full policy)

| Icon (lucide — use the nearest that exists in the installed version) | Heading | Text |
|---|---|---|
| `ClipboardCheck` | `Only what we need` | `We collect what we need to run membership, answer enquiries, keep CPD records and serve the profession — nothing more.` |
| `Ban` | `Never sold` | `We do not sell, rent or trade personal information.` |
| `Cookie` (fallback `MonitorCheck`) | `No tracking by GIL` | `GIL sets no cookies and runs no analytics or advertising tools. The map on the Contact page comes from Google Maps.` |
| `IdCard` (fallback `ShieldCheck`) | `ID numbers stay private` | `National ID numbers, dates of birth and certificates are never published.` |
| `FileSearch` (fallback `Search`) | `See and correct your record` | `You can ask what we hold about you and have it corrected, free of charge.` |
| `Mail` | `One contact` | `Write to the Information Officer at geomaticsinstitute.ls@gmail.com.` |

### 0.3 The policy

Formatting notes: a blank line = new paragraph; lines starting `-` = bullet list; a markdown table =
responsive table; `**text**` = bold; `[text](/path)` = link (use RichText). Section `id` = anchor
(e.g. `/privacy-policy#your-rights`). Number the headings as shown.

---

#### 1. Who we are and what this policy covers — id `who-we-are`
*Act:* sections 2 and 3

The Geomatics Institute of Lesotho ("GIL", "the Institute", "we") is the voluntary professional body for land surveyors and geospatial professionals in Lesotho. It was founded in April 1997 as the Lesotho Land Surveyors Association (LLSA). For the purposes of the Data Protection Act, 2011, GIL is the **data controller** for the personal information described in this policy.

This policy covers personal information we handle through:
- this website, including the contact form;
- membership applications, records and renewals;
- the professional baseline survey, and the qualification evidence we use to categorise members;
- continuing professional development (CPD) records;
- elections and General Meetings;
- events, training and workshops;
- complaints about a member's professional conduct;
- our email, telephone and social media accounts.

It does not cover the Land Surveyors' Board, the Land Administration Authority, the Chief Surveyor's Office or any other public body. Each decides for itself how it handles personal information, including information we pass to it as described in section 7.

---

#### 2. The law we follow — id `the-law`
*Act:* sections 15–28

We handle personal information in line with the **Data Protection Act, 2011 (Act No. 5 of 2012)** ("the Act") and section 11 of the Constitution of Lesotho, which protects the right to respect for private and family life.

In particular, personal information we hold must be:
- processed lawfully (section 15);
- adequate, relevant and not excessive for its purpose (section 16);
- collected from you directly wherever possible (section 17);
- used only for the purpose it was collected for, or a compatible one (section 18);
- kept no longer than necessary (section 19);
- kept secure, including when a service provider handles it for us (sections 20–22);
- kept accurate and up to date (section 24).

We tell you what we collect and why (section 25), and you can see and correct what we hold (sections 26–27). Where the Act, or regulations made under it, sets a stricter rule than this policy, the Act prevails.

---

#### 3. Information we collect — id `what-we-collect`
*Act:* sections 16 and 17

| When you… | We collect |
|---|---|
| Use the contact form or email us | Your name, email address, organisation (optional), the topic you choose and your message. |
| Apply for membership | Full name; date of birth; national ID or passport number; postal and physical address; phone and email; employer and position; qualifications and the institutions that awarded them; professional registrations and licences (for example, with the Land Surveyors' Board or SAGC); work experience; referees; and copies of certificates, transcripts and proof of registration. |
| Complete the professional baseline survey | The membership details above, plus your district, gender, practice areas, equipment and software, CPD preferences, and your consent answer. |
| Keep up your CPD | Activities, hours, dates, providers and evidence of attendance. |
| Attend an event, training or General Meeting | Name, contact details, membership status, attendance and, where taken, photographs. |
| Vote in an Institute election | Your name and email, to confirm you may vote, and your ballot. |
| Pay fees | Amount, date, payment reference and the name on the payment. We do not hold card or bank account numbers. |
| Make, or are the subject of, a conduct complaint | Details of the complaint, the people involved, the evidence and the outcome. |
| Browse this website | Nothing that identifies you is collected by GIL. Our hosting provider keeps standard technical logs, and Google Maps receives technical information when the Contact page opens — see section 9. |

We collect information from you directly. Sometimes we confirm it with others — for example, by asking a university to confirm a qualification, or checking a professional register — and we tell you when we do.

---

#### 4. Why we use it, and on what basis — id `why-we-use-it`
*Act:* sections 15, 18 and 51

| Purpose | Lawful basis (section 15) |
|---|---|
| Replying to your enquiry | Your consent, given when you write to us, and our legitimate interest in answering questions about the profession. |
| Assessing applications, admitting and categorising members | Steps you ask us to take before membership, and the membership relationship under the GIL Constitution. |
| Keeping the membership roll, collecting fees, sending notices of meetings and renewals | The membership relationship under the GIL Constitution. |
| Recommending your categorisation, candidacy or transitional licensing to the Land Surveyors' Board | Your explicit consent, given on the application form or survey. |
| Keeping CPD records | The membership relationship and the Constitution's CPD rules. |
| Running elections and General Meetings | The GIL Constitution. |
| Handling complaints and disciplinary matters | The GIL Constitution, and our legitimate interest in upholding professional standards and protecting the public. |
| Sending news and event invitations | Your consent (non-members); the membership relationship (members). |
| Keeping accounts and meeting legal duties | Obligations the law places on the Institute. |

We do not use your information for a purpose incompatible with the one we collected it for (section 18). If we want to use it for something new, we will ask you first.

We do not make decisions about you by automated means alone (section 51). Admission and categorisation decisions are made by people.

---

#### 5. Sensitive information — id `sensitive-information`
*Act:* sections 29–36

The Act gives extra protection to information about a person's religious or philosophical beliefs, race or ethnic origin, trade union membership, political affiliation, health, sexual life or criminal behaviour, and to information about children (section 29). We do not ask for any of these.

Two exceptions may arise. If you tell us about access or health needs so that you can attend an event, we use that only to make the arrangement. A complaint about a member's conduct may include an allegation of criminal behaviour; we use it only for the complaint and only as far as the Act allows.

We ask for gender only to report on women's participation in the profession, which the GIL Constitution commits us to promote. We report it only as totals, never for an individual.

---

#### 6. Children — id `children`
*Act:* section 29

This website and GIL membership are intended for adults. We do not knowingly collect information about anyone under 18 without the consent of a parent or guardian. If you believe we have, write to us and we will delete it.

---

#### 7. Who we share it with — id `sharing`
*Act:* sections 21 and 22

We do not sell, rent or trade personal information. We share it only as follows:
- **The Land Surveyors' Board** — when GIL recommends your categorisation, candidacy or transitional licensing, we send the Board what it needs to consider the recommendation: your name, qualifications, experience and the recommended category. We tell you before we do so.
- **Qualification and registration checks** — universities, colleges and professional bodies (for example, SAGC) may be asked to confirm a qualification or registration you have given us.
- **Your supervisor or mentor** — if you are a candidate, your supervising surveyor sees the training records needed to supervise you.
- **Committee and sub-committee members** — only those who need the information for their role (for example, the Treasurer for fees, the CPD sub-committee for CPD records, the Disciplinary sub-committee for a complaint). They must keep it confidential.
- **Service providers** that handle information for us, listed below, on terms that require them to keep it confidential and secure.
- **Authorities**, where the law requires it — for example, under a court order.

| Service provider | What it does for GIL | Where the information is held |
|---|---|---|
| Vercel Inc. | Hosts this website | United States and Vercel's global network |
| Web3Forms | Delivers contact-form messages to the Institute's email | Outside Lesotho |
| Google (Gmail, Google Forms, Google Drive) | Institute email, online surveys and ballots, document storage | United States and other countries |
| LinkedIn | Publishes the Institute's news and event photographs | Outside Lesotho |
| Google Maps | Shows the map on the Contact page | United States and other countries |

**Our reliance on third-party services.** GIL is a voluntary body and does not run its own servers. It relies on established third-party services and tools, including those listed above, to run this website, its email and its records. We choose providers that publish privacy policies, keep the information they handle secure and are committed to lawful and ethical conduct. Each provider is responsible for its own conduct under its own privacy policy and the law that applies to it. The Committee reviews these providers each year, and if a provider no longer meets these standards we will stop using it.

---

#### 8. Information held outside Lesotho — id `outside-lesotho`
*Act:* section 52

Some of the providers in section 7 store information on servers outside Lesotho. Section 52 of the Act allows this only in certain cases. We rely on:
- providers bound by terms that give protection substantially similar to the Act (section 52(a));
- your consent, which we ask for on the membership application form and the survey (section 52(b));
- the transfer being needed to provide the membership services you asked for (section 52(c)).

We keep the most sensitive items — copies of ID documents and certificates — in restricted folders, not in shared folders or email threads.

---

#### 9. This website, cookies and logs — id `website-and-cookies`

- **No cookies from GIL.** GIL does not set cookies on this website and does not use analytics, advertising or tracking tools.
- **Fonts and images** are served from this website, not loaded from other companies' servers.
- **Map on the Contact page.** The map is provided by Google Maps and loads when you open the Contact page. Google receives technical information, such as your IP address and browser type, and may set its own cookies, under [Google's privacy policy](https://policies.google.com/privacy). GIL receives no information from the map. If you prefer not to use Google Maps, the office address is given in writing on the Contact page and in section 17.
- **Hosting logs.** Our host, Vercel, automatically records technical information when a page is requested — such as IP address, browser type, the page and the time — to run and secure the service. GIL does not use these logs to identify visitors.
- **Contact form.** When you press Send, your message passes through Web3Forms to the Institute's email inbox. A hidden spam-check field is included; it holds no personal information.
- **Links to other websites.** Links to LinkedIn, Google Maps, the Government Gazette and other sites take you to services with their own privacy policies. GIL is not responsible for how they handle information.

If GIL adds analytics or any cookie of its own in future, we will update this policy first and, for any cookie that is not strictly necessary, ask for your consent. If we add another third-party service to this website, we will list it in section 7 first.

---

#### 10. Member register and directory — id `member-register`

Whether GIL publishes a register or directory of members on this website goes to the next Annual General Meeting.

If a register is published, it will show only:
- name;
- GIL membership class and designation;
- branch (Land Surveying, Engineering Surveying or GISc);
- membership number and status (for example, current or suspended);
- town or district of practice;
- business contact details, only if the member chooses to show them.

It will **never** show national ID or passport numbers, dates of birth, home addresses, personal phone numbers, certificates or transcripts, CPD records or disciplinary records.

The statutory register of licensed land surveyors is kept by the Land Surveyors' Board under the Land Survey Act, not by GIL.

---

#### 11. Elections, complaints and photographs — id `published-information`

**Elections.** We publish the names of candidates and the number of votes each received. We never publish how an individual member voted.

**Complaints.** Where the GIL Constitution provides for a summary of a complaint's outcome to be published, the summary will not name the person who complained or any witness.

**Photographs.** We may publish photographs of Institute events on this website and on LinkedIn. If you would rather not appear, tell the photographer or the Secretary; we will remove you from photographs we have published if you ask.

---

#### 12. How long we keep it — id `retention`
*Act:* section 19

| Information | How long we keep it |
|---|---|
| Contact-form messages and general emails | 2 years after the last exchange, unless they become part of a membership or complaint record |
| Unsuccessful membership applications | 12 months after the decision |
| Membership records | While you are a member, and 5 years after your membership ends |
| Copies of ID documents, certificates and transcripts | Until your application or categorisation has been decided and any review or appeal is finished; then deleted. We keep a note that they were checked. |
| Professional baseline survey responses | Until the transitional categorisation is complete, and no longer than 24 months after collection; then deleted or de-identified |
| CPD records | 5 years after the end of the CPD year |
| Election ballots | Until the results are confirmed and the time for any challenge has passed. The results are kept permanently. |
| Complaint and disciplinary files | 5 years after the matter closes, or longer while legal proceedings are pending |
| Financial records | As long as accounting and tax law requires |
| Mailing list (non-members) | Until you unsubscribe |

A short historical roll of members — name, membership class and years of membership — is kept permanently as part of the Institute's history, as section 19(2) allows for historical purposes.

When information is no longer needed, we delete or destroy it so that it cannot be reconstructed (section 19(4)–(5)).

---

#### 13. How we protect it — id `security`
*Act:* sections 20–23

- Access to membership records is limited to Committee members and officers who need it for their role.
- Institute accounts use strong passwords and two-step verification.
- Copies of ID documents and certificates are kept in restricted folders and are not sent around by email.
- Paper forms are kept locked at the Institute's office.
- The Committee reviews these safeguards every year.

If we have reason to believe that your information has been accessed by someone not entitled to it, we will tell you and the Data Protection Commission, in writing, as soon as reasonably possible, and say what we are doing about it (section 23).

---

#### 14. Your rights — id `your-rights`
*Act:* sections 15, 26, 27 and 50

- **Ask what we hold.** You may ask, free of charge, whether we hold information about you, and for a copy of it and a list of who it has been shared with (section 26). We will need to confirm your identity first.
- **Correct or delete it.** You may ask us to correct or delete information that is inaccurate, out of date, incomplete, misleading or obtained unlawfully (section 27). We will tell you the outcome within 14 days, and tell anyone we shared it with.
- **Object.** You may object in writing, on compelling legitimate grounds, to how we use your information. Section 15 lets you make that objection to the Data Protection Commission; we will also consider any objection you send to us.
- **Stop news and invitations.** You may tell us at any time to stop sending you news, event invitations or other promotional messages (section 50).
- **Withdraw consent** wherever we rely on it. This does not affect anything we did before you withdrew it.
- **Complain** — see section 16.

To use any of these rights, email the Information Officer (section 17) with "Data request" in the subject line. We aim to reply within 14 days.

Some information must be kept even if you ask us to delete it — for example, financial records, or a disciplinary file while the matter is open. If so, we will explain why.

---

#### 15. Emails and news from GIL — id `communications`
*Act:* section 50

Members receive notices of meetings, renewals, CPD and other Institute business as part of membership. These are not marketing.

We send news, event invitations and newsletters to non-members only if they have asked for them. Every such message tells you how to stop receiving them.

---

#### 16. Complaints — id `complaints`
*Act:* sections 39 and 49

If you are unhappy with how we have handled your information, please write to the Information Officer first, so that we can put it right.

You may also complain to the **Data Protection Commission** established under Part II of the Act (section 39). If the Act has been breached, you may also go to court for damages (section 49).

---

#### 17. Contact the Information Officer — id `contact`

The Secretary of the Institute acts as GIL's Information Officer for this policy.

| | |
|---|---|
| Email | [geomaticsinstitute.ls@gmail.com](mailto:geomaticsinstitute.ls@gmail.com?subject=Data%20request) — subject "Data request" |
| Phone | +266 6234 9190 |
| Office | Geomatics Institute of Lesotho, c/o Chief Surveyor's Office, Ministry of Local Government and Chieftainship, Maseru, Lesotho |

---

#### 18. Changes to this policy — id `changes`

We review this policy at least once a year, and whenever our practices change. The version and "Last updated" date at the top show when it last changed. We will tell members about significant changes by email and on this website.

---

### 0.4 Short notices for other pages

**Contact form** — one line in `text-xs text-muted-foreground`, directly under the Send button:

> `We use your details only to reply to your message. See our [Privacy Policy](/privacy-policy).`

**Membership page** — under the "how to apply" steps, a small note box:

> `**Your information.** We use the details and documents in your application to assess it, keep your membership and CPD records and, if you ask us to, support your categorisation with the Land Surveyors' Board. ID numbers and certificates are never published. [Read our Privacy Policy](/privacy-policy#what-we-collect).`

### 0.5 Updated membership application form

The form's declaration (section J) now carries the consent the policy relies on (policy sections 4, 7 and 8).
Item 4 previously consented to "name, category and district appearing in the published membership register";
that conflicted with policy section 10, so it is replaced by:

> **4.** I agree that the Institute may hold and use my personal information to assess this application and
> keep my membership and CPD records; may check my qualifications and registrations with the institutions and
> bodies I have named; and, if I ask the Institute to support my categorisation, candidacy or licensing, may
> share my name, qualifications, experience and recommended category with the Land Surveyors' Board.
>
> **5.** I understand that my information may be stored with the Institute's email and document providers
> outside Lesotho; that my national ID or passport number, date of birth and certificates will never be
> published; and that I may ask to see or correct my information at any time, as set out in the GIL Privacy
> Policy on the Institute's website.
>
> ☐ I agree to items 4 and 5 (required)
> ☐ If a public register of members is approved, I agree to my business contact details being shown in it (optional)
> ☐ I would like to receive GIL news and event invitations (optional)

The new files are ready in the working folder (one level above `llsa-website/`):

| Source | Replaces on the website |
|---|---|
| `../Claude outputs/GIL Membership Application Form/GIL_Membership_Application_Form_2026-10-19.docx` | `public/docs/gil-membership-application-form.docx` |
| `../Claude outputs/GIL Membership Application Form/GIL_Membership_Application_Form_2026-10-19.pdf` | `public/docs/gil-membership-application-form.pdf` |

Task 5 copies them in. The public file names stay the same, so no links change.

---

## Task 1 — Privacy data file

**Prompt**
```
Create src/data/privacy.ts containing the content of Section 0 of
GIL-Website-Privacy-Policy-Instructions.md.
1. Export these types:
   type PrivacyBlock =
     | { type: "p"; text: string }
     | { type: "ul"; items: string[] }
     | { type: "table"; head: string[]; rows: string[][] }
   interface PrivacySection { id: string; number: number; title: string; act?: string;
                              blocks: PrivacyBlock[] }
   interface PrivacyGlanceItem { icon: string; heading: string; text: string }
2. Export: PRIVACY_VERSION = "1.0"; PRIVACY_ADOPTED = "By the GIL Committee, 19 October 2026";
   PRIVACY_EFFECTIVE = "19 October 2026"; PRIVACY_LAST_UPDATED = "19 October 2026";
   PRIVACY_ADOPTION_LINE (Section 0.1); PRIVACY_GLANCE (Section 0.2, six items); PRIVACY_SECTIONS (Section 0.3, all 18, in order, exact ids,
   titles, Act lines and text); CONTACT_FORM_NOTICE and MEMBERSHIP_NOTICE (Section 0.4).
   For the "Act:" line store only the reference, e.g. "sections 2 and 3".
3. Section 11 uses bold run-in labels (**Elections.** …) — keep them as ** markdown in "p" blocks.
   Section 17's two-column table has an empty header row: use head: ["", ""].
4. Keep **bold** and [label](href) markdown exactly as written; straight apostrophes; en/em dashes as written.
Do not paraphrase.
```
**Check:** `PRIVACY_SECTIONS.length === 18`, ids unique, and every section in Section 0.3 has a matching id.

---

## Task 2 — Privacy components

**Prompt**
```
Create src/components/privacy/ with:

1. PrivacyBlocks.tsx — renders PrivacyBlock[] using RichText from @/components/faq/RichText:
   "p" -> <p>, "ul" -> <ul> with the same gold bullet markers as FaqAnswer, "table" -> a responsive
   table in an overflow-x-auto wrapper (header row bg-primary/10, text-sm, cells align top; skip the
   <thead> if every header cell is empty). If FaqAnswer already has list/table renderers you can import,
   reuse them instead of duplicating.
   RichText must render mailto: links as plain <a> (it already does) — check the Section 17 link works.

2. PrivacyContent.tsx — the page body:
   a. Top strip: "Version 1.0 · Effective 19 October 2026 · Last updated 19 October 2026" in text-sm muted,
      then PRIVACY_ADOPTION_LINE in a small box with a green (secondary) left border.
   b. "At a glance": SectionLabel + heading, then a 1/2/3-column grid (mobile/sm/lg) of the six
      PRIVACY_GLANCE cards (rounded-xl, border-border, icon in a gold-tinted circle). Map icon names to
      lucide-react components; if a named icon is not exported by the installed lucide-react, use the
      fallback named in Section 0.2.
   c. The full policy in a two-column layout on lg+: a sticky "On this page" table of contents on the
      left (top-28, numbered links to #id, highlight the section in view using IntersectionObserver),
      sections on the right (max-w-3xl). Below lg, the table of contents is a <details> element
      ("On this page") above the sections.
   d. Each section: wrapper <section id={id} className="scroll-mt-28">, an h2 "N. Title"
      (font-display), the "Act: …" line in text-xs muted (prefix "Data Protection Act, 2011 — "),
      then PrivacyBlocks. Separate sections with a thin border-t.
   e. A small "Print or save as PDF" button (lucide Printer) in the top strip calling window.print().
      Add print styles so the navbar, footer, TOC and button are hidden when printing
      (print:hidden on those elements, or a @media print rule in globals.css).
   Use AnimatedSection for reveal like the other pages, but do not animate each section individually
   (long page). Respect prefers-reduced-motion.
```

---

## Task 3 — The `/privacy-policy` route

**Prompt**
```
Create src/app/privacy-policy/page.tsx following src/app/cpd/page.tsx:
- metadata: title "Privacy Policy", description = Section 0.1 meta description,
  alternates.canonical "/privacy-policy", openGraph { title "Privacy Policy | GIL", description (same),
  url "/privacy-policy" }.
- Render <PageHero title="Privacy Policy" subtitle="How the Geomatics Institute of Lesotho collects,
  uses and protects personal information" breadcrumbs={[{label:"Home",href:"/"},{label:"Privacy Policy"}]} />
  then <PrivacyContent />.
The page must prerender statically.
```

---

## Task 4 — Notices on the contact form and Membership page

**Prompt**
```
1. src/components/contact/ContactContent.tsx: directly under the Send button, render CONTACT_FORM_NOTICE
   with RichText in a <p className="text-xs text-muted-foreground">. Do not add a checkbox and do not
   change the form fields, the Web3Forms payload or validation.
2. src/components/membership/MembershipContent.tsx: under the "how to apply" steps, render
   MEMBERSHIP_NOTICE with RichText in a small note box (rounded-lg, border-border, bg-muted/40, text-sm,
   lucide ShieldCheck icon).
```

---

## Task 5 — Replace the membership application form

**Prompt**
```
Replace the membership application form downloads with the updated form described in Section 0.5:
1. Copy "../Claude outputs/GIL Membership Application Form/GIL_Membership_Application_Form_2026-10-19.docx"
   over public/docs/gil-membership-application-form.docx, and the matching .pdf over
   public/docs/gil-membership-application-form.pdf. Keep the public file names unchanged.
   (On Windows PowerShell, from llsa-website:
    Copy-Item "..\Claude outputs\GIL Membership Application Form\GIL_Membership_Application_Form_2026-10-19.docx" public\docs\gil-membership-application-form.docx -Force
    Copy-Item "..\Claude outputs\GIL Membership Application Form\GIL_Membership_Application_Form_2026-10-19.pdf"  public\docs\gil-membership-application-form.pdf  -Force)
2. Confirm with git status that exactly these two files changed under public/docs.
3. grep src/ for "gil-membership-application-form" and confirm every link still points at
   /docs/gil-membership-application-form.docx or .pdf. Do not rename anything.
```
**Check:** open the new PDF from `public/docs/` — section J has items 4 and 5 and three tick boxes.

---

## Task 6 — Sitemap and CONTENT-NEEDED

**Prompt**
```
1. public/sitemap.xml: add a <url> for /privacy-policy (changefreq yearly, priority 0.3) using the SAME
   base URL as the existing entries. Do not change the base URL.
2. CONTENT-NEEDED.md: mark item 44 (/privacy-policy) done, and add a "Privacy Policy page" section listing
   the open items in "Committee decisions" below (P6 and P8), with the same "When" column style as the FAQ section.
3. The footer link already points to /privacy-policy — confirm it, do not duplicate it.
```

---

## Task 7 — Confirm the "no cookies" statement is true, then build

**Prompt**
```
Section 9 of the policy says GIL sets no cookies and runs no analytics, that fonts are self-hosted, and
that the only embedded third-party content is the Google Maps map on the Contact page. Confirm this in
the code before building (also search src/ for <iframe and external <script> tags):
- search src/ and the root layout for analytics or tag scripts (gtag, googletagmanager, @vercel/analytics,
  @vercel/speed-insights, plausible, hotjar, clarity, facebook pixel) and for document.cookie;
- confirm fonts come from next/font (self-hosted at build time), not a <link> to fonts.googleapis.com;
- confirm package.json has no analytics packages.
If anything contradicts Section 9, STOP and tell me — do not edit the policy text.
Then run npm run lint and npm run build and fix any errors. Run npm run dev and check /privacy-policy at
375px, 768px and 1280px:
- the adoption line shows "Version 1.0"; the six cards wrap cleanly;
- every table scrolls horizontally on mobile instead of overflowing the page;
- the TOC is sticky on desktop and highlights the current section; it is a <details> on mobile;
- /privacy-policy#your-rights lands below the navbar;
- the footer "Privacy Policy" link works; the contact-form notice and Membership note link here;
- the Membership page "Download application form" buttons open the updated form (section J, items 4 and 5);
- Print preview hides the navbar, footer and TOC.
```

---

## Task 8 — Final check of the text

**Prompt**
```
Compare every heading and paragraph rendered on /privacy-policy with Section 0.3 of
GIL-Website-Privacy-Policy-Instructions.md and list any differences. Then run:
git grep -n -e "Lesotho Geomatics Institute" -e "Surveyors Council" -e "Data Protection Act, 2013" -e "POPIA" src
and report any hits (there should be none).
```

---

## Verify (tick each before pushing)

- [ ] `/privacy-policy` builds statically; the footer link no longer 404s
- [ ] 18 numbered sections, six "at a glance" cards, adoption line shows Version 1.0 and 19 October 2026
- [ ] No "Draft", "Proposed" or "For the AGM" labels anywhere on the page
- [ ] Each section shows its Act line where Section 0.3 gives one
- [ ] No text differs from Section 0 (spot-check five sections)
- [ ] Contact form shows the one-line notice; Membership page shows the note box
- [ ] Both application form downloads (Word and PDF) are the 19 October 2026 version
- [ ] Task 7 found no cookies, analytics or external font requests from GIL; the only embed is the Contact-page map
- [ ] Tables scroll on mobile; no horizontal page scroll at 375px
- [ ] `npm run build` passes with no type errors

## Commit

```
git add -A
git commit -m "Add Privacy Policy v1.0 (/privacy-policy) and updated membership application form"
git push
```

## Committee decisions — 19 October 2026

| Item | Decision | Status |
|---|---|---|
| P1 — Information Officer | The Secretary acts as Information Officer (policy section 17) | Adopted |
| P2 — Retention periods | Adopted as set out in policy section 12 | Adopted |
| P3 — Security measures | Adopted as set out in policy section 13 | Adopted |
| P4 — Gender question | Collected only for reporting in totals (policy section 5); optional on the next baseline survey | Adopted |
| P5 — Public register | Contents limited as set out in policy section 10; whether to publish goes to the AGM | Adopted |
| P6 — Baseline survey data | Action immediately after the policy is finalised (see below) | To action now |
| P7 — Consent declaration | Added to the membership application form (Section 0.5, Task 5) | Done |
| P8 — Notification to the Data Protection Commission | Remains open until the Commission is operating | Open |
| P9 — Third-party services | Policy sections 3, 7 and 9 and the "at a glance" card amended to name Google Maps and state GIL's reliance on third-party services and their conduct | Adopted |

### P6 — what to do with the baseline survey data

1. Move the survey export (CSV/XLSX) and the evidence ZIPs in `Members Qualifications Database/` into one
   restricted folder that only the Secretary and the President can open. Remove copies from email threads and
   shared folders.
2. Turn on two-step verification on geomaticsinstitute.ls@gmail.com and any account that holds the data.
3. Diary the deletions under policy section 12: ID copies, certificates and transcripts once each member's
   categorisation is decided and any review or appeal is finished; survey responses deleted or de-identified
   no later than 24 months after collection (first response 16 December 2025, so by 16 December 2027 at the latest).
4. Make the gender question optional on the next survey, and add the Section 0.5 consent wording to it.

### P8 — open

The Act requires data controllers to notify the Data Protection Commission of their processing (sections 25(5)
and 53). A Lesotho news report of 21 April 2026 said the Commission had not yet been established. Check its
status each year; when it is operating, file the notification and add the Commission's contact details to
policy section 16.
