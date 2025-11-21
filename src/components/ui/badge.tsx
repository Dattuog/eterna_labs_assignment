"use client";

import { cn } from "@/lib/utils";

type Tone = "neutral" | "positive" | "negative" | "warning";

const toneStyles: Record<Tone, string> = {
  neutral: "text-text-secondary bg-surface-700/50 border border-border-subtle/50",
  positive: "text-accent-green bg-accent-green/5 border border-accent-green/20",
  negative: "text-accent-red bg-accent-red/5 border border-accent-red/20",
  warning: "text-accent-yellow bg-accent-yellow/5 border border-accent-yellow/20",
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
        "inline-flex items-center justify-center gap-1 rounded px-2 py-1 text-[11px] font-medium",
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
