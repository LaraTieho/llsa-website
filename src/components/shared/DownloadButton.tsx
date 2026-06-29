"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
  href: string
  label: string
  className?: string
  filename?: string
}

export function DownloadButton({ href, label, className, filename }: DownloadButtonProps) {
  return (
    <motion.a
      href={href}
      download={filename ?? true}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" as const }}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg bg-accent px-5 py-2.5",
        "text-sm font-semibold text-primary",
        "hover:bg-accent/85 transition-colors",
        className,
      )}
    >
      <Download className="h-4 w-4 shrink-0" />
      {label}
    </motion.a>
  )
}
