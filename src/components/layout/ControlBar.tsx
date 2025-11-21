"use client";

import { ReactNode } from "react";
import { ReactNode } from "react";
import {
  BookmarkX,
  ChevronDown,
  EyeOff,
  LayoutList,
  SlidersHorizontal,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Popover } from "@/components/ui/popover";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setFilterOpen,
  setPlaylist,
  setTab,
  setTimeframe,
  toggleCompact,
  toggleFinalStretch,
  toggleMigrated,
  toggleNewPairs,
} from "@/store/uiSlice";

const tabs = ["Trending", "Surge", "DEX Screener", "Pump Live"] as const;
const timeframes = ["1m", "5m", "30m", "1h"] as const;
const playlists = ["P1", "P2", "P3"] as const;

export function ControlBar() {
  const dispatch = useAppDispatch();
  const { activeTab, timeframe, filterOpen, showNewPairs, showFinalStretch, showMigrated, playlist, compactRows } =
    useAppSelector((state) => state.ui);

  return (
    <div className="mb-4 flex h-8 w-full max-w-[1420px] items-center gap-6">
      <div className="flex flex-1 items-center gap-6 text-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="flex h-8 items-center gap-6"
            onClick={() => dispatch(setTab(tab))}
          >
            <span
              className={cn(
                "text-[16px] sm:text-[20px] font-medium tracking-[-0.02em]",
                tab === activeTab ? "text-white" : "text-text-secondary",
              )}
            >
              {tab}
            </span>
            {tab === "Pump Live" ? (
              <ChevronDown className="text-text-secondary" size={18} />
            ) : null}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 text-nowrap min-w-0">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {timeframes.map((tf) => (
            <button
              key={tf}
              className={cn(
                "flex h-8 items-center justify-center rounded px-2 text-[14px] font-medium",
                tf === timeframe ? "text-primaryBlue" : "text-text-primary",
              )}
              onClick={() => dispatch(setTimeframe(tf))}
            >
              {tf}
            </button>
          ))}
        </div>

        <Popover
          open={filterOpen}
          onOpenChange={(open) => dispatch(setFilterOpen(open))}
          trigger={
            <button
              className="flex h-8 items-center gap-2 rounded-full border border-border-subtle bg-surface-800 px-3 text-[14px] font-bold text-text-primary transition hover:bg-surface-700/80"
              onClick={() => dispatch(setFilterOpen(!filterOpen))}
            >
              <SlidersHorizontal size={18} />
              Filter
              <ChevronDown size={18} />
            </button>
          }
        >
          <div className="space-y-3 text-sm text-text-secondary">
            <div className="text-sm font-semibold text-text-primary">Token Columns</div>
            <FilterToggle label="New Pairs" checked={showNewPairs} onChange={() => dispatch(toggleNewPairs())} />
            <FilterToggle label="Final Stretch" checked={showFinalStretch} onChange={() => dispatch(toggleFinalStretch())} />
            <FilterToggle label="Migrated" checked={showMigrated} onChange={() => dispatch(toggleMigrated())} />
            <div className="rounded-xl border border-border-subtle bg-surface-700/70 p-3">
              <div className="text-sm font-semibold text-text-primary">Row Density</div>
              <div className="mt-2 flex gap-2">
                <Button
                  size="sm"
                  variant={compactRows ? "primary" : "muted"}
                  className="w-full"
                  onClick={() => dispatch(toggleCompact())}
                >
                  Compact
                </Button>
                <Button
                  size="sm"
                  variant={!compactRows ? "primary" : "muted"}
                  className="w-full"
                  onClick={() => dispatch(toggleCompact())}
                >
                  Spacious
                </Button>
              </div>
            </div>
          </div>
        </Popover>

        <div className="flex items-center gap-2">
          <IconCircle label="Bookmark">
            <BookmarkX size={16} />
          </IconCircle>
          <IconCircle label="Hide">
            <EyeOff size={16} />
          </IconCircle>
        </div>

        <div className="flex h-8 items-center gap-2 rounded-full border border-border-subtle bg-transparent px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-border-subtle/35">
          <Wallet size={18} className="text-text-secondary" />
          <span>1</span>
          <span className="flex items-center gap-1 rounded-full border border-border-subtle px-2 py-0.5">
            <span className="h-3 w-4 rounded-sm bg-[linear-gradient(135deg,#12c2e9,#c471ed,#f64f59)]" />
            <span className="text-text-primary">0</span>
          </span>
          <ChevronDown size={18} className="text-text-secondary" />
        </div>

        <div className="flex h-8 min-w-[216px] items-center gap-2 overflow-hidden rounded-full border border-border-subtle bg-transparent pl-3 pr-2 text-[14px] font-medium text-text-secondary transition-colors hover:bg-border-subtle/35">
          <span className="text-text-muted">Quick Buy</span>
          <input
            className="min-w-0 flex-1 bg-transparent text-text-primary outline-none placeholder:text-text-muted"
            placeholder="0.0"
          />
          <span className="h-3 w-4 rounded-sm bg-[linear-gradient(135deg,#12c2e9,#c471ed,#f64f59)]" />
          <div className="flex h-full items-center border-l border-border-subtle pl-1">
            {playlists.map((pl) => (
              <button
                key={pl}
                onClick={() => dispatch(setPlaylist(pl))}
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-[4px] text-[13px] font-medium transition-colors",
                  playlist === pl
                    ? "bg-primaryBlue/10 text-primaryBlue"
                    : "text-text-secondary hover:bg-border-subtle/60",
                )}
              >
                {pl}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterToggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface-700/50 px-3 py-2 text-sm">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 accent-accent-blue" />
    </label>
  );
}

function IconCircle({ children, label }: { children: ReactNode; label: string }) {
  return (
    <Tooltip label={label}>
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-text-secondary transition-colors hover:bg-border-subtle/60 hover:text-text-primary">
        {children}
      </button>
    </Tooltip>
  );
}
