import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/HeroSection"

const ServicesSection = dynamic(
  () => import("@/components/home/ServicesSection").then(m => ({ default: m.ServicesSection })),
  { loading: () => <section className="bg-background py-24" aria-hidden="true" /> },
)
const LegislationSection = dynamic(
  () => import("@/components/home/LegislationSection").then(m => ({ default: m.LegislationSection })),
  { loading: () => <section className="bg-primary py-24" aria-hidden="true" /> },
)
const MembershipCTA = dynamic(
  () => import("@/components/home/MembershipCTA").then(m => ({ default: m.MembershipCTA })),
  { loading: () => <section className="bg-background py-24" aria-hidden="true" /> },
)
const ImpactSection = dynamic(
  () => import("@/components/home/ImpactSection").then(m => ({ default: m.ImpactSection })),
  { loading: () => <section className="bg-background py-24" aria-hidden="true" /> },
)
const NewsSection = dynamic(
  () => import("@/components/home/NewsSection").then(m => ({ default: m.NewsSection })),
  { loading: () => <section className="bg-background py-24" aria-hidden="true" /> },
)
const ContactStrip = dynamic(
  () => import("@/components/home/ContactStrip").then(m => ({ default: m.ContactStrip })),
  { loading: () => <section className="bg-accent py-16" aria-hidden="true" /> },
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LegislationSection />
      <MembershipCTA />
      <ImpactSection />
      <NewsSection />
      <ContactStrip />
    </>
  )
}
