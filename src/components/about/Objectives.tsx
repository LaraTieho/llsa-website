"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const OBJECTIVES = [
  "Maintain and promote the standards of the land surveying profession",
  "Protect the interests of licensed land surveyors operating in Lesotho",
  "Liaise with the Chief Surveyor's office, the Land Surveyors' Board, and the Land Administration Authority on matters affecting survey practice",
  "Facilitate continuing professional development for members",
  "Promote public awareness of the role of professional surveyors in land administration",
  "Represent Lesotho's surveying profession in regional and international bodies",
]

// Gold diamond bullet
function GoldBullet({ number }: { number: number }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-accent/15 mt-0.5">
      <span className="font-mono text-[11px] font-bold text-accent">{String(number).padStart(2, "0")}</span>
    </span>
  )
}

// ── Objectives ────────────────────────────────────────────────
export function Objectives() {
  const headingRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })
  const listInView = useInView(listRef, { once: true, amount: 0.15 })

  return (
    <section className="bg-background py-24">
      <div className="container">

        <motion.div
          ref={headingRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
            aria-hidden="true"
          >
            Constitution
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl md:text-display-md text-primary"
          >
            Objectives of LLSA
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base text-foreground/65 leading-relaxed"
          >
            As set out in the LLSA Constitution, the Association pursues the following objectives
            in service of its members and the broader land administration sector.
          </motion.p>
        </motion.div>

        <motion.div
          ref={listRef}
          variants={staggerContainer}
          initial="hidden"
          animate={listInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {OBJECTIVES.map((obj, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
            >
              <GoldBullet number={i + 1} />
              <p className="text-base text-foreground/75 leading-relaxed">{obj}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
