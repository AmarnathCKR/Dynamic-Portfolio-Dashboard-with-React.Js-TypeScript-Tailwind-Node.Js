import { ComputedStock } from "@/components/stock-table/types";
import { formatNumber } from "@/components/stock-table/formatters";
import { Column } from "react-table";

export const stockColumns: Column<ComputedStock>[] = [
  {
    Header: "Particulars",
    accessor: (row) => `${row.name} (${row.symbol})`,
    id: "particulars",
  },
  {
    Header: "Purchase Price",
    accessor: (row) => formatNumber(row.purchasePrice),
    id: "purchasePrice",
  },
  { Header: "Qty", accessor: "quantity", id: "quantity" },
  {
    Header: "Investment",
    accessor: (row) => formatNumber(row.investment),
    id: "investment",
  },
  {
    Header: "Portfolio %",
    accessor: (row) => `${formatNumber(row.portfolioPercentage)}%`,
    id: "portfolioPercentage",
  },
  { Header: "Exchange", accessor: "exchange", id: "exchange" },
  {
    Header: "CMP",
    accessor: (row) => formatNumber(row.cmp),
    id: "cmp",
  },
  {
    Header: "Present Value",
    accessor: (row) => formatNumber(row.presentValue),
    id: "presentValue",
  },
  {
    Header: "Gain / Loss",
    accessor: (row) => formatNumber(row.gainLoss),
    id: "gainLoss",
  },
  {
    Header: "P/E Ratio",
    accessor: (row) => formatNumber(row.peRatio),
    id: "peRatio",
  },
  {
    Header: "Latest Earnings",
    accessor: "latestEarnings",
    id: "latestEarnings",
  },
];
