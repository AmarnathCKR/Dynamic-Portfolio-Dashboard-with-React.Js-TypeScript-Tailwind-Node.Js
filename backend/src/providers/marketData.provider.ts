export interface MarketDataProvider {
  getCMP(symbol: string): Promise<number | null>;
  getFundamentals(symbol: string): Promise<{
    peRatio: number | null;
    latestEarnings: string | null;
  }>;
}
