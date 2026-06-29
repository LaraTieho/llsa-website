"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Download, ChevronDown, ExternalLink, AlertTriangle } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

// ── Types ──────────────────────────────────────────────────────
interface Act {
  title: string
  number: string
  year: number
  adminBody: string
  status: "In Force" | "Amended" | "Subsidiary"
  statusNote?: string
  purpose: string
  downloadHref: string
}

interface Provision {
  heading: string
  body: string
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
    adminBody: "Land Administration Authority",
    status: "In Force",
    statusNote: "as amended",
    purpose:
      "The principal Act establishing the licensing regime for professional land surveyors in Lesotho. It defines the office of the Chief Surveyor, prescribes the conditions under which survey diagrams are prepared and lodged, and sets out penalties for unlicensed practice.",
    downloadHref: "/docs/land-survey-act-1980.pdf", // TODO: [LLSA CONTENT] — upload actual PDF to public/docs/ and verify path
  },
  {
    title: "Land Survey Regulations",
    number: "1982",
    year: 1982,
    adminBody: "Land Administration Authority",
    status: "In Force",
    purpose:
      "Subsidiary legislation made under the Land Survey Act prescribing accuracy standards, diagram formats, field note requirements, and the procedural rules governing lodgement of survey records with the Chief Surveyor.",
    downloadHref: "/docs/land-survey-regulations-1982.pdf", // TODO: [LLSA CONTENT] — upload actual PDF to public/docs/ and verify path
  },
  {
    title: "Land Survey (Amendment) Act",
    number: "No. 15 of 2012",
    year: 2012,
    adminBody: "Land Administration Authority",
    status: "In Force",
    purpose:
      "Amends the 1980 Act to transfer the Chief Surveyor's functions from the Public Service to the Land Administration Authority, and formally assigns the cadastre administration mandate to the LAA as a statutory function.",
    downloadHref: "/docs/land-survey-amendment-act-2012.pdf", // TODO: [LLSA CONTENT] — upload actual PDF to public/docs/ and verify path
  },
  {
    title: "Land Administration Authority Act",
    number: "No. 9 of 2010",
    year: 2010,
    adminBody: "Land Administration Authority",
    status: "In Force",
    purpose:
      "Establishes the LAA as an autonomous body responsible for land administration in Lesotho, including cadastral survey management, title registration, and land valuation functions previously dispersed across government ministries.",
    downloadHref: "/docs/laa-act-2010.pdf", // TODO: [LLSA CONTENT] — upload actual PDF to public/docs/ and verify path
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
    downloadHref: "/docs/land-act-2010.pdf", // TODO: [LLSA CONTENT] — upload actual PDF to public/docs/ and verify path
  },
]

const PROVISIONS: Provision[] = [
  {
    heading: "Licensing requirements under the Land Survey Act",
    body: "Section 6 of the Land Survey Act No. 14 of 1980 prohibits any person from practising as a land surveyor unless duly licensed by the Chief Surveyor. Applicants must satisfy prescribed academic qualifications, complete a period of supervised practical training, and pass qualifying examinations. LLSA administers the professional examination on behalf of its members, and membership is a prerequisite for licensing consideration.",
  },
  {
    heading: "Chief Surveyor's functions and the LAA (post-2012 amendment)",
    body: "Prior to 2012 the Chief Surveyor was a public servant within the Ministry of Local Government. The Land Survey (Amendment) Act 2012 transferred these functions to the Land Administration Authority, making the position an LAA executive role. The Chief Surveyor retains statutory responsibilities including approving survey diagrams, maintaining the cadastre, and licensing surveyors.",
  },
  {
    heading: "Cadastre administration mandate (Amendment Act 2012, s.3(g))",
    body: "Section 3(g) of the Amendment Act formally vests the LAA with the mandate to administer, maintain, and develop the national cadastre. This encompasses the cadastral index, survey diagram archives, trigonometrical beacon network, and geodetic control infrastructure. All LLSA members conducting cadastral surveys must lodge diagrams with the LAA in compliance with this mandate.",
  },
  {
    heading: "Duties of licensed surveyors and non-liability of the Authority (s.14(2))",
    body: "Section 14(2) of the Land Survey Act clarifies that approval of a diagram by the Chief Surveyor does not relieve the surveyor of professional responsibility for the accuracy of measurements and computations contained therein. The licensed surveyor remains solely liable for the correctness of the survey. LLSA's Code of Professional Conduct reinforces this statutory duty.",
  },
  {
    heading: "Land allocation and lease framework under the Land Act 2010",
    body: "The Land Act 2010 requires that any allocation of land for lease purposes be supported by a cadastral survey diagram approved under the Land Survey Act. Section 33 et seq. prescribes the lease registration process, requiring certified survey documentation as a precondition to title registration by the LAA — creating a direct operational link between licensed survey practice and the land rights adjudication process.",
  },
]

const EXTERNAL_LINKS: ExternalLink[] = [
  {
    label: "LesLII",
    description: "Lesotho Legal Information Institute",
    href: "https://lesotholii.org",
  },
  {
    label: "Laws.Africa",
    description: "African Legislation Commons",
    href: "https://laws.africa",
  },
  {
    label: "LAA Website",
    description: "Land Administration Authority",
    href: "#", // TODO: [LLSA CONTENT] — replace with actual LAA website URL
  },
  {
    label: "Office of Parliamentary Counsel",
    description: "Official legislative drafting office",
    href: "#", // TODO: [LLSA CONTENT] — replace with actual Office of Parliamentary Counsel website URL
  },
]

// Status badge colour map
const STATUS_STYLES: Record<Act["status"], string> = {
  "In Force": "bg-secondary/10 text-secondary border-secondary/20",
  "Amended": "bg-accent/15 text-accent border-accent/25",
  "Subsidiary": "bg-muted text-foreground/55 border-border",
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
      <div className="pt-1">
        <a
          href={act.downloadHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/75 transition-colors group"
        >
          <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          Download PDF ↓
        </a>
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
  const resourcesRef = useRef<HTMLDivElement>(null)

  const introInView = useInView(introRef, { once: true, amount: 0.5 })
  const cardsHeadingInView = useInView(cardsHeadingRef, { once: true, amount: 0.6 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.06 })
  const noteInView = useInView(noteRef, { once: true, amount: 0.5 })
  const provisionsHeadingInView = useInView(provisionsHeadingRef, { once: true, amount: 0.6 })
  const provisionsInView = useInView(provisionsRef, { once: true, amount: 0.06 })
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
            practice for all LLSA members. Downloads are provided for reference — these versions
            may not reflect the most current official gazette. Members should verify currency with
            the LAA or Office of Parliamentary Counsel.
          </motion.p>
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
