"use client";

import Image from "next/image";
import {
  ArrowDown,
  Bell,
  BookOpen,
  Compass,
  EyeOff,
  Layout,
  Palette,
  Activity,
  ChartNoAxesColumnIncreasing,
  Twitter,
  Settings,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-base-900">
      <div className="mx-auto flex h-8 w-full max-w-[1536px] items-center gap-3 overflow-x-auto px-4 text-[12px] text-text-secondary no-scrollbar">
        <button className="flex h-6 items-center gap-1 rounded-[4px] bg-primaryBlue/20 px-2 text-primaryBlue transition hover:bg-primaryBlue/25">
          <Settings size={14} />
          <span className="font-semibold">PRESET 1</span>
        </button>

        <button className="flex h-6 items-center gap-1 rounded-full border border-border-subtle px-2 transition hover:bg-border-subtle/60">
          <Wallet size={14} className="text-text-muted" />
          <span>1</span>
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-sm bg-[linear-gradient(135deg,#12c2e9,#c471ed,#f64f59)]" />
            <span>0</span>
          </span>
          <ArrowDown size={14} className="text-text-secondary" />
        </button>

        <Divider />

        <IconChip icon={<Settings size={14} />} />
        <IconChip icon={<Wallet size={14} />} label="Wallet" />
        <TwitterChip />
        <IconChip icon={<Compass size={14} />} label="Discover" />
        <IconChip icon={<Activity size={14} />} label="Pulse" />
        <IconChip icon={<ChartNoAxesColumnIncreasing size={14} />} label="PnL" />

        <div className="hidden lg:flex h-5 w-px flex-shrink-0 bg-border-subtle" />

        <div className="hidden items-center gap-2 lg:flex">
          <GradientChip />
        </div>

        <div className="flex flex-1 items-center gap-2">
          <TokenPrice value="$82.8K" className="text-[#F7931A]" />
          <TokenPrice value="$2697" className="text-[#497493]" />
          <TokenPrice value="$126.81" className="text-[#14F195]" />
        </div>

        <Divider />

        <div className="flex items-center gap-2">
          <ConnectionChip />
          <button className="flex h-6 items-center gap-1 rounded-[4px] px-2 transition hover:bg-border-subtle/40">
            GLOBAL
            <ArrowDown size={14} />
          </button>
        </div>

        <Divider />

        <IconChip icon={<Layout size={14} />} />
        <IconChip icon={<Bell size={14} />} />
        <IconChip icon={<Palette size={14} />} />

        <Divider className="hidden md:flex" />

        <div className="hidden items-center gap-3 md:flex">
          <Link href="https://discord.gg/axiomtrade" target="_blank" className="hover:opacity-80">
            <i className="ri-discord-fill text-[16px]" />
          </Link>
          <Link href="https://x.com/axiomexchange" target="_blank" className="hover:opacity-80">
            <i className="ri-twitter-x-line text-[16px]" />
          </Link>
          <Link
            href="https://docs.axiom.trade/"
            target="_blank"
            className="flex h-6 items-center gap-1 rounded-[4px] px-2 transition hover:bg-border-subtle/40"
          >
            <BookOpen size={16} />
            <span className="hidden lg:flex">Docs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function IconChip({ icon, label }: { icon: React.ReactNode; label?: string }) {
  return (
    <button className="flex h-6 items-center gap-1 rounded-[4px] px-1 text-text-secondary transition hover:bg-border-subtle/40 hover:text-text-primary">
      {icon}
      {label ? <span className="leading-4">{label}</span> : null}
    </button>
  );
}

function TwitterChip() {
  return (
    <button className="group relative flex h-6 items-center gap-1 rounded-[4px] border border-transparent px-1 text-text-secondary transition hover:border-transparent hover:bg-border-subtle/60">
      <div className="absolute -right-[3px] -top-[1px] h-[7px] w-[7px] rounded-full border border-background bg-decrease" />
      <Twitter size={16} className="text-text-tertiary group-hover:text-textSecondary" />
      <span className="text-[12px] font-medium leading-4 text-nowrap text-text-secondary">Twitter</span>
    </button>
  );
}

function Divider({ className }: { className?: string }) {
  return <div className={cn("h-5 w-px flex-shrink-0 bg-border-subtle", className)} />;
}

function TokenPrice({ value, className }: { value: string; className?: string }) {
  return (
    <span className={cn("hidden flex-row items-center gap-1 text-[12px] font-normal 2xl:flex", className)}>
      {value}
    </span>
  );
}

function ConnectionChip() {
  return (
    <div className="flex h-6 items-center gap-1 rounded-[4px] bg-primaryGreen/20 px-2 text-primaryGreen">
      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-primaryGreen/30">
        <span className="h-2 w-2 rounded-full bg-primaryGreen" />
      </span>
      <span className="hidden text-[12px] font-medium xl:block">Connection is stable</span>
    </div>
  );
}

function GradientChip() {
  return (
    <div className="relative flex h-6 items-center rounded-full bg-[linear-gradient(135deg,#12391f,#1b121f)] px-[3px]">
      <div className="flex h-[18px] items-center gap-[6px] rounded-full bg-base-900/95 px-2 shadow-inner">
        <Image alt="Pump" src="/images/pump.svg" width={11} height={11} priority className="h-[11px] w-[11px]" />
        <Image alt="Bonk" src="/images/bonk.svg" width={11} height={11} priority className="h-[11px] w-[11px]" />
        <Image alt="Virtual Curve" src="/images/virtual-curve.svg" width={11} height={11} priority className="h-[11px] w-[11px]" />
      </div>
    </div>
  );
}
