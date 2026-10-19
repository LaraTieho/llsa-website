// Privacy Policy content — copied verbatim from GIL-Website-Privacy-Policy-Instructions.md, Section 0.
// Do not paraphrase. Text may contain **bold** and [label](/path) markdown,
// rendered by src/components/faq/RichText.tsx.

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }

export interface PrivacySection {
  id: string
  number: number
  title: string
  act?: string
  blocks: PrivacyBlock[]
}

export interface PrivacyGlanceItem {
  icon: string
  heading: string
  text: string
}

export const PRIVACY_VERSION = "1.0"
export const PRIVACY_ADOPTED = "By the GIL Committee, 19 October 2026"
export const PRIVACY_EFFECTIVE = "19 October 2026"
export const PRIVACY_LAST_UPDATED = "19 October 2026"

export const PRIVACY_ADOPTION_LINE =
  "Adopted by the Committee of the Geomatics Institute of Lesotho on 19 October 2026. Version 1.0."

export const PRIVACY_GLANCE: PrivacyGlanceItem[] = [
  {
    icon: "ClipboardCheck",
    heading: "Only what we need",
    text: "We collect what we need to run membership, answer enquiries, keep CPD records and serve the profession — nothing more.",
  },
  {
    icon: "Ban",
    heading: "Never sold",
    text: "We do not sell, rent or trade personal information.",
  },
  {
    icon: "Cookie",
    heading: "No tracking by GIL",
    text: "GIL sets no cookies and runs no analytics or advertising tools. The map on the Contact page comes from Google Maps.",
  },
  {
    icon: "IdCard",
    heading: "ID numbers stay private",
    text: "National ID numbers, dates of birth and certificates are never published.",
  },
  {
    icon: "FileSearch",
    heading: "See and correct your record",
    text: "You can ask what we hold about you and have it corrected, free of charge.",
  },
  {
    icon: "Mail",
    heading: "One contact",
    text: "Write to the Information Officer at geomaticsinstitute.ls@gmail.com.",
  },
]

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "who-we-are",
    number: 1,
    title: "Who we are and what this policy covers",
    act: "sections 2 and 3",
    blocks: [
      { type: "p", text: "The Geomatics Institute of Lesotho (\"GIL\", \"the Institute\", \"we\") is the voluntary professional body for land surveyors and geospatial professionals in Lesotho. It was founded in April 1997 as the Lesotho Land Surveyors Association (LLSA). For the purposes of the Data Protection Act, 2011, GIL is the **data controller** for the personal information described in this policy." },
      { type: "p", text: "This policy covers personal information we handle through:" },
      {
        type: "ul",
        items: [
          "this website, including the contact form;",
          "membership applications, records and renewals;",
          "the professional baseline survey, and the qualification evidence we use to categorise members;",
          "continuing professional development (CPD) records;",
          "elections and General Meetings;",
          "events, training and workshops;",
          "complaints about a member's professional conduct;",
          "our email, telephone and social media accounts.",
        ],
      },
      { type: "p", text: "It does not cover the Land Surveyors' Board, the Land Administration Authority, the Chief Surveyor's Office or any other public body. Each decides for itself how it handles personal information, including information we pass to it as described in section 7." },
    ],
  },
  {
    id: "the-law",
    number: 2,
    title: "The law we follow",
    act: "sections 15–28",
    blocks: [
      { type: "p", text: "We handle personal information in line with the **Data Protection Act, 2011 (Act No. 5 of 2012)** (\"the Act\") and section 11 of the Constitution of Lesotho, which protects the right to respect for private and family life." },
      { type: "p", text: "In particular, personal information we hold must be:" },
      {
        type: "ul",
        items: [
          "processed lawfully (section 15);",
          "adequate, relevant and not excessive for its purpose (section 16);",
          "collected from you directly wherever possible (section 17);",
          "used only for the purpose it was collected for, or a compatible one (section 18);",
          "kept no longer than necessary (section 19);",
          "kept secure, including when a service provider handles it for us (sections 20–22);",
          "kept accurate and up to date (section 24).",
        ],
      },
      { type: "p", text: "We tell you what we collect and why (section 25), and you can see and correct what we hold (sections 26–27). Where the Act, or regulations made under it, sets a stricter rule than this policy, the Act prevails." },
    ],
  },
  {
    id: "what-we-collect",
    number: 3,
    title: "Information we collect",
    act: "sections 16 and 17",
    blocks: [
      {
        type: "table",
        head: ["When you…", "We collect"],
        rows: [
          ["Use the contact form or email us", "Your name, email address, organisation (optional), the topic you choose and your message."],
          ["Apply for membership", "Full name; date of birth; national ID or passport number; postal and physical address; phone and email; employer and position; qualifications and the institutions that awarded them; professional registrations and licences (for example, with the Land Surveyors' Board or SAGC); work experience; referees; and copies of certificates, transcripts and proof of registration."],
          ["Complete the professional baseline survey", "The membership details above, plus your district, gender, practice areas, equipment and software, CPD preferences, and your consent answer."],
          ["Keep up your CPD", "Activities, hours, dates, providers and evidence of attendance."],
          ["Attend an event, training or General Meeting", "Name, contact details, membership status, attendance and, where taken, photographs."],
          ["Vote in an Institute election", "Your name and email, to confirm you may vote, and your ballot."],
          ["Pay fees", "Amount, date, payment reference and the name on the payment. We do not hold card or bank account numbers."],
          ["Make, or are the subject of, a conduct complaint", "Details of the complaint, the people involved, the evidence and the outcome."],
          ["Browse this website", "Nothing that identifies you is collected by GIL. Our hosting provider keeps standard technical logs, and Google Maps receives technical information when the Contact page opens — see section 9."],
        ],
      },
      { type: "p", text: "We collect information from you directly. Sometimes we confirm it with others — for example, by asking a university to confirm a qualification, or checking a professional register — and we tell you when we do." },
    ],
  },
  {
    id: "why-we-use-it",
    number: 4,
    title: "Why we use it, and on what basis",
    act: "sections 15, 18 and 51",
    blocks: [
      {
        type: "table",
        head: ["Purpose", "Lawful basis (section 15)"],
        rows: [
          ["Replying to your enquiry", "Your consent, given when you write to us, and our legitimate interest in answering questions about the profession."],
          ["Assessing applications, admitting and categorising members", "Steps you ask us to take before membership, and the membership relationship under the GIL Constitution."],
          ["Keeping the membership roll, collecting fees, sending notices of meetings and renewals", "The membership relationship under the GIL Constitution."],
          ["Recommending your categorisation, candidacy or transitional licensing to the Land Surveyors' Board", "Your explicit consent, given on the application form or survey."],
          ["Keeping CPD records", "The membership relationship and the Constitution's CPD rules."],
          ["Running elections and General Meetings", "The GIL Constitution."],
          ["Handling complaints and disciplinary matters", "The GIL Constitution, and our legitimate interest in upholding professional standards and protecting the public."],
          ["Sending news and event invitations", "Your consent (non-members); the membership relationship (members)."],
          ["Keeping accounts and meeting legal duties", "Obligations the law places on the Institute."],
        ],
      },
      { type: "p", text: "We do not use your information for a purpose incompatible with the one we collected it for (section 18). If we want to use it for something new, we will ask you first." },
      { type: "p", text: "We do not make decisions about you by automated means alone (section 51). Admission and categorisation decisions are made by people." },
    ],
  },
  {
    id: "sensitive-information",
    number: 5,
    title: "Sensitive information",
    act: "sections 29–36",
    blocks: [
      { type: "p", text: "The Act gives extra protection to information about a person's religious or philosophical beliefs, race or ethnic origin, trade union membership, political affiliation, health, sexual life or criminal behaviour, and to information about children (section 29). We do not ask for any of these." },
      { type: "p", text: "Two exceptions may arise. If you tell us about access or health needs so that you can attend an event, we use that only to make the arrangement. A complaint about a member's conduct may include an allegation of criminal behaviour; we use it only for the complaint and only as far as the Act allows." },
      { type: "p", text: "We ask for gender only to report on women's participation in the profession, which the GIL Constitution commits us to promote. We report it only as totals, never for an individual." },
    ],
  },
  {
    id: "children",
    number: 6,
    title: "Children",
    act: "section 29",
    blocks: [
      { type: "p", text: "This website and GIL membership are intended for adults. We do not knowingly collect information about anyone under 18 without the consent of a parent or guardian. If you believe we have, write to us and we will delete it." },
    ],
  },
  {
    id: "sharing",
    number: 7,
    title: "Who we share it with",
    act: "sections 21 and 22",
    blocks: [
      { type: "p", text: "We do not sell, rent or trade personal information. We share it only as follows:" },
      {
        type: "ul",
        items: [
          "**The Land Surveyors' Board** — when GIL recommends your categorisation, candidacy or transitional licensing, we send the Board what it needs to consider the recommendation: your name, qualifications, experience and the recommended category. We tell you before we do so.",
          "**Qualification and registration checks** — universities, colleges and professional bodies (for example, SAGC) may be asked to confirm a qualification or registration you have given us.",
          "**Your supervisor or mentor** — if you are a candidate, your supervising surveyor sees the training records needed to supervise you.",
          "**Committee and sub-committee members** — only those who need the information for their role (for example, the Treasurer for fees, the CPD sub-committee for CPD records, the Disciplinary sub-committee for a complaint). They must keep it confidential.",
          "**Service providers** that handle information for us, listed below, on terms that require them to keep it confidential and secure.",
          "**Authorities**, where the law requires it — for example, under a court order.",
        ],
      },
      {
        type: "table",
        head: ["Service provider", "What it does for GIL", "Where the information is held"],
        rows: [
          ["Vercel Inc.", "Hosts this website", "United States and Vercel's global network"],
          ["Web3Forms", "Delivers contact-form messages to the Institute's email", "Outside Lesotho"],
          ["Google (Gmail, Google Forms, Google Drive)", "Institute email, online surveys and ballots, document storage", "United States and other countries"],
          ["LinkedIn", "Publishes the Institute's news and event photographs", "Outside Lesotho"],
          ["Google Maps", "Shows the map on the Contact page", "United States and other countries"],
        ],
      },
      { type: "p", text: "**Our reliance on third-party services.** GIL is a voluntary body and does not run its own servers. It relies on established third-party services and tools, including those listed above, to run this website, its email and its records. We choose providers that publish privacy policies, keep the information they handle secure and are committed to lawful and ethical conduct. Each provider is responsible for its own conduct under its own privacy policy and the law that applies to it. The Committee reviews these providers each year, and if a provider no longer meets these standards we will stop using it." },
    ],
  },
  {
    id: "outside-lesotho",
    number: 8,
    title: "Information held outside Lesotho",
    act: "section 52",
    blocks: [
      { type: "p", text: "Some of the providers in section 7 store information on servers outside Lesotho. Section 52 of the Act allows this only in certain cases. We rely on:" },
      {
        type: "ul",
        items: [
          "providers bound by terms that give protection substantially similar to the Act (section 52(a));",
          "your consent, which we ask for on the membership application form and the survey (section 52(b));",
          "the transfer being needed to provide the membership services you asked for (section 52(c)).",
        ],
      },
      { type: "p", text: "We keep the most sensitive items — copies of ID documents and certificates — in restricted folders, not in shared folders or email threads." },
    ],
  },
  {
    id: "website-and-cookies",
    number: 9,
    title: "This website, cookies and logs",
    blocks: [
      {
        type: "ul",
        items: [
          "**No cookies from GIL.** GIL does not set cookies on this website and does not use analytics, advertising or tracking tools.",
          "**Fonts and images** are served from this website, not loaded from other companies' servers.",
          "**Map on the Contact page.** The map is provided by Google Maps and loads when you open the Contact page. Google receives technical information, such as your IP address and browser type, and may set its own cookies, under [Google's privacy policy](https://policies.google.com/privacy). GIL receives no information from the map. If you prefer not to use Google Maps, the office address is given in writing on the Contact page and in section 17.",
          "**Hosting logs.** Our host, Vercel, automatically records technical information when a page is requested — such as IP address, browser type, the page and the time — to run and secure the service. GIL does not use these logs to identify visitors.",
          "**Contact form.** When you press Send, your message passes through Web3Forms to the Institute's email inbox. A hidden spam-check field is included; it holds no personal information.",
          "**Links to other websites.** Links to LinkedIn, Google Maps, the Government Gazette and other sites take you to services with their own privacy policies. GIL is not responsible for how they handle information.",
        ],
      },
      { type: "p", text: "If GIL adds analytics or any cookie of its own in future, we will update this policy first and, for any cookie that is not strictly necessary, ask for your consent. If we add another third-party service to this website, we will list it in section 7 first." },
    ],
  },
  {
    id: "member-register",
    number: 10,
    title: "Member register and directory",
    blocks: [
      { type: "p", text: "Whether GIL publishes a register or directory of members on this website goes to the next Annual General Meeting." },
      { type: "p", text: "If a register is published, it will show only:" },
      {
        type: "ul",
        items: [
          "name;",
          "GIL membership class and designation;",
          "branch (Land Surveying, Engineering Surveying or GISc);",
          "membership number and status (for example, current or suspended);",
          "town or district of practice;",
          "business contact details, only if the member chooses to show them.",
        ],
      },
      { type: "p", text: "It will **never** show national ID or passport numbers, dates of birth, home addresses, personal phone numbers, certificates or transcripts, CPD records or disciplinary records." },
      { type: "p", text: "The statutory register of licensed land surveyors is kept by the Land Surveyors' Board under the Land Survey Act, not by GIL." },
    ],
  },
  {
    id: "published-information",
    number: 11,
    title: "Elections, complaints and photographs",
    blocks: [
      { type: "p", text: "**Elections.** We publish the names of candidates and the number of votes each received. We never publish how an individual member voted." },
      { type: "p", text: "**Complaints.** Where the GIL Constitution provides for a summary of a complaint's outcome to be published, the summary will not name the person who complained or any witness." },
      { type: "p", text: "**Photographs.** We may publish photographs of Institute events on this website and on LinkedIn. If you would rather not appear, tell the photographer or the Secretary; we will remove you from photographs we have published if you ask." },
    ],
  },
  {
    id: "retention",
    number: 12,
    title: "How long we keep it",
    act: "section 19",
    blocks: [
      {
        type: "table",
        head: ["Information", "How long we keep it"],
        rows: [
          ["Contact-form messages and general emails", "2 years after the last exchange, unless they become part of a membership or complaint record"],
          ["Unsuccessful membership applications", "12 months after the decision"],
          ["Membership records", "While you are a member, and 5 years after your membership ends"],
          ["Copies of ID documents, certificates and transcripts", "Until your application or categorisation has been decided and any review or appeal is finished; then deleted. We keep a note that they were checked."],
          ["Professional baseline survey responses", "Until the transitional categorisation is complete, and no longer than 24 months after collection; then deleted or de-identified"],
          ["CPD records", "5 years after the end of the CPD year"],
          ["Election ballots", "Until the results are confirmed and the time for any challenge has passed. The results are kept permanently."],
          ["Complaint and disciplinary files", "5 years after the matter closes, or longer while legal proceedings are pending"],
          ["Financial records", "As long as accounting and tax law requires"],
          ["Mailing list (non-members)", "Until you unsubscribe"],
        ],
      },
      { type: "p", text: "A short historical roll of members — name, membership class and years of membership — is kept permanently as part of the Institute's history, as section 19(2) allows for historical purposes." },
      { type: "p", text: "When information is no longer needed, we delete or destroy it so that it cannot be reconstructed (section 19(4)–(5))." },
    ],
  },
  {
    id: "security",
    number: 13,
    title: "How we protect it",
    act: "sections 20–23",
    blocks: [
      {
        type: "ul",
        items: [
          "Access to membership records is limited to Committee members and officers who need it for their role.",
          "Institute accounts use strong passwords and two-step verification.",
          "Copies of ID documents and certificates are kept in restricted folders and are not sent around by email.",
          "Paper forms are kept locked at the Institute's office.",
          "The Committee reviews these safeguards every year.",
        ],
      },
      { type: "p", text: "If we have reason to believe that your information has been accessed by someone not entitled to it, we will tell you and the Data Protection Commission, in writing, as soon as reasonably possible, and say what we are doing about it (section 23)." },
    ],
  },
  {
    id: "your-rights",
    number: 14,
    title: "Your rights",
    act: "sections 15, 26, 27 and 50",
    blocks: [
      {
        type: "ul",
        items: [
          "**Ask what we hold.** You may ask, free of charge, whether we hold information about you, and for a copy of it and a list of who it has been shared with (section 26). We will need to confirm your identity first.",
          "**Correct or delete it.** You may ask us to correct or delete information that is inaccurate, out of date, incomplete, misleading or obtained unlawfully (section 27). We will tell you the outcome within 14 days, and tell anyone we shared it with.",
          "**Object.** You may object in writing, on compelling legitimate grounds, to how we use your information. Section 15 lets you make that objection to the Data Protection Commission; we will also consider any objection you send to us.",
          "**Stop news and invitations.** You may tell us at any time to stop sending you news, event invitations or other promotional messages (section 50).",
          "**Withdraw consent** wherever we rely on it. This does not affect anything we did before you withdrew it.",
          "**Complain** — see section 16.",
        ],
      },
      { type: "p", text: "To use any of these rights, email the Information Officer (section 17) with \"Data request\" in the subject line. We aim to reply within 14 days." },
      { type: "p", text: "Some information must be kept even if you ask us to delete it — for example, financial records, or a disciplinary file while the matter is open. If so, we will explain why." },
    ],
  },
  {
    id: "communications",
    number: 15,
    title: "Emails and news from GIL",
    act: "section 50",
    blocks: [
      { type: "p", text: "Members receive notices of meetings, renewals, CPD and other Institute business as part of membership. These are not marketing." },
      { type: "p", text: "We send news, event invitations and newsletters to non-members only if they have asked for them. Every such message tells you how to stop receiving them." },
    ],
  },
  {
    id: "complaints",
    number: 16,
    title: "Complaints",
    act: "sections 39 and 49",
    blocks: [
      { type: "p", text: "If you are unhappy with how we have handled your information, please write to the Information Officer first, so that we can put it right." },
      { type: "p", text: "You may also complain to the **Data Protection Commission** established under Part II of the Act (section 39). If the Act has been breached, you may also go to court for damages (section 49)." },
    ],
  },
  {
    id: "contact",
    number: 17,
    title: "Contact the Information Officer",
    blocks: [
      { type: "p", text: "The Secretary of the Institute acts as GIL's Information Officer for this policy." },
      {
        type: "table",
        head: ["", ""],
        rows: [
          ["Email", "[geomaticsinstitute.ls@gmail.com](mailto:geomaticsinstitute.ls@gmail.com?subject=Data%20request) — subject \"Data request\""],
          ["Phone", "+266 6234 9190"],
          ["Office", "Geomatics Institute of Lesotho, c/o Chief Surveyor's Office, Ministry of Local Government and Chieftainship, Maseru, Lesotho"],
        ],
      },
    ],
  },
  {
    id: "changes",
    number: 18,
    title: "Changes to this policy",
    blocks: [
      { type: "p", text: "We review this policy at least once a year, and whenever our practices change. The version and \"Last updated\" date at the top show when it last changed. We will tell members about significant changes by email and on this website." },
    ],
  },
]

export const CONTACT_FORM_NOTICE =
  "We use your details only to reply to your message. See our [Privacy Policy](/privacy-policy)."

export const MEMBERSHIP_NOTICE =
  "**Your information.** We use the details and documents in your application to assess it, keep your membership and CPD records and, if you ask us to, support your categorisation with the Land Surveyors' Board. ID numbers and certificates are never published. [Read our Privacy Policy](/privacy-policy#what-we-collect)."
