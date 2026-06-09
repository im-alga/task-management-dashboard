import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex justify-between">
        <h3 className="text-lg font-bold text-zinc-500">{project.name}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            project.status === "Active"
              ? "bg-green-100 text-green-700"
              : project.status === "In Progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-amber-100 text-amber-700"
          } `}
        >
          {project.status}
        </span>
      </div>

      <p className="mb-2 text-sm text-zinc-500">Progress</p>

      <div className="mb-3 h-3 w-full rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-500"
          style={{
            width: `${project.progress}%`,
          }}
        />
      </div>

      <div className="flex justify-between text-sm">
        <span className="font-semibold text-zinc-900">{project.progress}%</span>

        <span className="text-zinc-500">{project.tasks} Tasks</span>
      </div>
    </div>
  );
}
