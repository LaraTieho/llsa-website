"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: BreadcrumbItem[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative bg-primary overflow-hidden flex items-end"
      style={{ minHeight: 320 }}
    >
      {/* Survey-grid decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            // 45° diagonal cross-hatching
            "repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(255,255,255,0.025) 28px, rgba(255,255,255,0.025) 29px)",
          ].join(","),
          backgroundSize: "48px 48px, 48px 48px, auto",
        }}
      />

      {/* Decorative diagonal slice at bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom right, transparent 49.5%, hsl(var(--background)) 50%)",
        }}
      />

      <div className="container relative pb-14 pt-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav variants={fadeInUp} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-white/45 font-sans">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <h1 className="font-display text-2xl sm:text-3xl md:text-display-lg text-white leading-tight">
              {title}
            </h1>
            {/* Gold underline accent */}
            <div className="h-1 w-15 rounded-full bg-accent" style={{ width: 60 }} />
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/75 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
