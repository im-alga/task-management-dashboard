"use client";

import { useMemo, useState } from "react";
import TaskList from "./TaskList";
import { Task } from "@/types/task";
import AddTaskForm from "./AddTaskForm";

interface Props {
  tasks: Task[];
}

export default function Dashboard({ tasks }: Props) {
  const [filter, setFilter] = useState("all");
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (title: string) => {
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  setTaskList((prev) => [
    newTask,
    ...prev,
  ]);
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
  setTaskList((prev) =>
    prev.filter((task) => task.id !== id)
  );
};

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return taskList.filter((t) => t.completed);

      case "pending":
        return taskList.filter((t) => !t.completed);

      default:
        return taskList;
    }
  }, [taskList, filter]);

  return (
    <>
    <AddTaskForm onAddTask={addTask} />
      <div className="flex gap-3 mb-6">

        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-lg ${
            filter === "completed"
              ? "bg-green-600 text-white"
              : "bg-white"
          }`}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-lg ${
            filter === "pending"
              ? "bg-orange-500 text-white"
              : "bg-white"
          }`}
        >
          Pending
        </button>

      </div>

      <TaskList tasks={filteredTasks}  onToggle={toggleTask} onDelete={deleteTask}/>
    </>
  );
}