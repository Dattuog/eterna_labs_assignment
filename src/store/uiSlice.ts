import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type MarketTab = "Trending" | "Surge" | "DEX Screener" | "Pump Live";
export type Timeframe = "1m" | "5m" | "30m" | "1h" | "4h";
export type SortField = "marketCap" | "liquidity" | "volume" | "txns";
export type SortDirection = "asc" | "desc";

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export interface UiState {
  activeTab: MarketTab;
  timeframe: Timeframe;
  showNewPairs: boolean;
  showFinalStretch: boolean;
  showMigrated: boolean;
  quickBuy: number;
  playlist: "P1" | "P2" | "P3";
  sort: SortState;
  compactRows: boolean;
  filterOpen: boolean;
}

const initialState: UiState = {
  activeTab: "Trending",
  timeframe: "5m",
  showNewPairs: true,
  showFinalStretch: true,
  showMigrated: false,
  quickBuy: 0,
  playlist: "P1",
  sort: {
    field: "marketCap",
    direction: "desc",
  },
  compactRows: false,
  filterOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<MarketTab>) {
      state.activeTab = action.payload;
    },
    setTimeframe(state, action: PayloadAction<Timeframe>) {
      state.timeframe = action.payload;
    },
    toggleNewPairs(state) {
      state.showNewPairs = !state.showNewPairs;
    },
    toggleFinalStretch(state) {
      state.showFinalStretch = !state.showFinalStretch;
    },
    toggleMigrated(state) {
      state.showMigrated = !state.showMigrated;
    },
    setQuickBuy(state, action: PayloadAction<number>) {
      state.quickBuy = action.payload;
    },
    setPlaylist(state, action: PayloadAction<UiState["playlist"]>) {
      state.playlist = action.payload;
    },
    setSort(state, action: PayloadAction<SortState>) {
      const { field, direction } = action.payload;
      if (state.sort.field === field) {
        state.sort.direction = direction ?? (state.sort.direction === "asc" ? "desc" : "asc");
      } else {
        state.sort.field = field;
        state.sort.direction = direction;
      }
    },
    toggleCompact(state) {
      state.compactRows = !state.compactRows;
    },
    setFilterOpen(state, action: PayloadAction<boolean | undefined>) {
      state.filterOpen = action.payload ?? !state.filterOpen;
    },
  },
});

export const {
  setTab,
  setTimeframe,
  toggleFinalStretch,
  toggleMigrated,
  toggleNewPairs,
  setQuickBuy,
  setPlaylist,
  setSort,
  toggleCompact,
  setFilterOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
