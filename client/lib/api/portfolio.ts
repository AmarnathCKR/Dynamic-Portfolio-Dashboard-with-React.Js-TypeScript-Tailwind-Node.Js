import { Stock } from "@/components/stock-table/types";

/**
 * Dummy portfolio data
 * This mimics the shape returned by the backend API.
 * In production, this function will be replaced with a real API call.
 */
const MOCK_PORTFOLIO: Stock[] = [
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    sector: "Technology",
    exchange: "NSE",
    purchasePrice: 3200,
    quantity: 10,
    cmp: 3450,
    peRatio: 28.4,
    latestEarnings: "Q3 FY25",
  },
  {
    symbol: "INFY",
    name: "Infosys",
    sector: "Technology",
    exchange: "NSE",
    purchasePrice: 1450,
    quantity: 15,
    cmp: 1510,
    peRatio: 24.8,
    latestEarnings: "Q3 FY25",
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    sector: "Financials",
    exchange: "NSE",
    purchasePrice: 1500,
    quantity: 20,
    cmp: 1450,
    peRatio: 19.1,
    latestEarnings: "Q3 FY25",
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank",
    sector: "Financials",
    exchange: "NSE",
    purchasePrice: 920,
    quantity: 25,
    cmp: 985,
    peRatio: 21.3,
    latestEarnings: "Q3 FY25",
  },
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    sector: "Energy",
    exchange: "NSE",
    purchasePrice: 2400,
    quantity: 8,
    cmp: 2525,
    peRatio: 23.7,
    latestEarnings: "Q3 FY25",
  },
];

/**
 * Mock fetch function
 * Simulates network latency and keeps the same async contract
 */
export async function fetchPortfolio(): Promise<Stock[]> {
 const data =  await  fetch('https://fuzzy-telegram-j655vv9jgjxfqjx6-4000.app.github.dev/api/portfolio').then(res => res.json());

  return data.map((stock: Stock) => ({
    ...stock,
    cmp: +(stock.cmp! * (0.98 + Math.random() * 0.04)).toFixed(2),
  })) ;
}
