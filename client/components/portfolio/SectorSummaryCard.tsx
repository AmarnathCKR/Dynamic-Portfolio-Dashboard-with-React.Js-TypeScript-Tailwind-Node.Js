import { ComputedStock } from "@/components/stock-table/types";

interface Props {
  sector: string;
  stocks: ComputedStock[];
}

export default function SectorSummaryCard({ sector, stocks }: Props) {
  const summary = stocks.reduce(
    (acc, s) => {
      acc.investment += s.investment;
      acc.presentValue += s.presentValue ?? 0;
      acc.gainLoss += s.gainLoss ?? 0;
      return acc;
    },
    { investment: 0, presentValue: 0, gainLoss: 0 }
  );

  return (
    <div className="p-4 rounded-md border bg-surface border-border flex justify-between">
      <h2 className="font-semibold">{sector}</h2>
      <div className="flex gap-6 text-sm">
        <span>Investment: ₹{summary.investment.toFixed(2)}</span>
        <span>Value: ₹{summary.presentValue.toFixed(2)}</span>
        <span
          className={summary.gainLoss >= 0 ? "text-gain" : "text-loss"}
        >
          P/L: ₹{summary.gainLoss.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
