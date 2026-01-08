import YahooFinance from "yahoo-finance2";
import { MemoryCache } from "../cache/memory.cache";

const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });
const cache = new MemoryCache<any>();

const CACHE_TTL = 30 * 1000;

export class YahooProvider {
  private mapSymbol(symbol: string): string {
    return `${symbol}.NS`;
  }

  async getStockData(symbol: string) {
    const yahooSymbol = this.mapSymbol(symbol);
    const cacheKey = `yahoo:${yahooSymbol}`;

    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
      const quote = await yahooFinance.quote(yahooSymbol);

      const earningsDate =
        typeof quote?.earningsTimestamp === "number"
          ? new Date(quote.earningsTimestamp)
          : quote?.earningsTimestamp instanceof Date
          ? quote.earningsTimestamp
          : null;

      const data = {
        cmp: typeof quote?.regularMarketPrice === "number"
          ? quote.regularMarketPrice
          : null,

        peRatio: typeof quote?.trailingPE === "number"
          ? Number(quote.trailingPE.toFixed(2))
          : null,

        latestEarnings: earningsDate
          ? earningsDate.toLocaleDateString("en-IN", { month: "short", year: "numeric" })
          : null,
      };

      cache.set(cacheKey, data, CACHE_TTL);
      return data;
    } catch {
      return { cmp: null, peRatio: null, latestEarnings: null };
    }
  }
}
