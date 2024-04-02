import React, { memo, type FC, ReactElement, useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { ThumbWrapper } from './style';
import { type IThumb } from '../../types/thumb/IThumb';
import { getThumbUserVideo } from '../../network/video';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../types/login/ILogin';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import { LeftContent, RightContent } from '../user-playlist/style';
import moment from 'moment';
import { type IVideo } from '../../types/video/IVideo';
import { useLoginMsg } from '../../hook/useLoginMsg';
const Thumb: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [videoThumb, setVideoThumb] = useState<IThumb[]>([]);
  const login = useLoginMsg();
  const navigate = useNavigate();
  useEffect(() => {
    getThumbUserVideo<IResponseType<IPage<IThumb[]>>>(login.userMsg.userId, 0, 10).then((data) => {
      if (data.status === 200) {
        setCount(data.data.count);
        setVideoThumb(data.data.list);
      }
    });
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
    getThumbUserVideo<IResponseType<IPage<IThumb[]>>>(login.userMsg.userId, (e - 1) * 10, 10).then(
      (data) => {
        if (data.status === 200) {
          setCount(data.data.count);
          setVideoThumb(data.data.list);
        }
      }
    );
  };
  return (
    <ThumbWrapper>
      {videoThumb && (
        <LeftContent
          bgc={
            videoThumb && videoThumb.length !== 0 && videoThumb[0].video
              ? videoThumb[0].video.picUrl
              : login.userMsg.avatarUrl
          }
        >
          <div className="img-container">
            {videoThumb && (
              <img
                src={
                  videoThumb && videoThumb.length !== 0
                    ? videoThumb[0].video.picUrl
                    : login.userMsg.avatarUrl
                }
              />
            )}
          </div>
          <p className="later-label">顶过的视频</p>
          <p className="user-name">{login.userMsg.userName}</p>
          <div className="vio-info">
            <div className="vio-count">{count}个视频</div>
            <div className="update-time">
              {videoThumb && videoThumb[0]
                ? moment(videoThumb && videoThumb[0] ? videoThumb[0].updateTime : '').format(
                    'yyyy-MM-DD HH:MM'
                  )
                : '暂无'}
              更新
            </div>
          </div>
          <div className="mask"></div>
        </LeftContent>
      )}
      <RightContent>
        <ul className="g-vio-list">
          {videoThumb &&
            videoThumb.length !== 0 &&
            videoThumb.map((item) => {
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
                      <div className="user-name">{item.user.userName}.</div>
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
      </RightContent>
    </ThumbWrapper>
  );
};
export default memo(Thumb);
