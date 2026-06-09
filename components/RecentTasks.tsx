import { Task } from "@/types/task";
import { CheckCircle, Clock } from "lucide-react";

interface Props {
  tasks: Task[];
}

export default function RecentTasks({ tasks }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h2 className="mb-4 text-xl font-semibold text-zinc-900">Recent Tasks</h2>

      <div className="space-y-3">
        {tasks.slice(0, 5).map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle className="text-green-500" size={18} />
            ) : (
              <Clock className="text-orange-500" size={18} />
            )}

            <span className="text-zinc-700">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
