import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { MembershipContent } from "@/components/membership/MembershipContent"

export const metadata: Metadata = {
  title: "Membership & Registration",
  description:
    "Join the Lesotho Land Surveyors Association. Membership categories, application process, and the public register of licensed surveyors.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Membership & Registration | LLSA",
    description:
      "Join the LLSA — membership categories for professional surveyors, technologists, and students, plus the public register of licensed surveyors.",
    url: "/membership",
  },
}

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership & Registration"
        subtitle="Join the Lesotho Land Surveyors Association"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Membership" },
        ]}
      />
      <MembershipContent />
    </>
  )
}
