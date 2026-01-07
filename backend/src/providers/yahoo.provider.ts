import { MarketDataProvider } from "./marketData.provider";

export class YahooProvider implements MarketDataProvider {
  async getCMP(symbol: string): Promise<number> {
    const base = {
      TCS: 3450,
      HDFCBANK: 1450,
      RELIANCE: 2525,
    }[symbol] ?? 1000;

    const fluctuation = 1 + (Math.random() - 0.5) / 100;
    return Number((base * fluctuation).toFixed(2));
  }

  async getFundamentals() {
    return { peRatio: null, latestEarnings: null };
  }
}
