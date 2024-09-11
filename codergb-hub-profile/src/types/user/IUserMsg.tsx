interface IUserMsg {
  userId: string;
  userName: string;
  token: string;
  avatarUrl: string;
  history: number;
  isExplore: number;
  manage?: number;
  role?: any[];
}
export type { IUserMsg };
