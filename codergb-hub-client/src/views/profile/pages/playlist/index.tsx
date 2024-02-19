import { type FC, type ReactElement } from 'react';
import type React from 'react';
import { memo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { PlaylistWrapper } from './style';
import { type IPlaylist } from '../../../../types/playlist/IPlaylist';
import { getUserPlaylist } from '../../../../network/playlist';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import { IVideo } from '../../../../types/video/IVideo';
import { columns } from './config';

const Playlist: FC = (): ReactElement => {
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const login = useLoginMsg();
  const navigate = useNavigate();
  const getUserPlaylistReq = (userId: string, offset: number, limit: number) => {
    getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId, offset, limit).then((data) => {
      if (data.status) {
        setCount(data.data.count);
        setPlaylist(data.data.list);
      }
    });
  };
  useEffect(() => {
    getUserPlaylistReq(login.userMsg.userId, 0, 4);
  }, []);

  const pageChangeHandle = (e: number) => {
    setPageIndex(e);
    getUserPlaylistReq(login.userMsg.userId, (e - 1) * 4, 4);
  };
  const [pageIndex, setPageIndex] = useState(1);
  const getAllUserPlaylistReq = () => {
    setPageIndex(1);
    getUserPlaylistReq(login.userMsg.userId, 0, 4);
  };
  return (
    <PlaylistWrapper>
      <div className="title-label">我的播放列表</div>
      {playlist && playlist.length !== 0 && (
        <Table
          rowKey={'id'}
          columns={columns(navigate, getAllUserPlaylistReq)}
          dataSource={playlist}
          pagination={{
            pageSize: 4,
            total: count,
            current: pageIndex,
            onChange: (e) => {
              pageChangeHandle(e);
            }
          }}
        />
      )}
    </PlaylistWrapper>
  );
};
export default memo(Playlist);
