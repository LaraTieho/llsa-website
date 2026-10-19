import { Metadata } from "next"
import { PageHero } from "@/components/shared/PageHero"
import { FaqContent } from "@/components/faq/FaqContent"
import { FAQ_ITEMS, faqItemToPlainText } from "@/data/faq"

const DESCRIPTION =
  "Answers to common questions about joining the Geomatics Institute of Lesotho, licensing by the Land Surveyors' Board, recognised qualifications, candidacy, CPD, and land surveys in Lesotho."

export const metadata: Metadata = {
  title: "Questions & Answers",
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Questions & Answers | GIL",
    description: DESCRIPTION,
    url: "/faq",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqItemToPlainText(item),
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        title="Questions & Answers"
        subtitle="Membership, licensing, qualifications and surveying in Lesotho — answered"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FaqContent />
    </>
  )
}
