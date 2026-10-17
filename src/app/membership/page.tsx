import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { MembershipContent } from "@/components/membership/MembershipContent"

export const metadata: Metadata = {
  title: "Membership & Registration",
  description:
    "Join the Geomatics Institute of Lesotho. Membership categories, application process, and the public register of licensed surveyors.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Membership & Registration | GIL",
    description:
      "Join GIL — nine membership categories for surveyors, technologists, GIS practitioners, graduates and students, plus the public register of licensed surveyors.",
    url: "/membership",
  },
}

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership & Registration"
        subtitle="Join the Geomatics Institute of Lesotho"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Membership" },
        ]}
      />
      <MembershipContent />
    </>
  )
}
