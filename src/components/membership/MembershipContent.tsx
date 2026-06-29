"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  BadgeCheck, Ruler, GraduationCap,
  Search, Check, AlertTriangle, FileDown, MapPin,
} from "lucide-react"
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations"
import type { LucideIcon } from "lucide-react"

// ── Types ──────────────────────────────────────────────────────

interface Category {
  Icon: LucideIcon
  label: string
  title: string
  description: string
  requirements: string[]
  cta: string
}

interface Member {
  name: string
  licenceNo: string
  category: string
  district: string
  contact: string
}

// ── Data ───────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    Icon: BadgeCheck,
    label: "Professional",
    title: "Professional Land Surveyor",
    description:
      "Full membership for persons holding a professional surveying licence issued under the Land Survey Act and recognised by the LAA.",
    requirements: [
      "Licensed under Land Survey Act s.XX", // TODO: [LLSA CONTENT] — replace "s.XX" with the correct section number from the Land Survey Act 1980
      "Passed professional examinations",
      "Prescribed work experience certified",
    ],
    cta: "Apply — Professional",
  },
  {
    Icon: Ruler,
    label: "Associate",
    title: "Survey Technologist / Technician",
    description:
      "Associate membership for survey technologists and technicians supporting the cadastral and engineering survey functions.",
    requirements: [
      "Relevant technical qualification",
      "Working under supervision of a licensed surveyor",
      "Or through LAA-recognised programme",
    ],
    cta: "Apply — Technologist",
  },
  {
    Icon: GraduationCap,
    label: "Student",
    title: "Student Member",
    description:
      "Student membership for geomatics students at recognised institutions, including Lerotholi Polytechnic and partner universities.",
    requirements: [
      "Currently enrolled in a recognised land surveying or geomatics programme",
    ],
    cta: "Apply — Student",
  },
]

const STEPS = [
  {
    title: "Download & complete the application form",
    description:
      "Obtain the LLSA membership application form from the Secretary or this website.",
  },
  {
    title: "Attach proof of qualification and experience",
    description:
      "Certified copies of transcripts, certificates, and a letter from your supervising surveyor where applicable.",
  },
  {
    title: "Submit to LLSA Secretary with applicable fee",
    description:
      "Deliver your completed application and supporting documents together with the applicable membership fee.",
  },
  {
    title: "Applications reviewed by Council within 30 days",
    description:
      "The Council reviews all applications at its next scheduled meeting, which convenes within 30 days of submission.",
  },
  {
    title: "Certificate of membership issued upon approval",
    description:
      "Successful applicants receive a signed certificate and are listed in the LLSA register.",
  },
]

// TODO: [LLSA CONTENT] — PLACEHOLDER DATA: replace with actual licensed surveyor register entries from the LAA/LLSA records
const MEMBERS: Member[] = [
  {
    name: "M. Mokoena",
    licenceNo: "LS-001-2018",
    category: "Professional Land Surveyor",
    district: "Maseru",
    contact: "[Contact via Secretary]",
  },
  {
    name: "T. Letsie",
    licenceNo: "LS-024-2015",
    category: "Professional Land Surveyor",
    district: "Leribe",
    contact: "[Contact via Secretary]",
  },
  {
    name: "S. Nthati",
    licenceNo: "ST-007-2020",
    category: "Survey Technologist",
    district: "Berea",
    contact: "[Contact via Secretary]",
  },
]

// ── CategoryCard ───────────────────────────────────────────────

function CategoryCard({ cat }: { cat: Category }) {
  const Icon = cat.Icon
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-6 p-8 rounded-xl border border-border border-l-4 border-l-accent bg-card hover:shadow-md transition-shadow"
    >
      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
          {cat.label}
        </span>
      </div>

      <h3 className="font-display text-xl text-primary font-bold leading-snug">{cat.title}</h3>

      <p className="text-sm text-foreground/65 leading-relaxed">{cat.description}</p>

      {/* Requirements */}
      <ul className="flex flex-col gap-2.5">
        {cat.requirements.map((req, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 mt-0.5" aria-hidden="true">
              <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
            </span>
            {req}
          </li>
        ))}
      </ul>

      {/* Fee */}
      <div className="flex items-center gap-2 pt-1 border-t border-border">
        <span className="text-xs text-foreground/40 font-sans">Annual fee:</span>
        {/* TODO: [LLSA CONTENT] — replace with actual annual membership fee for each category */}
        <span className="text-xs font-mono font-medium text-foreground/55">
          [Contact Secretary]
        </span>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {/* TODO: [LLSA CONTENT] — replace "#" with actual membership application link or form URL for each category */}
        <a
          href="#"
          className="block w-full text-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors"
        >
          {cat.cta}
        </a>
      </div>
    </motion.div>
  )
}

// ── MemberCard ─────────────────────────────────────────────────

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -2 }}
      className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/35 hover:shadow-sm transition-all"
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center">
          <span className="font-mono text-sm font-bold text-primary">
            {member.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-sans font-semibold text-primary text-base leading-snug">
            {member.name}
          </p>
          <p className="font-mono text-[11px] text-accent tracking-wider">{member.licenceNo}</p>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-1.5 text-sm">
        <div className="flex gap-3">
          <span className="font-medium text-foreground/55 w-20 shrink-0">Category</span>
          <span className="text-foreground/75">{member.category}</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-medium text-foreground/55 w-20 shrink-0 flex items-center gap-1">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            District
          </span>
          <span className="text-foreground/75">{member.district}</span>
        </div>
        <div className="flex gap-3">
          <span className="font-medium text-foreground/55 w-20 shrink-0">Contact</span>
          <span className="text-foreground/35 italic text-xs">{member.contact}</span>
        </div>
      </div>
    </motion.div>
  )
}

