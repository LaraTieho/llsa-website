"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Eye } from "lucide-react"
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations"
import type { LucideIcon } from "lucide-react"

interface CardProps {
  Icon: LucideIcon
  label: string
  heading: string
  body: string
  variants: typeof slideInLeft
}

function MVCard({ Icon, label, heading, body, variants }: CardProps) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col gap-5 p-8 rounded-xl border border-border border-l-4 border-l-accent bg-card"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/12" aria-hidden="true">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </span>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent" aria-hidden="true">
          {label}
        </p>
      </div>
      <h3 className="font-display text-xl text-primary font-bold">{heading}</h3>
      <p className="text-base text-foreground/70 leading-relaxed">{body}</p>
    </motion.div>
  )
}

// ── MissionVision ─────────────────────────────────────────────
export function MissionVision() {
  const ref = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })

  return (
    <section className="bg-muted/40 py-24">
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
            Purpose
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl md:text-display-md text-primary"
          >
            Mission & Vision
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <MVCard
            Icon={Target}
            label="Our Mission"
            heading="Advancing Professional Practice"
            body="To advance the professional practice of land surveying in Lesotho through ethical standards, continuous professional development, and engagement with the regulatory and legislative framework."
            variants={slideInLeft}
          />
          <MVCard
            Icon={Eye}
            label="Our Vision"
            heading="A Spatially Informed Lesotho"
            body="A Lesotho where every land transaction, infrastructure project, and spatial planning decision is underpinned by accurate, professionally certified survey data."
            variants={slideInRight}
          />
        </motion.div>

      </div>
    </section>
  )
}
