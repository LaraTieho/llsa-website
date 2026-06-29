"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Highland plateau summit reference point (Thabana Ntlenyana area, ~29°S 28°E)
const CX = 250
const CY = 185

// Outermost contour: organic closed cubic bezier, 4 segments
// Anchor sequence: East → North → West → South → East
const BASE_M: [number, number] = [473, 200]
const BASE_SEGS: [number, number, number, number, number, number][] = [
  [475, 95, 350, 20, 258, 26],    // → North
  [166, 32, 18, 118, 20, 200],    // → West
  [22, 284, 132, 372, 252, 366],  // → South
  [368, 360, 470, 298, 473, 200], // → East (close)
]

const N_LAYERS = 10
const SCALE_STEP = 0.855

// Scale a point toward/away from the summit centre
function sp(x: number, y: number, s: number): string {
  return `${+(CX + (x - CX) * s).toFixed(1)},${+(CY + (y - CY) * s).toFixed(1)}`
}

// Pre-compute 10 concentric contour path strings
const CONTOURS: string[] = Array.from({ length: N_LAYERS }, (_, i) => {
  const s = Math.pow(SCALE_STEP, i)
  const segs = BASE_SEGS.map(
    ([c1x, c1y, c2x, c2y, ex, ey]) =>
      `C ${sp(c1x, c1y, s)} ${sp(c2x, c2y, s)} ${sp(ex, ey, s)}`
  )
  return `M ${sp(BASE_M[0], BASE_M[1], s)} ${segs.join(" ")} Z`
})

interface LesothoTopoSVGProps {
  className?: string
}

export function LesothoTopoSVG({ className }: LesothoTopoSVGProps) {
  return (
    <svg
      viewBox="0 0 500 400"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      {/* Whole graphic rocks ±1° around the summit, 6-second loop */}
      <motion.g
        style={{ transformOrigin: "50% 50%" }}
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 6, ease: "easeInOut" as const, repeat: Infinity }}
      >
        {/* Principal survey meridian — dashed vertical through summit */}
        <line
          x1={CX} y1={8}
          x2={CX} y2={390}
          stroke="#C6973F"
          strokeWidth={0.5}
          strokeDasharray="3 7"
          opacity={0.22}
        />

        {/* Concentric topographic contour paths — draw in staggered on mount */}
        {CONTOURS.map((d, i) => {
          const opacity = +(0.15 + 0.55 * (i / (N_LAYERS - 1))).toFixed(3)
          return (
            <g key={i} opacity={opacity}>
              <motion.path
                d={d}
                stroke="#C6973F"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.2,
                  ease: "easeOut" as const,
                  delay: i * 0.1,
                }}
              />
            </g>
          )
        })}

        {/* Survey benchmark crosshair at summit — pulses opacity */}
        <motion.g
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, ease: "easeInOut" as const, repeat: Infinity }}
        >
          <line
            x1={CX - 10} y1={CY}
            x2={CX + 10} y2={CY}
            stroke="#C6973F" strokeWidth={1} strokeLinecap="round"
          />
          <line
            x1={CX} y1={CY - 10}
            x2={CX} y2={CY + 10}
            stroke="#C6973F" strokeWidth={1} strokeLinecap="round"
          />
          <circle cx={CX} cy={CY} r={2} fill="#C6973F" />
        </motion.g>

        {/* Coordinate label */}
        <text
          x={CX}
          y={392}
          textAnchor="middle"
          fontSize={9}
          fontFamily="Inter, sans-serif"
          fill="#C6973F"
          opacity={0.45}
          letterSpacing="0.08em"
        >
          Kingdom of Lesotho — 29°S, 28°E
        </text>
      </motion.g>
    </svg>
  )
}
