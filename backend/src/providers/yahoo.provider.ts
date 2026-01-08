import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

type YahooQuote = {
  regularMarketPrice?: number;
  trailingPE?: number;
  earningsTimestamp?: Date;
};

export class YahooProvider {
  private mapSymbol(symbol: string): string {
    return `${symbol}.NS`;
  }

  async getStockData(symbol: string) {
    try {
      const quote = (await yahooFinance.quote(
        this.mapSymbol(symbol)
      )) as YahooQuote | null;

      if (!quote) {
        return {
          cmp: null,
          peRatio: null,
          latestEarnings: null,
        };
      }

      return {
        cmp:
          typeof quote.regularMarketPrice === "number"
            ? quote.regularMarketPrice
            : null,

        peRatio:
          typeof quote.trailingPE === "number"
            ? Number(quote.trailingPE.toFixed(2))
            : null,

        latestEarnings: quote.earningsTimestamp
          ? quote.earningsTimestamp.toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
            })
          : null,
      };
    } catch (err) {
      console.error("[YahooProvider]", symbol, err);
      return {
        cmp: null,
        peRatio: null,
        latestEarnings: null,
      };
    }
  }
}
