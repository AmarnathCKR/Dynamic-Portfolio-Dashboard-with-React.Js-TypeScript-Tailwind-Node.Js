import { useQuery } from "@tanstack/react-query";
import { fetchPortfolio } from "@/lib/api/portfolio";

export function usePortfolioQuery() {
  return useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPortfolio,
    refetchInterval: 15_000, 
  });
}
