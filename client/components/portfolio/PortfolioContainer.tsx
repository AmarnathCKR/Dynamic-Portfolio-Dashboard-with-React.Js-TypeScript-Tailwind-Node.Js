"use client";

import { useMemo } from "react";
import { usePortfolioQuery } from "@/hooks/usePortfolioQuery";
import { computeStockMetrics } from "@/components/stock-table/sector.utils";
import { StockDataTable } from "@/components/stock-table";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorBanner from "./ErrorBanner";
import SectorSummaryCard from "./SectorSummaryCard";

export default function PortfolioContainer() {
  const { data, isLoading, isError, refetch } = usePortfolioQuery();

  const computed = useMemo(
    () => (data ? computeStockMetrics(data) : []),
    [data]
  );

  const sectors = useMemo(() => {
    return computed.reduce<Record<string, typeof computed>>((acc, stock) => {
      const sector = stock.sector || "Other";
      acc[sector] = acc[sector] || [];
      acc[sector].push(stock);
      return acc;
    }, {});
  }, [computed]);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <ErrorBanner onRetry={refetch} />;

  return (
    <div className="space-y-8">
      {Object.entries(sectors).map(([sector, stocks]) => (
        <section key={sector} className="space-y-4">
          <SectorSummaryCard sector={sector} stocks={stocks} />
          <StockDataTable data={stocks} />
        </section>
      ))}
    </div>
  );
}
