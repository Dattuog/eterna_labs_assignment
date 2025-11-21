"use client";

import {
  Bell,
  ChevronDown,
  LayoutPanelTop,
  ListChecks,
  Search,
  Settings,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type NavTone = "accent" | "primary";
type NavItem = { label: string; tone?: NavTone };

const navItems: NavItem[] = [
  { label: "Discover", tone: "accent" },
  { label: "Pulse", tone: "primary" },
  { label: "Trackers" },
  { label: "Perpetuals" },
  { label: "Yield" },
  { label: "Vision" },
  { label: "Portfolio" },
  { label: "Rewards" },
];

export function TopNav() {
  return (
    <header className="mx-auto flex h-16 min-h-[48px] w-full max-w-[1536px] items-center justify-between border-b border-border-subtle bg-base-900 px-4 sm:justify-start sm:px-4 lg:px-6">
      <div className="flex flex-shrink-0 items-center gap-2">
        <LogoMark />
      </div>

      <div className="relative hidden min-w-0 flex-1 items-center sm:flex">
        <div className="flex overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-1 text-sm font-medium text-text-secondary">
            {navItems.map((item) => (
              <NavButton key={item.label} label={item.label} tone={item.tone} />
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
        <button className="hidden h-8 flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border-subtle bg-transparent px-2 text-sm font-normal text-text-secondary transition-colors duration-125 hover:bg-border-subtle/35 sm:flex md:px-2 lg:px-2 2xl:pl-3 2xl:pr-1.5">
          <Search size={18} className="text-text-primary" />
          <span className="hidden text-[12px] font-medium text-text-muted 2xl:block">
            Search by token or CA...
          </span>
          <span className="hidden h-5 items-center rounded-full border border-border-subtle px-2 text-[12px] text-text-primary 2xl:flex">
            /
          </span>
        </button>

        <div className="flex h-8 items-center gap-1 rounded-full border-2 border-border-subtle/50 bg-surface-800/80 px-2 text-sm font-semibold text-white transition hover:brightness-110">
          <span className="h-3 w-4 rounded-sm bg-[linear-gradient(135deg,#12c2e9,#c471ed,#f64f59)]" />
          SOL
          <ChevronDown size={14} className="text-text-muted" />
        </div>

        <Button variant="primary" size="sm" className="h-[32px] px-3 text-[14px] font-bold">
          Deposit
        </Button>

        <div className="hidden items-center gap-2 sm:flex">
          <Tooltip label="Favorites">
            <IconButton size="sm">
              <Star size={16} />
            </IconButton>
          </Tooltip>
          <Tooltip label="Alerts">
            <IconButton size="sm">
              <Bell size={16} />
            </IconButton>
          </Tooltip>
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-border-subtle bg-surface-800/80 px-2 py-1 shadow-inner sm:flex">
          <LayoutPanelTop size={16} className="text-text-secondary" />
          <div className="flex items-center gap-1 text-xs font-semibold text-white">
            <ListChecks size={14} className="text-[#5a8bff]" />
            <span className="text-[#5a8bff]">0</span>
          </div>
          <ChevronDown size={14} className="text-text-muted" />
        </div>

        <Tooltip label="Profile & settings">
          <IconButton size="sm">
            <Settings size={16} />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}

function NavButton({ label, tone }: { label: string; tone?: "accent" | "primary" }) {
  return (
    <button
      className={cn(
        "h-8 min-w-fit px-2 text-nowrap rounded transition text-[14px] font-medium",
        tone === "accent" ? "text-[#3264ff]" : "",
        tone === "primary" ? "text-white" : "text-text-secondary hover:text-white",
      )}
    >
      {label}
    </button>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor" />
          <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="26" height="22" fill="white" transform="translate(5 7)" />
          </clipPath>
        </defs>
      </svg>
      <span className="hidden text-base text-white 2xl:block">AXIOM</span>
      <span className="hidden text-[11px] uppercase text-text-muted 2xl:block">Pro</span>
    </div>
  );
}
