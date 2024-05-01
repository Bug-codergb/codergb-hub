import React, { memo, type FC, type ReactElement, useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import moment from 'moment';
import { PlaylistWrapper, LeftContainer, RightContainer } from './style';
import { type ILater } from '../../types/later/ILater';
import { getUserLater } from '../../network/later';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../types/login/ILogin';
import { type IVideo } from '../../types/video/IVideo';
import { useLoginMsg } from '../../hook/useLoginMsg';
const Playlist: FC = (): ReactElement => {
  const [userLater, setUserLater] = useState<ILater[]>([]);
  const [count, setCount] = useState<number>(0);
  const login = useLoginMsg();
  const navigate = useNavigate();
  const getUserLaterReq = async (userId: string, offset: number, limit: number) => {
    const result = await getUserLater<IResponseType<IPage<ILater[]>>>(userId, offset, limit);
    if (result.status === 200) {
      setUserLater(result.data.list);
      setCount(result.data.count);
    }
  };
  useEffect(() => {
    getUserLaterReq(login.userMsg.userId, 0, 10).then((r) => {});
  }, []);

  const videoRouterHandle = (item: IVideo) => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (e: number) => {
    setCurrentPage(e);
    getUserLaterReq(login.userMsg.userId, (e - 1) * 10, 10);
  };
  return (
    <PlaylistWrapper>
      {userLater && (
        <LeftContainer
          bgc={
            userLater && userLater.length !== 0
              ? userLater[0].video.picUrl
              : login.userMsg.avatarUrl
          }
        >
          <div className="img-container">
            {userLater && (
              <img src={userLater[0] ? userLater[0].video.picUrl : login.userMsg.avatarUrl} />
            )}
          </div>
          <p className="later-label">稍后观看</p>
          <p className="user-name">{login.userMsg.userName}</p>
          <div className="vio-info">
            <div className="vio-count">{count}个视频</div>
            <div className="update-time">昨日更新</div>
          </div>
          <div className="mask"></div>
        </LeftContainer>
      )}
      <RightContainer>
        <ul className="vio-list">
          {userLater &&
            userLater.length !== 0 &&
            userLater.map((item) => {
              return (
                <li key={item.id}>
                  <div
                    className="cover-container"
                    onClick={(e) => {
                      videoRouterHandle(item.video);
                    }}
                  >
                    <img src={item.video.picUrl} />
                  </div>
                  <div className="later-right-info">
                    <p
                      className="vio-name text-nowrap-mul-line"
                      onClick={(e) => {
                        videoRouterHandle(item.video);
                      }}
                    >
                      {item.video.name}
                    </p>
                    <div className="desc">
                      <div className="user-name">{item.video.user.userName}.</div>
                      <div className="play-count">{item.video.playCount}次观看.</div>
                      <div className="create-time">{moment(item.createTime).fromNow()}加入</div>
                    </div>
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
      </RightContainer>
    </PlaylistWrapper>
  );
};
export default memo(Playlist);
