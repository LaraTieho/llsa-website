import Link from "next/link"
import { Mail, Phone, MapPin, FileText } from "lucide-react"
import { Logo } from "./Logo"

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/legislation", label: "Legislation" },
  { href: "/membership", label: "Membership" },
  { href: "/cpd", label: "CPD" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// TODO: [GIL CONTENT] — replace "#" hrefs with the Facebook and X/Twitter profile URLs once they exist
const socialLinks = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/geomatics-institute-of-lesotho/", label: "LinkedIn" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: XIcon, href: "#", label: "Twitter / X" },
]

export function Footer() {
  return (
    <footer className="print:hidden">
      {/* Gold accent divider */}
      <div className="h-1 bg-accent" />

      <div className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            {/* Column 1 — Brand */}
            <div className="space-y-5">
              <Logo inverted className="[&_img]:h-[72px]" />
              <p className="text-sm leading-relaxed text-primary-foreground/65 max-w-xs">
                The professional body advancing land surveying standards in Lesotho.
              </p>
              <div className="flex items-center gap-1">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-2 rounded-md text-primary-foreground/50 hover:text-primary-foreground hover:bg-white/10 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-primary-foreground mb-5 text-base">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact & Legal */}
            <div>
              <h3 className="font-display font-semibold text-primary-foreground mb-5 text-base">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-primary-foreground/60">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Ministry+of+Local+Government/@-29.3142148,27.481942,16z/data=!3m1!4b1!4m6!3m5!1s0x1e8dcb14ffc991bd:0x91b91d8bc59485eb!8m2!3d-29.3142148!4d27.481942!16s%2Fg%2F11gfd8v8h_?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-accent transition-colors"
                  >
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>
                      Chief Surveyor&apos;s Office
                      <br />
                      Ministry of Local Government and Chieftainship
                      <br />
                      Maseru, Lesotho
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:geomaticsinstitute.ls@gmail.com"
                    className="flex items-center gap-2.5 hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    Geomaticsinstitute.ls@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+26662349190"
                    className="flex items-center gap-2.5 hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    +266 6234 9190
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/45">
            <p>© 2026 Geomatics Institute of Lesotho (formerly Lesotho Land Surveyors Association). All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="hover:text-primary-foreground/75 transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="/docs/gil-constitution-draft-2026.pdf"
                download
                className="flex items-center gap-1.5 hover:text-primary-foreground/75 transition-colors"
              >
                <FileText className="h-3 w-3" />
                Constitution
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
