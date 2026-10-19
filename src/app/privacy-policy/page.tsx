import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { PrivacyContent } from "@/components/privacy/PrivacyContent"

const DESCRIPTION =
  "How the Geomatics Institute of Lesotho handles personal information from members, applicants and website visitors, in line with Lesotho's Data Protection Act, 2011."

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | GIL",
    description: DESCRIPTION,
    url: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How the Geomatics Institute of Lesotho collects, uses and protects personal information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyContent />
    </>
  )
}
