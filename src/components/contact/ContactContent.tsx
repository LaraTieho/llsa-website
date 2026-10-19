"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  MapPin, Mail, Phone, Clock,
  Send, Loader2, CheckCircle2, ChevronDown, User,
} from "lucide-react"
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { RichText } from "@/components/faq/RichText"
import { CONTACT_FORM_NOTICE } from "@/data/privacy"

// ── Social icon SVGs (lucide-react has no brand icons) ─────────

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ── Zod schema ─────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().optional(),
  subject: z.enum(
    ["general", "membership", "cpd", "legislation", "media"] as const,
    { error: "Please select a subject" },
  ),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

// ── Web3Forms ──────────────────────────────────────────────────
// Messages are delivered to geomaticsinstitute.ls@gmail.com (the address the
// access key was created with). The key is public by design; it can be
// overridden with NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "3c35fec5-1e40-4c52-8808-44e127f1c53e"
const FALLBACK_EMAIL = "geomaticsinstitute.ls@gmail.com"

const SUBJECT_LABELS: Record<ContactFormData["subject"], string> = {
  general: "General Enquiry",
  membership: "Membership",
  cpd: "CPD",
  legislation: "Legislation",
  media: "Media",
}

// ── Static data ────────────────────────────────────────────────

const COMMITTEE = [
  { role: "President", name: "Martin Nts'ihlele", email: "geomaticsinstitute.ls@gmail.com" },
  { role: "Vice-President", name: "Tieho Lara", email: "geomaticsinstitute.ls@gmail.com" },
  { role: "Secretary", name: "Maphoma Monaheng", email: "geomaticsinstitute.ls@gmail.com" },
  { role: "Treasurer", name: "Molefi Bokaako", email: "geomaticsinstitute.ls@gmail.com" },
]

// TODO: [GIL CONTENT] — replace "#" hrefs with the Facebook and X/Twitter profile URLs once they exist
const SOCIAL = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/company/geomatics-institute-of-lesotho/" },
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "X (Twitter)", Icon: XIcon, href: "#" },
]

// ── Field wrapper ──────────────────────────────────────────────

