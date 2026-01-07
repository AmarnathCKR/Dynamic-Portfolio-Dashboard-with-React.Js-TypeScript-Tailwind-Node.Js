import { PORTFOLIO } from "../data/portfolio.data";
import { YahooProvider } from "../providers/yahoo.provider";
import { GoogleProvider } from "../providers/google.provider";

export class PortfolioService {
  private yahoo = new YahooProvider();
  private google = new GoogleProvider();

  async getPortfolio() {
    return Promise.all(
      PORTFOLIO.map(async (stock) => {
        const [cmp, fundamentals] = await Promise.all([
          this.yahoo.getCMP(stock.symbol),
          this.google.getFundamentals(stock.symbol),
        ]);

        return {
          ...stock,
          cmp,
          ...fundamentals,
        };
      })
    );
  }
}
