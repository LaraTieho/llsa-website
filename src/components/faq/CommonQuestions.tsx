import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CommonQuestionLink {
  label: string
  href: string
}

interface CommonQuestionsProps {
  links: CommonQuestionLink[]
  className?: string
}

// A row of "Common questions" links into the FAQ (/faq#<id>)
export function CommonQuestions({ links, className }: CommonQuestionsProps) {
  return (
    <nav aria-label="Common questions" className={cn("flex flex-col gap-3", className)}>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Common questions
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              <HelpCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="underline decoration-accent/40 underline-offset-2 group-hover:decoration-accent">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
