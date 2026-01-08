import { Stock } from "@/components/stock-table/types";

export async function fetchPortfolio(): Promise<Stock[]> {
 const data =  await  fetch('https://fuzzy-telegram-j655vv9jgjxfqjx6-4000.app.github.dev/api/portfolio').then(res => res.json());

  return data.map((stock: Stock) => ({
    ...stock,
    cmp: +(stock.cmp! * (0.98 + Math.random() * 0.04)).toFixed(2),
  })) ;
}
