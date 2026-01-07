"use client";

import React, { useEffect, useState } from "react";
import {
  Stock,
  ComputedStock,
  StockDataTable,
  computeStockMetrics,
} from "@/components/stock-table";

const PortfolioPage = () => {
  const [rows, setRows] = useState<ComputedStock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      
      const rawStocks: Stock[] = [
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
      ];

      const computed = computeStockMetrics(rawStocks);

      setRows(computed);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) {
    return <div className="p-4">Loading portfolio…</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">My Portfolio</h1>
      <StockDataTable data={rows} />
    </div>
  );
};

export default PortfolioPage;
