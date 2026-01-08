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
    const cacheKey = `yahoo:${symbol}`;

    const cached = cache.get(cacheKey);
    if (cached) {
      console.log("[YahooProvider] Cache hit for", symbol,cached);
      return cached;
    }

    try {
      const quote = await yahooFinance.quote(this.mapSymbol(symbol));

      const data = {
        cmp:
          typeof quote?.regularMarketPrice === "number"
            ? quote.regularMarketPrice
            : null,

        peRatio:
          typeof quote?.trailingPE === "number"
            ? Number(quote.trailingPE.toFixed(2))
            : null,

        latestEarnings: quote?.earningsTimestamp
          ? quote.earningsTimestamp.toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
            })
          : null,
      };

      cache.set(cacheKey, data, CACHE_TTL);
      return data;
    } catch (error) {
      console.error("[YahooProvider]", symbol, error);
      return { cmp: null, peRatio: null, latestEarnings: null };
    }
  }
}
