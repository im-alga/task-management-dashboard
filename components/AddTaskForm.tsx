"use client";

import { useState } from "react";

interface Props {
  onAddTask: (title: string) => void;
}

export default function AddTaskForm({
  onAddTask,
}: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-5 mb-6"
    >
      <h3 className="font-semibold text-slate-800 mb-4">
        Add New Task
      </h3>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Write a task..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="flex-1 border rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 rounded-lg"
        >
          Create
        </button>
      </div>
    </form>
  );
}