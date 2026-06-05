import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: FolderKanban, label: "Projects" },
    { icon: CheckSquare, label: "Tasks" },
    { icon: Users, label: "Team" },
    { icon: BarChart3, label: "Reports" },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        TaskFlow
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}