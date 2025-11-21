import { mockTokens } from "@/data/mockTokens";
import { TokenRowData, TokenCategory, TokenTier } from "@/types/token";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTokens() {
  await wait(520 + Math.random() * 180);
  return mockTokens;
}

export function filterTokens(
  tokens: TokenRowData[],
  category: TokenCategory,
  tiers: Record<TokenTier, boolean>,
) {
  return tokens.filter((token) => {
    const inCategory = token.categories.includes(category);
    const tierAllowed = tiers[token.tier] ?? true;
    return inCategory && tierAllowed;
  });
}
