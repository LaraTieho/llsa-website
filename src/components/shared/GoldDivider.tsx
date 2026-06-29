"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface GoldDividerProps {
  className?: string
  width?: number
}

export function GoldDivider({ className, width = 80 }: GoldDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width } : { width: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="rounded-full bg-accent"
        style={{ height: 4 }}
      />
    </div>
  )
}
