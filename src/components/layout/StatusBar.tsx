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
  Settings,
  Star,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-base-900 border-t border-border-subtle">
      <div className="mx-auto flex h-8 w-full max-w-[1920px] items-center px-2 text-[12px] text-text-secondary no-scrollbar overflow-x-auto">

        {/* Left Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="flex h-6 items-center gap-1 rounded-[4px] bg-accent-blue/20 px-2 text-accent-blue transition hover:bg-accent-blue/25">
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

          <div className="flex items-center gap-1">
            <IconChip icon={<Settings size={14} />} />
            <IconChip icon={<Wallet size={14} />} label="Wallet" />
            <TwitterChip />
            <IconChip icon={<Compass size={14} />} label="Discover" />
            <IconChip icon={<Activity size={14} />} label="Pulse" />
            <IconChip icon={<ChartNoAxesColumnIncreasing size={14} />} label="PnL" />
          </div>

          <Divider className="hidden lg:flex" />

          <div className="hidden items-center lg:flex">
            <GradientChip />
          </div>
        </div>

        {/* Middle Section - Token Prices & Network Info */}
        <div className="flex items-center gap-4 pl-4 flex-shrink-0">
          <div className="flex items-center gap-4">
            <TokenPrice value="$84.0K" className="text-[#F7931A]" icon="/icons/btc-logo.png" />
            <TokenPrice value="$2738" className="text-[#5a8bff]" icon="/icons/eth-logo.png" />
            <TokenPrice value="$126.5" className="text-[#14F195]" icon="/icons/sol-logo-small.png" />
          </div>

          <div className="hidden xl:flex items-center gap-3 text-text-muted font-medium">
            <span>$52K</span>
            <div className="flex items-center gap-1">
              <span className="text-text-secondary">📄</span>
              <span>0.0₂31</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-text-secondary">⬡</span>
              <span>0.003</span>
            </div>
          </div>
        </div>

        {/* Right Section - Connection & Global */}
        <div className="ml-auto flex items-center gap-2 flex-shrink-0">
          <Divider />

          <ConnectionChip />

          <button className="flex h-6 items-center gap-1 rounded-[4px] px-2 transition hover:bg-border-subtle/40">
            GLOBAL
            <ArrowDown size={14} />
          </button>

          <Divider />

          <div className="flex items-center gap-1">
            <IconChip icon={<Layout size={14} />} />
            <IconChip icon={<Bell size={14} />} />
            <IconChip icon={<Palette size={14} />} />
          </div>

          <Divider />

          <div className="flex items-center gap-3">
            <Link href="https://discord.gg/axiomtrade" target="_blank" className="hover:opacity-80">
              <svg
                viewBox="0 0 640 512"
                aria-hidden="true"
                className="h-4 w-4 fill-current text-text-secondary transition hover:text-text-primary"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,1.215,1.484,485.621,485.621,0,0,0,146.431,74.09,1.863,1.863,0,0,0,2.009-.747,342.8,342.8,0,0,0,29.409-47.968,1.869,1.869,0,0,0-1.019-2.588,321.14,321.14,0,0,1-45.865-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.855,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,29.408,47.968,1.871,1.871,0,0,0,2.009.747,486.048,486.048,0,0,0,146.431-74.09,1.875,1.875,0,0,0,1.215-1.484c10.52-113.769-13.143-224.93-94.963-334.518ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
              </svg>
            </Link>
            <Link href="https://x.com/axiomexchange" target="_blank" className="hover:opacity-80">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-current text-text-secondary transition hover:text-text-primary"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
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
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 fill-current text-text-tertiary group-hover:text-text-primary"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      <span className="text-[12px] font-medium leading-4 text-nowrap text-text-secondary">Twitter</span>
    </button>
  );
}

function Divider({ className }: { className?: string }) {
  return <div className={cn("h-5 w-px flex-shrink-0 bg-border-subtle", className)} />;
}

function TokenPrice({ value, className, icon }: { value: string; className?: string; icon?: string }) {
  return (
    <span className={cn("hidden flex-row items-center gap-1.5 text-[12px] font-normal 2xl:flex", className)}>
      {icon ? <Image src={icon} alt="" width={16} height={16} className="rounded-full" /> : null}
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
