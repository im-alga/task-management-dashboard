import TasksManager from "@/components/TasksManager";
import { getTasks } from "@/services/taskService";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-slate-900">Tasks</h1>

      <TasksManager initialTasks={tasks} />
    </>
  );
}
