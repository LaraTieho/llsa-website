"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface Legislation {
  id: string
  title: string
  description: string
  badge: string
  repealed?: boolean
}

const LEGISLATION: Legislation[] = [
  {
    id: "survey-act",
    title: "Land Survey Act, 1980 (Act No. 14 of 1980)",
    description:
      "The principal legislation governing land survey practice in Lesotho. Establishes the office of the Chief Surveyor, licensing requirements for professional surveyors, and the legal status of survey records.",
    badge: "Principal Act",
  },
  {
    id: "survey-regs",
    title: "Land Survey Regulations, 1982",
    description:
      "Detailed procedural rules made under the Land Survey Act — prescribing survey accuracy standards, diagram formats, field record requirements, and lodgement procedures.",
    badge: "Subsidiary Legislation",
  },
  {
    id: "survey-amendment-2012",
    title: "Land Survey (Amendment) Act, 2012 (Act No. 15 of 2012)",
    description:
      "Originally transferred the Chief Surveyor's functions to the Land Administration Authority. Fully repealed by the Land Survey (Amendment) Act 2019 (Act No. 2 of 2019) — no longer in force.",
    badge: "Repealed",
    repealed: true,
  },
  {
    id: "survey-amendment-2019",
    title: "Land Survey (Amendment) Act, 2019 (Act No. 2 of 2019)",
    description:
      "Repeals the 2012 Amendment Act in its entirety. Restores the Chief Surveyor to the Public Service under the Commissioner of Lands. Establishes the Land Surveyors' Board (chaired by the Chief Surveyor) and affirms the spatial data infrastructure mandate.",
    badge: "Current Amendment",
  },
  {
    id: "laa-act",
    title: "Land Administration Authority Act, 2010 (Act No. 9 of 2010)",
    description:
      "Establishes the Land Administration Authority (LAA) as the institutional home for survey and land administration functions. The LAA now administers the national cadastre and oversees licensed surveyor functions.",
    badge: "Institutional Framework",
  },
  {
    id: "land-act",
    title: "Land Act, 2010 (Act No. 8 of 2010)",
    description:
      "Governs land tenure, leases, allocations, and expropriation across Lesotho. Defines the legal context within which cadastral surveys and land transactions operate — including the Commissioner of Lands' functions.",
    badge: "Land Tenure",
  },
]

// ── LegislationSection ────────────────────────────────────────
export function LegislationSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.8 })

  return (
    <section className="bg-primary py-24">
      <div className="container">

        {/* ── Section heading ───────────────────────────── */}
        <motion.div
          ref={headingRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-4"
            aria-hidden="true"
          >
            Legal Framework
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl md:text-display-md text-white mb-6"
          >
            The Laws Governing Land Survey in Lesotho
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/80 leading-relaxed"
          >
            Professional land surveying in Lesotho is governed by a suite of legislation that
            establishes the licensing regime, cadastral standards, and the institutional mandate
            of the Chief Surveyor and Land Administration Authority. LLSA members practise within
            this framework.
          </motion.p>
        </motion.div>

        {/* ── Cards ─────────────────────────────────────── */}
        {/* Mobile: horizontal scroll; desktop: 2-col grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className={[
            // mobile: scrollable row
            "flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory",
            // desktop: 2-col grid, no scroll
            "lg:grid lg:grid-cols-2 lg:overflow-x-visible lg:pb-0 lg:snap-none",
            // scrollbar styling
            "[&::-webkit-scrollbar]:h-1",
            "[&::-webkit-scrollbar-track]:bg-white/10",
            "[&::-webkit-scrollbar-thumb]:bg-accent/60",
            "[&::-webkit-scrollbar-thumb]:rounded-full",
          ].join(" ")}
        >
          {LEGISLATION.map((item) => (
            <LegislationCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* ── CTA ───────────────────────────────────────── */}
        <motion.div
          ref={ctaRef}
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="flex justify-center mt-12"
        >
          <Link
            href="/legislation"
            className="inline-flex items-center px-8 py-3.5 rounded-md border-2 border-white/70 text-white font-semibold text-sm hover:bg-white hover:text-primary transition-colors duration-200"
          >
            View All Legislation →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

// ── LegislationCard ───────────────────────────────────────────
function LegislationCard({ item }: { item: Legislation }) {
  const { title, description, badge, repealed } = item
  return (
    <motion.div
      variants={fadeInUp}
      className={[
        // mobile: fixed-width card, snap
        "shrink-0 w-[min(88vw,320px)] snap-start",
        // desktop: full-width in grid cell
        "lg:w-auto lg:shrink",
        // card chrome
        "flex flex-col gap-4 p-7 rounded-xl",
        "border border-white/15 border-l-4",
        repealed ? "border-l-white/30" : "border-l-accent",
        "bg-white/[0.07]",
      ].join(" ")}
    >
      {/* Badge */}
      <span
        className={[
          "self-start px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider",
          repealed ? "bg-[#E8E5DE] text-[#4A4A4A]" : "bg-accent/20 text-accent",
        ].join(" ")}
      >
        {badge}
      </span>

      <h3 className="font-sans font-semibold text-white leading-snug text-base">
        {title}
      </h3>

      <p className="text-sm text-white/65 leading-relaxed flex-1">
        {description}
      </p>

      <Link
        href="#"
        className="inline-block text-sm font-medium text-accent hover:text-white transition-colors"
      >
        Download PDF ↓
      </Link>
    </motion.div>
  )
}
