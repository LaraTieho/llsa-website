import { cn } from "@/lib/utils"

export type LegislationBadgeVariant =
  | "principal"
  | "amendment"
  | "subsidiary"
  | "in-force"
  | "repealed"

interface LegislationBadgeProps {
  variant: LegislationBadgeVariant
  label?: string
  className?: string
}

const VARIANT_MAP: Record<
  LegislationBadgeVariant,
  { defaultLabel: string; className: string }
> = {
  principal: {
    defaultLabel: "Principal Act",
    className: "bg-primary text-white",
  },
  amendment: {
    defaultLabel: "Amendment",
    className: "bg-teal-700 text-white",
  },
  subsidiary: {
    defaultLabel: "Subsidiary Legislation",
    className: "border border-border bg-muted text-foreground/60",
  },
  "in-force": {
    defaultLabel: "In Force",
    className: "bg-green-100 text-green-800",
  },
  repealed: {
    defaultLabel: "Repealed",
    className: "bg-[#E8E5DE] text-[#4A4A4A]",
  },
}

export function LegislationBadge({
  variant,
  label,
  className,
}: LegislationBadgeProps) {
  const { defaultLabel, className: variantClass } = VARIANT_MAP[variant]

  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-0.5 text-xs font-semibold",
        variantClass,
        className,
      )}
    >
      {label ?? defaultLabel}
    </span>
  )
}
