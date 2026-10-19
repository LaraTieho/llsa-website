// FAQ content — copied verbatim from GIL-Website-FAQ-Instructions.md, Section 0.
// Do not paraphrase. Text may contain **bold** and [label](/path) markdown,
// rendered by src/components/faq/RichText.tsx.

export type FaqBasis = "law" | "constitution" | "position" | "guidance"

export type FaqCategoryId =
  | "about"
  | "board"
  | "licensing"
  | "qualifications"
  | "membership"
  | "training"
  | "cpd"
  | "public"

export interface FaqCategory {
  id: FaqCategoryId
  label: string
}

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }

export interface FaqItem {
  id: string
  category: FaqCategoryId
  question: string
  answer: FaqBlock[]
  basis: FaqBasis
  source: string
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: "about", label: "About GIL" },
  { id: "board", label: "The Board and the law" },
  { id: "licensing", label: "Licensing and registration" },
  { id: "qualifications", label: "Does my qualification count?" },
  { id: "membership", label: "Membership" },
  { id: "training", label: "Candidacy, training and mentorship" },
  { id: "cpd", label: "CPD and conduct" },
  { id: "public", label: "For the public and clients" },
]

export const FAQ_BASIS_LABELS: Record<FaqBasis, string> = {
  law: "The law",
  constitution: "GIL Constitution (draft)",
  position: "GIL position — before the Board",
  guidance: "Guidance",
}

export const FAQ_LAST_REVIEWED = "19 October 2026"

export const FAQ_DISCLAIMER =
  "These answers are general guidance from the Geomatics Institute of Lesotho. They are not legal advice. Where they differ from the Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of 2019), the Land Survey Regulations, 1982, or a decision of the Land Surveyors' Board, the law and the Board prevail. Answers marked \"GIL position — before the Board\" are adopted by the Institute and are awaiting the Board's consideration; they may change."

