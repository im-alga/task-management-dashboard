import ReportsChart from "@/components/ReportsChart";
import ProjectsBarChart from "@/components/ProjectsBarChart";

export default function ReportsPage() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold text-zinc-900">Reports</h1>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="font-medium text-zinc-500">Total Tasks</p>

          <h2 className="text-3xl font-bold text-zinc-900">12</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="font-medium text-zinc-500">Completed</p>

          <h2 className="text-3xl font-bold text-zinc-900">8</h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="font-medium text-zinc-500">Completion Rate</p>

          <h2 className="text-3xl font-bold text-zinc-900">67%</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ReportsChart />

        <ProjectsBarChart />
      </div>
    </>
  );
}
