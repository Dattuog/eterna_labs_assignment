import { mockTokens } from "@/data/mockTokens";
import { TokenRowData, TokenCategory, TokenTier } from "@/types/token";

export async function fetchTokens() {
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