export const FAQ_ITEMS: FaqItem[] = [
  // ── about ──────────────────────────────────────────────
  {
    id: "what-is-gil",
    category: "about",
    question: "What is the Geomatics Institute of Lesotho?",
    answer: [
      { type: "p", text: "The Geomatics Institute of Lesotho (GIL) is the voluntary professional body for land surveyors and geospatial professionals in Lesotho. It was founded in April 1997 as the Lesotho Land Surveyors Association (LLSA). In 2026 it began its transition from an association of land surveyors to an institute covering all geospatial disciplines — land surveying, engineering surveying, geographic information science (GISc) and related fields." },
      { type: "p", text: "GIL promotes professional standards, runs continuing professional development (CPD), speaks for the profession, and advises the Land Surveyors' Board on the categorisation and training of practitioners." },
    ],
    basis: "guidance",
    source: "GIL Constitution (draft); Institute history.",
  },
  {
    id: "why-the-name",
    category: "about",
    question: "Why \"Geomatics Institute of Lesotho\" and not \"Lesotho Geomatics Institute\"?",
    answer: [
      { type: "p", text: "The Law Office no longer allows the name of an association to begin with \"Lesotho\". The Institute is therefore registered as the Geomatics Institute of Lesotho, short form GIL." },
    ],
    basis: "guidance",
    source: "Institute records.",
  },
  {
    id: "gil-vs-board",
    category: "about",
    question: "Is GIL the same as the Land Surveyors' Board?",
    answer: [
      { type: "p", text: "No. They are two different bodies with different roles." },
      {
        type: "ul",
        items: [
          "**The Land Surveyors' Board** is the statutory regulator established under section 4 of the Land Survey Act No. 14 of 1980. It grants licences to practise land surveying, keeps the register of licensed surveyors and disciplines licensed surveyors.",
          "**GIL** is a voluntary professional institute of members. It does not issue licences. It supports its members' professional development, sets out recommended standards and training, and advises the Board.",
        ],
      },
      { type: "p", text: "South Africa has the same arrangement: the South African Geomatics Institute (SAGI) is the voluntary institute and the South African Geomatics Council (SAGC) is the statutory council. In Lesotho, GIL corresponds to SAGI and the Land Surveyors' Board to SAGC." },
    ],
    basis: "law",
    source: "Land Survey Act No. 14 of 1980, ss. 4–5.",
  },
  {
    id: "what-gil-does",
    category: "about",
    question: "What does GIL do?",
    answer: [
      {
        type: "ul",
        items: [
          "Runs a CPD programme and technical events for members.",
          "Recommends categories, qualifications and practical-training requirements to the Land Surveyors' Board.",
          "Supports graduates and candidates through its Young Surveyors Chapter and links with practising members.",
          "Follows new technology and standards (GNSS, drones, LiDAR, spatial data infrastructure) through its Technology and Innovation Sub-committee.",
          "Handles complaints from the public about its members.",
          "Seeks liaison with the South African Geomatics Council (SAGC), the International Federation of Surveyors (FIG), the African Association of Remote Sensing of the Environment (AARSE) and SADC bodies.",
        ],
      },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft) — objectives, sub-committees, liaison.",
  },
  {
    id: "who-runs-gil",
    category: "about",
    question: "Who runs GIL?",
    answer: [
      { type: "p", text: "An Executive Committee elected by the members. The current Committee was elected in October 2026: President Martin Nts'ihlele, Vice-President Tieho Lara, Secretary Maphoma Monaheng, Vice-Secretary Rethabile Mafatle, Treasurer Molefi Bokaako, and Ordinary Members Mohau Molokeng and Basia Lebajoa. Committee terms are two years. See [About GIL](/about)." },
    ],
    basis: "constitution",
    source: "Committee elections, 4–8 October 2026; GIL Constitution (draft).",
  },
  {
    id: "contact-gil",
    category: "about",
    question: "How do I contact GIL?",
    answer: [
      { type: "p", text: "Email Geomaticsinstitute.ls@gmail.com or call +266 6234 9190. The office is at the Chief Surveyor's Office, Ministry of Local Government and Chieftainship, Maseru. See the [Contact page](/contact)." },
    ],
    basis: "guidance",
    source: "Institute contact details.",
  },

  // ── board ──────────────────────────────────────────────
  {
    id: "what-is-board",
    category: "board",
    question: "What is the Land Surveyors' Board?",
    answer: [
      { type: "p", text: "The Land Surveyors' Board is the body established by section 4 of the Land Survey Act No. 14 of 1980 to license and regulate land surveyors. As amended by the Land Survey (Amendment) Act No. 2 of 2019, the Board is chaired by the Chief Surveyor — currently Mr Pheello Ramotubei — and includes representatives of the Land Administration Authority, of registered land surveyors, of the Ministry of Local Government and Chieftainship, and of the Ministry of Education. The Board sits quarterly and as the need arises." },
      { type: "p", text: "The current members were appointed by Legal Notice No. 71 of 2026 (Government Gazette Vol. 71 No. 65, 31 July 2026). See [About GIL](/about) and the [Legislation page](/legislation)." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 4, as amended by Act No. 2 of 2019; L.N. No. 71 of 2026.",
  },
  {
    id: "board-functions",
    category: "board",
    question: "What does the Board do?",
    answer: [
      { type: "p", text: "Under section 5 of the Land Survey Act, the Board:" },
      {
        type: "ul",
        items: [
          "grants licences to practise land surveying in Lesotho to persons duly qualified under the Act;",
          "provides for examinations, where necessary, for applicants for licences;",
          "keeps a register of all licensed surveyors;",
          "takes disciplinary proceedings against licensed surveyors;",
          "hears and decides disputes between a licensed surveyor and a client about fees, and between a licensed surveyor and the Chief Surveyor.",
        ],
      },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 5, 8, 9, 13.",
  },
  {
    id: "chief-surveyor",
    category: "board",
    question: "What is the role of the Chief Surveyor?",
    answer: [
      { type: "p", text: "The Chief Surveyor is a public officer responsible to the Commissioner of Lands. The Chief Surveyor supervises, directs and controls public surveys; examines and authenticates survey plans; keeps all survey records; may cancel or amend surveys found to be incorrect, outdated or inadequate; issues copies of public maps and documents for the prescribed fee; prepares the official maps of Lesotho; controls aerial photography of Lesotho; establishes and maintains the spatial data infrastructure and the national control network; and chairs the Land Surveyors' Board." },
      { type: "p", text: "Every survey made under the Act must follow the general directions issued by the Chief Surveyor (the Chief Surveyor's Directions)." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 3 and 15, as amended by Act No. 2 of 2019.",
  },
  {
    id: "which-laws",
    category: "board",
    question: "Which laws govern surveying in Lesotho?",
    answer: [
      {
        type: "ul",
        items: [
          "Land Survey Act No. 14 of 1980 — the principal Act",
          "Land Survey Regulations, 1982",
          "Land Survey (Amendment) Act No. 2 of 2019 — the current amendment",
          "Land Act No. 8 of 2010",
          "Land Administration Authority Act No. 9 of 2010",
          "The Chief Surveyor's Directions",
        ],
      },
      { type: "p", text: "The Land Survey (Amendment) Act No. 15 of 2012 was **repealed** by the 2019 Act and is no longer in force. Copies are on the [Legislation page](/legislation)." },
    ],
    basis: "law",
    source: "Act No. 2 of 2019, repeal section.",
  },
  {
    id: "who-may-survey",
    category: "board",
    question: "Who is allowed to carry out a boundary (cadastral) survey?",
    answer: [
      { type: "p", text: "Only a \"surveyor\" — meaning a licensed surveyor, or a public officer authorised by the Chief Surveyor — may survey land to mark out its boundaries for a plan attached to a document that must be registered (for example, a lease or a transfer), or carry out any survey that affects the boundaries or survey marks of land that has been or will be granted under any law. Anyone else who does this commits an offence under section 16 of the Act." },
      { type: "p", text: "Other survey work, such as topographic, engineering or GIS mapping, is not reserved by the Act. Clients should still use a qualified practitioner, and GIL recommends a practitioner registered in the relevant branch." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 2 and 16.",
  },
  {
    id: "when-official",
    category: "board",
    question: "When is a survey \"official\"?",
    answer: [
      { type: "p", text: "Land is not regarded as surveyed until the plan and the survey have been authenticated by the Chief Surveyor. The licensed surveyor must send all plans, field notes and computations to the Chief Surveyor, and they become the property of the Government. An authenticated plan is conclusive evidence of the survey information on it unless its authentication is cancelled." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 18 and 20–21.",
  },
  {
    id: "board-other-branches",
    category: "board",
    question: "Does the Board license GIS practitioners or engineering surveyors?",
    answer: [
      { type: "p", text: "The Land Survey Act provides for licences to practise land surveying. GIL has placed before the Board a framework that also recognises Engineering Surveying and Geographic Information Science (GISc) as branches, each with Professional, Technologist and Technician categories. Whether and how the Board adopts those branches is for the Board to decide. Until then, the licence issued under the Act is a land-surveying licence." },
    ],
    basis: "position",
    source: "GIL Categorisation and Transitional Licensing Framework (29 Sep 2026); Land Survey Act 1980, s. 5.",
  },
  // TODO: [GIL CONTENT] — name the civil aviation authority and link its drone rules once confirmed by the Committee
  {
    id: "drones-aerial",
    category: "board",
    question: "Do I need permission to fly drones or take aerial photographs for mapping?",
    answer: [
      { type: "p", text: "Under section 22 of the Land Survey Act, anyone who intends to carry out aerial photography of Lesotho for mapping or similar purposes must give the Chief Surveyor at least one month's written notice. The Chief Surveyor may require the photographs to be kept in Lesotho, inspected, deposited or copied. Aerial photography by or for the Government or a parastatal is official aerial photography." },
      { type: "p", text: "Drone flights are also subject to Lesotho's civil aviation rules. Check the current requirements with the civil aviation authorities before flying." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 22.",
  },

  // ── licensing ──────────────────────────────────────────────
  {
    id: "gil-licences",
    category: "licensing",
    question: "Does GIL issue licences?",
    answer: [
      { type: "p", text: "No. Licences to practise land surveying are granted by the Land Surveyors' Board under the Land Survey Act. GIL recommends categories and training requirements to the Board, evaluates candidates' practical training (articles), and supports members through the process." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 5.",
  },
  {
    id: "how-licensed",
    category: "licensing",
    question: "How do I become a licensed land surveyor in Lesotho?",
    answer: [
      { type: "p", text: "Under the framework GIL has placed before the Board, the standard route is:" },
      {
        type: "ul",
        items: [
          "**1. Qualification.** Obtain a recognised qualification in surveying or geomatics for the category you are aiming for (see \"What qualification do I need?\").",
          "**2. Candidacy.** Register as a candidate and complete the prescribed period of practical training under the direct supervision of a registered professional in the same branch. Your practical training record (articles) is submitted to and evaluated by GIL.",
          "**3. Examination.** Pass the examinations the Board prescribes for the standard route (see \"How long is the candidacy period?\"). There is no examination on the transitional route — see \"What is the transitional licensing arrangement?\".",
          "**4. Licence.** The Board grants the licence, enters you in the register of licensed surveyors, and publishes the grant in the Government Gazette.",
        ],
      },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 3–4; Land Survey Act 1980, ss. 6, 8, 12.",
  },
  {
    id: "branches-categories",
    category: "licensing",
    question: "What branches and categories are there?",
    answer: [
      { type: "p", text: "The framework GIL has placed before the Board has three branches, each with three categories:" },
      {
        type: "table",
        head: ["Branch", "Professional", "Technologist", "Technician"],
        rows: [
          ["Land Surveying", "GPr LS", "GTg LS", "GTc LS"],
          ["Engineering Surveying", "GPr ES", "GTg ES", "GTc ES"],
          ["Geographic Information Science", "GPr GISc", "GTg GISc", "GTc GISc"],
        ],
      },
      { type: "p", text: "Candidates carry the prefix **C** — for example CGPr LS (Candidate Professional Land Surveyor). **Mine Surveying** has not been adopted yet; it will be taken up separately." },
      { type: "p", text: "These designations describe registration categories. They are different from the nine GIL **membership** categories (see [Membership](/membership))." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 2.",
  },
  {
    id: "qualification-needed",
    category: "licensing",
    question: "What qualification do I need for each category?",
    answer: [
      {
        type: "table",
        head: ["Category", "Academic requirement", "Examples of recognised qualifications"],
        rows: [
          ["Professional (GPr)", "A 4-year professional Bachelor's degree in the branch (NQF 8), or an equivalent qualification certified by GIL. For GISc: a 4-year Bachelor's degree or a GISc qualification at NQF 7 or above.", "BSc Geomatics (University of Cape Town); BSc Land Surveying (University of KwaZulu-Natal); equivalent 4-year surveying degrees; accredited GISc degrees"],
          ["Technologist (GTg)", "A National Diploma plus a B-Tech, or a 3-year Bachelor's degree in the branch (NQF 6→7)", "Bachelor of Geomatics (Cape Peninsula University of Technology); National Diploma + B-Tech Surveying (Tshwane University of Technology); B-Tech Cartography (for GISc)"],
          ["Technician (GTc)", "A National Diploma in the branch (NQF 6)", "National Diploma: Surveying (CPUT) and equivalents; National Diploma: Cartography (for GISc)"],
        ],
      },
      { type: "p", text: "In Land Surveying and Engineering Surveying, the qualification **must be in surveying or geomatics**. A qualification in another field — for example civil engineering — does not qualify for licensing in either branch, whatever the years of practice." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 3.",
  },
  {
    id: "candidacy-length",
    category: "licensing",
    question: "How long is the candidacy (practical training) period?",
    answer: [
      {
        type: "table",
        head: ["Category", "Practical training", "Examination"],
        rows: [
          ["Professional Land Surveyor", "300 working days. 150 are compulsory: cadastral surveys of new townships 15; cadastral surveys of existing properties 30; control survey network 15; town planning and conveyancing 20; sectional title 15; engineering surveys 25; Chief Surveyor's office 30. The other 150 days are in at least two elective categories.", "Three law and professional practice papers, 65% pass mark in each"],
          ["Professional Engineering Surveyor", "300 working days across engineering, construction, topographic, deformation and set-out surveys, with compulsory control-survey and office-practice components. The detailed split is to be confirmed with the Board.", "One law and professional practice paper, 65%"],
          ["Professional GISc Practitioner", "260 working days. 120 are compulsory in cartography and geospatial information management; the other 140 across at least three categories, at least 10 days in each.", "Two law and professional practice papers, 65% in each"],
          ["Technologist and Technician categories", "A candidacy period under a registered professional in the branch, of a length set by the Board on GIL's recommendation", "One law and professional practice paper, 65%"],
        ],
      },
      { type: "p", text: "All candidacy is served under the direct supervision of a registered professional in the same branch." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 4.",
  },
  {
    id: "transitional",
    category: "licensing",
    question: "What is the transitional licensing arrangement?",
    answer: [
      { type: "p", text: "For several years Lesotho had no functioning Land Surveyors' Board, so graduates who entered practice had no way to become licensed. GIL has adopted a **once-off** transitional arrangement for them." },
      { type: "p", text: "**Who is covered:** members who hold a recognised surveying qualification, are not licensed, and graduated **in or before 2025**." },
      { type: "p", text: "**What it requires:**" },
      {
        type: "ul",
        items: [
          "Six months' probation (about 120 working days) of extensive practical training under a licensed surveyor, across all land-survey streams: cadastral 45 days, control 15, engineering 25, topographic and mapping 15, town planning and conveyancing 10, office practice and lodgement 10 (indicative minimums).",
          "A letter of recommendation from the supervising licensed surveyor at the end of the probation.",
        ],
      },
      { type: "p", text: "**There is no examination on this route.** Competence is shown through the supervised practice itself and confirmed in the letter of recommendation; the legislation and the Chief Surveyor's Directions are covered within the training." },
      { type: "p", text: "**Outcome:** a Professional receives a licence with full scope. A Technologist or Technician receives a licence restricted to the transitional scope: own cadastral work only, may sign only their own work, may not sign for anyone else, and may not take graduates in training." },
      { type: "p", text: "The arrangement is not available to anyone who graduates after 2025." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 5.",
  },
  {
    id: "graduated-2026",
    category: "licensing",
    question: "I graduated in 2026 or later. Which route do I follow?",
    answer: [
      { type: "p", text: "The standard route: a recognised qualification, the full candidacy period for your category under a registered professional in the same branch, articles evaluated by GIL, and the examinations the Board prescribes. The transitional arrangement does not apply to you." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 4 and 5.2.",
  },
  {
    id: "experience-category",
    category: "licensing",
    question: "Can my years of experience move me into a higher category?",
    answer: [
      { type: "p", text: "No. Your category — Professional, Technologist or Technician — is set by your academic qualification. Years of practice are recognised through the transitional requirements, but they do not lift a practitioner into a higher category. To move up, you need the qualification for that category." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 5.2.",
  },
  {
    id: "foreign-registration",
    category: "licensing",
    question: "I am registered with SAGC (or in another country). Can I practise in Lesotho?",
    answer: [
      { type: "p", text: "Registration outside Lesotho does not by itself authorise you to carry out the boundary surveys that the Land Survey Act reserves for licensed surveyors. For that you need a licence from the Land Surveyors' Board. Your foreign registration, qualifications and logged practical training are useful evidence when you apply." },
      { type: "p", text: "GIL is seeking a formal liaison with the South African Geomatics Council, including mutual recognition of qualifications and CPD. No mutual-recognition agreement is in place yet." },
    ],
    basis: "guidance",
    source: "Land Survey Act 1980, ss. 6 and 16; GIL Constitution (draft) — regional and international liaison.",
  },
  {
    id: "dual-branch",
    category: "licensing",
    question: "Can I be registered in more than one branch?",
    answer: [
      { type: "p", text: "Yes, where your qualification supports it. For example, a 4-year geomatics degree with surveying specialisation can make a graduate eligible as a Professional Land Surveyor and a Professional Engineering Surveyor, and — where the transcript shows enough GIScience content — as a Professional GISc Practitioner, subject to a separate GISc candidacy. The rules and fees for registration in more than one branch are still to be decided." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 7–8.",
  },
  {
    id: "rpl",
    category: "licensing",
    question: "Is there a recognition of prior learning (RPL) route?",
    answer: [
      { type: "p", text: "In the **GISc** branch, yes: practitioners whose qualifications pre-date GIS as a taught subject can be assessed individually against their documented GIS practice. In **Land Surveying** and **Engineering Surveying**, no: a qualification in surveying or geomatics is required." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 3 and 8.",
  },

  // ── qualifications ──────────────────────────────────────────────
  {
    id: "how-assessed",
    category: "qualifications",
    question: "How does GIL assess my qualification?",
    answer: [
      { type: "p", text: "Send certified copies of your certificates and your **full academic transcripts**. GIL looks at the subject content and the level (NQF) of each qualification against the requirement for each branch and category. Transcripts matter most for GISc, where eligibility depends on the GIScience content of your studies." },
      { type: "p", text: "Qualifications from outside Lesotho are assessed for equivalence; a SAQA evaluation helps for South African and other foreign qualifications. The GIL Constitution provides for a list of accredited institutions — Lerotholi Polytechnic and institutions with SAQA-equivalent qualifications — reviewed every three years." },
    ],
    basis: "guidance",
    source: "GIL Framework (29 Sep 2026); GIL Constitution (draft) — accredited institutions.",
  },
  {
    id: "qual-surveying-levels",
    category: "qualifications",
    question: "I have a surveying or geomatics qualification. Where do I fit?",
    answer: [
      {
        type: "ul",
        items: [
          "National Diploma in Surveying → Technician (GTc)",
          "National Diploma + B-Tech Surveying → Technologist in Land Surveying (GTg LS); in Engineering Surveying this route is a professional pathway (GPr ES)",
          "3-year Bachelor of Geomatics → Technologist (GTg)",
          "4-year BSc Geomatics / BSc Land Surveying / BSc Surveying → Professional (GPr)",
        ],
      },
      { type: "p", text: "Your membership category is separate: see [Membership](/membership)." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 3 and 7.",
  },
  {
    id: "qual-cartography-gis",
    category: "qualifications",
    question: "I have a qualification in cartography, GIS or remote sensing.",
    answer: [
      { type: "p", text: "These lead to the **GISc** branch. A National Diploma in Cartography is a Technician-level qualification (GTc GISc) and a B-Tech in Cartography a Technologist-level one (GTg GISc). A 4-year Bachelor's degree or a GISc qualification at NQF 7 or above (for example an Honours or Master's degree in GIS or remote sensing) can meet the Professional (GPr GISc) requirement, subject to assessment. These qualifications do not lead to a land-surveying licence." },
      { type: "p", text: "You can join GIL as a **GIS Practitioner Member** if you are actively practising." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 3; GIL Constitution (draft), membership.",
  },
  {
    id: "qual-civil",
    category: "qualifications",
    question: "I am a civil engineer (or engineering technician). Can I be licensed as a surveyor?",
    answer: [
      { type: "p", text: "Not in Land Surveying or Engineering Surveying. Both branches require a qualification in surveying or geomatics, whatever your years of survey practice. You are welcome to join GIL as an **Associate Member**. If your studies included substantial GIS content, a GISc assessment is possible from your transcripts." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 3, 7 and 9.",
  },
  {
    id: "qual-geology",
    category: "qualifications",
    question: "I am a geologist or earth scientist (including geo-resources). Can I join or be licensed?",
    answer: [
      { type: "p", text: "You can join. The category that fits most directly is **Associate Member**. If your studies included substantial GIS, remote sensing or spatial analysis and you practise geospatial work, you may qualify as a **GIS Practitioner Member**." },
      { type: "p", text: "For licensing, a geology qualification does not meet the requirement for Land Surveying or Engineering Surveying. The realistic route is GISc, assessed from your transcripts. Mine Surveying, when it is introduced, will require a mine-surveying qualification." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026); GIL Constitution (draft), membership.",
  },
  {
    id: "qual-geography",
    category: "qualifications",
    question: "I studied geography, environmental science or a related field.",
    answer: [
      { type: "p", text: "If your studies included GIS, remote sensing or spatial analysis, you may be eligible for the **GISc** branch, assessed from your transcripts, and to join as a **GIS Practitioner Member** if you practise geospatial work. These qualifications do not lead to a land-surveying licence. Otherwise you can join as an **Associate Member**." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026); GIL Constitution (draft), membership.",
  },
  {
    id: "qual-planning",
    category: "qualifications",
    question: "I am a town planner.",
    answer: [
      { type: "p", text: "Town planners work closely with land surveyors on layouts, subdivisions and servitudes, and are welcome to join GIL as **Associate Members** — or as **GIS Practitioner Members** if they practise geospatial work. A planning qualification does not lead to a land-surveying licence; GISc eligibility depends on the GIScience content of your studies." },
    ],
    basis: "guidance",
    source: "GIL Constitution (draft), membership; GIL Framework (29 Sep 2026).",
  },
  {
    id: "qual-other-surveyor",
    category: "qualifications",
    question: "I am a quantity surveyor, building surveyor, valuer or architect. Is that \"surveying\"?",
    answer: [
      { type: "p", text: "Not in the sense of the Land Survey Act. These are separate professions with their own bodies, even where the title includes \"surveyor\". They do not lead to a land-surveying licence. Allied professionals are welcome to join GIL as **Associate Members**." },
    ],
    basis: "guidance",
    source: "Land Survey Act 1980; GIL Constitution (draft), membership.",
  },
  {
    id: "qual-it",
    category: "qualifications",
    question: "I work in IT, computer science or data science with spatial data.",
    answer: [
      { type: "p", text: "If you are actively practising in the geospatial field, you can apply as a **GIS Practitioner Member**. Registration in the GISc branch depends on the GIScience content of your qualification, assessed from your transcripts." },
    ],
    basis: "guidance",
    source: "GIL Constitution (draft), membership; GIL Framework (29 Sep 2026).",
  },
  {
    id: "qual-short-courses",
    category: "qualifications",
    question: "Do short courses, drone-pilot certificates or GIS certificates count?",
    answer: [
      { type: "p", text: "They do not on their own meet the academic requirement for any registration category. They do count towards CPD, and they support your application as evidence of practice. Whether a certificate is a \"recognised qualification\" for GIS Practitioner membership is decided by the Committee case by case." },
    ],
    basis: "guidance",
    source: "GIL Framework (29 Sep 2026); GIL Constitution (draft), CPD.",
  },
  {
    id: "qual-masters",
    category: "qualifications",
    question: "I have a Master's degree but my first degree is not in surveying.",
    answer: [
      { type: "p", text: "For **Land Surveying** and **Engineering Surveying**, the requirement is a qualification in surveying or geomatics; a Master's degree in another field does not meet it. A surveying Master's built on a non-surveying first degree is assessed individually for equivalence. For **GISc**, a GISc qualification at NQF 7 or above can meet the Professional requirement." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), s. 3.",
  },

  // ── membership ──────────────────────────────────────────────
  // TODO: [GIL CONTENT] — designatory letters (FLGI / PLGI) still reflect the old "LGI" name; update when the Committee confirms GIL designations
  {
    id: "who-can-join",
    category: "membership",
    question: "Who can join GIL?",
    answer: [
      { type: "p", text: "Anyone who meets one of the nine membership categories:" },
      {
        type: "table",
        head: ["Category", "Who it is for", "Voting"],
        rows: [
          ["Honorary Life Member", "Nominated by the Committee and elected by a two-thirds majority of members", "Yes"],
          ["Fellow (FLGI)", "A Professional Member with at least 10 years' continuous membership and distinguished contribution to the profession", "Yes"],
          ["Professional Member (PLGI)", "A licensed land surveyor registered under the Land Survey Act", "Yes"],
          ["Technologist Member", "A recognised National Diploma or equivalent in surveying or geomatics; registered with the relevant authority or practising under a Professional Member", "Yes"],
          ["GIS Practitioner Member", "A recognised qualification in GIS, geospatial science or a related field, and actively practising", "Yes"],
          ["Graduate Member", "A recognised degree in land surveying, geomatics, GIS or a related discipline, completing training towards professional registration", "No"],
          ["Associate Member", "An allied professional whose qualifications or experience benefit the Institute; admitted at the Committee's discretion", "No"],
          ["Retired Member", "A former active member in good standing who has retired from full-time practice", "Yes"],
          ["Student Member", "Enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline", "No"],
        ],
      },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6.7.",
  },
  {
    id: "which-category",
    category: "membership",
    question: "Which membership category is right for me?",
    answer: [
      {
        type: "ul",
        items: [
          "Licensed land surveyor → Professional Member",
          "Surveying or geomatics graduate in training → Graduate Member",
          "National Diploma (or equivalent) in surveying, practising → Technologist Member",
          "Practising in GIS or geospatial science → GIS Practitioner Member",
          "Allied professional (engineering, geology, planning, law, conveyancing …) → Associate Member",
          "Studying → Student Member",
        ],
      },
      { type: "p", text: "If you are unsure, apply and the Committee will place you in the right category." },
    ],
    basis: "guidance",
    source: "GIL Constitution (draft), Art. 6.7.",
  },
  {
    id: "licence-to-join",
    category: "membership",
    question: "Do I need to be licensed to join?",
    answer: [
      { type: "p", text: "No. Only the Professional Member category requires a licence. Every other category is open to unlicensed practitioners, graduates, students and allied professionals who meet its criteria." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6.7.",
  },
  {
    id: "how-apply",
    category: "membership",
    question: "How do I apply?",
    answer: [
      {
        type: "ul",
        items: [
          "Download the [membership application form](/docs/gil-membership-application-form.pdf) ([Word version](/docs/gil-membership-application-form.docx)).",
          "Have it signed by a proposer and a seconder who are subscribed members. You may propose yourself.",
          "Attach certified copies of your certificates, full academic transcripts and any professional registration.",
          "Submit it in duplicate to the Secretary with the registration fee.",
          "The Committee decides complete applications within 30 days and replies in writing. A refused applicant may appeal to the Committee within 30 days.",
          "Membership starts on written acceptance and payment of the annual subscription.",
        ],
      },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6.4 and 6.8.",
  },
  // TODO: [GIL CONTENT] — publish amounts only after the AGM approves the fee schedule
  {
    id: "fees",
    category: "membership",
    question: "How much does membership cost?",
    answer: [
      { type: "p", text: "Registration fees and annual subscriptions for each category are set by resolution at the Annual General Meeting and published by the Committee. Contact the Secretary for the current schedule. Members facing genuine financial hardship may apply in confidence for a fee deferral or reduction." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 7.3.",
  },
  {
    id: "voting",
    category: "membership",
    question: "Which members can vote?",
    answer: [
      { type: "p", text: "Honorary Life, Fellow, Professional, Technologist, GIS Practitioner and Retired Members have full voting rights. Graduate, Associate and Student Members do not vote. An Associate Member can qualify for voting membership after one year of active probationary membership, once the Committee has found them competent." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6.",
  },
  {
    id: "benefits",
    category: "membership",
    question: "What do I get from membership?",
    answer: [
      {
        type: "ul",
        items: [
          "CPD events, workshops and technical sessions",
          "Contact with practising surveyors and geospatial professionals across Lesotho",
          "The Young Surveyors Chapter for graduates and early-career members",
          "A voice in the profession's standards and in GIL's recommendations to the Land Surveyors' Board",
          "Access to the Bursary and Professional Development Fund, once it is running",
        ],
      },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft).",
  },
  {
    id: "good-standing",
    category: "membership",
    question: "How do I keep my membership in good standing?",
    answer: [
      { type: "p", text: "Pay your annual subscription on time, meet your CPD requirement, follow the Code of Ethics, and — if you are licensed — keep your licence from the Land Surveyors' Board valid. Membership can end if dues are unpaid three months after the close of the financial year (after written notice). Reinstatement requires the outstanding dues plus 10% interest." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6 — termination and maintenance of membership.",
  },
  {
    id: "students",
    category: "membership",
    question: "I am a student. Can I join?",
    answer: [
      { type: "p", text: "Yes, as a Student Member if you are enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline. Student Members pay the student fee, are exempt from CPD, and can take part in the Young Surveyors Chapter." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), Art. 6 and CPD article.",
  },

  // ── training ──────────────────────────────────────────────
  {
    id: "find-supervisor",
    category: "training",
    question: "How do I find a supervisor for my candidacy?",
    answer: [
      { type: "p", text: "Your supervisor must be a registered professional in the same branch. Lesotho currently has only two licensed land surveyors, and eleven candidate surveyors are expected to be licensed by March 2027, so supervision capacity will grow over the coming year. Write to the Secretary and the Committee will help link you with a supervisor." },
    ],
    basis: "guidance",
    source: "GIL Framework (29 Sep 2026), s. 4; profession status, October 2026.",
  },
  {
    id: "who-supervise",
    category: "training",
    question: "Who is allowed to supervise candidates?",
    answer: [
      { type: "p", text: "A registered professional in the same branch. Under the transitional arrangement, a Professional who receives a licence may supervise graduates in training. A Technologist or Technician licensed under the transitional arrangement may **not** take graduates in training." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 4 and 5.5.",
  },
  {
    id: "articles",
    category: "training",
    question: "What are \"articles\"?",
    answer: [
      { type: "p", text: "Articles are the record of your practical training as a candidate: the work you did, in which category, for how many days, under whose supervision. Your supervisor records the actual time in each category, and the record is submitted to and evaluated by GIL before you apply for registration." },
    ],
    basis: "position",
    source: "GIL Framework (29 Sep 2026), ss. 4–5.",
  },
  {
    id: "mentorship",
    category: "training",
    question: "I am not a surveying graduate. How can I gain practical experience and mentorship?",
    answer: [
      {
        type: "ul",
        items: [
          "Attend GIL's CPD events and technical sessions.",
          "Join the Young Surveyors Chapter if you are a graduate or early in your career.",
          "Ask the Committee to introduce you to members in private practice or government who may host attachments or job-shadowing. These are arranged case by case and depend on members' capacity.",
          "Take part in the Technology and Innovation Sub-committee's work on drones, LiDAR and GNSS.",
        ],
      },
      { type: "p", text: "Attachments and shadowing build practical skills, but they count as candidacy towards a licence only if you hold a qualifying academic qualification." },
    ],
    basis: "guidance",
    source: "GIL Constitution (draft) — sub-committees and Young Surveyors Chapter; GIL Framework (29 Sep 2026).",
  },
  // TODO: [GIL CONTENT] — add criteria and application dates when the Fund opens
  {
    id: "bursaries",
    category: "training",
    question: "Does GIL offer bursaries?",
    answer: [
      { type: "p", text: "The GIL Constitution provides for a Bursary and Professional Development Fund. Details will be announced when it is established." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft).",
  },

  // ── cpd ──────────────────────────────────────────────
  {
    id: "cpd-hours",
    category: "cpd",
    question: "How much CPD do I need?",
    answer: [
      {
        type: "table",
        head: ["Category", "Minimum CPD per calendar year"],
        rows: [
          ["Professional Member", "25 hours"],
          ["Technologist Member", "20 hours"],
          ["GIS Practitioner Member", "20 hours"],
          ["Graduate Member", "10 hours (encouraged, not compulsory)"],
          ["Student Member", "Exempt"],
        ],
      },
      { type: "p", text: "At most 60% may be structured CPD and at least 40% unstructured. Keep a record and submit it by 31 March of the following year. Failing the requirement for two consecutive years can lead to suspension of voting membership. See [CPD](/cpd)." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), CPD article.",
  },
  {
    id: "cpd-what-counts",
    category: "cpd",
    question: "What counts as CPD?",
    answer: [
      {
        type: "ul",
        items: [
          "**Structured CPD** — formal courses, workshops and conferences with verifiable outcomes.",
          "**Unstructured CPD** — self-directed study, technical reading and mentoring.",
        ],
      },
      { type: "p", text: "The CPD Committee accredits activities and reviews records." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft), CPD article.",
  },
  {
    id: "indemnity",
    category: "cpd",
    question: "Do I need professional indemnity insurance?",
    answer: [
      { type: "p", text: "Professional indemnity cover is a condition of Professional Membership of GIL. The licensed surveyor is responsible in law for the correctness and completeness of every survey done by them or under their supervision." },
    ],
    basis: "constitution",
    source: "GIL Constitution (draft); Land Survey Act 1980, s. 14.",
  },
  {
    id: "discipline",
    category: "cpd",
    question: "What happens if a surveyor is accused of misconduct?",
    answer: [
      { type: "p", text: "There are two separate processes:" },
      {
        type: "ul",
        items: [
          "**The Land Surveyors' Board** can inquire into a licensed surveyor's professional misconduct. The surveyor has the right to be heard, in person or with legal counsel. The Board may revoke the licence, suspend it for up to three years, impose a fine, or reprimand. An aggrieved surveyor may appeal to the High Court within two months.",
          "**GIL** deals with breaches of its constitution and Code of Ethics by its members through its Disciplinary Committee: the member has 21 days to respond, the inquiry is completed within 60 days, and an appeal can be lodged within 30 days.",
        ],
      },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 9–11; GIL Constitution (draft), discipline article.",
  },

  // ── public ──────────────────────────────────────────────
  {
    id: "need-licensed",
    category: "public",
    question: "Do I need a licensed surveyor?",
    answer: [
      { type: "p", text: "Yes, for any survey that marks out land boundaries for a lease, a transfer, a subdivision or any other document that must be registered, and for any survey that affects boundaries or survey marks. The law reserves this work for licensed surveyors and authorised public officers." },
      { type: "p", text: "For topographic, engineering, construction set-out or GIS mapping work, the law does not require a licence, but you should still use a qualified practitioner." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 16.",
  },
  // TODO: [GIL CONTENT] — link to a public register page if the Board agrees to publish one
  {
    id: "check-licensed",
    category: "public",
    question: "How can I check whether a surveyor is licensed?",
    answer: [
      { type: "p", text: "The Land Surveyors' Board keeps a register of licensed surveyors, and every grant, suspension or revocation of a licence is published in the Government Gazette. You can also ask GIL." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 8 and 12.",
  },
  {
    id: "complaint",
    category: "public",
    question: "How do I complain about a surveyor?",
    answer: [
      {
        type: "ul",
        items: [
          "About **professional misconduct** by a licensed surveyor: write to the Land Surveyors' Board.",
          "About a **fee dispute** with a licensed surveyor: the Board hears and decides disputes over fees.",
          "About a **GIL member's conduct**: write to the GIL Secretary. GIL has a public complaints procedure and publishes summaries of outcomes.",
        ],
      },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 5 and 9; GIL Constitution (draft), public complaints procedure.",
  },
  {
    id: "beacons",
    category: "public",
    question: "Someone has moved or destroyed a boundary beacon. What can I do?",
    answer: [
      { type: "p", text: "Moving, hiding, damaging or destroying a survey mark that was lawfully placed is an offence under the Land Survey Act. Report it, and engage a licensed surveyor to re-establish the beacon from the authenticated survey records held by the Chief Surveyor." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 17(4).",
  },
  {
    id: "entry-land",
    category: "public",
    question: "Can a surveyor come onto my land?",
    answer: [
      { type: "p", text: "Yes. The Chief Surveyor, persons authorised by the Chief Surveyor, and surveyors may enter land, with assistants and equipment, to carry out their duties under the Act and place survey marks. If they cause damage that could have been avoided, the owner or occupier can claim compensation — but the claim must be made within two months of the damage. Disagreements over the amount are referred to a magistrate." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, s. 17.",
  },
  {
    id: "survey-records",
    category: "public",
    question: "How do I get copies of survey plans or maps?",
    answer: [
      { type: "p", text: "The Chief Surveyor keeps all survey records and issues certified copies of public plans, maps and documents on request, for the prescribed fee. Before any survey, a licensed surveyor obtains the information on previous surveys of the land and neighbouring land from the Chief Surveyor." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 3 and 15(2).",
  },
  {
    id: "defective-survey",
    category: "public",
    question: "Who is responsible if a survey is wrong?",
    answer: [
      { type: "p", text: "The licensed surveyor is responsible for the correctness and completeness of every survey they carry out or supervise. The Government and public officers are not liable for a defective survey by a licensed surveyor, even if the plan has been authenticated. The Chief Surveyor can require the surveyor to correct an error at their own expense and can cancel the authentication of an inaccurate plan." },
    ],
    basis: "law",
    source: "Land Survey Act 1980, ss. 14, 19 and 21, as amended by Act No. 2 of 2019.",
  },
  {
    id: "leases",
    category: "public",
    question: "Where do I go for a lease or land registration?",
    answer: [
      { type: "p", text: "Leases and land registration are handled by the Land Administration Authority (LAA) under the Land Act 2010 and the Land Administration Authority Act 2010. The boundary survey and plan for a lease must be done by a licensed surveyor and authenticated by the Chief Surveyor." },
    ],
    basis: "law",
    source: "Land Act No. 8 of 2010; LAA Act No. 9 of 2010; Land Survey Act 1980, ss. 16 and 20.",
  },
]

function stripMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
}

/** Flattens an answer to plain text, for search and JSON-LD. */
export function faqItemToPlainText(item: FaqItem): string {
  return item.answer
    .map((block) => {
      if (block.type === "p") return stripMarkdown(block.text)
      if (block.type === "ul") return block.items.map(stripMarkdown).join("\n")
      return [block.head, ...block.rows]
        .map((row) => row.map(stripMarkdown).join(" | "))
        .join("\n")
    })
    .join("\n\n")
}
