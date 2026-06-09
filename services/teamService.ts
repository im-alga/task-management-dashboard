import { TeamMember } from "@/types/teamMember";

export async function getTeamMembers(): Promise<TeamMember[]> {
  return [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      email: "sarah@company.com",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Backend Developer",
      email: "john@company.com",
    },
    {
      id: 3,
      name: "Emily Brown",
      role: "UI/UX Designer",
      email: "emily@company.com",
    },
    {
      id: 4,
      name: "Michael Davis",
      role: "Project Manager",
      email: "michael@company.com",
    },
    {
      id: 5,
      name: "Jessica Wilson",
      role: "QA Engineer",
      email: "jessica@company.com",
    },
  ];
}
