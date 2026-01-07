export interface Stock {
  symbol: string;
  name: string;
  sector: string;
  exchange: "NSE" | "BSE";
  purchasePrice: number;
  quantity: number;
  cmp?: number | null;
  peRatio?: number | null;
  latestEarnings?: string | null;
}
