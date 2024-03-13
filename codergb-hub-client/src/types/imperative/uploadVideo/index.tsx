interface IUploadVideo {
  imgId: string;
  title: string;
  desc: string;
  playlist: string;
  tag: string[];
  cate: string;
  videoId: string;
  file: File | null;
  imgURL: string;
  dt?: number;
  id?: string;
}
export type { IUploadVideo };
