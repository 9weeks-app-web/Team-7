export interface TeamMember {
  name: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  remainingTasks: number;
  totalMembers: number;
  recruitingMembers: number;
  categories: string[];
  teamMembers: TeamMember[];
  introduction: any;
  createdAt: string;
  hits: number;
}
