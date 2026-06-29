"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Mail, Phone, Menu, X, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { Logo } from "./Logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/legislation", label: "Legislation" },
  { href: "/membership", label: "Membership" },
  { href: "/cpd", label: "CPD" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" as const } },
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Focus management — WCAG 2.4.3
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Body overflow lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Focus the close button when overlay opens; return focus to hamburger on close
  useEffect(() => {
    if (mobileOpen) {
      wasOpenRef.current = true
      const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 50)
      return () => window.clearTimeout(timer)
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false
      const frame = requestAnimationFrame(() => openButtonRef.current?.focus())
      return () => cancelAnimationFrame(frame)
    }
  }, [mobileOpen])

  // Escape key closes the overlay — WCAG 2.1.2
  useEffect(() => {
    if (!mobileOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mobileOpen])

  const closeMobileMenu = useCallback(() => setMobileOpen(false), [])

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── Top Bar ─────────────────────────────────────── */}
      <div className="hidden md:block bg-primary text-primary-foreground py-1.5 text-xs">
        <div className="container flex items-center justify-between gap-4">
          <p className="hidden md:block opacity-70 truncate">
            Regulated under the Land Survey Act No. 14 of 1980 | Land Administration Authority Act
            No. 9 of 2010
          </p>
          <div className="flex items-center gap-5 ml-auto md:ml-0 shrink-0">
            <a
              href="mailto:llsa@lesotho.ls"
              className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">llsa@lesotho.ls</span>
            </a>
            <a
              href="tel:+26600000000"
              className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">+266 XXXX XXXX</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ────────────────────────────────────── */}
      <nav
        aria-label="Main"
        className={cn(
          "bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-none"
        )}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo — scales down on scroll */}
          <motion.div
            animate={{ scale: scrolled ? 0.79 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative block px-3 py-2 text-sm font-medium rounded-sm transition-colors",
                        isActive
                          ? "text-accent"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden sm:flex items-center gap-1.5 bg-accent text-accent-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-accent/85 transition-colors"
            >
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Member Login
            </Link>
            <button
              ref={openButtonRef}
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-primary flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/15">
              <Logo inverted />
              <button
                ref={closeButtonRef}
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Staggered links */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              aria-label="Main navigation"
              className="flex flex-col flex-1 px-6 pt-6 overflow-y-auto"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
                return (
                  <motion.div key={link.href} variants={fadeInUp} className="w-full">
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block w-full py-4 text-2xl font-display border-b border-white/10 transition-colors",
                        isActive ? "text-accent" : "text-white/75 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* Login CTA */}
            <div className="px-6 pb-10 pt-6">
              <Link
                href="#"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground font-medium py-3.5 rounded-md hover:bg-accent/85 transition-colors"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Member Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
