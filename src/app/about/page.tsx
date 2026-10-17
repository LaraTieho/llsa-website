import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { WhoWeAre } from "@/components/about/WhoWeAre"
import { MissionVision } from "@/components/about/MissionVision"
import { Objectives } from "@/components/about/Objectives"
import { Governance } from "@/components/about/Governance"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Geomatics Institute of Lesotho — our mission, vision, objectives, and the governance framework that underpins professional land survey practice in Lesotho.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GIL",
    description:
      "Our mission, vision, objectives, and governance framework for professional land survey practice in Lesotho.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GIL"
        subtitle="The representative professional body for licensed land surveyors and geomatics practitioners in the Kingdom of Lesotho."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <WhoWeAre />
      <MissionVision />
      <Objectives />
      <Governance />
    </>
  )
}
