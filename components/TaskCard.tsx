import { Task } from "@/types/task";
import { CheckCircle, Clock, Trash2, Pencil } from "lucide-react";
import { useState } from "react";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export default function TaskCard({ task, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  return (
    <div
      onClick={() => onToggle(task.id)}
      className="rounded-xl bg-white p-5 shadow-md transition duration-300 hover:shadow-xl"
    >
      {isEditing ? (
        <div className="mb-4 flex gap-2">
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-1 rounded border p-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!editedTitle.trim()) return;

                onEdit(task.id, editedTitle.trim());

                setIsEditing(false);
              }
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();

              if (!editedTitle.trim()) return;

              onEdit(task.id, editedTitle.trim());

              setIsEditing(false);
            }}
            className="rounded bg-zinc-900 px-3 text-white transition hover:bg-zinc-800"
          >
            Save
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();

              setEditedTitle(task.title);
              setIsEditing(false);
            }}
            className="rounded bg-slate-300 px-3"
          >
            Cancel
          </button>
        </div>
      ) : (
        <h3 className="mb-4 font-semibold text-slate-800">{task.title}</h3>
      )}

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
          const confirmed = window.confirm(
            "Are you sure you want to delete this task?"
          );

          if (confirmed) {
            onDelete(task.id);
          }
        }}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsEditing(true);
        }}
        className="text-blue-500 hover:text-blue-700"
      >
        <Pencil size={18} />
      </button>
    </div>
  );
}
