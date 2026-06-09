import { TeamMember } from "@/types/teamMember";
import { Mail } from "lucide-react";

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:bg-zinc-800">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>

        <div>
          <h3 className="font-bold">{member.name}</h3>

          <p className="text-sm text-slate-500">{member.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Mail size={16} />
        {member.email}
      </div>
    </div>
  );
}
