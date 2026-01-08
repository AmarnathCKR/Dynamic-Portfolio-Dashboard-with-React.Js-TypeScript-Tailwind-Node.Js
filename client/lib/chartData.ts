import { ComputedStock } from "@/components/stock-table/types";

export function buildPortfolioPieData(stocks: ComputedStock[]) {
  return stocks.map((s) => ({
    name: `${s.name} (${s.symbol})`,
    value: s.investment,
  }));
}

export function buildSectorBarData(stocks: ComputedStock[]) {
  const map = new Map<string, number>();

  stocks.forEach((s) => {
    map.set(s.sector, (map.get(s.sector) ?? 0) + s.investment);
  });

  return Array.from(map.entries()).map(([sector, investment]) => ({
    sector,
    investment,
  }));
}
