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
              The Professional Body for Geomatics in Lesotho
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              The Geomatics Institute of Lesotho (GIL) is the voluntary professional body for land
              surveyors and geomatics practitioners in the Kingdom of Lesotho. It was founded in
              April 1997 as the Lesotho Land Surveyors Association (LLSA) and has represented the
              surveying profession ever since.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              In 2026 the Association widened its scope from land surveying to the full range of
              geospatial science — land surveying, geographic information science (GISc), mine
              surveying and engineering surveying — and became the Geomatics Institute of Lesotho.
              The name is deliberately Geomatics Institute of Lesotho, not &lsquo;Lesotho Geomatics
              Institute&rsquo;: the Law Office no longer allows an association&apos;s name to begin
              with &lsquo;Lesotho&rsquo;.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              The Institute works alongside, and does not replace, the statutory bodies: the Land
              Surveyors&apos; Board, which licenses surveyors under the Land Survey Act No. 14 of
              1980 (as amended by Act No. 2 of 2019); the Chief Surveyor; and the Land
              Administration Authority.
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
