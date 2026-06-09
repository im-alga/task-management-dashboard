"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Website",
    progress: 80,
  },
  {
    name: "Mobile App",
    progress: 45,
  },
  {
    name: "Marketing",
    progress: 20,
  },
];

export default function ProjectsBarChart() {
  return (
    <div className="h-[400px] rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h2 className="mb-6 text-xl font-bold">Project Progress</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
