"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  BookOpen,
  FileCheck,
  Target,
  Award,
  ExternalLink,
} from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

// ── Types ──────────────────────────────────────────────────────

type EventType = "Workshop" | "Webinar" | "Course" | "Conference"

interface UpcomingEvent {
  title: string
  type: EventType
  location: string
  date: string
  hours: number
}

interface PastEvent {
  title: string
  type: string
  date: string
  hours: number
}

// ── Data ───────────────────────────────────────────────────────

const TYPE_STYLES: Record<EventType, string> = {
  Workshop:   "bg-sky-50    text-sky-700    border border-sky-200",
  Webinar:    "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Course:     "bg-orange-50 text-orange-700 border border-orange-200",
  Conference: "bg-accent/10 text-accent     border border-accent/25",
}

// TODO: [LLSA CONTENT] — replace with actual confirmed CPD event schedule, dates, locations, and CPD hour allocations
const UPCOMING: UpcomingEvent[] = [
  {
    title: "Drone Survey Methodology for Highland Terrain",
    type: "Workshop",
    location: "Maseru",
    date: "August 2026",
    hours: 8,
  },
  {
    title: "Cadastral Law Update: Land Survey (Amendment) Act 2019 in Practice",
    type: "Webinar",
    location: "Online",
    date: "September 2026",
    hours: 3,
  },
  {
    title: "GIS for Land Administration",
    type: "Course",
    location: "Maseru",
    date: "October 2026",
    hours: 16,
  },
  {
    title: "Annual LLSA Conference 2026",
    type: "Conference",
    location: "Maseru",
    date: "November 2026",
    hours: 20,
  },
]

// TODO: [LLSA CONTENT] — replace with actual past LLSA CPD event history, titles, dates, and certified CPD hours
const PAST: PastEvent[] = [
  {
    title: "Introduction to Drone Survey Regulations in Lesotho",
    type: "Workshop",
    date: "March 2026",
    hours: 6,
  },
  {
    title: "Land Rights Documentation & Boundary Dispute Resolution",
    type: "Seminar",
    date: "October 2025",
    hours: 4,
  },
  {
    title: "LLSA Annual Conference 2025",
    type: "Conference",
    date: "November 2025",
    hours: 20,
  },
]

// ── PastEventItem ──────────────────────────────────────────────

