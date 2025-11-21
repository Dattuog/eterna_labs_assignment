"use client";

import { cn } from "@/lib/utils";

type Tone = "neutral" | "positive" | "negative" | "warning";

const toneStyles: Record<Tone, string> = {
  neutral: "text-text-secondary bg-white/5 border border-border-subtle",
  positive: "text-accent-green bg-accent-green/10 border border-accent-green/25",
  negative: "text-accent-red bg-accent-red/12 border border-accent-red/25",
  warning: "text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/25",
};

interface Props {
  label: string;
  tone?: Tone;
  icon?: React.ReactNode;
  className?: string;
  dotted?: boolean;
}

export function Badge({ label, tone = "neutral", icon, className, dotted }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide",
        toneStyles[tone],
        dotted ? "border-dashed" : "",
        className,
      )}
    >
      {icon}
      {label}
    </span>
  );
}
