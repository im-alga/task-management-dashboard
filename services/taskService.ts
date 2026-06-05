import { Task } from "@/types/task";

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=12",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}