export interface UserProfile {
  name: string;
  role: string;
  work: {
    count: number;
    recentWorks: {
      id: string;
      name: string;
      image: string;
    }[];
  };
  following: number;
  follower: number;
}
