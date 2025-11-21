"use client";

import { useEffect, useState } from "react";
import { TokenRowData } from "@/types/token";

export function useProgressiveReveal(data: TokenRowData[] | undefined, speed = 140) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!data || data.length === 0) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount(Math.min(1, data.length));
    const id = setInterval(() => {
      setVisibleCount((count) => {
        if (count >= data.length) {
          clearInterval(id);
          return data.length;
        }
        return count + 1;
      });
    }, speed);

    return () => clearInterval(id);
  }, [data, speed]);

  return data?.slice(0, visibleCount) ?? [];
}
