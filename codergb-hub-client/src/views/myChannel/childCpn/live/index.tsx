/*
  收藏的播放列表
*/
import React, { memo, type FC, ReactElement, useEffect, useState } from 'react';
import { MoreOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu, message, notification } from 'antd';
import { LiveWrapper } from './style';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import { cancelSubPlaylist, getSubPlaylist, subUserPlaylist } from '../../../../network/playlist';
import moment from 'moment';
import HolderCpn from '../../../../components/holder';
import { IPlaylist } from '../../../../types/playlist/IPlaylist';
import { IResponseType } from '../../../../types/responseType';
import { IPage } from '../../../../types/IPage';
interface IProps {
  userId: string;
}
const Live: FC<IProps> = (props) => {
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
      cancelSubPlaylist(userId,item.id).then((res)=>{
        if(res.status === 200){
          message.success("取消收藏成功");
          getSubPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId).then((res) => {
            if (res.status === 200) {
              setPlaylist(res.data.list);
              setTotal(res.data.count);
            }
          });
        }
      })
    }
  };
  return (
    <LiveWrapper>
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
                                <span className="label">取消收藏</span>
                              </div>
                            </Menu.Item>
                          </Menu>
                        }
                        trigger={['click']}
                      >
                        <MoreOutlined className="g-more" />
                      </Dropdown>
                    
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
    </LiveWrapper>
  );
};
export default memo(Live);
