import DashboardStats from "@/components/DashboardStats";
import RecentProjects from "@/components/RecentProjects";
import RecentTasks from "@/components/RecentTasks";

import { getProjects } from "@/services/projectService";
import { getTasks } from "@/services/taskService";
import { getTeamMembers } from "@/services/teamService";

export default async function DashboardPage() {
  const tasks = await getTasks();
  const projects = await getProjects();
  const members = await getTeamMembers();

  const completedTasks = tasks.filter((task) => task.completed).length;

  const completionRate = Math.round((completedTasks / tasks.length) * 100) || 0;

  return (
    <>
      <h1 className="mb-10 text-4xl font-bold text-zinc-900">Dashboard</h1>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats title="Tasks" value={tasks.length} />

        <DashboardStats title="Projects" value={projects.length} />

        <DashboardStats title="Team Members" value={members.length} />

        <DashboardStats title="Completion Rate" value={`${completionRate}%`} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentTasks tasks={tasks} />

        <RecentProjects projects={projects} />
      </div>
    </>
  );
}