function PastEventItem({ event, index }: { event: PastEvent; index: number }) {
  const [open, setOpen] = useState(false)
  const headingId = `past-event-heading-${index}`
  const panelId = `past-event-panel-${index}`

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        id={headingId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-card hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-mono text-xs text-foreground/35 shrink-0" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans text-sm font-medium text-foreground/80 leading-snug">
            {event.title}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-xs text-foreground/45 font-mono" aria-hidden="true">{event.date}</span>
          <span className="font-mono text-xs font-bold text-accent" aria-hidden="true">{event.hours}h</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4 text-foreground/40" />
          </motion.span>
        </div>
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
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-muted/20 border-t border-border flex flex-wrap gap-5 text-xs text-foreground/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-accent/80" aria-hidden="true" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="font-medium text-foreground/55">Type:</span>
                {event.type}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-accent/80" aria-hidden="true" />
                {event.hours} CPD hours
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── CPDContent ─────────────────────────────────────────────────

export function CPDContent() {
  const introRef        = useRef<HTMLDivElement>(null)
  const frameworkRef    = useRef<HTMLDivElement>(null)
  const eventsHdgRef    = useRef<HTMLDivElement>(null)
  const eventsRef       = useRef<HTMLDivElement>(null)
  const pastRef         = useRef<HTMLDivElement>(null)
  const recognitionRef  = useRef<HTMLDivElement>(null)

  const introInView       = useInView(introRef,       { once: true, amount: 0.5 })
  const frameworkInView   = useInView(frameworkRef,   { once: true, amount: 0.06 })
  const eventsHdgInView   = useInView(eventsHdgRef,   { once: true, amount: 0.6 })
  const eventsInView      = useInView(eventsRef,      { once: true, amount: 0.06 })
  const pastInView        = useInView(pastRef,        { once: true, amount: 0.06 })
  const recognitionInView = useInView(recognitionRef, { once: true, amount: 0.5 })

  return (
    <>
      {/* ── CPD Framework ─────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container">

          {/* Intro */}
          <motion.p
            ref={introRef}
            variants={fadeInUp}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto text-center text-base text-foreground/65 leading-relaxed mb-16"
          >
            LLSA requires all members to maintain competence through structured CPD activities.
            CPD supports professional growth, keeps members current with legislative changes and
            technical developments, and demonstrates commitment to public interest.
          </motion.p>

          {/* 3 framework boxes */}
          <motion.div
            ref={frameworkRef}
            variants={staggerContainer}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* Annual Requirement */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border border-l-4 border-l-accent bg-card p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Target className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-base font-bold text-primary">Annual Requirement</h3>
              </div>
              {/* TODO: [LLSA CONTENT] — replace "[X] hours" with the actual annual CPD requirement set by Council */}
              <p className="font-display text-3xl font-bold text-accent mb-2">[X] hours</p>
              <p className="text-sm text-foreground/55 leading-relaxed">
                per year (to be confirmed by Council). The CPD cycle runs January to December.
                Requirements are reviewed at the AGM.
              </p>
            </motion.div>

            {/* Activity Categories */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border border-l-4 border-l-secondary bg-card p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <BookOpen className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-base font-bold text-primary">Activity Categories</h3>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground/75 mb-0.5">Structured</p>
                  <p className="text-foreground/55">
                    Workshops, short courses, webinars, conferences, accredited programmes
                  </p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground/75 mb-0.5">Unstructured</p>
                  <p className="text-foreground/55">
                    Self-study, reading, mentoring, peer learning, site visits
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reporting */}
            <motion.div
              variants={fadeInUp}
              className="rounded-xl border border-border border-l-4 border-l-primary/50 bg-card p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <FileCheck className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-base font-bold text-primary">Reporting</h3>
              </div>
              <p className="text-sm text-foreground/55 leading-relaxed">
                Members submit CPD records to the LLSA Secretary annually using the approved
                log template. Non-compliance may result in suspension of membership pending
                review by the Council.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── Upcoming Events ───────────────────────────────────── */}
      <section className="bg-muted/40 py-24">
        <div className="container">

          <motion.div
            ref={eventsHdgRef}
            variants={staggerContainer}
            initial="hidden"
            animate={eventsHdgInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              Events calendar
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-display-md text-primary">
              Upcoming CPD Events
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base text-foreground/60 leading-relaxed"
            >
              Register early to secure your place. CPD hours are verified and added to
              your LLSA record upon completion.
            </motion.p>
          </motion.div>

          <motion.div
            ref={eventsRef}
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm"
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th scope="col" className="text-left px-6 py-4 font-sans font-semibold tracking-wide">
                    Event
                  </th>
                  <th scope="col" className="text-left px-4 py-4 font-sans font-semibold tracking-wide whitespace-nowrap">
                    Type
                  </th>
                  <th scope="col" className="text-left px-4 py-4 font-sans font-semibold tracking-wide whitespace-nowrap hidden sm:table-cell">
                    Location
                  </th>
                  <th scope="col" className="text-left px-4 py-4 font-sans font-semibold tracking-wide whitespace-nowrap hidden md:table-cell">
                    Date
                  </th>
                  <th scope="col" className="text-right px-6 py-4 font-sans font-semibold tracking-wide whitespace-nowrap">
                    CPD hrs
                  </th>
                </tr>
              </thead>
              <tbody>
                {UPCOMING.map((event, i) => (
                  <tr
                    key={i}
                    className="border-t border-border bg-card hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground/80 leading-snug">{event.title}</p>
                      {/* Mobile-only location + date beneath title */}
                      <div className="flex flex-wrap gap-2 mt-1.5 sm:hidden">
                        <span className="text-xs text-foreground/45 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-accent/70" />
                          {event.location}
                        </span>
                        <span className="text-xs text-foreground/35">·</span>
                        <span className="text-xs text-foreground/45">{event.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${TYPE_STYLES[event.type]}`}
                      >
                        {event.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-foreground/55 hidden sm:table-cell whitespace-nowrap">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-accent/70 shrink-0" />
                        {event.location}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-foreground/55 hidden md:table-cell whitespace-nowrap">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-accent/70 shrink-0" />
                        {event.date}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-mono font-bold text-primary">{event.hours}</span>
                      <span className="text-xs text-foreground/40 ml-1">hrs</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* ── Past Events + Recognition + CTA ───────────────────── */}
      <section className="bg-background py-24">
        <div className="container max-w-4xl">

          {/* Past Events */}
          <motion.div
            ref={pastRef}
            variants={staggerContainer}
            initial="hidden"
            animate={pastInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl font-bold text-primary mb-8"
            >
              Past Events
            </motion.h2>
            <motion.div variants={staggerContainer} className="flex flex-col gap-3">
              {PAST.map((event, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <PastEventItem event={event} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Regional Recognition */}
          <motion.div
            ref={recognitionRef}
            variants={fadeInUp}
            initial="hidden"
            animate={recognitionInView ? "visible" : "hidden"}
            className="mb-14 rounded-xl border border-secondary/30 bg-secondary/5 p-7"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                <Award className="h-5 w-5 text-secondary" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-primary mb-2">
                  Regional CPD Recognition
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  LLSA CPD may be recognised by regional bodies including the{" "}
                  <strong className="font-semibold text-foreground/80">
                    South African Geomatics Council (SAGC)
                  </strong>{" "}
                  framework, subject to bilateral arrangements currently under discussion between
                  LLSA and SAGC. Members are advised to confirm individual recognition directly
                  with the relevant body before claiming cross-border credits.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={recognitionInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            {/* TODO: [LLSA CONTENT] — replace "#" with actual CPD record submission form URL or link */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors"
            >
              Submit CPD Record
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            {/* TODO: [LLSA CONTENT] — upload CPD log template to public/docs/ and replace "#" with actual path */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-primary/25 px-8 py-4 text-sm font-semibold text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              Download CPD Log Template
            </a>
          </motion.div>

        </div>
      </section>
    </>
  )
}
