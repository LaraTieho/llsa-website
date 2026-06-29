"use client"

import { motion } from "framer-motion"
import { User, MapPin, Hash, Tag, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface MemberCardProps {
  name: string
  licenceNo: string
  category: string
  district: string
  contact?: string
  className?: string
}

export function MemberCard({
  name,
  licenceNo,
  category,
  district,
  contact,
  className,
}: MemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-5",
        "shadow-sm hover:shadow-md transition-shadow duration-300",
        className,
      )}
    >
      {/* Gold left accent bar — slides in on hover */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1 rounded-r-sm bg-accent",
          "-translate-x-1 group-hover:translate-x-0 transition-transform duration-300",
        )}
      />

      <div className="pl-1">
        {/* Name */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
              <User className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-foreground leading-snug truncate">{name}</h3>
          </div>
        </div>

        {/* Details grid */}
        <dl className="grid grid-cols-1 gap-1.5 text-sm">
          <div className="flex items-center gap-2 text-foreground/60">
            <Hash className="h-3.5 w-3.5 shrink-0 text-accent" />
            <dt className="sr-only">Licence No</dt>
            <dd className="font-mono text-xs font-medium text-foreground/80">{licenceNo}</dd>
          </div>

          <div className="flex items-center gap-2 text-foreground/60">
            <Tag className="h-3.5 w-3.5 shrink-0 text-accent" />
            <dt className="sr-only">Category</dt>
            <dd>{category}</dd>
          </div>

          <div className="flex items-center gap-2 text-foreground/60">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            <dt className="sr-only">District</dt>
            <dd>{district}</dd>
          </div>

          {contact && (
            <div className="flex items-center gap-2 text-foreground/60">
              <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
              <dt className="sr-only">Contact</dt>
              <dd className="truncate">{contact}</dd>
            </div>
          )}
        </dl>
      </div>
    </motion.div>
  )
}
