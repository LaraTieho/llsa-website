"use client"

import { Suspense, useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search, X, Mail, ArrowRight, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionLabel } from "@/components/shared/SectionLabel"
import { GoldDivider } from "@/components/shared/GoldDivider"
import {
  FAQ_CATEGORIES,
  FAQ_DISCLAIMER,
  FAQ_ITEMS,
  FAQ_LAST_REVIEWED,
  faqItemToPlainText,
  type FaqCategoryId,
} from "@/data/faq"
import { FaqAccordionItem } from "./FaqAccordionItem"

type CategoryFilter = FaqCategoryId | "all"

const SEARCH_INDEX = FAQ_ITEMS.map((item) => ({
  item,
  text: `${item.question}\n${faqItemToPlainText(item)}`.toLowerCase(),
}))

const CATEGORY_IDS = new Set<string>(FAQ_CATEGORIES.map((c) => c.id))

function toCategory(value: string | null): CategoryFilter {
  return value && CATEGORY_IDS.has(value) ? (value as FaqCategoryId) : "all"
}

// ── Disclaimer ─────────────────────────────────────────────────

function Disclaimer() {
  return (
    <div className="flex gap-3 rounded-xl border border-border border-l-4 border-l-accent bg-card p-5">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      <p className="text-sm text-foreground/65 leading-relaxed">{FAQ_DISCLAIMER}</p>
    </div>
  )
}

// ── Browser (search + chips + list) ────────────────────────────

interface FaqBrowserProps {
  category: CategoryFilter
  onCategoryChange: (category: CategoryFilter) => void
}

function FaqBrowser({ category, onCategoryChange }: FaqBrowserProps) {
  const [query, setQuery] = useState("")
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  // Deep links: /faq#<id> opens that question and scrolls to it
  useEffect(() => {
    function openFromHash() {
      const id = decodeURIComponent(window.location.hash.slice(1))
      if (!id || !FAQ_ITEMS.some((item) => item.id === id)) return
      setQuery("")
      onCategoryChange("all")
      setOpenIds((prev) => new Set(prev).add(id))
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [onCategoryChange])

  const searchMatches = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean)
    return SEARCH_INDEX.filter(({ text }) => words.every((w) => text.includes(w))).map(
      ({ item }) => item,
    )
  }, [query])

  const counts = useMemo(() => {
    const map = new Map<CategoryFilter, number>([["all", searchMatches.length]])
    for (const item of searchMatches) map.set(item.category, (map.get(item.category) ?? 0) + 1)
    return map
  }, [searchMatches])

  const results =
    category === "all" ? searchMatches : searchMatches.filter((i) => i.category === category)

  const chips: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    ...FAQ_CATEGORIES,
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Search */}
      <div>
        <label htmlFor="faq-search" className="mb-2 block text-sm font-semibold text-primary">
          Search questions
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search — e.g. licence, geology, CPD, beacon"
            className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Category chips */}
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {chips.map((chip) => {
          const active = chip.id === category
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(chip.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-accent/60 hover:bg-accent/10",
              )}
            >
              {chip.label}
              <span
                className={cn(
                  "rounded-full px-1.5 py-px font-mono text-[10px]",
                  active ? "bg-white/15" : "bg-muted text-muted-foreground",
                )}
              >
                {counts.get(chip.id) ?? 0}
              </span>
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "question" : "questions"}
      </p>

      {/* Results */}
      {results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="text-base text-foreground/65">No questions match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              onCategoryChange("all")
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-md border-2 border-primary/25 px-5 py-2 text-sm font-semibold text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            Clear search
          </button>
        </div>
      ) : category === "all" ? (
        <div className="flex flex-col gap-14">
          {FAQ_CATEGORIES.map((cat) => {
            const group = results.filter((i) => i.category === cat.id)
            if (group.length === 0) return null
            return (
              <AnimatedSection key={cat.id} amount={0.05}>
                <section aria-labelledby={`faq-cat-${cat.id}`}>
                  <SectionLabel>Questions &amp; Answers</SectionLabel>
                  <h2
                    id={`faq-cat-${cat.id}`}
                    className="mt-2 font-display text-xl md:text-2xl font-bold text-primary"
                  >
                    {cat.label}
                  </h2>
                  <GoldDivider className="mt-3 mb-6" width={48} />
                  <div className="flex flex-col gap-3">
                    {group.map((item) => (
                      <FaqAccordionItem
                        key={item.id}
                        item={item}
                        open={openIds.has(item.id)}
                        onToggle={toggle}
                      />
                    ))}
                  </div>
                </section>
              </AnimatedSection>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {results.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              open={openIds.has(item.id)}
              onToggle={toggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Keeps the selected category in the URL (?category=<id>) so it can be shared
function FaqBrowserWithParams() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const category = toCategory(searchParams.get("category"))

  const setCategory = useCallback(
    (next: CategoryFilter) => {
      const current = toCategory(new URLSearchParams(window.location.search).get("category"))
      if (next === current) return
      router.replace(next === "all" ? pathname : `${pathname}?category=${next}`, {
        scroll: false,
      })
    },
    [router, pathname],
  )

  return <FaqBrowser category={category} onCategoryChange={setCategory} />
}

const noop = () => {}

// ── FaqContent ─────────────────────────────────────────────────

export function FaqContent() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl">
        <AnimatedSection className="mb-10 flex flex-col gap-3">
          <Disclaimer />
          <p className="text-xs text-muted-foreground">Last reviewed: {FAQ_LAST_REVIEWED}</p>
        </AnimatedSection>

        <Suspense fallback={<FaqBrowser category="all" onCategoryChange={noop} />}>
          <FaqBrowserWithParams />
        </Suspense>

        {/* Still have a question? */}
        <AnimatedSection className="mt-20">
          <div className="rounded-2xl bg-primary p-8 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Didn&apos;t find your answer?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/75 leading-relaxed">
              Write to the Secretary and we will reply. Questions that come up often are added to
              this page.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:geomaticsinstitute.ls@gmail.com?subject=Question%20for%20GIL"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email the Secretary
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-7 py-2.5 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Contact page
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10">
          <Disclaimer />
        </div>
      </div>
    </section>
  )
}
