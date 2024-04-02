import React, { memo, type FC, useState, useRef, useEffect } from 'react';
import { MoreVideoWrapper } from './style';
import { type IVideo } from '../../../../types/video/IVideo';
import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../../../types/login/ILogin';
import { getSubUserVideo, getVideoURL } from '../../../../network/video';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import Hls from 'hls.js';
import { useNavigate } from 'react-router-dom';
import VideoItem from '../../../../components/videoItem';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
const MoreVideo: FC = () => {
  const navigate = useNavigate();
  const [weekVideo, setWeekVideo] = useState<IVideo[]>([]);
  const [videoURL, setVideoURL] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const vioRef = useRef<HTMLVideoElement>(null);
  const login = useLoginMsg();
  useEffect(() => {
    getSubUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId, 0, 10, 0).then((data) => {
      if (data.status === 200) {
        setWeekVideo(data.data.list);
      }
    });
  }, []);
  useEffect(() => {
    if (vioRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoURL);
        hls.attachMedia(vioRef.current);
      } else if (vioRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        vioRef.current.src = videoURL;
      }
    }
  }, [vioRef.current]);
  const manageRouteHandle = () => {
    navigate('/home/sub-manage', {
      replace: true
    });
  };

  const videoRouterHandle = (item: IVideo) => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  const mouseImgHandle = async (item: IVideo, index: number) => {
    setCurrentIndex(index);
    const res = await getVideoURL(item.id);
    if (res.status === 200) {
      let url: string = res.data.vioUrl;
      if (process.env.NODE_ENV === 'development') {
        url = url.replace(`${process.env.SERVER_PORT}`, `${process.env.WEBPACK_SERVER_PORT}/gb`);
      }
      setVideoURL(url);
    }
  };
  const mouseLeaveHandle = () => {
    setCurrentIndex(-1);
  };
  return (
    <MoreVideoWrapper>
      <div className="more-title">更早</div>
      <ul className="sub-user-vio-list">
        {weekVideo &&
          weekVideo.length !== 0 &&
          weekVideo.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={(e) => {
                  videoRouterHandle(item);
                }}
                className={currentIndex === index ? 'active' : ''}
              >
                <VideoItem
                  img={
                    <img
                      src={item.picUrl}
                      onMouseLeave={(e) => {
                        mouseLeaveHandle();
                      }}
                      onMouseEnter={async (e) => {
                        await mouseImgHandle(item, index);
                      }}
                    />
                  }
                  video={
                    <video
                      src={videoURL}
                      ref={vioRef}
                      autoPlay={true}
                      onMouseLeave={(e) => {
                        mouseLeaveHandle();
                      }}
                      muted={true}
                    />
                  }
                  isShowVideo={currentIndex === index}
                  state={item.name}
                  id={item.id}
                  user={item.user}
                  createTime={item.createTime}
                  dt={item.dt}
                  playCount={item.playCount}
                  itemWidth={300}
                  vioHeight={153}
                  isShowMore={true}
                  dtPos={{ left: 98, top: 54 }}
                  scale={0.93}
                />
              </li>
            );
          })}
      </ul>
    </MoreVideoWrapper>
  );
};
export default memo(MoreVideo);
