import { Task } from "@/types/task";
import { CheckCircle, Clock, Trash2 } from "lucide-react";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onToggle, onDelete }: Props) {
  return (
    <div onClick={() => onToggle(task.id)} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">
      <h3 className="font-semibold text-slate-800 mb-4">
        {task.title}
      </h3>

      {task.completed ? (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle size={18} />
          <span>Completed</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-orange-500">
          <Clock size={18} />
          <span>Pending</span>
        </div>
      )}
       <button
    onClick={(e) => {
      e.stopPropagation();
      onDelete(task.id);
    }}
    className="text-red-500 hover:text-red-700"
  >
    <Trash2 size={18} />
  </button>
    </div>
  );
}