function Field({
  htmlFor,
  label,
  required,
  error,
  children,
}: {
  htmlFor: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground/70">
        {label}
        {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  )
}

// ── ContactContent ─────────────────────────────────────────────

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const botcheckRef = useRef<HTMLInputElement>(null)

  const leftInView = useInView(leftRef, { once: true, amount: 0.12 })
  const rightInView = useInView(rightRef, { once: true, amount: 0.08 })
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null)

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError(
        `The contact form is not available yet. Please email us at ${FALLBACK_EMAIL}.`,
      )
      return
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `GIL website: ${SUBJECT_LABELS[data.subject]} — ${data.name}`,
          from_name: "GIL Website",
          replyto: data.email,
          name: data.name,
          email: data.email,
          organisation: data.organisation || "—",
          topic: SUBJECT_LABELS[data.subject],
          message: data.message,
          botcheck: botcheckRef.current?.checked ?? false,
        }),
      })
      const result = await res.json().catch(() => null)
      if (!res.ok || !result?.success) {
        throw new Error(result?.message ?? `HTTP ${res.status}`)
      }
      setSubmitted(true)
      reset()
    } catch {
      setSubmitError(
        `Sorry, your message could not be sent. Please try again, or email us at ${FALLBACK_EMAIL}.`,
      )
    }
  }

  const inputBase =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground " +
    "placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-accent/40 " +
    "focus:border-accent/40 transition-all"
  const inputError = "border-red-300 focus:ring-red-300/50 focus:border-red-300"

  return (
    <>
      {/* ── Two-column contact section ──────────────────────── */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left column — contact info */}
            <motion.div
              ref={leftRef}
              variants={staggerContainer}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {/* Section heading */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent" aria-hidden="true">
                  Get in touch
                </p>
                <h2 className="font-display text-2xl md:text-display-md text-primary leading-tight">
                  Contact Details
                </h2>
                <div className="h-1 rounded-full bg-accent" style={{ width: 48 }} />
              </motion.div>

              {/* Address, email, phone, hours */}
              <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/65 mb-1">Office Address</p>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      Chief Surveyor&apos;s Office<br />
                      Ministry of Local Government and Chieftainship<br />
                      Maseru, Lesotho
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/65 mb-1">Email</p>
                    <a
                      href="mailto:geomaticsinstitute.ls@gmail.com"
                      className="text-sm text-accent font-medium hover:text-accent/70 transition-colors"
                    >
                      Geomaticsinstitute.ls@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/65 mb-1">Phone</p>
                    <a
                      href="tel:+26662349190"
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      +266 6234 9190
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                    <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/65 mb-1">Office Hours</p>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      Monday – Friday<br />
                      08:00 – 17:00 SAST
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.15em]">
                  Follow us
                </p>
                <div className="flex gap-3">
                  {SOCIAL.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/40 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Committee contacts */}
              <motion.div variants={fadeInUp} className="border-t border-border pt-6">
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-5">
                  Committee Contacts
                </p>
                <div className="flex flex-col gap-4">
                  {COMMITTEE.map(({ role, name, email }) => (
                    <div key={role} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted mt-0.5" aria-hidden="true">
                        <User className="h-4 w-4 text-foreground/40" strokeWidth={1.5} />
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium text-foreground/65">{role}</p>
                        <p className="text-xs text-foreground/50">{name}</p>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs font-mono text-accent hover:text-accent/70 transition-colors"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right column — contact form */}
            <motion.div
              ref={rightRef}
              variants={slideInRight}
              initial="hidden"
              animate={rightInView ? "visible" : "hidden"}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" as const }}
                      className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
                        <CheckCircle2 className="h-8 w-8 text-secondary" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-display text-2xl text-primary font-bold">
                          Message Sent
                        </h3>
                        <p className="text-sm text-foreground/55 max-w-xs leading-relaxed mx-auto">
                          Thank you for reaching out. A member of the GIL team will
                          respond within 2–3 working days.
                        </p>
                      </div>
                      <button
                        onClick={() => { setSubmitted(false); setSubmitError(null); reset() }}
                        className="text-xs font-medium text-accent hover:text-accent/70 transition-colors"
                      >
                        Send another message →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="mb-7">
                        <h3 className="font-display text-2xl text-primary font-bold">
                          Send us a message
                        </h3>
                        <p className="mt-1.5 text-sm text-foreground/45">
                          Fields marked{" "}
                          <span className="text-red-500" aria-hidden="true">*</span>
                          <span className="sr-only">with an asterisk</span> are required.
                        </p>
                        <p className="mt-3 text-sm text-foreground/60">
                          <Link
                            href="/faq"
                            className="font-medium text-primary underline decoration-accent/50 underline-offset-2 hover:decoration-accent"
                          >
                            Before you write, see our Questions &amp; Answers
                          </Link>
                        </p>
                      </div>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="flex flex-col gap-5"
                      >
                        {/* Spam honeypot — hidden from people, filled in by bots */}
                        <input
                          ref={botcheckRef}
                          type="checkbox"
                          name="botcheck"
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                          className="hidden"
                        />

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field
                            htmlFor="contact-name"
                            label="Full Name"
                            required
                            error={errors.name?.message}
                          >
                            <input
                              id="contact-name"
                              type="text"
                              placeholder="Your full name"
                              aria-required="true"
                              aria-describedby={errors.name ? "contact-name-error" : undefined}
                              {...register("name")}
                              className={cn(inputBase, errors.name && inputError)}
                            />
                          </Field>
                          <Field
                            htmlFor="contact-email"
                            label="Email Address"
                            required
                            error={errors.email?.message}
                          >
                            <input
                              id="contact-email"
                              type="email"
                              placeholder="you@example.com"
                              aria-required="true"
                              aria-describedby={errors.email ? "contact-email-error" : undefined}
                              {...register("email")}
                              className={cn(inputBase, errors.email && inputError)}
                            />
                          </Field>
                        </div>

                        {/* Organisation */}
                        <Field
                          htmlFor="contact-organisation"
                          label="Organisation"
                          error={errors.organisation?.message}
                        >
                          <input
                            id="contact-organisation"
                            type="text"
                            placeholder="Company or institution (optional)"
                            aria-describedby={errors.organisation ? "contact-organisation-error" : undefined}
                            {...register("organisation")}
                            className={cn(
                              inputBase,
                              errors.organisation && inputError,
                            )}
                          />
                        </Field>

                        {/* Subject */}
                        <Field
                          htmlFor="contact-subject"
                          label="Subject"
                          required
                          error={errors.subject?.message}
                        >
                          <div className="relative">
                            <select
                              id="contact-subject"
                              aria-required="true"
                              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                              {...register("subject")}
                              defaultValue=""
                              className={cn(
                                inputBase,
                                "appearance-none cursor-pointer pr-10",
                                errors.subject && inputError,
                              )}
                            >
                              <option value="" disabled>
                                Select a subject…
                              </option>
                              <option value="general">General Enquiry</option>
                              <option value="membership">Membership</option>
                              <option value="cpd">CPD</option>
                              <option value="legislation">Legislation</option>
                              <option value="media">Media</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/35" aria-hidden="true" />
                          </div>
                        </Field>

                        {/* Message */}
                        <Field
                          htmlFor="contact-message"
                          label="Message"
                          required
                          error={errors.message?.message}
                        >
                          <textarea
                            id="contact-message"
                            rows={5}
                            placeholder="How can we help?"
                            aria-required="true"
                            aria-describedby={errors.message ? "contact-message-error" : undefined}
                            {...register("message")}
                            className={cn(
                              inputBase,
                              "resize-none",
                              errors.message && inputError,
                            )}
                          />
                        </Field>

                        {submitError && (
                          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {submitError}
                          </p>
                        )}

                        {/* Submit */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-primary hover:bg-accent/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                                Sending…
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" aria-hidden="true" />
                                Send Message
                              </>
                            )}
                          </button>
                          <p className="mt-3 text-xs text-muted-foreground">
                            <RichText text={CONTACT_FORM_NOTICE} />
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────────── */}
      <section className="bg-muted/40 py-16">
        <div className="container">
          <motion.div
            ref={mapRef}
            variants={fadeInUp}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20" aria-hidden="true">
                  <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </span>
                <p className="font-display text-xl text-primary font-semibold">
                  Chief Surveyor&apos;s Office, Maseru
                </p>
              </div>

              <div className="w-full aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
                <iframe
                  src="https://www.google.com/maps?q=-29.3142148,27.481942&z=16&output=embed"
                  title="Chief Surveyor's Office, Maseru on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>

              <div>
                <a
                  href="https://www.google.com/maps/place/Ministry+of+Local+Government/@-29.3142148,27.481942,16z/data=!3m1!4b1!4m6!3m5!1s0x1e8dcb14ffc991bd:0x91b91d8bc59485eb!8m2!3d-29.3142148!4d27.481942!16s%2Fg%2F11gfd8v8h_?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
