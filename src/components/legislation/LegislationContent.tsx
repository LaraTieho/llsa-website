"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Download, ChevronDown, ExternalLink, AlertTriangle } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { CommonQuestions } from "@/components/faq/CommonQuestions"

// ── Types ──────────────────────────────────────────────────────
interface Act {
  title: string
  number: string
  year: number
  adminBody: string
  status: "In Force" | "Amended" | "Subsidiary" | "Repealed"
  statusNote?: string
  purpose: string
  downloadHref: string
  sourceNote?: string
}

interface Provision {
  heading: string
  body: string
}

interface LibraryDoc {
  title: string
  href: string
  type: "PDF" | "Word"
}

interface ExternalLink {
  label: string
  description: string
  href: string
}

// ── Data ───────────────────────────────────────────────────────
const ACTS: Act[] = [
  {
    title: "Land Survey Act",
    number: "No. 14 of 1980",
    year: 1980,
    adminBody: "Chief Surveyor / Commissioner of Lands",
    status: "In Force",
    statusNote: "as amended",
    purpose:
      "The principal Act establishing the licensing regime for professional land surveyors in Lesotho. It defines the office of the Chief Surveyor, prescribes the conditions under which survey diagrams are prepared and lodged, and sets out penalties for unlicensed practice.",
    downloadHref: "/docs/land-survey-act-1980.pdf",
  },
  {
    title: "Land Survey Regulations",
    number: "1982",
    year: 1982,
    adminBody: "Chief Surveyor / Commissioner of Lands",
    status: "In Force",
    purpose:
      "Subsidiary legislation made under the Land Survey Act prescribing accuracy standards, diagram formats, field note requirements, and the procedural rules governing lodgement of survey records with the Chief Surveyor.",
    downloadHref: "/docs/land-survey-regulations-1982.pdf",
  },
  {
    title: "Land Survey (Amendment) Act",
    number: "No. 15 of 2012",
    year: 2012,
    adminBody: "[Superseded]",
    status: "Repealed",
    purpose:
      "Originally transferred the Chief Surveyor's functions to the Land Administration Authority. Repealed in its entirety by the Land Survey (Amendment) Act 2019 (Act No. 2 of 2019). Not currently in force.",
    downloadHref: "/docs/land-survey-amendment-act-2012.pdf",
  },
  {
    title: "Land Survey (Amendment) Act",
    number: "No. 2 of 2019",
    year: 2019,
    adminBody: "Chief Surveyor / Commissioner of Lands",
    status: "In Force",
    purpose:
      "Repeals the Land Survey (Amendment) Act 2012 in its entirety. Restores the office of Chief Surveyor to the Public Service under the Commissioner of Lands. Establishes the Land Surveyors' Board (chaired by the Chief Surveyor, with representatives from the LAA, licensed surveyors, and the ministries of Local Government and Education). Meetings quarterly; 3-year terms, maximum two consecutive.",
    downloadHref: "/docs/land-survey-amendment-act-2019.pdf",
    sourceNote: "Gazette Vol. 64, No. 30, 18 April 2019",
  },
  {
    title: "Land Administration Authority Act",
    number: "No. 9 of 2010",
    year: 2010,
    adminBody: "Land Administration Authority",
    status: "In Force",
    purpose:
      "Establishes the LAA as an autonomous body responsible for land administration in Lesotho, including cadastral survey management, title registration, and land valuation functions previously dispersed across government ministries.",
    downloadHref: "/docs/laa-act-2010.pdf",
  },
  {
    title: "Land Act",
    number: "No. 8 of 2010",
    year: 2010,
    adminBody: "Commissioner of Lands",
    status: "In Force",
    statusNote: "as amended",
    purpose:
      "The primary land tenure statute governing allocation, leasing, and registration of rights in land. It establishes the legal framework within which cadastral surveys are required for lease issuance and provides for customary land rights recognition.",
    downloadHref: "/docs/land-act-2010.pdf",
  },
  {
    title: "Land Surveyors (Appointment of Members of the Board) Notice, 2026",
    number: "L.N. No. 69–72 of 2026",
    year: 2026,
    adminBody: "Minister of Local Government and Chieftainship",
    status: "In Force",
    purpose:
      "Appoints the members of the Land Surveyors' Board under section 4(1) of the Land Survey Act, 1980: Mr. Pheello Ramotubei (Chairperson); Adv. Moupo Ntoko (Ministry of Local Government and Chieftainship); Mr. Moleli Mochoni (Land Administration Authority); Mr. Martin Nts'ihlele (registered land surveyors); and Mr. Lipholo Motlalane (Ministry of Education). Published as Legal Notice No. 71 in the Gazette containing L.N. No. 69–72 of 2026.",
    downloadHref: "/docs/gazette-ln-69-72-of-2026.pdf",
    sourceNote: "Lesotho Government Gazette Vol. 71, No. 65, 31 July 2026",
  },
]

