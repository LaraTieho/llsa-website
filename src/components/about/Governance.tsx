"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const COMMITTEE = [
  { role: "President", name: "Martin Nts'ihlele", note: "Elected 4–5 October 2026" },
  { role: "Vice-President", name: "Tieho Lara", note: "Elected 4–5 October 2026" },
  { role: "Secretary", name: "Maphoma Monaheng", note: "Elected 4–5 October 2026" },
  { role: "Vice-Secretary", name: "Rethabile Mafatle", note: "Elected 4–5 October 2026" },
  { role: "Treasurer", name: "Molefi Bokaako", note: "Elected 4–5 October 2026" },
  { role: "Ordinary Member", name: "Mohau Molokeng", note: "Elected 6–8 October 2026" },
  { role: "Ordinary Member", name: "Basia Lebajoa", note: "Elected 6–8 October 2026" },
]

// As gazetted — Legal Notice No. 71 of 2026
const BOARD = [
  { name: "Mr. Pheello Ramotubei", capacity: "Chairperson" },
  { name: "Adv. Moupo Ntoko", capacity: "Representative of the Ministry of Local Government and Chieftainship" },
  { name: "Mr. Moleli Mochoni", capacity: "Representative of the Land Administration Authority" },
  { name: "Mr. Martin Nts'ihlele", capacity: "Representative of registered land surveyors" },
  { name: "Mr. Lipholo Motlalane", capacity: "Representative of the Ministry of Education" },
]

// Initials of first and last name, ignoring honorifics ("Mr.", "Adv.")
function initials(name: string) {
  const parts = name.split(" ").filter((p) => !p.endsWith("."))
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

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
    year: "1997",
    event: "Lesotho Land Surveyors Association founded",
    detail:
      "The Association is established in April 1997 as the professional body for land surveyors in Lesotho.",
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
  {
    year: "2026",
    event: "Land Surveyors' Board appointed",
    detail:
      "Members of the Board appointed by Legal Notice No. 71 of 2026 (Gazette of 31 July 2026).",
  },
  {
    year: "2026",
    event: "Geomatics Institute of Lesotho",
    detail:
      "The Association becomes the Geomatics Institute of Lesotho, covering land surveying, GISc, mine surveying and engineering surveying.",
  },
]

// ── Governance ────────────────────────────────────────────────
export function Governance() {
  const headingRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const committeeRef = useRef<HTMLDivElement>(null)
  const boardRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.15 })
  const committeeInView = useInView(committeeRef, { once: true, amount: 0.15 })
  const boardInView = useInView(boardRef, { once: true, amount: 0.15 })

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
            GIL is governed by its Constitution and operates in alignment with the Land Survey
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

        {/* Executive Committee */}
        <motion.div
          ref={committeeRef}
          variants={staggerContainer}
          initial="hidden"
          animate={committeeInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="font-display text-xl text-white text-center mb-2"
          >
            Executive Committee
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-white/55 text-center mb-8"
          >
            Elected by members to run the Institute under its Constitution.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {COMMITTEE.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-white/[0.06] border border-white/10"
              >
                <div className="h-12 w-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-mono text-xs font-bold">
                    {initials(member.name)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-sans text-xs font-semibold leading-snug">
                    {member.role}
                  </p>
                  <p className="text-white font-sans text-[11px] mt-0.5">{member.name}</p>
                </div>
                <p className="text-white/30 text-[10px] font-sans leading-snug">{member.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Land Surveyors' Board */}
        <motion.div
          ref={boardRef}
          variants={staggerContainer}
          initial="hidden"
          animate={boardInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            className="font-display text-xl text-white text-center mb-3"
          >
            Land Surveyors&apos; Board
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-sm text-white/55 leading-relaxed text-center max-w-3xl mx-auto mb-8"
          >
            The surveying profession in Lesotho is regulated by the Land Surveyors&apos; Board
            established under the Land Survey Act No. 14 of 1980 (as amended by Act No. 2 of
            2019) — not by a council. The Board&apos;s members were appointed by the Land
            Surveyors (Appointment of Members of the Board) Notice, 2026 (Legal Notice No. 71 of
            2026, Gazette Vol. 71 No. 65, 31 July 2026).
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {BOARD.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-white/[0.06] border border-white/10"
              >
                <div className="h-12 w-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-mono text-xs font-bold">
                    {initials(member.name)}
                  </span>
                </div>
                <p className="text-white font-sans text-xs font-semibold leading-snug">
                  {member.name}
                </p>
                <p className="text-white/45 text-[11px] font-sans leading-snug">{member.capacity}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center mt-8">
            <a
              href="/docs/gazette-ln-69-72-of-2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download the Gazette (L.N. No. 69–72 of 2026)
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
