import { cn } from "@/lib/utils"
import type { PrivacyBlock } from "@/data/privacy"
import { RichText } from "@/components/faq/RichText"

// Same list and table styling as FaqAnswer
export function PrivacyBlocks({ blocks }: { blocks: PrivacyBlock[] }) {
  return (
    <div className="flex flex-col gap-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
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
        const hasHead = block.head.some((cell) => cell.trim() !== "")
        return (
          <div key={i} className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              {hasHead && (
                <thead className="bg-primary/10">
                  <tr>
                    {block.head.map((cell, j) => (
                      <th
                        key={j}
                        scope="col"
                        className="px-3 py-2 font-semibold text-primary align-bottom"
                      >
                        <RichText text={cell} />
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
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
    </div>
  )
}
