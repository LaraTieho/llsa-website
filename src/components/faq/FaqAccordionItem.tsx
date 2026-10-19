"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronDown, Link2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/data/faq"
import { FaqAnswer } from "./FaqAnswer"

interface FaqAccordionItemProps {
  item: FaqItem
  open: boolean
  onToggle: (id: string) => void
}

export function FaqAccordionItem({ item, open, onToggle }: FaqAccordionItemProps) {
  const reduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | null>(null)

  const buttonId = `${item.id}-question`
  const panelId = `${item.id}-answer`

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
  }, [])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`${location.origin}/faq#${item.id}`)
      setCopied(true)
      if (timerRef.current) window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. insecure context) — nothing to do
    }
  }

  return (
    <div
      id={item.id}
      className={cn(
        "scroll-mt-36 rounded-xl border bg-card transition-colors",
        open ? "border-accent/50 shadow-sm" : "border-border hover:border-primary/25",
      )}
    >
      <div className="flex items-start gap-2 pr-2">
        <h3 className="flex-1">
          <button
            type="button"
            id={buttonId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => onToggle(item.id)}
            className="flex w-full items-start gap-4 rounded-xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span className="flex-1 font-sans text-base font-semibold text-primary leading-snug">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" as const }}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            >
              <ChevronDown className="h-5 w-5 text-accent" />
            </motion.span>
          </button>
        </h3>
        <button
          type="button"
          onClick={copyLink}
          className="mt-3 inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={copied ? "Link copied" : `Copy link to "${item.question}"`}
          title="Copy link"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-secondary" aria-hidden="true" />
              <span>Copied</span>
            </>
          ) : (
            <Link2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <FaqAnswer blocks={item.answer} basis={item.basis} source={item.source} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
