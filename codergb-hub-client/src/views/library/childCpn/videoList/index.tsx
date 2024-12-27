import React, { memo, type FC, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoListWrapper } from './style';
import { type IVideo } from '../../../../types/video/IVideo';
import HeaderTitle from '../headerTitle';
import VideoItem from '../../../../components/videoItem';
import { getVideoURL } from '../../../../network/video';

import Hls from 'hls.js';
import HolderCpn from '../../../../components/holder';
interface IProp {
  video: IVideo[];
  title: string;
  more: string;
  moreClickHandle: () => void;
}
const VideoList: FC<IProp> = (props) => {
  const { video, title, moreClickHandle, more } = props;
  const [videoURL, setVideoURL] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const navigate = useNavigate();
  const vioRef = useRef<HTMLVideoElement>(null);
  const videoRouterHandle = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}`, {
      replace: true,
      state: {}
    });
  };
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
    <VideoListWrapper>
      <HeaderTitle
        title={title}
        more={more}
        moreHandle={() => {
          moreClickHandle();
        }}
      />
      <ul className="vio-list">
        {video &&
          video.length !== 0 &&
          video.map((item, index) => {
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
                  dtPos={{ left: 98, top: 56 }}
                  isShowVideo={currentIndex === index}
                  state={item.name}
                  vioHeight={149}
                  id={item.id}
                  user={item.user}
                  createTime={item.createTime}
                  dt={item.dt}
                  playCount={item.playCount}
                  itemWidth={292}
                  isShowMore={false}
                  scale={0.89}
                />
              </li>
            );
          })}
        {HolderCpn(video.length, 4, 292)}
      </ul>
    </VideoListWrapper>
  );
};
export default memo(VideoList);
