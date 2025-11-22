"use client";

import { Triangle } from "lucide-react";
import { TokenRow } from "./TokenRow";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { SortDirection, SortField, SortState } from "@/store/uiSlice";
import { TokenRowData } from "@/types/token";
import { cn } from "@/lib/utils";

const headers: { label: string; field?: SortField; align?: "left" | "right" }[] = [
  { label: "Pair Info", align: "left" },
  { label: "Chart" },
  { label: "Market Cap", field: "marketCap" },
  { label: "Liquidity", field: "liquidity" },
  { label: "Volume", field: "volume" },
  { label: "TXNS", field: "txns" },
  { label: "Token Info", align: "left" },
  { label: "Action", align: "right" },
];

interface Props {
  tokens: TokenRowData[];
  isLoading?: boolean;
  sort: SortState;
  compact?: boolean;
  onSort: (field: SortField) => void;
  onRetry?: () => void;
}

function SortIndicator({ active, direction }: { active: boolean; direction: SortDirection }) {
  return (
    <Triangle
      size={10}
      className={cn(
        "transition",
        active ? "text-accent-blue" : "text-text-muted",
        direction === "desc" ? "rotate-180" : "",
      )}
      strokeWidth={2}
    />
  );
}

export function TokenTable({ tokens, isLoading, sort, onSort, compact, onRetry }: Props) {
  const skeletons = Array.from({ length: 5 });

  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface-900/80">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1220px]">
          <div className="sticky top-0 z-10 grid h-8 sm:h-12 grid-cols-[1.5fr,1.1fr,1fr,1fr,1fr,0.9fr,1.2fr,0.7fr] items-center gap-3 border-b border-border-subtle bg-surface-900 px-0 sm:px-2 text-[12px] font-medium text-text-secondary">
            {headers.map((header, idx) => (
              <div
                key={header.label}
                className={cn(
                  "flex items-center gap-1 px-2",
                  header.align === "right" ? "justify-end" : "justify-start",
                  idx === 1 ? "justify-start" : "",
                )}
              >
                {header.label}
                {header.field ? (
                  <button
                    className="rounded-full p-1 transition hover:bg-white/5"
                    onClick={() => onSort(header.field!)}
                    aria-label={`Sort by ${header.label}`}
                  >
                    <SortIndicator active={sort.field === header.field} direction={sort.direction} />
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          <div className="max-h-[620px] divide-y divide-border-subtle overflow-y-auto">
            {isLoading
              ? skeletons.map((_, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1.5fr,1.1fr,1fr,1fr,1fr,0.9fr,1.2fr,0.7fr] items-center gap-4 px-4 py-3"
                >
                  {headers.map((_, colIdx) => (
                    <Skeleton
                      key={colIdx}
                      className="h-6 w-full rounded-lg bg-white/5"
                    />
                  ))}
                </div>
              ))
              : null}

            {!isLoading && tokens.length === 0 ? (
              <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
                <div className="text-lg font-semibold text-text-primary">No tokens match this filter</div>
                <p className="text-sm text-text-secondary">
                  Try enabling another column (New pairs, Final Stretch, Migrated) or refreshing the feed.
                </p>
                {onRetry ? (
                  <Button variant="primary" size="sm" onClick={onRetry}>
                    Retry
                  </Button>
                ) : null}
              </div>
            ) : null}

            {!isLoading &&
              tokens.map((token) => (
                <TokenRow key={token.id} token={token} compact={compact} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
