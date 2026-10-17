"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/animations"

interface Stat {
  target: number
  suffix: string
  label: string
  subtext: string
  duration: number
}

const STATS: Stat[] = [
  {
    target: 40,
    suffix: "+",
    label: "Years",
    subtext: "Of land survey law in Lesotho, anchored by the Act of 1980",
    duration: 1800,
  },
  {
    target: 10,
    suffix: "",
    label: "Districts",
    subtext:
      "Across Lesotho's highland and lowland terrain, where licensed surveyors operate",
    duration: 1400,
  },
  {
    target: 1,
    suffix: "",
    label: "Cadastre",
    subtext:
      "The national cadastral system — administered by the LAA, certified by licensed surveyors",
    duration: 800,
  },
]

// ── easeOutCubic counter ───────────────────────────────────────
function useCounter(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    if (!duration) { setCount(target); return }
    let rafId: number
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, trigger])
  return count
}

// ── StatBlock ─────────────────────────────────────────────────
function StatBlock({ stat, trigger, reducedMotion }: { stat: Stat; trigger: boolean; reducedMotion: boolean | null }) {
  const count = useCounter(stat.target, reducedMotion ? 0 : stat.duration, trigger)
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center text-center gap-3 px-6 lg:px-12"
    >
      <p className="font-display text-4xl sm:text-display-lg text-accent tabular-nums leading-none">
        {count}
        {stat.suffix}
      </p>
      <p className="font-sans font-semibold text-lg text-primary">{stat.label}</p>
      <p className="font-sans text-sm text-foreground/65 leading-relaxed max-w-[220px]">
        {stat.subtext}
      </p>
    </motion.div>
  )
}

// ── ImpactSection ─────────────────────────────────────────────
export function ImpactSection() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.35 })

  return (
    <section className="bg-background py-24">
      <div className="container">

        {/* Section label + heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent mb-4"
            aria-hidden="true"
          >
            Why GIL Matters
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-display-md text-primary"
          >
            The Foundation of Land Governance
          </motion.h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          ref={sectionRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <StatBlock stat={stat} trigger={inView} reducedMotion={reducedMotion} />
              {/* Gold divider — shown between items only */}
              {i < STATS.length - 1 && (
                <div
                  className={[
                    // vertical on desktop
                    "hidden md:block w-px self-stretch mx-2",
                    "bg-gradient-to-b from-transparent via-accent/50 to-transparent",
                    // horizontal on mobile (handled by divide-y above)
                  ].join(" ")}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-sans text-sm text-foreground/65 leading-relaxed max-w-2xl mx-auto text-center mt-16"
        >
          Lesotho has 2 licensed land surveyors today. Following the appointment of the Land
          Surveyors&apos; Board, published in the Lesotho Government Gazette on 31 July 2026 (
          <a
            href="/docs/gazette-ln-69-72-of-2026.pdf"
            download
            className="font-medium text-accent underline underline-offset-2 hover:text-accent/70 transition-colors"
          >
            Legal Notice No. 71 of 2026
          </a>
          ), 11 candidate surveyors are expected to be awarded licences by March 2027.
        </motion.p>

      </div>
    </section>
  )
}
