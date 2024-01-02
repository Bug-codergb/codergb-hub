interface IResponseType<T> {
  status: number;
  message: string;
  data: T;
}
export type { IResponseType };
