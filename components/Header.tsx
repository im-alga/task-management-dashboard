"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTasks } from "@/services/taskService";
import { getProjects } from "@/services/projectService";
import { getTeamMembers } from "@/services/teamService";
import { Bell, Search } from "lucide-react";

interface SearchResult {
  type: string;
  name: string;
  route: string;
}

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  useEffect(() => {
    async function search() {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      const tasks = await getTasks();
      const projects = await getProjects();
      const members = await getTeamMembers();

      const taskResults = tasks
        .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
        .map((t) => ({
          type: "Task",
          name: t.title,
          route: "/tasks",
        }));

      const projectResults = projects
        .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
        .map((p) => ({
          type: "Project",
          name: p.name,
          route: "/projects",
        }));

      const memberResults = members
        .filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
        .map((m) => ({
          type: "Team",
          name: m.name,
          route: "/team",
        }));

      setResults([...taskResults, ...projectResults, ...memberResults]);
    }

    search();
  }, [query]);
  return (
    <>
      <header className="zinc-200 mb-6 flex items-center justify-between rounded-3xl border bg-white px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border border-zinc-200 py-2 pr-4 pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {results.length > 0 && (
            <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
              {results.map((result, index) => (
                <div
                  key={index}
                  onClick={() => {
                    router.push(result.route);

                    setQuery("");
                    setResults([]);
                  }}
                  className="border-b border-zinc-100 px-4 py-3 hover:bg-zinc-50"
                >
                  <p className="font-medium">{result.name}</p>

                  <p className="text-xs text-zinc-500">{result.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ml-6 flex items-center gap-4">
          <button className="relative rounded-xl p-2 hover:bg-zinc-100">
            <Bell size={20} />

            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 font-semibold text-white">
            AG
          </div>
        </div>
      </header>
    </>
  );
}
