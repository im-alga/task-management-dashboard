import { TeamMember } from "@/types/teamMember";
import TeamMemberCard from "./TeamMemberCard";

interface Props {
  members: TeamMember[];
}

export default function TeamMemberList({ members }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
