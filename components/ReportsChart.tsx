"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Completed",
    value: 8,
  },
  {
    name: "Pending",
    value: 4,
  },
];

const COLORS = ["#2563eb", "#f97316"];

export default function ReportsChart() {
  return (
    <div className="h-[400px] rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h2 className="mb-6 text-xl font-bold">Task Completion</h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={120} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
