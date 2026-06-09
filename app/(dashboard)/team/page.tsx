import TeamMemberList from "@/components/TeamMemberList";
import { getTeamMembers } from "@/services/teamService";

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="mb-10 text-4xl font-bold text-zinc-900">Team</h1>

        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800">
          Add Member
        </button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow">
          <p className="font-medium text-zinc-500">Total Members</p>

          <h2 className="text-3xl font-bold text-zinc-900">{members.length}</h2>
        </div>
      </div>

      <TeamMemberList members={members} />
    </>
  );
}
