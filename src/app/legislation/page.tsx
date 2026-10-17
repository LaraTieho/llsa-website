import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { LegislationContent } from "@/components/legislation/LegislationContent"

export const metadata: Metadata = {
  title: "Acts & Regulations",
  description:
    "The legislative framework governing land survey practice in Lesotho — including the Land Survey Act 1980, Land Survey Regulations 1982, LAA Act 2010, Land Act 2010, the 2019 Amendment Act, and the Land Surveyors' Board appointment notice (L.N. No. 71 of 2026).",
  alternates: { canonical: "/legislation" },
  openGraph: {
    title: "Acts & Regulations | GIL",
    description:
      "Land Survey Act 1980, Land Survey Regulations 1982, LAA Act 2010, Land Act 2010, the 2019 Amendment Act, and the Land Surveyors' Board appointment notice (L.N. No. 71 of 2026).",
    url: "/legislation",
  },
}

export default function LegislationPage() {
  return (
    <>
      <PageHero
        title="Acts & Regulations"
        subtitle="The legislative framework governing land survey practice in Lesotho"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legislation" },
        ]}
      />
      <LegislationContent />
    </>
  )
}
