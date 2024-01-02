import React, { memo, FC, ReactElement } from 'react';
interface IProps {
  userId: string;
}
const Playlist: FC<IProps> = (props) => {
  return <div>播放列表</div>;
};
export default memo(Playlist);
