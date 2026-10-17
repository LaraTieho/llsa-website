"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { slideInLeft, slideInRight } from "@/lib/animations"

// ── ContactStrip ──────────────────────────────────────────────
export function ContactStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="bg-accent py-16">
      <div
        ref={ref}
        className="container flex flex-col sm:flex-row items-center justify-between gap-8"
      >
        {/* Left: question */}
        <motion.p
          variants={slideInLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-display text-xl text-primary font-semibold leading-snug max-w-md text-center sm:text-left"
        >
          Have a question about GIL membership, CPD, or licensing?
        </motion.p>

        {/* Right: buttons */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-center gap-3 justify-center sm:justify-end shrink-0"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/85 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <a
            href="/docs/gil-constitution-draft-2026.pdf"
            download
            className="inline-flex items-center px-7 py-3 rounded-md border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Download Constitution (draft)
          </a>
        </motion.div>
      </div>
    </section>
  )
}
