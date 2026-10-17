"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface NewsCard {
  id: string
  category: string
  date: string
  headline: string
  excerpt: string
}

// TODO: [LLSA CONTENT] — replace all items with actual LLSA news articles, announcements, and event notices
const NEWS: NewsCard[] = [
  {
    id: "laa-circular-2026",
    category: "Announcement",
    date: "29 June 2026",
    headline: "GIL Welcomes Amendment to Cadastral Registration Procedures — LAA Circular 2026/3",
    excerpt:
      "The Land Administration Authority has issued Circular 2026/3 updating the lodgement and approval procedures for cadastral survey diagrams. GIL members are advised to review the revised requirements before submitting new records.",
  },
  {
    id: "cpd-drone-workshop",
    category: "CPD Event",
    date: "29 June 2026",
    headline: "CPD Workshop: Drone Survey Methodology for Highland Terrain — Maseru, August 2026",
    excerpt:
      "GIL will host a one-day CPD workshop on UAV-based photogrammetric survey techniques tailored to Lesotho's mountainous districts. The session qualifies for 6 CPD hours and is open to all licensed surveyors.",
  },
  {
    id: "licensing-intake-2026",
    category: "Legislation Update",
    date: "29 June 2026",
    headline: "New Licensing Intake Open: Applications for Professional Land Surveyor Registration",
    excerpt:
      "The LAA has opened the 2026 intake for Professional Land Surveyor licence applications under the Land Survey Act 1980. Candidates must submit certified academic transcripts, field experience records, and two professional references.",
  },
]

// ── NewsCard ──────────────────────────────────────────────────
function NewsCardItem({ card }: { card: NewsCard }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 25 } }}
      className="flex flex-col gap-4 bg-card rounded-lg p-7 border border-border hover:shadow-[0_8px_32px_rgba(27,58,107,0.10)] transition-shadow duration-300"
    >
      {/* Category + date */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-[11px] font-semibold uppercase tracking-wider font-sans">
          {card.category}
        </span>
        <time className="text-xs text-foreground/45 font-sans">{card.date}</time>
      </div>

      {/* Headline */}
      <h3 className="font-sans font-semibold text-primary leading-snug line-clamp-2">
        {card.headline}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-foreground/60 leading-relaxed flex-1">{card.excerpt}</p>

      <Link
        href="/news"
        className="inline-block text-sm font-medium text-accent hover:text-primary transition-colors"
      >
        Read more →
      </Link>
    </motion.article>
  )
}

// ── NewsSection ───────────────────────────────────────────────
export function NewsSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section className="bg-background py-24">
      <div className="container">

        {/* Heading row */}
        <motion.div
          ref={headingRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
              aria-hidden="true"
            >
              News & Events
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary"
            >
              Latest from GIL
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/news"
              className="inline-block text-sm font-medium text-accent hover:text-primary transition-colors whitespace-nowrap"
            >
              View All News →
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {NEWS.map((card) => (
            <NewsCardItem key={card.id} card={card} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
