export type Stock = {
symbol: string;
name: string;
sector: string;
exchange: string;
purchasePrice: number;
quantity: number;
cmp?: number | null;
peRatio?: number | null;
latestEarnings?: string | null;
};


export type ComputedStock = Stock & {
investment: number;
presentValue: number | null;
gainLoss: number | null;
portfolioPercentage: number;
};