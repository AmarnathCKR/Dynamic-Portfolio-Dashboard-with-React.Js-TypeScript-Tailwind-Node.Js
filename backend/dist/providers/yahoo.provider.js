"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YahooProvider = void 0;
const yahoo_finance2_1 = __importDefault(require("yahoo-finance2"));
const memory_cache_1 = require("../cache/memory.cache");
const yahooFinance = new yahoo_finance2_1.default({ suppressNotices: ["yahooSurvey"] });
const cache = new memory_cache_1.MemoryCache();
const CACHE_TTL = 30 * 1000;
class YahooProvider {
    mapSymbol(symbol) {
        return `${symbol}.NS`;
    }
    async getStockData(symbol) {
        const cacheKey = `yahoo:${symbol}`;
        const cached = cache.get(cacheKey);
        if (cached) {
            console.log("[YahooProvider] Cache hit for", symbol, cached);
            return cached;
        }
        try {
            const quote = await yahooFinance.quote(this.mapSymbol(symbol));
            const data = {
                cmp: typeof quote?.regularMarketPrice === "number"
                    ? quote.regularMarketPrice
                    : null,
                peRatio: typeof quote?.trailingPE === "number"
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
        }
        catch (error) {
            console.error("[YahooProvider]", symbol, error);
            return { cmp: null, peRatio: null, latestEarnings: null };
        }
    }
}
exports.YahooProvider = YahooProvider;
