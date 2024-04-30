import React, { memo, type FC, useState, useEffect } from 'react';
import { Spin, notification, Dropdown, Menu, message, Pagination } from 'antd';
import { StarOutlined, MoreOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { type Map } from 'immutable';
import { UserPlaylistWrapper, LeftContent, RightContent } from './style';
import { type IPlaylist } from '../../types/playlist/IPlaylist';
import { type IVideo } from '../../types/video/IVideo';
import {
  cancelSubPlaylist,
  deletePlaylistVideo,
  getPlaylistDetail,
  getPlaylistVideo,
  subUserPlaylist
} from '../../network/playlist';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { type ILogin } from '../../types/login/ILogin';
import { useSubPlaylist } from '../../hook/useSubPlaylist';

import { type Dispatch } from 'redux';
import { changeUserDetailAction } from '../login/store/asyncThunk';
import { useLoginMsg } from '../../hook/useLoginMsg';
interface IProps {
  id?: string;
}
const UserPlaylist: FC<IProps> = (props) => {
  const params = useParams<{ id: string }>();
  const { id } = params as { id: string };
  const [playlist, setPlaylist] = useState<IPlaylist>();
  const [loading, setLoading] = useState<boolean>(true);

  const [video, setVideo] = useState<IVideo[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useLoginMsg();

  const dispatch = useDispatch<Dispatch<any>>();
  const isSubPlaylist = useSubPlaylist(id);

  const navigate = useNavigate();
  useEffect(() => {
    getPlaylistDetail<IResponseType<IPlaylist>>(id).then((data) => {
      setPlaylist(data.data);
    });
  }, [id]);
  useEffect(() => {
    setLoading(true);

    getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 10).then((data) => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
        setLoading(false);
      }
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
  const subPlaylistHandler = async () => {
    if (isSubPlaylist) {
      const res = await cancelSubPlaylist(login.userMsg.userId, id);
      if (res) {
        notification.info({
          message: `已取消收藏`,
          description: ``,
          placement: 'bottomLeft'
        });
      }
    } else {
      const res = await subUserPlaylist(id);
      if (res.status === 200) {
        notification.info({
          message: `${res.message}`,
          description: `个人中心‘收藏的播放列表’中查看`,
          placement: 'bottomLeft'
        });
      }
    }
    if (login && login.userMsg && login.userMsg.userId) {
      dispatch(changeUserDetailAction({ userId: login.userMsg.userId, setMsg: false }));
    }
  };
  const openChangeHandle = (e: any, item: IVideo) => {
    if (e.key === 'delete') {
      console.log(item);
      deletePlaylistVideo(item.id, id).then((res) => {
        if (res.status === 200) {
          getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 10).then((data) => {
            setVideo(data.data.list);
            setCount(data.data.count);
            message.success('删除成功');
          });
        }
      });
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (e: number) => {
    setCurrentPage(e);
    getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id, (e - 1) * 10, 10).then((data) => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
        setLoading(false);
      }
    });
  };

  return (
    <Spin size="large" spinning={loading}>
      <UserPlaylistWrapper>
        {playlist && (
          <LeftContent
            bgc={video && video.length !== 0 ? video[0].picUrl : login.userMsg.avatarUrl}
          >
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
              <div className="sub">
                <div
                  className="inner"
                  onClick={() => {
                    subPlaylistHandler();
                  }}
                >
                  {isSubPlaylist && <CheckOutlined />}
                  {!isSubPlaylist && <StarOutlined />}
                  <span className="label">{isSubPlaylist ? '已收藏' : '收藏'}</span>
                </div>
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
          {count > 10 && (
            <div className="page">
              <Pagination
                defaultCurrent={1}
                total={count}
                pageSize={10}
                current={currentPage}
                onChange={(e) => {
                  pageChange(e);
                }}
              />
            </div>
          )}
        </RightContent>
      </UserPlaylistWrapper>
    </Spin>
  );
};
export default memo(UserPlaylist);
