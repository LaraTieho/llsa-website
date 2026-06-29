"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { LesothoTopoSVG } from "@/components/decorative/LesothoTopoSVG"

// ── easeOutCubic counter hook ─────────────────────────────────
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

// ── Stat item ─────────────────────────────────────────────────
function StatItem({
  value,
  label,
  suffix = "",
}: {
  value: number
  label: string
  suffix?: string
}) {
  return (
    <div className="text-center">
      <p className="font-display text-lg sm:text-2xl font-bold text-white tabular-nums">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="text-[9px] sm:text-[10px] text-white/45 uppercase tracking-wide sm:tracking-widest mt-1 leading-tight">{label}</p>
    </div>
  )
}

// ── HeroSection ───────────────────────────────────────────────
export function HeroSection() {
  const reducedMotion = useReducedMotion()
  const statsRef = useRef<HTMLDivElement>(null)
  const statsVisible = useInView(statsRef, { once: true, amount: 0.3 })

  const countYear = useCounter(1980, reducedMotion ? 0 : 1400, statsVisible)
  const countSurveyors = useCounter(280, reducedMotion ? 0 : 2000, statsVisible)
  const countPractices = useCounter(48, reducedMotion ? 0 : 1800, statsVisible)

  return (
    <section
      className="relative h-[100svh] bg-primary overflow-hidden flex flex-col"
      style={{
        backgroundImage: [
          "repeating-linear-gradient(45deg,transparent,transparent 24px,rgba(255,255,255,0.035) 24px,rgba(255,255,255,0.035) 25px)",
          "repeating-linear-gradient(-45deg,transparent,transparent 24px,rgba(255,255,255,0.035) 24px,rgba(255,255,255,0.035) 25px)",
        ].join(","),
      }}
    >
      {/* ── Main content ─────────────────────────────────── */}
      <div className="container flex-1 flex items-center gap-8 lg:gap-16 py-20 lg:py-0">

        {/* Left: Text block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[55%] lg:shrink-0 flex flex-col gap-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-display-xl text-white"
          >
            Defining the Land.
            <br />
            Advancing the Profession.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-xl text-white/75 max-w-xl leading-relaxed"
          >
            Lesotho Land Surveyors Association — the professional body for licensed
            land surveyors, geodesists, and geomatics practitioners in the Kingdom
            of Lesotho.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/services"
              className="inline-flex items-center px-7 py-3.5 rounded-md bg-white text-primary font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center px-7 py-3.5 rounded-md border-2 border-white/80 text-white font-semibold text-sm hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Become a Member
            </Link>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeInUp}
            ref={statsRef}
            className="pt-4"
          >
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-0">
              <StatItem value={countYear} label="Established" />
              <div className="hidden sm:block h-10 w-px bg-accent/50 mx-4 lg:mx-6 shrink-0" />
              <StatItem value={countSurveyors} label="Licensed Surveyors" suffix="+" />
              <div className="hidden sm:block h-10 w-px bg-accent/50 mx-4 lg:mx-6 shrink-0" />
              <StatItem value={countPractices} label="Registered Practices" suffix="+" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Topographic SVG visual (lg+ only) */}
        <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
            className="relative w-full max-w-[480px] aspect-[5/4]"
          >
            {/* Radial glow behind contours */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(198,151,63,0.14) 0%, transparent 70%)",
              }}
            />

            <LesothoTopoSVG className="relative w-full h-full" />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-white/35 uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <ChevronDown className="h-5 w-5 text-white/45" />
        </motion.div>
      </div>
    </section>
  )
}
