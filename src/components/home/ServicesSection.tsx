"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { MapPin, Mountain, Plane, Globe, Ruler, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"

interface Service {
  id: string
  Icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    id: "cadastral",
    Icon: MapPin,
    title: "Cadastral Surveys",
    description:
      "The subdivision, consolidation, and boundary definition of land parcels under the Land Survey Act. All cadastral survey records must be certified by a licensed surveyor and lodged with the LAA.",
  },
  {
    id: "topographical",
    Icon: Mountain,
    title: "Topographical Surveys",
    description:
      "Accurate depictions of natural and man-made features and their elevations, used by engineers, planners, and architects for infrastructure design across Lesotho's highland terrain.",
  },
  {
    id: "aerial",
    Icon: Plane,
    title: "Aerial & Drone Mapping",
    description:
      "Photogrammetric survey by UAV or aerial platform to produce orthophotographs, contour maps, and digital elevation models — increasingly essential for Lesotho's mountainous districts.",
  },
  {
    id: "gis",
    Icon: Globe,
    title: "Geographic Information Systems (GIS)",
    description:
      "Spatial data capture, management, and analysis for government, NGOs, and the private sector. GIS practitioners work alongside surveyors in the LAA and district administrations.",
  },
  {
    id: "engineering",
    Icon: Ruler,
    title: "Infrastructure & Engineering Surveys",
    description:
      "Setting-out and as-built surveys for roads, pipelines, bridges, and buildings — including the surveyor's role in managing spatial records during and after construction.",
  },
  {
    id: "audit",
    Icon: FileText,
    title: "Land Rights & Audit",
    description:
      "Investigations confirming land ownership, boundary encroachments, lease conditions, and compliance under the Land Act 2010 — producing formal land audit reports for dispute resolution and transactions.",
  },
]

// ── ServicesSection ───────────────────────────────────────────
export function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section className="bg-background py-24">
      <div className="container">

        {/* ── Section heading ───────────────────────────── */}
        <motion.div
          ref={headingRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-2xl md:text-display-md text-primary mb-5"
          >
            What Land Surveyors Do
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-foreground/65 leading-relaxed"
          >
            Professional land surveyors in Lesotho operate under the Land Survey Act No. 14 of
            1980 (as amended by Act No. 2 of 2019). The Chief Surveyor — a public officer
            responsible to the Commissioner of Lands — oversees the profession and chairs the
            Land Surveyors&apos; Board. The Land Administration Authority administers the
            national cadastre. Their work underpins every land transaction, infrastructure
            project, and spatial planning decision in the country.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ────────────────────────────────── */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

// ── ServiceCard ───────────────────────────────────────────────
function ServiceCard({ service }: { service: Service }) {
  const { Icon, title, description } = service
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className={cn(
        "flex flex-col gap-4 bg-card rounded-lg p-8",
        "border border-border border-l-4",
        "hover:border-l-accent hover:shadow-[0_8px_32px_rgba(27,58,107,0.12)]",
        "transition-[border-left-color,box-shadow] duration-300"
      )}
    >
      <Icon className="h-8 w-8 text-accent shrink-0" strokeWidth={1.5} />
      <h3 className="font-sans font-semibold text-primary leading-snug">{title}</h3>
      <p className="text-sm text-foreground/65 leading-relaxed flex-1">{description}</p>
      <Link
        href="/services"
        className="inline-block text-sm font-medium text-accent hover:text-primary transition-colors"
      >
        Learn more →
      </Link>
    </motion.div>
  )
}
