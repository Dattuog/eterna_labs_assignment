"use client";

import Image from "next/image";
import { ArrowUpDown, Clock, ExternalLink, Globe2, Info, Link2, Lock, Search, ShieldCheck, User } from "lucide-react";
import { Sparkline } from "@/components/charts/Sparkline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

import { formatCurrency, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";
import { TokenRowData } from "@/types/token";

interface Props {
  token: TokenRowData;
  compact?: boolean;
}

export function TokenRow({ token, compact }: Props) {

  const changeTone = token.marketCapChange >= 0 ? "text-accent-green" : "text-accent-red";
  const isFresh = token.createdAgo.includes("m");
  const isOlder = token.createdAgo.includes("d") || token.createdAgo.includes("mo");
  const tierDot =
    token.tier === "new" ? "bg-accent-green" : token.tier === "final" ? "bg-accent-yellow" : "bg-accent-red";

  return (
    <div
      className={cn(
        "token-row-hover grid grid-cols-[1.5fr,1.1fr,1fr,1fr,1fr,0.9fr,1.2fr,0.7fr] items-center gap-3 border-t border-border-subtle/60 px-3 py-3 first:border-t-0",
        compact ? "py-2.5" : "py-3",
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-border-subtle bg-surface-800">
          <Image
            src={token.image}
            alt={token.name}
            fill
            sizes="48px"
            className="object-cover"
            loading="lazy"
          />
          {token.isLocked ? (
            <div className="absolute left-1 top-1 rounded-full bg-surface-900/80 p-1">
              <Lock size={12} className="text-text-muted" />
            </div>
          ) : null}
          <span className={cn("absolute -left-1 -bottom-1 h-3 w-3 rounded-full border border-base-900", tierDot)} />
        </div>
        <div className="min-w-0 space-y-1">
          <div className="flex items-center gap-1 text-[15px] font-semibold text-white">
            <span className="truncate">{token.name}</span>
            {token.verified ? <ShieldCheck size={14} className="text-accent-green" /> : null}
            <span className="text-[11px] uppercase text-text-muted">{token.symbol}</span>
            {token.pairedWith ? (
              <span className="rounded-sm bg-surface-800 px-1.5 text-[11px] uppercase text-text-secondary">
                {token.pairedWith}
              </span>
            ) : null}
          </div>
          <div className="text-xs text-text-secondary line-clamp-1 capitalize">{token.id}</div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
            <span
              className={cn(
                "rounded-md border border-border-subtle px-2 py-0.5",
                isFresh ? "border-accent-green/50 text-accent-green bg-accent-green/5" : "",
                isOlder ? "border-accent-yellow/50 text-accent-yellow bg-accent-yellow/5" : "",
              )}
            >
              {token.createdAgo}
            </span>
            <Globe2 size={12} className="text-text-muted" />
            <Link2 size={12} className="text-text-muted" />
            <Search size={12} className="text-text-muted" />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Sparkline data={token.sparkline} color={token.chartColor} />
      </div>

      <div className="space-y-1">
        <div className="text-sm font-semibold">
          {formatCurrency(token.marketCap)}
        </div>
        <div className={cn("text-xs font-semibold", changeTone)}>{formatPercent(token.marketCapChange)}</div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="font-semibold text-white">{formatCurrency(token.liquidity)}</div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="font-semibold text-white">{formatCurrency(token.volume)}</div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="font-semibold text-white">{token.txns.total.toLocaleString()}</div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="text-accent-green">{token.txns.buys.toLocaleString()}</span>
          <span className="text-text-muted">/</span>
          <span className="text-accent-red">{token.txns.sells.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-[11px] font-medium">
        <span className={token.info[0]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[0]?.value || "-"}
        </span>
        <span className={token.info[1]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[1]?.value || "-"}
        </span>
        <div className="flex items-center gap-1 text-text-secondary">
          <User size={12} /> {token.txns.buys}
        </div>

        <span className={token.info[2]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[2]?.value || "-"}
        </span>
        <span className={token.info[3]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[3]?.value || "-"}
        </span>
        <div className="flex items-center gap-1 text-text-secondary">
          <Clock size={12} /> {token.txns.sells}
        </div>

        <span className={token.info[4]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[4]?.value || "-"}
        </span>
        <span className={token.info[5]?.tone === "negative" ? "text-accent-red" : "text-accent-green"}>
          {token.info[5]?.value || "-"}
        </span>
        <div />
      </div>


      <div className="flex items-center justify-end gap-2">
        <Dialog
          title="Quick Buy"
          description={`Simulated swap for ${token.symbol}`}
          trigger={<Button className="h-8 min-w-[68px] rounded-full bg-[#3264ff] px-4 text-[13px] font-bold text-white hover:bg-[#3264ff]/90">Buy</Button>}
        >
          <div className="space-y-3 text-sm text-text-secondary">
            <div className="rounded-xl border border-border-subtle bg-surface-800 p-3">
              <div className="text-xs uppercase tracking-wide text-text-muted">Amount</div>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={50}
                  className="w-full rounded-lg bg-surface-700 px-3 py-2 text-white outline-none"
                />
                <span className="rounded-lg bg-surface-700 px-3 py-2 text-xs text-text-secondary">SOL</span>
              </div>
            </div>
            <Button className="w-full" variant="primary">
              Submit Order
            </Button>
          </div>
        </Dialog>
      </div>
    </div >
  );
}
