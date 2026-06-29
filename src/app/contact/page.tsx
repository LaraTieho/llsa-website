import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { ContactContent } from "@/components/contact/ContactContent"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lesotho Land Surveyors Association — office address, email, phone, council contacts, and an online enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact LLSA",
    description:
      "Reach the Lesotho Land Surveyors Association — office address, email, phone, council contacts, and online enquiry form.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the Lesotho Land Surveyors Association"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactContent />
    </>
  )
}
