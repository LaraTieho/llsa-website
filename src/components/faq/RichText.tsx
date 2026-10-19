import Link from "next/link"

// Renders **bold** and [label](href) markdown from the FAQ data — nothing else.
const TOKEN = /(\*\*.+?\*\*|\[[^\]]+\]\([^)]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/

const linkClass =
  "font-medium text-primary underline decoration-accent/60 underline-offset-2 hover:decoration-accent transition-colors"

function RichLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/docs/")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    )
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={linkClass}>
      {label}
    </a>
  )
}

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <strong key={i} className="font-semibold text-primary">
              {part.slice(2, -2)}
            </strong>
          )
        }
        const link = part.match(LINK)
        if (link) return <RichLink key={i} label={link[1]} href={link[2]} />
        return part
      })}
    </>
  )
}
