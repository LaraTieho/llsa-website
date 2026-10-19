"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations"

const BENEFITS = [
  "Access to CPD programmes and technical resources",
  "Professional recognition and directory listing",
  "Representation to the Land Administration Authority and government",
]

// ── MemberCard ────────────────────────────────────────────────
function MemberCard() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(198,151,63,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Card body */}
      <motion.div
        initial={{ opacity: 0, rotateY: -8, scale: 0.96 }}
        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        style={{ perspective: 900 }}
        className="relative rounded-2xl overflow-hidden"
        aria-hidden="true"
      >
        {/* Navy background */}
        <div
          className="relative p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #1B3A6B 0%, #142d55 100%)",
            border: "1.5px solid #C6973F",
          }}
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.09) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut" as const,
            }}
          />

          {/* Top row: logo mark + org name */}
          <div className="flex items-center gap-3 mb-7">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="6" fill="rgba(255,255,255,0.10)" />
              <polygon
                points="20,8 32,30 8,30"
                fill="none"
                stroke="#C6973F"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="8" r="2.5" fill="#C6973F" />
              <line x1="13" y1="22" x2="27" y2="22" stroke="white" strokeWidth="1.5" opacity="0.55" />
            </svg>
            <div className="leading-tight">
              <p className="text-white font-display font-bold text-base tracking-wide">GIL</p>
              <p className="text-white/50 text-[9px] uppercase tracking-widest font-sans">
                Geomatics Institute of Lesotho
              </p>
            </div>
          </div>

          {/* Card stripe */}
          <div className="h-px bg-gradient-to-r from-accent/60 via-accent to-accent/60 mb-6" />

          {/* Designation */}
          <p className="text-accent text-[10px] uppercase tracking-[0.22em] font-semibold mb-1 font-sans">
            Professional Land Surveyor
          </p>

          {/* Placeholder name */}
          <p className="text-white font-display text-xl font-bold tracking-wide mb-5">
            [Member Name]
          </p>

          {/* Metadata row */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/40 text-[9px] uppercase tracking-wider font-sans mb-0.5">
                Licence No.
              </p>
              <p className="text-white font-mono text-sm tracking-widest">PLS — XXXX</p>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-[9px] uppercase tracking-wider font-sans mb-0.5">
                Valid Until
              </p>
              <p className="text-white font-mono text-sm tracking-widest">12 / 2025</p>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-6 h-0.5 rounded-full bg-gradient-to-r from-accent/40 via-accent/80 to-accent/40" />
        </div>
      </motion.div>

      {/* Reflection shadow */}
      <div
        className="mx-6 h-4 rounded-b-2xl blur-md opacity-30"
        style={{ background: "linear-gradient(to bottom, #C6973F, transparent)" }}
      />
    </div>
  )
}

// ── MembershipCTA ─────────────────────────────────────────────
export function MembershipCTA() {
  const textRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, amount: 0.3 })

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text ────────────────────────────── */}
          <motion.div
            ref={textRef}
            variants={staggerContainer}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent"
              aria-hidden="true"
            >
              Join the Association
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-display-md text-primary leading-tight"
            >
              Register as a Professional Land Surveyor
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              GIL membership is open to licensed surveyors, technologists, GIS practitioners,
              graduates, students and allied professionals across nine membership categories.
            </motion.p>

            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {BENEFITS.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15" aria-hidden="true">
                    <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-foreground/75 leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link
                href="/membership"
                className="inline-flex items-center self-start px-8 py-3.5 rounded-md bg-accent text-primary font-semibold text-sm hover:bg-accent/85 transition-colors duration-200"
              >
                Start Your Application
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-primary underline decoration-accent/50 underline-offset-4 hover:decoration-accent transition-colors"
              >
                Questions about joining or licensing? Read the FAQ
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Card mockup ────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <MemberCard />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
