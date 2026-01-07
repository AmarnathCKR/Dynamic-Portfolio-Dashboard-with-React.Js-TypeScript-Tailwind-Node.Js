import { MarketDataProvider } from "./marketData.provider";

export class GoogleProvider implements MarketDataProvider {
  async getCMP(): Promise<null> {
    return null;
  }

  async getFundamentals(symbol: string) {
    const data = {
      TCS: { peRatio: 28.4, latestEarnings: "Q3 FY25" },
      HDFCBANK: { peRatio: 19.1, latestEarnings: "Q3 FY25" },
      RELIANCE: { peRatio: 23.7, latestEarnings: "Q3 FY25" },
    } as any;

    return data[symbol] ?? { peRatio: null, latestEarnings: null };
  }
}
