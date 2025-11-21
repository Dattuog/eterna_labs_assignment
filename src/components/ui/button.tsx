"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "muted";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  active?: boolean;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2 gap-2",
  lg: "text-sm px-5 py-2.5 gap-2.5",
};

const variantMap: Record<Variant, string> = {
  primary: "bg-accent-blue text-white hover:brightness-110 shadow-glow",
  ghost:
    "bg-transparent text-text-secondary hover:bg-white/5 border border-border-subtle",
  outline:
    "bg-[rgba(255,255,255,0.05)] border border-border-subtle text-text-primary hover:bg-white/8",
  muted:
    "bg-surface-800 text-text-secondary border border-border-subtle hover:border-border-strong",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", className, active, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        base,
        sizeMap[size],
        variantMap[variant],
        active ? "ring-2 ring-accent-blue/40" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
