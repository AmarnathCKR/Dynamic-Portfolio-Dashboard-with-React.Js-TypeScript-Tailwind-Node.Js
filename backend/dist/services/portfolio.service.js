"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const portfolio_data_1 = require("../data/portfolio.data");
const yahoo_provider_1 = require("../providers/yahoo.provider");
const asyncThrottle_1 = require("../utils/asyncThrottle");
class PortfolioService {
    constructor() {
        this.yahoo = new yahoo_provider_1.YahooProvider();
    }
    async getPortfolio() {
        const tasks = portfolio_data_1.PORTFOLIO.map((stock) => async () => {
            const market = await this.yahoo.getStockData(stock.symbol);
            return { ...stock, ...market };
        });
        return (0, asyncThrottle_1.throttle)(tasks, 3);
    }
}
exports.PortfolioService = PortfolioService;
