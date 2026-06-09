import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/services/projectService";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-zinc-900">Projects</h1>

          <p className="mt-2 text-zinc-500">
            Manage and track all your active projects.
          </p>
        </div>

        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800">
          New Project
        </button>
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-slate-500">Total Projects</p>

          <h2 className="text-3xl font-bold text-zinc-900">
            {projects.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-slate-500">Active</p>

          <h2 className="text-3xl font-bold text-zinc-900">
            {projects.filter((p) => p.status === "Active").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <p className="text-zinc-500">Total Tasks</p>

          <h2 className="text-3xl font-bold text-zinc-900">
            {projects.reduce((sum, p) => sum + p.tasks, 0)}
          </h2>
        </div>
      </div>
      <ProjectList projects={projects} />
    </>
  );
}
