"use client";

import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-white/5",
        "before:absolute before:inset-0 before:-translate-x-full before:content-[''] before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/8 before:to-transparent",
        className,
      )}
    />
  );
}
