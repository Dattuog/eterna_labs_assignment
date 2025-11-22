"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { TopNav } from "@/components/layout/TopNav";
import { QuickTools } from "@/components/layout/QuickTools";
import { StatusBar } from "@/components/layout/StatusBar";
import { TokenTable } from "@/components/table/TokenTable";
import { Button } from "@/components/ui/button";
import { ControlBar } from "@/components/layout/ControlBar";
import { useTokenFeed } from "@/hooks/useTokenFeed";
import { mockTokens } from "@/data/mockTokens";
import { fetchTokens, filterTokens } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSort } from "@/store/uiSlice";

const CATEGORY_MAP = {
  Trending: "trending",
  Surge: "surge",
  "DEX Screener": "dex",
  "Pump Live": "pump",
} as const;

export default function Home() {
  const dispatch = useAppDispatch();
  const ui = useAppSelector((state) => state.ui);
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    initialData: mockTokens,
    staleTime: 60_000,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useTokenFeed(!isLoading);

  const tiers = useMemo(
    () => ({
      new: ui.showNewPairs,
      final: ui.showFinalStretch,
      migrated: ui.showMigrated,
      standard: true,
    }),
    [ui.showFinalStretch, ui.showMigrated, ui.showNewPairs],
  );

  const filtered = useMemo(() => {
    if (!data) return [];
    const category = CATEGORY_MAP[ui.activeTab];
    return filterTokens(data, category, tiers);
  }, [data, tiers, ui.activeTab]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    return copy.sort((a, b) => {
      const dir = ui.sort.direction === "asc" ? 1 : -1;
      let left = 0;
      let right = 0;
      switch (ui.sort.field) {
        case "marketCap":
          left = a.marketCap;
          right = b.marketCap;
          break;
        case "liquidity":
          left = a.liquidity;
          right = b.liquidity;
          break;
        case "volume":
          left = a.volume;
          right = b.volume;
          break;
        case "txns":
          left = a.txns.total;
          right = b.txns.total;
          break;
        default:
          break;
      }
      return (left - right) * dir;
    });
  }, [filtered, ui.sort.direction, ui.sort.field]);



  const handleSort = (field: typeof ui.sort.field) => {
    const direction =
      ui.sort.field === field && ui.sort.direction === "desc" ? "asc" : "desc";
    dispatch(setSort({ field, direction }));
  };

  const showLoading = isLoading || (isFetching && !data);

  return (
    <main className="flex flex-col items-center gap-2 px-1 pb-16 pt-2 sm:px-2 lg:px-4">
      <TopNav />
      <QuickTools />
      <div className="w-full max-w-[1420px]">
        <ControlBar />
        {isError ? (
          <div className="mb-2 flex items-center gap-3 rounded-2xl border border-accent-red/30 bg-accent-red/10 px-4 py-3 text-sm text-white shadow-card">
            <AlertTriangle size={18} className="text-accent-yellow" />
            <span>Feed temporarily unavailable. Try again.</span>
            <Button variant="primary" size="sm" onClick={() => refetch()} className="ml-auto">
              <RefreshCw size={14} className="mr-1" />
              Retry
            </Button>
          </div>
        ) : null}
        <TokenTable
          tokens={sorted}
          isLoading={showLoading}
          sort={ui.sort}
          compact={ui.compactRows}
          onSort={handleSort}
          onRetry={refetch}
        />
      </div>
      <StatusBar />
    </main>
  );
}
