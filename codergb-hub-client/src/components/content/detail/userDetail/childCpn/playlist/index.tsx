import React, { memo, FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPlaylist } from '../../../../../../types/playlist/IPlaylist';
import { getUserPlaylist } from '../../../../../../network/playlist';
import { IResponseType } from '../../../../../../types/responseType';
import { IPage } from '../../../../../../types/IPage';
import HolderCpn from '../../../../../holder';
import moment from 'moment';
import { PlaylistWrapper } from './style';
interface IProps {
  userId: string;
}
const CreatePlaylist: FC<IProps> = (props) => {
  const { userId } = props;
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [total, setTotal] = useState<number>(0);
  const getUserPlaylistReq = (userId: string, offset: number, limit: number) => {
    getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId, offset, limit).then((data) => {
      if (data.status === 200) {
        setPlaylist(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    getUserPlaylistReq(userId, 0, 10);
  }, [userId]);
  const playlistRouter = (item: IPlaylist) => {
    navigate(`/home/playlist/${item.id}`, {
      replace: false
    });
  };
  return (
    <PlaylistWrapper>
      <ul className="play-list">
        {playlist &&
          playlist.length !== 0 &&
          playlist.map((item) => {
            return (
              <li key={item.id}>
                <div className={'cover'} onClick={(e) => playlistRouter(item)}>
                  <img src={item.picUrl} />
                </div>
                <div className="state">
                  <p className="name">{item.name}</p>
                  <p className="create-time">
                    {moment(item.createTime).format('yyyy-MM-DD HH:mm')}
                  </p>
                  <p className="count">{item.video}个视频</p>
                </div>
              </li>
            );
          })}
        {HolderCpn(playlist.length, 5, 300)}
      </ul>
    </PlaylistWrapper>
  );
};
export default memo(CreatePlaylist);
