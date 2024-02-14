import { memo, type FC, useState, useEffect } from 'react';
import { MoreOutlined, StarOutlined } from '@ant-design/icons';
import { Dropdown, Menu, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { type IPlaylist } from '../../../../../../types/playlist/IPlaylist';
import { getUserPlaylist, subUserPlaylist } from '../../../../../../network/playlist';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IPage } from '../../../../../../types/IPage';
import HolderCpn from '../../../../../holder';
import moment from 'moment';
import { PlaylistWrapper } from './style';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
interface IProps {
  userId: string;
}
const CreatePlaylist: FC<IProps> = (props) => {
  const { userId } = props;
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [total, setTotal] = useState<number>(0);
  const login = useLoginMsg();
  const getUserPlaylistReq = (userId: string, offset: number, limit: number) => {
    let isPublic;
    console.log(userId);
    console.log(login.userMsg.userId);
    if (userId !== login.userMsg.userId) {
      isPublic = 1;
    }
    getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId, offset, limit, isPublic).then(
      (data) => {
        if (data.status === 200) {
          setPlaylist(data.data.list);
          setTotal(data.data.count);
        }
      }
    );
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
  const openChangeHandle = (e: any, item: IPlaylist) => {
    console.log(e.key);
    if (e.key === 'sub') {
      console.log(item);
      subUserPlaylist(item.id).then((res) => {
        if (res.status === 200) {
          notification.info({
            message: `${res.message}`,
            description: `个人中心‘收藏的播放列表’中查看`,
            placement: 'bottomLeft'
          });
        }
      });
    }
  };
  return (
    <PlaylistWrapper>
      <ul className="play-list">
        {playlist &&
          playlist.length !== 0 &&
          playlist.map((item) => {
            return (
              <li key={item.id}>
                <div
                  className={'cover'}
                  onClick={(e) => {
                    playlistRouter(item);
                  }}
                >
                  <img src={item.picUrl} />
                </div>
                <div className="state">
                  <div className="container">
                    <p className="name">{item.name}</p>

                    {login.userMsg.userId !== item.user.userId && (
                      <Dropdown
                        overlay={
                          <Menu
                            onClick={(e) => {
                              openChangeHandle(e, item);
                            }}
                          >
                            <Menu.Item key="sub">
                              <div className="g-sub-playlist">
                                <StarOutlined />
                                <span className="label">收藏</span>
                              </div>
                            </Menu.Item>
                          </Menu>
                        }
                        trigger={['click']}
                      >
                        <MoreOutlined className="g-more" />
                      </Dropdown>
                    )}
                  </div>
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
