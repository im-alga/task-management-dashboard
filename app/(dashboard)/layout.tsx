import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <div className="flex-1 p-10">
        <Header />
        {children}
      </div>
    </main>
  );
}
