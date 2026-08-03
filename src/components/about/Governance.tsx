"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

// TODO: [LLSA CONTENT] — replace "[Placeholder]" names with actual current council member names
const COUNCIL_ROLES = [
  { role: "President", name: "[Placeholder]", note: "Elected by general membership" },
  { role: "Vice-President", name: "[Placeholder]", note: "Elected by general membership" },
  { role: "Secretary", name: "[Placeholder]", note: "Appointed by council" },
  { role: "Treasurer", name: "[Placeholder]", note: "Appointed by council" },
  { role: "Ordinary Member", name: "[Placeholder]", note: "Elected representative" },
  { role: "Ordinary Member", name: "[Placeholder]", note: "Elected representative" },
]

const TIMELINE = [
  {
    year: "1980",
    event: "Land Survey Act No. 14 enacted",
    detail:
      "The principal legislation establishing the licensing regime for professional surveyors and the office of the Chief Surveyor.",
  },
  {
    year: "1982",
    event: "Land Survey Regulations gazetted",
    detail:
      "Detailed procedural rules prescribing accuracy standards, diagram formats, and lodgement procedures.",
  },
  {
    year: "2010",
    event: "LAA Act & Land Act enacted",
    detail:
      "The Land Administration Authority Act and Land Act 2010 established the LAA as the institutional home for survey functions.",
  },
  {
    year: "2012",
    event: "Land Survey (Amendment) Act (repealed)",
    detail:
      "Chief Surveyor functions transferred from the Public Service to the LAA; cadastre administration mandate formalised. Fully repealed by the 2019 Amendment Act.",
  },
  {
    year: "2019",
    event: "Land Survey (Amendment) Act No. 2 of 2019",
    detail:
      "Repeals the 2012 Amendment Act. Restores the Chief Surveyor to the Public Service under the Commissioner of Lands and establishes the Land Surveyors' Board.",
  },
]

// ── Governance ────────────────────────────────────────────────
export function Governance() {
  const headingRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const councilRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.15 })
  const councilInView = useInView(councilRef, { once: true, amount: 0.15 })

  return (
    <section className="bg-primary py-24">
      <div className="container">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-3"
            aria-hidden="true"
          >
            Structure
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl md:text-display-md text-white mb-5"
          >
            Governance & History
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-white/70 leading-relaxed"
          >
            LLSA is governed by its Constitution and operates in alignment with the Land Survey
            Act No. 14 of 1980 (as amended by Act No. 2 of 2019), the Land Survey Regulations 1982,
            the Land Administration Authority Act 2010, and the Land Act 2010. The Chief Surveyor
            — a public officer responsible to the Commissioner of Lands — chairs the Land
            Surveyors&apos; Board, which includes representation from the LAA, the Ministry of
            Local Government and Chieftainship Affairs, and the Ministry of Education.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={timelineRef}
          variants={staggerContainer}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto mb-20"
        >
          {/* Vertical spine */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-accent/30 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                {/* Year badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-accent/10 z-10">
                    <span className="font-mono text-[11px] font-bold text-accent leading-none">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Event */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <p className="font-sans font-semibold text-white text-base leading-snug">
                    {item.event}
                  </p>
                  <p className="text-sm text-white/55 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Council */}
        <motion.div
          ref={councilRef}
          variants={staggerContainer}
          initial="hidden"
          animate={councilInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            className="font-display text-xl text-white text-center mb-8"
          >
            Council Structure
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          >
            {COUNCIL_ROLES.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-white/[0.06] border border-white/10"
              >
                {/* Avatar placeholder */}
                <div className="h-12 w-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-mono text-xs font-bold">
                    {member.role.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-sans text-xs font-semibold leading-snug">
                    {member.role}
                  </p>
                  <p className="text-white/45 font-sans text-[11px] mt-0.5">{member.name}</p>
                </div>
                <p className="text-white/30 text-[10px] font-sans leading-snug">{member.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
