"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { MapPin, Mountain, Plane, Globe, Ruler, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations"

// ── CSS Illustrations ──────────────────────────────────────────

function CadastralIllustration() {
  const parcels = [
    { x: 40, y: 50, w: 110, h: 80 },
    { x: 160, y: 50, w: 80, h: 80 },
    { x: 250, y: 50, w: 110, h: 80 },
    { x: 40, y: 140, w: 70, h: 100 },
    { x: 120, y: 140, w: 120, h: 100 },
    { x: 250, y: 140, w: 110, h: 100 },
    { x: 40, y: 250, w: 320, h: 70 },
  ]
  const beacons: [number, number][] = [
    [40, 50], [150, 50], [230, 50], [360, 50],
    [40, 130], [150, 130], [230, 130], [360, 130],
    [40, 240], [110, 240], [240, 240], [360, 240],
    [40, 320], [360, 320],
  ]
  return (
    <svg viewBox="0 0 400 370" className="w-full h-full" aria-hidden="true">
      {/* Parcels */}
      {parcels.map((p, i) => (
        <rect
          key={i}
          x={p.x} y={p.y} width={p.w} height={p.h}
          fill="hsl(var(--primary))" fillOpacity={0.05 + i * 0.01}
          stroke="hsl(var(--primary))" strokeOpacity={0.2}
          strokeWidth={0.8}
        />
      ))}
      {/* Beacon crosses */}
      {beacons.map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.7} />
          <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.7} />
          <circle cx={cx} cy={cy} r={2} fill="hsl(var(--accent))" opacity={0.8} />
        </g>
      ))}
      {/* Dimension annotations */}
      <line x1={40} y1={348} x2={360} y2={348} stroke="hsl(var(--primary))" strokeOpacity={0.25} strokeWidth={0.8} strokeDasharray="4 3" />
      <text x={200} y={362} textAnchor="middle" fontSize={9} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.7}>320.000 m</text>
      <line x1={378} y1={50} x2={378} y2={320} stroke="hsl(var(--primary))" strokeOpacity={0.25} strokeWidth={0.8} strokeDasharray="4 3" />
      <text x={392} y={195} textAnchor="middle" fontSize={9} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.7} transform="rotate(90 392 195)">270.000 m</text>
      {/* Diagram number stamp */}
      <rect x={280} y={270} width={70} height={32} rx={2} fill="none" stroke="hsl(var(--accent))" strokeWidth={0.8} strokeOpacity={0.45} />
      <text x={315} y={281} textAnchor="middle" fontSize={7} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.6}>DIAG NO.</text>
      <text x={315} y={294} textAnchor="middle" fontSize={8} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.8}>LAA/2026/XXX</text>
    </svg>
  )
}

function TopographyIllustration() {
  // Concentric irregular contours across a hillside
  const BASE = "M20,200 C60,240 100,260 160,250 C220,240 270,200 310,180 C350,160 380,170 390,185"
  const layers = Array.from({ length: 8 }, (_, i) => {
    const dy = -i * 22
    return { dy, opacity: 0.12 + i * 0.085, sw: 0.6 + i * 0.12 }
  })
  const spots: [number, number, number][] = [
    [180, 110, 312], [280, 135, 264], [100, 162, 198], [340, 155, 231],
  ]
  return (
    <svg viewBox="0 0 400 340" className="w-full h-full" aria-hidden="true">
      {/* Contour lines */}
      {layers.map((l, i) => (
        <path
          key={i}
          d={BASE}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={l.sw}
          opacity={l.opacity}
          transform={`translate(0, ${l.dy})`}
        />
      ))}
      {/* Spot heights */}
      {spots.map(([cx, cy, elev], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={2.5} fill="hsl(var(--accent))" opacity={0.75} />
          <text x={cx + 5} y={cy + 4} fontSize={8} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.75}>
            {elev}m
          </text>
        </g>
      ))}
      {/* Index contour (every 5th, thicker) */}
      <path
        d={BASE}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth={1.4}
        opacity={0.35}
        transform="translate(0, -88)"
      />
      <text x={395} y={112} textAnchor="end" fontSize={8} fill="hsl(var(--primary))" opacity={0.45} fontFamily="monospace">1900m</text>
      {/* Grid ticks */}
      {[60, 120, 180, 240, 300, 360].map((x) => (
        <g key={x}>
          <line x1={x} y1={310} x2={x} y2={316} stroke="hsl(var(--primary))" strokeOpacity={0.3} strokeWidth={0.8} />
          <text x={x} y={326} textAnchor="middle" fontSize={7} fill="hsl(var(--primary))" opacity={0.3} fontFamily="monospace">{x * 2}</text>
        </g>
      ))}
      <line x1={20} y1={310} x2={390} y2={310} stroke="hsl(var(--primary))" strokeOpacity={0.2} strokeWidth={0.8} />
    </svg>
  )
}

