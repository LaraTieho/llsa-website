import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { CPDContent } from "@/components/cpd/CPDContent"

export const metadata: Metadata = {
  title: "Continuing Professional Development",
  description:
    "GIL CPD programme — annual requirements, upcoming training events, and member record submission for licensed land surveyors in Lesotho.",
  alternates: { canonical: "/cpd" },
  openGraph: {
    title: "Continuing Professional Development | GIL",
    description:
      "GIL CPD programme — annual requirements, training events, and record submission for licensed land surveyors in Lesotho.",
    url: "/cpd",
  },
}

export default function CPDPage() {
  return (
    <>
      <PageHero
        title="Continuing Professional Development"
        subtitle="Maintaining and advancing surveying competence in Lesotho"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "CPD" },
        ]}
      />
      <CPDContent />
    </>
  )
}
