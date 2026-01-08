import { PORTFOLIO } from "../data/portfolio.data";
import { YahooProvider } from "../providers/yahoo.provider";
import { throttle } from "../utils/asyncThrottle";

export class PortfolioService {
  private yahoo = new YahooProvider();

  async getPortfolio() {
    const tasks = PORTFOLIO.map((stock) => async () => {
      const market = await this.yahoo.getStockData(stock.symbol);
      return { ...stock, ...market };
    });

    return throttle(tasks, 3);
  }
}