const DOCUMENTS: LibraryDoc[] = [
  { title: "Land Survey Act No. 14 of 1980", href: "/docs/land-survey-act-1980.pdf", type: "PDF" },
  { title: "Land Survey Regulations, 1982", href: "/docs/land-survey-regulations-1982.pdf", type: "PDF" },
  { title: "Land Survey (Amendment) Act No. 15 of 2012 (repealed)", href: "/docs/land-survey-amendment-act-2012.pdf", type: "PDF" },
  { title: "Land Survey (Amendment) Act No. 2 of 2019", href: "/docs/land-survey-amendment-act-2019.pdf", type: "PDF" },
  { title: "Land Administration Authority Act No. 9 of 2010", href: "/docs/laa-act-2010.pdf", type: "PDF" },
  { title: "Land Act No. 8 of 2010", href: "/docs/land-act-2010.pdf", type: "PDF" },
  { title: "L.N. No. 69–72 of 2026 — Gazette Vol. 71 No. 65 (incl. appointment of the Land Surveyors' Board, L.N. No. 71)", href: "/docs/gazette-ln-69-72-of-2026.pdf", type: "PDF" },
  { title: "GIL Constitution (draft)", href: "/docs/gil-constitution-draft-2026.pdf", type: "PDF" },
  { title: "Membership application form (Word, editable)", href: "/docs/gil-membership-application-form.docx", type: "Word" },
  { title: "Membership application form (PDF, for printing)", href: "/docs/gil-membership-application-form.pdf", type: "PDF" },
]

const PROVISIONS: Provision[] = [
  {
    heading: "Licensing requirements under the Land Survey Act",
    body: "The Land Survey Act No. 14 of 1980 requires any person wishing to practise as a land surveyor to hold a licence issued under the Act. The Chief Surveyor administers the licensing regime. Unlicensed surveying is an offence.",
  },
  {
    heading: "Chief Surveyor: Public Service and Commissioner of Lands (post-2019)",
    body: "The Land Survey (Amendment) Act 2019 (Act No. 2 of 2019) restores the Chief Surveyor to the Public Service, responsible to the Commissioner of Lands. The 2012 Act that had transferred the Chief Surveyor to the LAA is fully repealed. The Chief Surveyor's duties include chairing the Land Surveyors' Board, establishing spatial data infrastructure, and maintaining the national geodetic control network.",
  },
  {
    heading: "Land Surveyors' Board: composition and mandate (2019 Act)",
    body: "The 2019 Amendment Act establishes the Land Surveyors' Board. The Board is chaired by the Chief Surveyor and includes: a representative of the Land Administration Authority; licensed surveyors; a representative of the Ministry of Local Government and Chieftainship Affairs; and a representative of the Ministry of Education. Members serve 3-year terms with a maximum of two consecutive terms. The Board meets quarterly.",
  },
  {
    heading: "National cadastre: LAA's administration role",
    body: "The Land Administration Authority Act 2010 (Act No. 9 of 2010) establishes the LAA as the body responsible for administering the national land cadastre. The LAA registers surveyed parcels, maintains cadastral records, processes subdivisions and consolidations, and provides cadastre information to the public. Cadastral surveys must be certified by a licensed surveyor before lodgement with the LAA.",
  },
  {
    heading: "Non-liability of the Government and public officers (s.14(2))",
    body: "Section 14(2) of the Land Survey Act (as restored by the 2019 Amendment Act) provides that the Government or a public officer shall not be liable for any act or omission arising from the performance of survey functions. Note: the 2012 Act had substituted 'the Authority' (LAA) in this provision; the 2019 Act reinstates the original 'Government or public officer' formulation, consistent with the Chief Surveyor's restored public service status.",
  },
  {
    heading: "Land tenure and lease framework under the Land Act 2010",
    body: "The Land Act 2010 (Act No. 8 of 2010) vests all land in Lesotho in the Basotho Nation. Land is allocated by the Commissioner of Lands (urban areas) and land allocation authorities (rural areas). Leases are the primary form of title. All lease transactions require cadastral survey data certified by a licensed surveyor.",
  },
]

