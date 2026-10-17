import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { ServiceBlocks } from "@/components/services/ServiceBlocks"

export const metadata: Metadata = {
  title: "Survey Services",
  description:
    "The full scope of professional land survey services in Lesotho — cadastral surveys, topographical surveys, drone mapping, GIS, engineering surveys, and land rights audits — as carried out by licensed surveyors and GIL members.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Survey Services | GIL",
    description:
      "Cadastral surveys, topographic mapping, drone surveys, GIS, engineering surveys, and land rights audits by licensed surveyors and GIL members in Lesotho.",
    url: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Survey Services"
        subtitle="What licensed land surveyors do in Lesotho"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServiceBlocks />
    </>
  )
}
