"use client";

import { LineChart, Settings, Star } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export function QuickTools() {
  return (
    <div className="grayscale-[30%] hover:grayscale-0 transition-[filter] relative mx-auto flex h-7 w-full max-w-[1536px] flex-row items-center gap-2 overflow-hidden border-b border-border-subtle px-4 pb-[1px] text-text-muted sm:border-border-subtle/50 lg:px-6">
      <div className="flex h-full items-center gap-2">
        <IconButton
          size="sm"
          className="min-h-[24px] min-w-[24px] rounded-[4px] border-0 bg-transparent text-text-muted hover:bg-white/10 hover:text-text-secondary"
        >
          <Settings size={14} />
        </IconButton>
      </div>

      <div className="flex h-full items-center gap-2">
        <span className="h-4 w-px bg-border-subtle" />
      </div>

      <div className="flex h-full items-center gap-2">
        <IconButton
          size="sm"
          className="min-h-[24px] min-w-[24px] rounded-[4px] border-0 bg-transparent text-text-secondary hover:bg-white/10"
        >
          <Star size={14} />
        </IconButton>
        <IconButton
          size="sm"
          className="min-h-[24px] min-w-[24px] rounded-[4px] border-0 bg-transparent text-text-muted hover:bg-white/10 hover:text-text-secondary"
        >
          <LineChart size={14} />
        </IconButton>
      </div>

      <div className="flex h-full items-center gap-2">
        <span className="h-4 w-px bg-border-subtle" />
      </div>

      <div className="flex flex-1 items-center overflow-hidden">
        <div className="flex h-full flex-row gap-[1px] pt-[1px] items-center overflow-x-auto no-scrollbar">
          {/* empty ticker rail placeholder */}
          <div style={{ width: 0, height: "100%", position: "relative", display: "flex" }} />
        </div>
      </div>
    </div>
  );
}
