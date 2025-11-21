export type TokenCategory = "trending" | "surge" | "dex" | "pump";

export type TokenTier = "new" | "final" | "migrated" | "standard";

export type TrendDirection = "up" | "down" | "flat";

export interface TokenInfoItem {
  label: string;
  value: string;
  tone: "positive" | "negative" | "neutral";
}

export interface TokenRowData {
  id: string;
  name: string;
  symbol: string;
  createdAgo: string;
  verified?: boolean;
  image: string;
  pairedWith?: string;
  chain: "SOL" | "ETH";
  marketCap: number;
  marketCapChange: number;
  liquidity: number;
  volume: number;
  txns: {
    total: number;
    buys: number;
    sells: number;
  };
  info: TokenInfoItem[];
  sparkline: number[];
  chartColor: "pink" | "green";
  categories: TokenCategory[];
  tier: TokenTier;
  isLocked?: boolean;
  safety?: "paid" | "unpaid" | "pending";
}
