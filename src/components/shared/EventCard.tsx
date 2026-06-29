"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  type: string
  location: string
  date: string
  hours: number
  className?: string
}

const TYPE_COLOURS: Record<string, string> = {
  Workshop: "bg-amber-100 text-amber-800",
  Seminar: "bg-primary/10 text-primary",
  Conference: "bg-purple-100 text-purple-800",
  Webinar: "bg-teal-100 text-teal-800",
  "Field Trip": "bg-green-100 text-green-800",
}

function typeBadgeClass(type: string): string {
  return TYPE_COLOURS[type] ?? "bg-muted text-foreground/60"
}

export function EventCard({
  title,
  type,
  location,
  date,
  hours,
  className,
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
      className={cn(
        "group flex flex-col gap-4 rounded-xl border border-border bg-card p-5",
        "shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300",
        className,
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-block rounded-full px-3 py-0.5 text-xs font-semibold shrink-0",
            typeBadgeClass(type),
          )}
        >
          {type}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-accent shrink-0">
          <Clock className="h-3.5 w-3.5" />
          {hours} CPD {hours === 1 ? "hr" : "hrs"}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>

      {/* Meta */}
      <div className="mt-auto flex flex-col gap-1.5 text-sm text-foreground/55">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 shrink-0 text-accent" />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
          {location}
        </div>
      </div>
    </motion.div>
  )
}
