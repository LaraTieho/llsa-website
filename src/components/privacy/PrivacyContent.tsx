"use client"

import { useEffect, useState } from "react"
import { MotionConfig } from "framer-motion"
import {
  ClipboardCheck, Ban, Cookie, IdCard, FileSearch, Mail, Printer, ChevronDown,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionLabel } from "@/components/shared/SectionLabel"
import { GoldDivider } from "@/components/shared/GoldDivider"
import {
  PRIVACY_ADOPTION_LINE,
  PRIVACY_EFFECTIVE,
  PRIVACY_GLANCE,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  PRIVACY_VERSION,
} from "@/data/privacy"
import { PrivacyBlocks } from "./PrivacyBlocks"

const GLANCE_ICONS: Record<string, LucideIcon> = {
  ClipboardCheck,
  Ban,
  Cookie,
  IdCard,
  FileSearch,
  Mail,
}

// ── Table of contents ──────────────────────────────────────────

function TocLinks({ activeId }: { activeId: string | null }) {
  return (
    <ol className="flex flex-col gap-0.5">
      {PRIVACY_SECTIONS.map((section) => {
        const active = section.id === activeId
        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active ? "true" : undefined}
              className={cn(
                "flex gap-2 rounded-md border-l-2 px-3 py-1.5 text-sm leading-snug transition-colors",
                active
                  ? "border-accent bg-accent/10 font-semibold text-primary"
                  : "border-transparent text-foreground/65 hover:bg-muted hover:text-primary",
              )}
            >
              <span className="w-5 shrink-0 font-mono text-xs leading-5 text-accent">
                {section.number}.
              </span>
              <span>{section.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

// Highlights the section currently in view
function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const first = PRIVACY_SECTIONS.find((s) => visible.has(s.id))
        if (first) setActiveId(first.id)
      },
      { rootMargin: "-128px 0px -60% 0px" },
    )
    for (const section of PRIVACY_SECTIONS) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return activeId
}

// ── PrivacyContent ─────────────────────────────────────────────

export function PrivacyContent() {
  const activeId = useActiveSection()

  return (
    <MotionConfig reducedMotion="user">
      <section className="print-reveal bg-background py-16 md:py-24 print:py-0">
        <div className="container max-w-6xl">
          {/* Version strip and adoption line */}
          <AnimatedSection className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Version {PRIVACY_VERSION} · Effective {PRIVACY_EFFECTIVE} · Last updated{" "}
                {PRIVACY_LAST_UPDATED}
              </p>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-primary hover:border-accent/60 hover:bg-accent/10 transition-colors print:hidden"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Print or save as PDF
              </button>
            </div>
            <p className="rounded-lg border border-border border-l-4 border-l-secondary bg-card px-4 py-3 text-sm text-foreground/75">
              {PRIVACY_ADOPTION_LINE}
            </p>
          </AnimatedSection>

          {/* At a glance */}
          <AnimatedSection className="mt-14" amount={0.1}>
            <SectionLabel>Privacy Policy</SectionLabel>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary">
              At a glance
            </h2>
            <GoldDivider className="mt-3 mb-8" width={48} />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRIVACY_GLANCE.map((item) => {
                const Icon = GLANCE_ICONS[item.icon]
                return (
                  <li
                    key={item.heading}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 break-inside-avoid"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-sans text-base font-semibold text-primary">
                      {item.heading}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
                  </li>
                )
              })}
            </ul>
          </AnimatedSection>

          {/* Full policy */}
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            <aside className="min-w-0 print:hidden">
              <nav aria-label="On this page" className="hidden lg:block sticky top-32">
                <p className="mb-3 px-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  On this page
                </p>
                <TocLinks activeId={activeId} />
              </nav>

              <details className="group rounded-xl border border-border bg-card lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
                  On this page
                  <ChevronDown
                    className="h-4 w-4 text-accent transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <nav aria-label="On this page" className="border-t border-border px-1 py-2">
                  <TocLinks activeId={activeId} />
                </nav>
              </details>
            </aside>

            <div className="flex min-w-0 max-w-3xl flex-col">
              {PRIVACY_SECTIONS.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className={cn(
                    "!scroll-mt-32",
                    i > 0 && "mt-10 border-t border-border pt-10",
                  )}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-xl md:text-2xl font-bold text-primary"
                  >
                    {section.number}. {section.title}
                  </h2>
                  {section.act && (
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Data Protection Act, 2011 — {section.act}
                    </p>
                  )}
                  <div className="mt-5">
                    <PrivacyBlocks blocks={section.blocks} />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
