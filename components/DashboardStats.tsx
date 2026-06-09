interface Props {
  title: string;
  value: string | number;
}

export default function DashboardStats({ title, value }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <p className="font-medium text-zinc-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold text-zinc-900">{value}</h2>
      <p className="mt-2 text-sm text-green-600">+3 this week</p>
    </div>
  );
}