function DroneIllustration() {
  // Perspective ground grid + UAV shape overhead
  const vx = 200; const vy = 145
  const cols = [0, 60, 120, 180, 240, 300, 360, 400]
  const rows = [145, 175, 210, 255, 310, 380]
  const toPersp = (gx: number, gy: number): [number, number] => {
    const t = (gy - vy) / (380 - vy)
    const x = vx + (gx - vx) * t
    const y = vy + (gy - vy)
    return [x, y]
  }
  return (
    <svg viewBox="0 0 400 370" className="w-full h-full" aria-hidden="true">
      {/* Perspective grid */}
      {cols.map((gx) =>
        rows.slice(0, -1).map((gy, ri) => {
          const [x1, y1] = toPersp(gx, gy)
          const [x2, y2] = toPersp(gx, rows[ri + 1])
          return <line key={`c${gx}${ri}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeOpacity={0.15} strokeWidth={0.7} />
        })
      )}
      {rows.map((gy) => {
        const [x1] = toPersp(0, gy); const [x2] = toPersp(400, gy)
        return <line key={`r${gy}`} x1={x1} y1={gy} x2={x2} y2={gy} stroke="hsl(var(--primary))" strokeOpacity={0.15} strokeWidth={0.7} />
      })}
      {/* GCP ground markers */}
      {([[90, 200], [200, 240], [310, 205], [150, 300], [270, 290]] as [number, number][]).map(([gx, gy], i) => {
        const [x, y] = toPersp(gx, gy)
        return (
          <g key={i}>
            <rect x={x - 6} y={y - 6} width={12} height={12} fill="none" stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.7} transform={`rotate(45 ${x} ${y})`} />
            <circle cx={x} cy={y} r={1.5} fill="hsl(var(--accent))" opacity={0.8} />
          </g>
        )
      })}
      {/* Drone body */}
      <g transform="translate(200, 68)">
        <rect x={-14} y={-5} width={28} height={10} rx={3} fill="hsl(var(--primary))" opacity={0.75} />
        <rect x={-5} y={-12} width={10} height={24} rx={2} fill="hsl(var(--primary))" opacity={0.6} />
        {/* Arms */}
        {[[-28, -28], [28, -28], [-28, 28], [28, 28]].map(([dx, dy], i) => (
          <g key={i}>
            <line x1={0} y1={0} x2={dx} y2={dy} stroke="hsl(var(--primary))" strokeWidth={1.5} opacity={0.55} />
            <circle cx={dx} cy={dy} r={7} fill="none" stroke="hsl(var(--accent))" strokeWidth={1} opacity={0.6} />
            <circle cx={dx} cy={dy} r={1.5} fill="hsl(var(--accent))" opacity={0.7} />
          </g>
        ))}
        {/* Camera lens */}
        <circle cx={0} cy={18} r={4} fill="none" stroke="hsl(var(--accent))" strokeWidth={1} opacity={0.7} />
        <circle cx={0} cy={18} r={1.5} fill="hsl(var(--accent))" opacity={0.6} />
      </g>
      {/* Flight path dotted */}
      <path d="M80,68 Q140,30 200,68 Q260,106 320,68" fill="none" stroke="hsl(var(--accent))" strokeWidth={0.8} strokeDasharray="5 4" opacity={0.4} />
      {/* Nadir footprint */}
      <ellipse cx={200} cy={240} rx={60} ry={20} fill="hsl(var(--accent))" fillOpacity={0.05} stroke="hsl(var(--accent))" strokeWidth={0.8} strokeDasharray="4 3" strokeOpacity={0.35} />
    </svg>
  )
}

function GisIllustration() {
  const nodes: [number, number, boolean][] = [
    [200, 180, true],
    [100, 100, false], [310, 90, false], [80, 230, false],
    [310, 240, false], [170, 300, false], [270, 310, false],
  ]
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [3, 5], [4, 6],
  ]
  const layers = [
    { y: 50, label: "Cadastral Layer", opacity: 0.22 },
    { y: 98, label: "Topographic Layer", opacity: 0.18 },
    { y: 146, label: "Infrastructure Layer", opacity: 0.14 },
  ]
  return (
    <svg viewBox="0 0 400 370" className="w-full h-full" aria-hidden="true">
      {/* Layer stack */}
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={40} y={l.y} width={280} height={34} rx={3}
            fill="hsl(var(--primary))" fillOpacity={l.opacity}
            stroke="hsl(var(--primary))" strokeOpacity={0.2} strokeWidth={0.8}
          />
          <text x={52} y={l.y + 21} fontSize={8} fill="hsl(var(--primary))" opacity={0.5} fontFamily="monospace">
            {l.label}
          </text>
          {/* Layer connector dots */}
          <circle cx={310} cy={l.y + 17} r={2} fill="hsl(var(--accent))" opacity={0.55} />
          <circle cx={320} cy={l.y + 17} r={2} fill="hsl(var(--accent))" opacity={0.4} />
        </g>
      ))}
      {/* Network edges */}
      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a]; const [x2, y2] = nodes[b]
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeOpacity={0.2} strokeWidth={0.9} />
      })}
      {/* Nodes */}
      {nodes.map(([cx, cy, primary], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={primary ? 12 : 7}
            fill={primary ? "hsl(var(--accent))" : "hsl(var(--primary))"}
            opacity={primary ? 0.85 : 0.55}
          />
          {primary && <circle cx={cx} cy={cy} r={18} fill="none" stroke="hsl(var(--accent))" strokeWidth={1} opacity={0.35} />}
        </g>
      ))}
      {/* Labels */}
      {([["District HQ", 200, 164], ["School", 100, 86], ["Clinic", 310, 76], ["Well", 80, 216], ["Road Node", 310, 226], ["Market", 170, 286], ["Post", 270, 296]] as [string, number, number][]).map(([label, cx, cy], i) => (
        <text key={i} x={cx} y={cy - 12} textAnchor="middle" fontSize={7} fill="hsl(var(--primary))" opacity={0.55} fontFamily="monospace">
          {label}
        </text>
      ))}
    </svg>
  )
}

function EngineeringIllustration() {
  // Cross-section profile with grade stakes
  const profile: [number, number][] = [
    [20, 260], [60, 255], [100, 235], [140, 200], [180, 175],
    [220, 168], [260, 178], [300, 195], [340, 215], [380, 225],
  ]
  const designLine: [number, number][] = [
    [20, 265], [380, 215],
  ]
  const pathD = profile.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ")
  const designD = `M${designLine[0][0]},${designLine[0][1]} L${designLine[1][0]},${designLine[1][1]}`
  return (
    <svg viewBox="0 0 400 340" className="w-full h-full" aria-hidden="true">
      {/* Datum grid */}
      {[180, 210, 240, 270, 300].map((y) => (
        <line key={y} x1={20} y1={y} x2={380} y2={y} stroke="hsl(var(--primary))" strokeOpacity={0.08} strokeWidth={0.8} />
      ))}
      {/* Fill below profile */}
      <path
        d={pathD + " L380,310 L20,310 Z"}
        fill="hsl(var(--primary))"
        fillOpacity={0.07}
      />
      {/* Existing ground profile */}
      <path d={pathD} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.6} opacity={0.45} />
      {/* Design grade line */}
      <path d={designD} fill="none" stroke="hsl(var(--accent))" strokeWidth={1.2} strokeDasharray="8 4" opacity={0.7} />
      {/* Grade stakes */}
      {profile.filter((_, i) => i % 2 === 1).map(([x, y], i) => {
        const designY = designLine[0][1] + ((x - designLine[0][0]) / (designLine[1][0] - designLine[0][0])) * (designLine[1][1] - designLine[0][1])
        const cut = y < designY
        const topY = Math.min(y, designY)
        const botY = Math.max(y, designY)
        return (
          <g key={i}>
            <line x1={x} y1={topY} x2={x} y2={botY}
              stroke={cut ? "hsl(var(--accent))" : "hsl(var(--secondary))"}
              strokeWidth={1} strokeDasharray="2 2" opacity={0.55}
            />
            <rect x={x - 12} y={topY - 14} width={24} height={13} rx={1}
              fill={cut ? "hsl(var(--accent))" : "hsl(var(--secondary))"}
              fillOpacity={0.15}
              stroke={cut ? "hsl(var(--accent))" : "hsl(var(--secondary))"}
              strokeWidth={0.6} strokeOpacity={0.5}
            />
            <text x={x} y={topY - 4} textAnchor="middle" fontSize={7}
              fill={cut ? "hsl(var(--accent))" : "hsl(var(--secondary))"}
              fontFamily="monospace" opacity={0.8}
            >
              {cut ? `C${(botY - topY).toFixed(0)}` : `F${(botY - topY).toFixed(0)}`}
            </text>
          </g>
        )
      })}
      {/* Benchmark marker */}
      <polygon points="220,168 213,155 227,155" fill="none" stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.7} />
      <circle cx={220} cy={168} r={2.5} fill="hsl(var(--accent))" opacity={0.8} />
      <text x={228} y={156} fontSize={7} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.75}>BM 1862.4m</text>
      {/* Horizontal datum */}
      <line x1={20} y1={300} x2={380} y2={300} stroke="hsl(var(--primary))" strokeOpacity={0.3} strokeWidth={0.8} />
      <text x={20} y={314} fontSize={7} fill="hsl(var(--primary))" opacity={0.35} fontFamily="monospace">CH 0+000</text>
      <text x={360} y={314} fontSize={7} fill="hsl(var(--primary))" opacity={0.35} fontFamily="monospace" textAnchor="end">CH 3+600</text>
    </svg>
  )
}

function LandRightsIllustration() {
  return (
    <svg viewBox="0 0 400 370" className="w-full h-full" aria-hidden="true">
      {/* Document body */}
      <rect x={70} y={30} width={260} height={310} rx={4}
        fill="hsl(var(--primary))" fillOpacity={0.05}
        stroke="hsl(var(--primary))" strokeOpacity={0.2} strokeWidth={1}
      />
      {/* Header band */}
      <rect x={70} y={30} width={260} height={44} rx={4}
        fill="hsl(var(--primary))" fillOpacity={0.12}
      />
      {/* Official seal (overlapping header) */}
      <circle cx={310} cy={74} r={26} fill="none" stroke="hsl(var(--accent))" strokeWidth={1.2} opacity={0.7} />
      <circle cx={310} cy={74} r={20} fill="none" stroke="hsl(var(--accent))" strokeWidth={0.6} strokeDasharray="3 2" opacity={0.5} />
      <text x={310} y={71} textAnchor="middle" fontSize={6} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.75}>OFFICIAL</text>
      <text x={310} y={81} textAnchor="middle" fontSize={6} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.75}>SEAL</text>
      {/* Header text */}
      <text x={190} y={49} textAnchor="middle" fontSize={9} fill="hsl(var(--primary))" opacity={0.7} fontFamily="monospace" fontWeight="bold">LAND AUDIT REPORT</text>
      <text x={190} y={64} textAnchor="middle" fontSize={7} fill="hsl(var(--primary))" opacity={0.45} fontFamily="monospace">Land Administration Authority — Maseru</text>
      {/* Content lines */}
      {[100, 115, 130, 145, 160, 175, 195, 210, 225, 240, 260, 275].map((y, i) => (
        <rect key={y} x={90} y={y} width={i % 4 === 3 ? 130 : 220} height={6} rx={1}
          fill="hsl(var(--primary))" fillOpacity={0.10}
        />
      ))}
      {/* Parcel sketch box */}
      <rect x={90} y={290} width={100} height={38} rx={2}
        fill="hsl(var(--primary))" fillOpacity={0.07}
        stroke="hsl(var(--accent))" strokeWidth={0.8} strokeOpacity={0.5}
      />
      <line x1={90} y1={290} x2={190} y2={328} stroke="hsl(var(--primary))" strokeOpacity={0.15} strokeWidth={0.6} />
      <line x1={190} y1={290} x2={90} y2={328} stroke="hsl(var(--primary))" strokeOpacity={0.15} strokeWidth={0.6} />
      <text x={140} y={313} textAnchor="middle" fontSize={7} fill="hsl(var(--accent))" opacity={0.65} fontFamily="monospace">PARCEL SKETCH</text>
      {/* Signature line */}
      <line x1={200} y1={322} x2={320} y2={322} stroke="hsl(var(--primary))" strokeOpacity={0.25} strokeWidth={0.8} />
      <text x={260} y={334} textAnchor="middle" fontSize={6} fill="hsl(var(--primary))" opacity={0.35} fontFamily="monospace">Licensed Surveyor — PLS No.</text>
      {/* Cert stamp */}
      <rect x={200} y={288} width={112} height={22} rx={2}
        fill="hsl(var(--accent))" fillOpacity={0.12}
        stroke="hsl(var(--accent))" strokeWidth={0.8} strokeOpacity={0.55}
      />
      <text x={256} y={303} textAnchor="middle" fontSize={7} fill="hsl(var(--accent))" fontFamily="monospace" opacity={0.8}>CERTIFIED CORRECT</text>
    </svg>
  )
}

// ── Service data ───────────────────────────────────────────────
interface Service {
  id: string
  Icon: LucideIcon
  title: string
  legalBasis?: string
  paragraphs: string[]
  Illustration: () => React.ReactElement
}

const SERVICES: Service[] = [
  {
    id: "cadastral",
    Icon: MapPin,
    title: "Cadastral Surveys",
    legalBasis: "Land Survey Act, 1980 (as amended by Act No. 2 of 2019) — Section 14; Land Survey Regulations, 1982",
    paragraphs: [
      "A cadastral survey defines the legal boundaries of land parcels — the physical and legal limits that underpin ownership, title registration, and all land transactions. In Lesotho, cadastral surveys are governed by Section 14 of the Land Survey Act, 1980, which restricts cadastral survey work exclusively to licensed Professional Land Surveyors.",
      "The survey process involves field measurement of existing boundary features, establishment of survey beacons, preparation of general plans and diagram drawings to prescribed standards, and lodgement of the approved survey records with the Land Administration Authority for integration into the national cadastre.",
      "Survey diagrams are the legal foundation for title deed registration. Without an approved diagram, land cannot be formally registered in the Deeds Registry. Cadastral surveys are therefore required for all land subdivisions, consolidations, lease registrations, and boundary adjustments in Lesotho.",
    ],
    Illustration: CadastralIllustration,
  },
  {
    id: "topographical",
    Icon: Mountain,
    title: "Topographical Surveys",
    paragraphs: [
      "A topographical survey records the three-dimensional shape of the ground surface — its elevation, gradient, and natural and man-made features — represented as contour lines, spot heights, and feature annotations on a topographic map or digital terrain model.",
      "Topographic surveys form the foundational data layer for engineering design, urban planning, and environmental assessment. Roads, pipelines, stormwater systems, and buildings all require accurate topographic base data before design can begin. In Lesotho's highland districts, where terrain gradients are extreme, the accuracy and density of topographic survey data is critical to safe infrastructure design.",
      "Licensed surveyors apply standard accuracy requirements to topographic work, selecting appropriate survey methods — total station, GNSS, or aerial photogrammetry — based on the terrain, required contour interval, and the final use of the data.",
    ],
    Illustration: TopographyIllustration,
  },
  {
    id: "aerial",
    Icon: Plane,
    title: "Aerial & Drone Mapping",
    paragraphs: [
      "Aerial and drone-based photogrammetric surveys produce high-resolution orthophotographs, contour maps, and digital elevation models (DEMs) from UAV or fixed-wing aerial platforms. The photogrammetric workflow involves flight planning, image capture, ground control point (GCP) collection for georeferencing, and photogrammetric processing to produce survey-accurate spatial products.",
      "Ground control point accuracy is critical — GCPs are positioned and measured by licensed surveyors using GNSS to tie aerial imagery to the national coordinate system. Final products are subject to accuracy specifications expressed as horizontal and vertical RMS error thresholds set by the commissioning authority.",
      "In Lesotho, drone mapping is increasingly applied to district infrastructure planning, road corridor assessment, and cadastral mapping in areas where traditional ground survey is logistically difficult. The LAA has adopted drone-based orthophoto acquisition as part of its cadastre update programme.",
    ],
    Illustration: DroneIllustration,
  },
  {
    id: "gis",
    Icon: Globe,
    title: "GIS & Spatial Data Services",
    paragraphs: [
      "Geographic Information Systems (GIS) practitioners collect, manage, analyse, and visualise spatial data — linking the surveyor's field measurements to database-driven decision support systems used by government, health services, NGOs, and the private sector.",
      "In Lesotho, GIS practitioners work closely with the LAA to maintain the national land information system, support district planning offices with spatial analysis, and build data management frameworks for facility mapping across health, education, and water sectors. GIS data underpins the delivery of government services at the local level.",
      "GIL members practising as GIS specialists contribute to data standardisation, metadata management, and the integration of survey datasets with national spatial data infrastructure — ensuring that cadastral, topographic, and planning data remains interoperable and current.",
    ],
    Illustration: GisIllustration,
  },
  {
    id: "engineering",
    Icon: Ruler,
    title: "Infrastructure & Engineering Surveys",
    paragraphs: [
      "Infrastructure surveys support the full lifecycle of built environment projects — from pre-construction topographic data collection through construction setting-out to final as-built record surveys. Every road, pipeline, bridge, dam, and building in Lesotho that requires accurate spatial positioning relies on a licensed surveyor at some stage of the project.",
      "Setting-out surveys translate design drawings into physical position in the field, ensuring that structures are built at the correct location, orientation, elevation, and alignment. As-built surveys then record the final position of completed works, creating the spatial record relied upon by operators, maintainers, and future designers.",
      "In Lesotho's highland terrain, survey work on infrastructure corridors involves steep gradients, limited access, and rapidly changing conditions. Surveyors working in these districts apply robust methodologies and redundant measurement techniques to maintain accuracy across difficult ground.",
    ],
    Illustration: EngineeringIllustration,
  },
  {
    id: "audit",
    Icon: FileText,
    title: "Land Rights & Audit",
    paragraphs: [
      "A land rights audit is a formal investigation that establishes the legal status of a parcel of land — confirming ownership, the nature of any registered rights (leasehold, freehold, customary), the precise boundaries as surveyed, and any encroachments, disputes, or encumbrances affecting the land.",
      "Licensed surveyors contribute technical evidence to boundary dispute proceedings — measuring and re-establishing original survey beacons, comparing current occupation with registered diagrams, and producing formal survey reports and plans that can be tendered in Land Court proceedings or before the Land Tribunal established under the Land Act, 2010.",
      "Formal land audit reports are increasingly required by financial institutions, government agencies, and project developers as due diligence documentation before land transactions, lease registrations, or infrastructure development. GIL members are equipped to produce these reports to the standards required by the LAA and the Deeds Registry.",
    ],
    Illustration: LandRightsIllustration,
  },
]

// ── ServiceBlock ───────────────────────────────────────────────
function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const flip = index % 2 === 1
  const { Icon, title, legalBasis, paragraphs, Illustration } = service

  const textVariants = flip ? slideInRight : slideInLeft
  const illustrationVariants = flip ? slideInLeft : slideInRight

  return (
    <div ref={ref}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>

        {/* Text side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-5"
        >
          <motion.div variants={textVariants} className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/12">
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
            </span>
            <h2 className="font-display text-2xl md:text-display-md text-primary leading-tight">{title}</h2>
          </motion.div>

          {paragraphs.map((para, i) => (
            <motion.p key={i} variants={fadeInUp} className="text-base text-foreground/70 leading-relaxed">
              {para}
            </motion.p>
          ))}

          {legalBasis && (
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-3 mt-1 p-4 rounded-lg bg-accent/8 border border-accent/20"
            >
              <span className="text-accent text-xs font-mono font-bold uppercase tracking-wider shrink-0 mt-0.5">
                Legal
              </span>
              <p className="text-xs text-foreground/60 leading-relaxed font-mono">{legalBasis}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Illustration side */}
        <motion.div
          variants={illustrationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(198,151,63,0.07) 0%, transparent 70%)",
              }}
            />
            <Illustration />
          </div>
        </motion.div>

      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
    </div>
  )
}

// ── ServiceBlocks ─────────────────────────────────────────────
export function ServiceBlocks() {
  const introRef = useRef<HTMLDivElement>(null)
  const introInView = useInView(introRef, { once: true, amount: 0.5 })
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.7 })

  return (
    <div className="bg-background">
      <div className="container">

        {/* Intro */}
        <motion.div
          ref={introRef}
          variants={staggerContainer}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          className="max-w-3xl pt-16 pb-4"
        >
          <motion.p variants={fadeInUp} className="text-lg text-foreground/70 leading-relaxed">
            Under the Land Survey Act No. 14 of 1980 (as amended by the Land Survey (Amendment)
            Act 2019, Act No. 2 of 2019), a professional land surveyor is the only person
            authorised to carry out cadastral surveys in Lesotho. The Chief Surveyor, a public
            officer responsible to the Commissioner of Lands, oversees the profession and chairs
            the Land Surveyors&apos; Board. The scope of the profession extends across the full
            lifecycle of land — from initial allocation and boundary definition to infrastructure
            development, spatial data management, and dispute resolution.
          </motion.p>
        </motion.div>

        {/* Service blocks */}
        {SERVICES.map((service, i) => (
          <ServiceBlock key={service.id} service={service} index={i} />
        ))}

        {/* Bottom CTA */}
        <motion.div
          ref={ctaRef}
          variants={fadeInUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-16 border-t border-border"
        >
          <div>
            <p className="font-display text-xl text-primary font-semibold mb-1">
              Looking for a licensed surveyor in Lesotho?
            </p>
            <p className="text-sm text-foreground/55">
              GIL maintains a register of all licensed Professional Land Surveyors and registered practices.
            </p>
          </div>
          <Link
            href="/membership"
            className="inline-flex items-center px-8 py-3.5 rounded-md bg-accent text-primary font-semibold text-sm hover:bg-accent/85 transition-colors duration-200 shrink-0"
          >
            Find a Licensed Surveyor →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