// ── MembershipContent ──────────────────────────────────────────

export function MembershipContent() {
  const catsHeadingRef = useRef<HTMLDivElement>(null)
  const catsRef = useRef<HTMLDivElement>(null)
  const processHeadingRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const dirHeadingRef = useRef<HTMLDivElement>(null)
  const dirRef = useRef<HTMLDivElement>(null)
  const noteRef = useRef<HTMLDivElement>(null)

  const catsHeadingInView = useInView(catsHeadingRef, { once: true, amount: 0.6 })
  const catsInView = useInView(catsRef, { once: true, amount: 0.08 })
  const processHeadingInView = useInView(processHeadingRef, { once: true, amount: 0.6 })
  const processInView = useInView(processRef, { once: true, amount: 0.06 })
  const dirHeadingInView = useInView(dirHeadingRef, { once: true, amount: 0.6 })
  const dirInView = useInView(dirRef, { once: true, amount: 0.06 })
  const noteInView = useInView(noteRef, { once: true, amount: 0.5 })

  return (
    <>
      {/* ── Membership Categories ─────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container">

          <motion.div
            ref={catsHeadingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={catsHeadingInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              Membership
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary"
            >
              Membership Categories
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base text-foreground/60 leading-relaxed"
            >
              LLSA offers three categories of membership aligned with the licensing and
              qualification framework prescribed by the Land Survey Act.
            </motion.p>
          </motion.div>

          <motion.div
            ref={catsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={catsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={i} cat={cat} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Application Process ───────────────────────────────── */}
      <section className="bg-primary py-24">
        <div className="container">

          <motion.div
            ref={processHeadingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={processHeadingInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              How to apply
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-white"
            >
              Application Process
            </motion.h2>
          </motion.div>

          <motion.div
            ref={processRef}
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="relative max-w-5xl mx-auto"
          >
            {/* Desktop: horizontal connector line running through step circle centres */}
            <div
              className="hidden lg:block absolute top-[22px] h-px z-0"
              style={{ left: "calc(10% + 22px)", right: "calc(10% + 22px)" }}
              aria-hidden="true"
            >
              <div className="h-full bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
            </div>

            {/* Mobile: vertical spine through all steps */}
            <div
              className="lg:hidden absolute left-[21px] inset-y-0 w-px z-0 bg-gradient-to-b from-transparent via-accent/25 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={slideInLeft}
                  className="flex-1 flex lg:flex-col gap-5 lg:gap-4 items-start lg:items-center lg:text-center py-6 lg:py-0 lg:px-2"
                >
                  {/* Number circle — z-10 sits above both connector lines */}
                  <div className="relative z-10 shrink-0 h-11 w-11 rounded-full bg-accent flex items-center justify-center font-mono text-sm font-bold text-primary shadow-sm">
                    {i + 1}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="font-sans text-sm font-semibold text-white leading-snug">
                      {step.title}
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download form CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="mt-14 flex justify-center"
          >
            {/* TODO: [LLSA CONTENT] — upload membership application form PDF to public/docs/llsa-membership-application.pdf */}
            <a
              href="/docs/llsa-membership-application.pdf"
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-accent px-7 py-3.5 text-sm font-semibold text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              <FileDown className="h-4 w-4" />
              Download Application Form
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── Member Directory ──────────────────────────────────── */}
      <section className="bg-muted/40 py-24">
        <div className="container">

          <motion.div
            ref={dirHeadingRef}
            variants={staggerContainer}
            initial="hidden"
            animate={dirHeadingInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              Public Register
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary"
            >
              Find a Licensed Surveyor
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base text-foreground/60 leading-relaxed"
            >
              Search the LLSA register of licensed surveyors by name, district, or licence number.
            </motion.p>
          </motion.div>

          {/* Search input */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={dirHeadingInView ? "visible" : "hidden"}
            className="max-w-xl mx-auto mb-10"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/35 pointer-events-none" aria-hidden="true" />
              <label htmlFor="surveyor-search" className="sr-only">Search licensed surveyors by name, licence number or district</label>
              <input
                id="surveyor-search"
                type="search"
                placeholder="Search by name, licence number or district…"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 pl-11 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
              />
            </div>
            <p className="mt-2 text-center text-xs text-foreground/40">
              Live directory search is not yet active — showing sample register entries.
            </p>
          </motion.div>

          {/* Member cards */}
          <motion.div
            ref={dirRef}
            variants={staggerContainer}
            initial="hidden"
            animate={dirInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10"
          >
            {MEMBERS.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </motion.div>

          {/* Note box */}
          <motion.div
            ref={noteRef}
            variants={fadeInUp}
            initial="hidden"
            animate={noteInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto flex items-start gap-4 rounded-xl border border-accent/30 bg-primary p-6"
          >
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-white/70 leading-relaxed">
              Directory is for public reference only. Licence status should be verified with the{" "}
              <span className="text-accent font-medium">Land Administration Authority</span>.
              The LLSA register is maintained on a best-efforts basis and may not reflect
              real-time licensing changes.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
