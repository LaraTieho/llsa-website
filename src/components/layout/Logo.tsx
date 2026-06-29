import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  inverted?: boolean
  className?: string
}

export function Logo({ inverted, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Lesotho Land Surveyors Association" className={cn("flex items-center gap-2.5", className)}>
      {/* TODO: [LLSA CONTENT] — ideally supply a separate white/cream logo variant for dark backgrounds;
          until then, brightness-0+invert renders a clean white logo on navy/dark backgrounds */}
      <Image
        src="/images/llsa-logo.png"
        alt="Lesotho Land Surveyors Association"
        width={176}
        height={117}
        priority
        className={cn(
          "h-10 w-auto",
          inverted
            ? "brightness-0 invert"
            : "dark:brightness-0 dark:invert",
        )}
      />
      <span
        className={cn(
          "text-[10px] font-sans tracking-widest uppercase hidden sm:block",
          inverted ? "text-white/55" : "text-primary/55"
        )}
      >
        Land Surveyors
      </span>
    </Link>
  )
}
