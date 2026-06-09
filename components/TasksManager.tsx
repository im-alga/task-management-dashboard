"use client";

import { useMemo, useState } from "react";
import { Task } from "@/types/task";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

interface Props {
  initialTasks: Task[];
}

export default function TasksManager({ initialTasks }: Props) {
  const [filter, setFilter] = useState("all");
  const [taskList, setTaskList] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTaskList((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: number) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id: number, title: string) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
            }
          : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    let result = taskList;

    if (filter === "completed") {
      result = result.filter((t) => t.completed);
    }

    if (filter === "pending") {
      result = result.filter((t) => !t.completed);
    }

    if (searchTerm.trim()) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [taskList, filter, searchTerm]);

  return (
    <>
      <AddTaskForm onAddTask={addTask} />

      <div className="mb-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white p-3"
        />
      </div>

      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-lg px-4 py-2 ${
            filter === "all" ? "bg-zinc-900 text-white" : "bg-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`rounded-lg px-4 py-2 ${
            filter === "completed" ? "bg-green-600 text-white" : "bg-white"
          }`}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`rounded-lg px-4 py-2 ${
            filter === "pending" ? "bg-orange-500 text-white" : "bg-white"
          }`}
        >
          Pending
        </button>
      </div>
      <p className="mb-4 text-sm text-slate-500">
        Showing {filteredTasks.length} task(s)
      </p>
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </>
  );
}
