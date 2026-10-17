import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { ContactContent } from "@/components/contact/ContactContent"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Geomatics Institute of Lesotho — office address, email, phone, committee contacts, and an online enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GIL",
    description:
      "Reach the Geomatics Institute of Lesotho — office address, email, phone, committee contacts, and online enquiry form.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the Geomatics Institute of Lesotho"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactContent />
    </>
  )
}
