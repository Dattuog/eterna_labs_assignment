"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: "sm" | "md";
  pill?: boolean;
}

export function IconButton({ className, active, size = "md", pill, children, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface-800/80 text-text-secondary transition hover:text-white hover:border-border-strong hover:bg-white/10",
        size === "sm" ? "h-8 w-8" : "h-10 w-10",
        pill ? "px-3" : "",
        active ? "ring-2 ring-accent-blue/40" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
