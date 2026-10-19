import { cn } from "@/lib/utils"
import { FAQ_BASIS_LABELS, type FaqBasis, type FaqBlock } from "@/data/faq"
import { RichText } from "./RichText"

const BASIS_STYLES: Record<FaqBasis, string> = {
  law: "bg-primary/10 text-primary border border-primary/20",
  constitution: "bg-secondary/10 text-secondary border border-secondary/25",
  position: "bg-accent/10 text-accent border border-accent/25",
  guidance: "bg-muted text-muted-foreground border border-border",
}

export function BasisBadge({ basis }: { basis: FaqBasis }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
        BASIS_STYLES[basis],
      )}
    >
      {FAQ_BASIS_LABELS[basis]}
    </span>
  )
}

interface FaqAnswerProps {
  blocks: FaqBlock[]
  basis: FaqBasis
  source: string
}

export function FaqAnswer({ blocks, basis, source }: FaqAnswerProps) {
  return (
    <div className="flex flex-col gap-3 text-sm sm:text-base text-foreground/75 leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i}>
              <RichText text={block.text} />
            </p>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="flex flex-col gap-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <div key={i} className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-primary/10">
                <tr>
                  {block.head.map((cell, j) => (
                    <th key={j} scope="col" className="px-3 py-2 font-semibold text-primary align-bottom">
                      <RichText text={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td
                        key={k}
                        className={cn(
                          "px-3 py-2 align-top",
                          k === 0 && "font-medium text-foreground/85",
                        )}
                      >
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}

      <div className="mt-1 flex flex-col gap-1.5 border-t border-border pt-3">
        <div>
          <BasisBadge basis={basis} />
        </div>
        <p className="text-xs text-muted-foreground">Source: {source}</p>
      </div>
    </div>
  )
}
