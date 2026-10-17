"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  BadgeCheck, Ruler, Globe, GraduationCap, BookOpen, Handshake, Hourglass, Medal, Award,
  Search, Check, AlertTriangle, FileDown, FileText, MapPin,
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
  href?: string
}

interface Member {
  name: string
  licenceNo: string
  category: string
  district: string
  contact: string
}

// ── Data ───────────────────────────────────────────────────────

const APPLICATION_FORM = "/docs/gil-membership-application-form.docx"

// Membership categories — Constitution draft, Art. 6.7; CPD hours from Art. 8
const CATEGORIES: Category[] = [
  {
    Icon: BadgeCheck,
    label: "Voting",
    title: "Professional Member",
    description:
      "Licensed Professional Land Surveyor registered under the Land Survey Act.",
    requirements: [
      "Licensed and registered under the Land Survey Act",
      "Voting rights: Yes",
      "CPD: 25 hours per year",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: Ruler,
    label: "Voting",
    title: "Technologist Member",
    description:
      "Holder of a recognised National Diploma (or equivalent) in surveying or geomatics, registered with the relevant authority or practising under a Professional Member.",
    requirements: [
      "Recognised National Diploma (or equivalent) in surveying or geomatics",
      "Voting rights: Yes",
      "CPD: 20 hours per year",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: Globe,
    label: "Voting",
    title: "GIS Practitioner Member",
    description:
      "Holder of a recognised qualification in GIS, geospatial science or a related field who is actively practising.",
    requirements: [
      "Recognised qualification in GIS, geospatial science or related field",
      "Voting rights: Yes",
      "CPD: 20 hours per year",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: GraduationCap,
    label: "Non-voting",
    title: "Graduate Member",
    description:
      "Holder of a recognised degree in land surveying, geomatics, GIS or a related field who is completing training and experience towards professional registration.",
    requirements: [
      "Recognised degree in land surveying, geomatics, GIS or related field",
      "Voting rights: No",
      "CPD: 10 hours per year (encouraged)",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: BookOpen,
    label: "Non-voting",
    title: "Student Member",
    description:
      "Enrolled in an accredited programme in land surveying, geomatics, GIS or another geospatial discipline.",
    requirements: [
      "Enrolled in an accredited geospatial programme",
      "Voting rights: No",
      "CPD: Exempt",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: Handshake,
    label: "Non-voting",
    title: "Associate Member",
    description:
      "Allied professional whose qualifications or experience benefit the Institute, admitted at the Committee's discretion.",
    requirements: [
      "Admitted at the Committee's discretion",
      "Voting rights: No",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: Hourglass,
    label: "Voting",
    title: "Retired Member",
    description:
      "Former active member in good standing who has retired from full-time practice.",
    requirements: [
      "Former active member in good standing",
      "Voting rights: Yes",
    ],
    cta: "Download application form",
    href: APPLICATION_FORM,
  },
  {
    Icon: Medal,
    label: "Voting",
    title: "Fellow",
    description:
      "Professional Member with at least 10 years' continuous membership and a distinguished contribution to the profession.",
    requirements: [
      "Professional Member for at least 10 continuous years",
      "Distinguished contribution to the profession",
      "Voting rights: Yes",
    ],
    cta: "Apply via the Secretary",
    href: "mailto:geomaticsinstitute.ls@gmail.com?subject=Fellowship%20application",
  },
  {
    Icon: Award,
    label: "Voting",
    title: "Honorary Life Member",
    description:
      "Nominated by the Committee and elected by a two-thirds majority of members.",
    requirements: [
      "Nominated by the Committee",
      "Elected by a two-thirds majority of members",
      "Voting rights: Yes",
    ],
    cta: "By Committee nomination only",
  },
]

const BRANCHES = ["Land Surveying", "GISc", "Mine Surveying", "Engineering Surveying"]

const STEPS = [
  {
    title: "Download and complete the application form",
    description:
      "Download the form from this page (Word or PDF) and complete it in full.",
  },
  {
    title: "Get a proposer and seconder",
    description:
      "Both must be subscribed members of the Institute. You may propose yourself; a seconder is still required.",
  },
  {
    title: "Attach your documents",
    description:
      "Certified copies of your ID, certificates and transcripts, and proof of licence or registration where applicable.",
  },
  {
    title: "Submit two copies to the Secretary with the registration fee",
    description:
      "Email Geomaticsinstitute.ls@gmail.com or deliver to the Chief Surveyor's Office, Maseru. Fees are set by the AGM; ask the Secretary for the current schedule.",
  },
  {
    title: "The Committee decides within 30 days",
    description:
      "You are informed in writing. If your application is refused you may appeal to the Committee within 30 days.",
  },
  {
    title: "Membership starts on acceptance",
    description:
      "Membership begins when you receive written acceptance and pay the annual subscription.",
  },
]

// TODO: [GIL CONTENT] — add licensed surveyor register entries once the Land Surveyors' Board publishes them
const MEMBERS: Member[] = []

// ── CategoryCard ───────────────────────────────────────────────

function CategoryCard({ cat }: { cat: Category }) {
  const Icon = cat.Icon
  const isFile = cat.href?.startsWith("/docs/")
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
        {/* TODO: [GIL CONTENT] — fees are set by the AGM (Art. 7.3); publish only once approved */}
        <span className="text-xs font-mono font-medium text-foreground/55">
          Set by the AGM — ask the Secretary
        </span>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {cat.href ? (
          <a
            href={cat.href}
            {...(isFile ? { download: true } : {})}
            className="block w-full text-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors"
          >
            {cat.cta}
          </a>
        ) : (
          <p className="text-center text-sm font-medium text-foreground/50 py-3">
            {cat.cta}
          </p>
        )}
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
  const catsInView = useInView(catsRef, { once: true, amount: 0.05 })
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
              The Institute has nine membership categories, set by Article 6.7 of its
              Constitution. Members practise in four branches: Land Surveying, GISc, Mine
              Surveying and Engineering Surveying.
            </motion.p>
            <motion.ul
              variants={fadeInUp}
              className="mt-5 flex flex-wrap justify-center gap-2"
              aria-label="Branches of practice"
            >
              {BRANCHES.map((branch) => (
                <li
                  key={branch}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-medium text-primary"
                >
                  {branch}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            ref={catsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={catsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              style={{ left: "calc(100% / 12 + 22px)", right: "calc(100% / 12 + 22px)" }}
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
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            <a
              href="/docs/gil-membership-application-form.docx"
              download
              className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors"
            >
              <FileDown className="h-4 w-4" />
              Download Application Form (Word)
            </a>
            <a
              href="/docs/gil-membership-application-form.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-accent px-7 py-3.5 text-sm font-semibold text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              PDF version
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
              Search the GIL register of licensed surveyors by name, district, or licence number.
            </motion.p>
          </motion.div>

          {MEMBERS.length > 0 ? (
            <>
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
            </>
          ) : (
            <motion.div
              ref={dirRef}
              variants={fadeInUp}
              initial="hidden"
              animate={dirInView ? "visible" : "hidden"}
              className="max-w-4xl mx-auto mb-10 rounded-xl border border-border bg-card p-8 text-center"
            >
              <p className="text-base text-foreground/70 leading-relaxed">
                Lesotho currently has 2 licensed land surveyors. The public register will be
                published here once the Land Surveyors&apos; Board licenses the current 11
                candidate surveyors, expected by March 2027.
              </p>
            </motion.div>
          )}

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
              The GIL register is maintained on a best-efforts basis and may not reflect
              real-time licensing changes.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
