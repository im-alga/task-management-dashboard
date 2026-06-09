"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: FolderKanban,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: CheckSquare,
      label: "Tasks",
      href: "/tasks",
    },
    {
      icon: Users,
      label: "Team",
      href: "/team",
    },
    {
      icon: BarChart3,
      label: "Reports",
      href: "/reports",
    },
  ];
  const pathname = usePathname();
  return (
    <aside className="m-4 w-72 rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-zinc-900">TaskFlow</h1>

        <p className="text-sm text-zinc-500">Project Management</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg p-3 transition ${
              pathname === item.href
                ? "bg-zinc-900 text-white"
                : "text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
