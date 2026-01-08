"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { sector: string; investment: number }[];
}

export default function SectorBarChart({ data }: Props) {
  return (
    <div className="rounded-lg border p-4 bg-surface">
      <h3 className="mb-3 font-semibold">Sector-wise Investment</h3>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="investment" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
