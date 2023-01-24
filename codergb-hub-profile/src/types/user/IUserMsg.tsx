interface IUserMsg {
  userId: string;
  userName: string;
  token: string;
  avatarUrl: string;
  history?: number;
  isExplore?: number;
}
export type { IUserMsg };
