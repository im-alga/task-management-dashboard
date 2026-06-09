import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: 1,
      name: "Website Redesign",
      status: "Active",
      progress: 80,
      tasks: 12,
    },
    {
      id: 2,
      name: "Mobile App",
      status: "In Progress",
      progress: 45,
      tasks: 8,
    },
    {
      id: 3,
      name: "Marketing Campaign",
      status: "Planning",
      progress: 20,
      tasks: 5,
    },
  ];
}
