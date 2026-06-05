import {
  ClipboardList,
  CheckCircle,
  Clock,
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

import { getTasks } from "@/services/taskService";

export default async function Home() {
  const tasks = await getTasks();

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  return (
    <main className="flex bg-slate-100">
      <Sidebar />
      <div className="flex/1">
      <div className="flex-1 max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Task Management Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Total Tasks
                </p>
                <h2 className="text-4xl font-bold">
                  {tasks.length}
                </h2>
              </div>

              <ClipboardList size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Completed
                </p>
                <h2 className="text-4xl font-bold text-green-600">
                  {completedTasks}
                </h2>
              </div>

              <CheckCircle size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Pending
                </p>
                <h2 className="text-4xl font-bold text-orange-500">
                  {pendingTasks}
                </h2>
              </div>

              <Clock size={40} />
            </div>
          </div>

        </div>

        <Dashboard tasks={tasks} />

      </div>
          </div>
    </main>
  );
}