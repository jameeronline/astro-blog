// types/team-member.ts
export interface TeamMemberProps {
  name: string;
  role: string;
  picture: string;
  description: string;
  // Optional additional fields
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}