import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