const EXTERNAL_LINKS: ExternalLink[] = [
  {
    label: "LesLII",
    description: "Lesotho Legal Information Institute",
    href: "https://lesotholii.org/legislation/",
  },
  {
    label: "Laws.Africa",
    description: "African Legislation Commons",
    href: "https://laws.africa",
  },
  {
    label: "LAA Website",
    description: "Land Administration Authority",
    href: "https://www.laa.org.ls",
  },
  {
    label: "Government of Lesotho",
    description: "Official government portal",
    href: "https://www.gov.ls",
  },
]

// Status badge colour map
const STATUS_STYLES: Record<Act["status"], string> = {
  "In Force": "bg-secondary/10 text-secondary border-secondary/20",
  "Amended": "bg-accent/15 text-accent border-accent/25",
  "Subsidiary": "bg-muted text-foreground/55 border-border",
  "Repealed": "bg-[#E8E5DE] text-[#4A4A4A] border-[#4A4A4A]/20",
}

// ── ActCard ────────────────────────────────────────────────────
function ActCard({ act }: { act: Act }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col gap-5 p-7 rounded-xl border border-border border-l-4 border-l-accent bg-card"
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex flex-col gap-1 min-w-0">
          <p className="font-mono text-[11px] text-foreground/40 tracking-wider">{act.number}</p>
          <h3 className="font-display text-lg text-primary font-bold leading-snug">{act.title}</h3>
        </div>
        <span
          className={`self-start shrink-0 text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded border ${STATUS_STYLES[act.status]}`}
        >
          {act.status}
          {act.statusNote && (
            <span className="normal-case font-normal opacity-75"> · {act.statusNote}</span>
          )}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-foreground/55 font-sans">
        <span>
          <span className="font-medium text-foreground/70">Year enacted:</span> {act.year}
        </span>
        <span>
          <span className="font-medium text-foreground/70">Administered by:</span> {act.adminBody}
        </span>
      </div>

      {/* Purpose */}
      <p className="text-sm text-foreground/65 leading-relaxed">{act.purpose}</p>

      {/* Download */}
      <div className="pt-1 flex flex-col gap-1.5">
        <a
          href={act.downloadHref}
          download
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/75 transition-colors group"
        >
          <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          Download PDF ↓
        </a>
        {act.sourceNote && (
          <p className="text-xs text-foreground/40">{act.sourceNote}</p>
        )}
      </div>
    </motion.div>
  )
}

