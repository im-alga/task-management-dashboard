import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function RecentProjects({ projects }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h2 className="mb-4 text-xl font-semibold text-zinc-900">
        Recent Projects
      </h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="border-b pb-2">
            <p className="font-semibold text-zinc-900">{project.name}</p>

            <p className="text-sm text-zinc-500">{project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
