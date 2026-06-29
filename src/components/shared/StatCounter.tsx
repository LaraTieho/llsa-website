"use client"

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const started = useRef(false)
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      animate(count, value, { duration, ease: "easeOut" })
    }
  }, [inView, count, value, duration])

  return (
    <motion.span ref={ref} className={cn(className)}>
      {rounded}
    </motion.span>
  )
}
