import { Stock } from "@/components/stock-table/types";

export async function fetchPortfolio(): Promise<Stock[]> {
 const data =  await  fetch(process.env.NEXT_PUBLIC_API_URL+'/portfolio').then(res => res.json());

  return data.map((stock: Stock) => ({
    ...stock,
    cmp: +(stock.cmp! * (0.98 + Math.random() * 0.04)).toFixed(2),
  })) ;
}
