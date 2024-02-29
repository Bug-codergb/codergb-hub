import React, { memo, type FC, useState, useEffect } from 'react';
import { StarOutlined, MoreOutlined } from '@ant-design/icons';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { type Map } from 'immutable';
import { UserPlaylistWrapper, LeftContent, RightContent } from './style';
import { type IPlaylist } from '../../types/playlist/IPlaylist';
import { type IVideo } from '../../types/video/IVideo';
import { getPlaylistDetail, getPlaylistVideo, subUserPlaylist } from '../../network/playlist';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { type ILogin } from '../../types/login/ILogin';
import { notification, Dropdown, Menu } from 'antd';
interface IProps {
  id?: string;
}
const UserPlaylist: FC<IProps> = (props) => {
  const params = useParams<{ id: string }>();
  const { id } = params as { id: string };
  const [playlist, setPlaylist] = useState<IPlaylist>();
  const [video, setVideo] = useState<IVideo[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  const navigate = useNavigate();
  useEffect(() => {
    getPlaylistDetail<IResponseType<IPlaylist>>(id).then((data) => {
      setPlaylist(data.data);
    });
  }, [id]);
  useEffect(() => {
    getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 30).then((data) => {
      setVideo(data.data.list);
      setCount(data.data.count);
    });
  }, [id]);
  const videoRouterHandle = (item: IVideo) => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  const subHandler = () => {
    console.log(111);
    subUserPlaylist(id).then((res) => {
      if (res.status === 200) {
        notification.info({
          message: `${res.message}`,
          description: `个人中心‘收藏的播放列表’中查看`,
          placement: 'bottomLeft'
        });
      }
    });
  };
  const openChangeHandle = (e: any, item: IVideo) => {
    if (e.key === 'delete') {
      console.log(item);
    }
  };
  return (
    <UserPlaylistWrapper>
      {playlist && (
        <LeftContent bgc={video && video.length !== 0 ? video[0].picUrl : login.userMsg.avatarUrl}>
          <div className="img-container">
            {video && (
              <img
                alt="gb-codergb"
                src={video && video.length !== 0 ? video[0].picUrl : login.userMsg.avatarUrl}
              />
            )}
          </div>
          <p className="later-label">{playlist.name}</p>
          <p className="user-name">{login.userMsg.userName}</p>
          <div className="vio-info">
            <div className="vio-count">{count}个视频</div>
            <div className="update-time">
              {moment(playlist.updateTime).format('yyyy-MM-DD HH:MM')}更新
            </div>
          </div>

          {playlist && playlist.user.userId !== login.userMsg.userId && (
            <div
              className="sub"
              onClick={(e) => {
                subHandler();
              }}
            >
              <StarOutlined />
              <span className="label">收藏</span>
            </div>
          )}
          <div className="mask"></div>
        </LeftContent>
      )}
      <RightContent>
        <ul className="vio-list">
          {video &&
            video.length !== 0 &&
            video.map((item) => {
              return (
                <li key={item.id}>
                  <div className="info-container">
                    <div
                      className="cover-container"
                      onClick={(e) => {
                        videoRouterHandle(item);
                      }}
                    >
                      <img src={item.picUrl} />
                    </div>
                    <div className="later-right-info">
                      <p
                        className="vio-name text-nowrap-mul-line"
                        onClick={(e) => {
                          videoRouterHandle(item);
                        }}
                      >
                        {item.name}
                      </p>
                      <div className="desc">
                        <div className="user-name">{item.user.userName}.</div>
                        <div className="play-count">{item.playCount}次观看.</div>
                        <div className="create-time">{moment(item.createTime).fromNow()}加入</div>
                      </div>
                    </div>
                  </div>
                  <div className="operator">
                    <Dropdown
                      trigger={['click']}
                      overlay={
                        <Menu
                          onClick={(e) => {
                            openChangeHandle(e, item);
                          }}
                        >
                          <Menu.Item key={'delete'}>删除</Menu.Item>
                        </Menu>
                      }
                    >
                      <MoreOutlined className="more-icon" />
                    </Dropdown>
                  </div>
                </li>
              );
            })}
        </ul>
      </RightContent>
    </UserPlaylistWrapper>
  );
};
export default memo(UserPlaylist);
