import { PORTFOLIO } from "../data/portfolio.data";
import { YahooProvider } from "../providers/yahoo.provider";

export class PortfolioService {
  private yahoo = new YahooProvider();

  async getPortfolio() {
    return Promise.all(
      PORTFOLIO.map(async (stock) => {
        const marketData = await this.yahoo.getStockData(
          stock.symbol
        );

        

        return {
          ...stock,
          ...marketData,
        };
      })
    );
  }
}
