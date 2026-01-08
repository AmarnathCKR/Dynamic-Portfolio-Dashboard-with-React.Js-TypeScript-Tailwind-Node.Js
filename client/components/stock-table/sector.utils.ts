import { ComputedStock, Stock } from "@/components/stock-table/types";

export const computeStockMetrics = (stocks: Stock[]): ComputedStock[] => {
  const totalInvestment = stocks.reduce(
    (sum, s) => sum + s.purchasePrice * s.quantity,
    0
  );

  return stocks.map((s) => {
    const investment = s.purchasePrice * s.quantity;
    const presentValue = s.cmp ? s.cmp * s.quantity : null;
    const gainLoss = presentValue !== null ? presentValue - investment : null;

    return {
      ...s,
      investment,
      presentValue,
      gainLoss,
      portfolioPercentage:
        totalInvestment > 0 ? (investment / totalInvestment) * 100 : 0,
    };
  });
};

export const groupBySector = (stocks: ComputedStock[]) =>
  stocks.reduce<Record<string, ComputedStock[]>>((acc, stock) => {
    const sector = stock.sector || "Unspecified";
    acc[sector] = acc[sector] || [];
    acc[sector].push(stock);
    return acc;
  }, {});
