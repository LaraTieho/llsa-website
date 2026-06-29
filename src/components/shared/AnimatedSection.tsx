"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  amount?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