// ── AccordionItem ──────────────────────────────────────────────
function AccordionItem({ item, index }: { item: Provision; index: number }) {
  const [open, setOpen] = useState(false)
  const headingId = `provision-heading-${index}`
  const panelId = `provision-panel-${index}`

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-lg border border-border overflow-hidden"
    >
      <button
        id={headingId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-muted/25 transition-colors"
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-[11px] font-bold text-accent shrink-0 mt-0.5" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans text-base font-semibold text-primary leading-snug">
            {item.heading}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
          className="shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4 text-foreground/40" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-3 bg-card border-t border-border/40">
              <p className="text-sm text-foreground/65 leading-relaxed pl-9">
                {item.body}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── LegislationContent ─────────────────────────────────────────
export function LegislationContent() {
  const introRef = useRef<HTMLDivElement>(null)
  const cardsHeadingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const noteRef = useRef<HTMLDivElement>(null)
  const provisionsHeadingRef = useRef<HTMLDivElement>(null)
  const provisionsRef = useRef<HTMLDivElement>(null)
  const libraryRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const introInView = useInView(introRef, { once: true, amount: 0.5 })
  const cardsHeadingInView = useInView(cardsHeadingRef, { once: true, amount: 0.6 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.06 })
  const noteInView = useInView(noteRef, { once: true, amount: 0.5 })
  const provisionsHeadingInView = useInView(provisionsHeadingRef, { once: true, amount: 0.6 })
  const provisionsInView = useInView(provisionsRef, { once: true, amount: 0.06 })
  const libraryInView = useInView(libraryRef, { once: true, amount: 0.1 })
  const resourcesInView = useInView(resourcesRef, { once: true, amount: 0.25 })

  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="bg-background pt-14 pb-12">
        <div className="container max-w-3xl">
          <motion.p
            ref={introRef}
            variants={fadeInUp}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="text-base text-foreground/65 leading-relaxed"
          >
            Land survey practice in Lesotho is governed by statute. The following legislation is
            publicly available and forms the basis of examination, licensing, and professional
            practice for all GIL members. Downloads are provided for reference — these versions
            may not reflect the most current official gazette. Members should verify currency with
            the LAA or Office of Parliamentary Counsel.
          </motion.p>
          <CommonQuestions
            className="mt-8"
            links={[
              { label: "Who may carry out a boundary survey?", href: "/faq#who-may-survey" },
              { label: "Is GIL the same as the Land Surveyors' Board?", href: "/faq#gil-vs-board" },
              { label: "Do I need permission to fly drones for mapping?", href: "/faq#drones-aerial" },
            ]}
          />
        </div>
      </section>

      {/* ── Legislation Cards ──────────────────────────────────── */}
      <section className="bg-background pb-24">
        <div className="container">

          {/* Section heading */}
          <motion.div
            ref={cardsHeadingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={cardsHeadingInView ? "visible" : "hidden"}
            className="max-w-2xl mb-10"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              Primary & Subsidiary Legislation
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary"
            >
              Applicable Acts & Regulations
            </motion.h2>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            ref={cardsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {ACTS.map((act, i) => (
              <ActCard key={i} act={act} />
            ))}
          </motion.div>

          {/* Note box */}
          <motion.div
            ref={noteRef}
            variants={fadeInUp}
            initial="hidden"
            animate={noteInView ? "visible" : "hidden"}
            className="mt-10 flex items-start gap-4 rounded-xl border border-accent/35 bg-primary p-6"
          >
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-white/70 leading-relaxed">
              These documents are reproduced for professional reference. The authoritative versions
              are those published in the{" "}
              <em className="not-italic font-medium text-white/90">Lesotho Government Gazette</em>.
              {" "}The Land Survey (Amendment) Act 2019 (Act No. 2 of 2019) is the current
              amendment to the Land Survey Act — the 2012 Amendment Act has been fully repealed.
              {" "}Sources:{" "}
              <span className="text-accent font-medium">LesLII (www.lesotholii.org)</span>
              {" "}and the{" "}
              <span className="text-accent font-medium">Laws.Africa Legislation Commons</span>.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Key Provisions Accordion ───────────────────────────── */}
      <section className="bg-muted/40 py-24">
        <div className="container">

          <motion.div
            ref={provisionsHeadingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={provisionsHeadingInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              Reference
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary"
            >
              Key Provisions for Surveyors
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base text-foreground/60 leading-relaxed"
            >
              A summary of the legislative provisions most relevant to day-to-day professional
              practice and examination preparation.
            </motion.p>
          </motion.div>

          <motion.div
            ref={provisionsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={provisionsInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto flex flex-col gap-3"
          >
            {PROVISIONS.map((item, i) => (
              <AccordionItem key={i} item={item} index={i} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Document Library ───────────────────────────────────── */}
      <section id="documents" className="bg-background pt-20 scroll-mt-28">
        <div className="container">
          <motion.div
            ref={libraryRef}
            variants={staggerContainer}
            initial="hidden"
            animate={libraryInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={staggerContainer} className="text-center mb-10">
              <motion.p
                variants={fadeInUp}
                className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
                aria-hidden="true"
              >
                Downloads
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-2xl md:text-display-md text-primary"
              >
                Document Library
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {DOCUMENTS.map((doc) => (
                <motion.a
                  key={doc.href}
                  href={doc.href}
                  download
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all group"
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="self-start font-mono text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/25 rounded px-1.5 py-0.5">
                      {doc.type}
                    </span>
                    <span className="font-sans font-semibold text-primary text-sm leading-snug group-hover:text-accent transition-colors break-words">
                      {doc.title}
                    </span>
                  </div>
                  <Download className="h-4 w-4 text-foreground/25 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── External Resources ─────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container">
          <motion.div
            ref={resourcesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={resourcesInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={staggerContainer} className="text-center mb-10">
              <motion.p
                variants={fadeInUp}
                className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
                aria-hidden="true"
              >
                Where to find them
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-2xl md:text-display-md text-primary"
              >
                External Resources
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {EXTERNAL_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all group"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans font-semibold text-primary text-base group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                    <span className="text-sm text-foreground/50">{link.description}</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-foreground/25 group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
