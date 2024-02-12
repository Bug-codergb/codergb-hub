import { memo, type FC, type ReactElement, useEffect, useState } from 'react';
import { MoreOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu, notification } from 'antd';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IPage } from '../../../../../../types/IPage';
import { type IPlaylist } from '../../../../../../types/playlist/IPlaylist';
import { getSubPlaylist, subUserPlaylist } from '../../../../../../network/playlist';
import { MulPlayWrapper } from './style';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
import HolderCpn from '../../../../../holder';
import moment from 'moment';
interface IProps {
  userId: string;
}
const MulPlay: FC<IProps> = (props): ReactElement => {
  const { userId } = props;

  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [total, setTotal] = useState<number>(0);

  const login = useLoginMsg();
  const navigate = useNavigate();
  useEffect(() => {
    getSubPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId).then((res) => {
      if (res.status === 200) {
        setPlaylist(res.data.list);
        setTotal(res.data.count);
      }
    });
  }, [userId]);
  const playlistRouter = (item: IPlaylist) => {
    navigate(`/home/playlist/${item.id}`, {
      replace: false
    });
  };
  const openChangeHandle = (e: any, item: IPlaylist) => {
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
    <MulPlayWrapper>
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
    </MulPlayWrapper>
  );
};
export default memo(MulPlay);
