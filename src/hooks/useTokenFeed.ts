"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { randomPercent, clamp } from "@/lib/utils";
import { TokenRowData } from "@/types/token";

export function useTokenFeed(enabled = true) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!enabled) return undefined;

    const id = setInterval(() => {
      queryClient.setQueryData<TokenRowData[]>(["tokens"], (existing) => {
        if (!existing) return existing;
        return existing.map((token) => {
          const delta = randomPercent(6);
          const multiplier = 1 + delta / 100;
          const marketCap = clamp(Math.round(token.marketCap * multiplier), 5_000, Number.MAX_SAFE_INTEGER);
          const liquidity = clamp(Math.round(token.liquidity * (1 + randomPercent(3) / 100)), 2_000, Number.MAX_SAFE_INTEGER);
          const volume = clamp(Math.round(token.volume * (1 + randomPercent(4) / 100)), 5_000, Number.MAX_SAFE_INTEGER);

          const buys = Math.max(0, token.txns.buys + Math.round(randomPercent(2)));
          const sells = Math.max(0, token.txns.sells + Math.round(randomPercent(2)));

          const nextSpark = [...token.sparkline.slice(1), clamp(token.sparkline[token.sparkline.length - 1] + randomPercent(2), 8, 90)];

          return {
            ...token,
            marketCap,
            marketCapChange: clamp(token.marketCapChange + delta * 0.3, -90, 300),
            liquidity,
            volume,
            txns: {
              total: buys + sells,
              buys,
              sells,
            },
            sparkline: nextSpark,
          };
        });
      });
    }, 2600);

    return () => clearInterval(id);
  }, [enabled, queryClient]);
}
