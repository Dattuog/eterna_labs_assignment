"use client";

import Image from "next/image";
import {
  Bell,
  ChevronDown,
  LayoutPanelTop,
  ListChecks,
  Search,
  Settings,
  Star,
  UserCog,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
        <nav className="flex w-full items-center gap-1 overflow-x-auto no-scrollbar text-sm font-medium text-text-secondary">
          {navItems.map((item) => (
            <Link key={item.label} href={`/${item.label.toLowerCase()}?chain=sol`}>
              <NavButton label={item.label} tone={item.tone} />
            </Link>
          ))}
        </nav>
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
          <Image src="/icons/solana-logo.png" alt="SOL" width={16} height={16} className="rounded-sm" />
          SOL
          <ChevronDown size={14} className="text-text-muted" />
        </div>

        <Button variant="primary" size="sm" className="h-[32px] px-3 text-[14px] font-bold">
          Deposit
        </Button>

        <div className="hidden items-center gap-[8px] sm:flex lg:gap-[16px]">
          <button className="flex h-[32px] w-[32px] items-center justify-center gap-[8px] rounded-full bg-primaryStroke hover:bg-secondaryStroke/80">
            <Star size={18} className="flex-shrink-0 text-textPrimary" />
          </button>

          <div className="relative flex">
            <div className="w-full">
              <button className="relative flex h-[32px] w-[32px] items-center justify-center gap-[8px] rounded-full bg-primaryStroke hover:bg-secondaryStroke/80">
                <Bell size={18} className="flex-shrink-0 text-textPrimary" />
              </button>
            </div>
          </div>

          <div className="relative flex">
            <div className="w-full">
              <div className="flex-shrink-0">
                <button className="flex h-[32px] w-fit min-w-max flex-row items-center justify-center gap-[8px] rounded-full bg-primaryStroke px-[12px] py-[8px] transition-colors hover:bg-secondaryStroke/80 hover:bg-opacity-80">
                  <Wallet size={18} className="flex-shrink-0 text-textPrimary" />
                  <div className="hidden flex-shrink-0 flex-row items-center justify-start gap-[4px] whitespace-nowrap xl:flex">
                    <Image
                      alt="SOL"
                      width={16}
                      height={16}
                      src="/icons/solana-logo.png"
                      className="rounded-sm"
                    />
                    <span className="text-[14px] font-semibold text-textPrimary">0</span>
                  </div>
                  <div className="hidden h-full w-[1px] flex-shrink-0 bg-secondaryStroke xl:block" />
                  <div className="hidden flex-shrink-0 flex-row items-center justify-start gap-[4px] whitespace-nowrap xl:flex">
                    <Image
                      alt="USDC"
                      width={16}
                      height={16}
                      src="/icons/wallet-logo.png"
                    />
                    <span className="text-[14px] font-semibold text-textPrimary">0</span>
                  </div>
                  <ChevronDown size={18} className="flex-shrink-0 text-textPrimary" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex">
            <div className="w-full">
              <button className="flex h-[32px] w-[32px] items-center justify-center gap-[8px] rounded-full bg-primaryStroke hover:bg-secondaryStroke/80">
                <UserCog size={18} className="flex-shrink-0 text-textPrimary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavButton({ label, tone }: { label: string; tone?: "accent" | "primary" }) {
  return (
    <button
      className={cn(
        "flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] justify-start items-center transition-none duration-0 rounded-[4px] text-[14px] font-medium",
        tone === "accent" ? "text-[#3264ff]" : "text-text-secondary",
        "hover:bg-accent-blue/20 hover:text-accent-blue hover:transition-[background-color,color] hover:duration-135 hover:ease-in-out"
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
