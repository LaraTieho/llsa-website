import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  inverted?: boolean
  className?: string
}

// Geomatics Institute of Lesotho — adopted horizontal logo ("Kingdom on the grid").
// `inverted` switches to the white version for navy/dark backgrounds.
export function Logo({ inverted, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Geomatics Institute of Lesotho — home" className={cn("flex items-center", className)}>
      <Image
        src={inverted ? "/images/gil-logo-white.svg" : "/images/gil-logo.svg"}
        alt="Geomatics Institute of Lesotho"
        width={1280}
        height={400}
        priority
        className="h-12 w-auto sm:h-14 lg:h-16"
      />
    </Link>
  )
}
