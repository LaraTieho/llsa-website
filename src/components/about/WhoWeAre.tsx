"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations"
import { LesothoTopoSVG } from "@/components/decorative/LesothoTopoSVG"

// ── WhoWeAre ──────────────────────────────────────────────────
export function WhoWeAre() {
  const textRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, amount: 0.3 })
  const svgInView = useInView(svgRef, { once: true, amount: 0.3 })

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            ref={textRef}
            variants={staggerContainer}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent"
              aria-hidden="true"
            >
              Who We Are
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary leading-tight"
            >
              The Professional Body for Land Surveyors in Lesotho
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              The Lesotho Land Surveyors Association (LLSA) is the representative professional
              body for licensed land surveyors and geomatics practitioners in the Kingdom of
              Lesotho. LLSA promotes the highest standards of professional practice, advocates
              for the land surveying profession, and supports the development of geospatial
              capacity in Lesotho.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              {/* TODO: [LLSA CONTENT] — add actual LLSA founding year; e.g. "Established in [YEAR] under the framework..." */}
            Established under the framework of the Land Survey Act No. 14 of 1980, LLSA works
              in close collaboration with the Land Administration Authority and other statutory
              bodies to ensure that land survey practice in Lesotho meets recognised professional
              and technical standards.
            </motion.p>
          </motion.div>

          {/* Right: decorative SVG */}
          <motion.div
            ref={svgRef}
            variants={slideInRight}
            initial="hidden"
            animate={svgInView ? "visible" : "hidden"}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[440px] aspect-[5/4]">
              {/* Soft background glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(198,151,63,0.10) 0%, transparent 70%)",
                }}
              />
              <LesothoTopoSVG />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
