import React, { memo, FC, useEffect, useState } from 'react';
import { getUserPlaylist } from '../../../../../../network/playlist';
import { IResponseType } from '../../../../../../types/responseType';
import { IPage } from '../../../../../../types/IPage';
import { IPlaylist } from '../../../../../../types/playlist/IPlaylist';
import VideoList from './childCpn/videoList/index';
import { HomeWrapper } from './style';

interface IProps {
  userId: string;
}
const Home: FC<IProps> = (props) => {
  const { userId } = props;
  const [total, setTotal] = useState<number>(0);
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  useEffect(() => {
    getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId, 0, 10).then((data) => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setPlaylist(data.data.list);
      }
    });
  }, [userId]);
  return (
    <HomeWrapper>
      <ul>
        {playlist &&
          playlist.length !== 0 &&
          playlist.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="play-list-name">{item.name}</div>
                <VideoList id={item.id} />
              </li>
            );
          })}
      </ul>
    </HomeWrapper>
  );
};
export default memo(Home);
