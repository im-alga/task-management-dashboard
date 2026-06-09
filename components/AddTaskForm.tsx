"use client";

import { useState } from "react";

interface Props {
  onAddTask: (title: string) => void;
}

export default function AddTaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-3xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-sm"
    >
      <h3 className="mb-4 font-semibold text-slate-800">Add New Task</h3>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Write a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 rounded-xl border border-zinc-200 bg-white p-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-zinc-900 px-5 text-white transition hover:bg-zinc-800"
        >
          Create
        </button>
      </div>
    </form>
  );
}
