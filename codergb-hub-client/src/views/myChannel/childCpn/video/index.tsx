import React, { memo, type FC, ReactElement, useState, useEffect, useRef } from 'react';
import { VideoWrapper } from './style';
import { type IVideo } from '../../../../types/video/IVideo';
import { getUserVideo, getVideoURL } from '../../../../network/video';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import VideoItem from '../../../../components/videoItem';
import { useNavigate } from 'react-router-dom';
import Hls from 'hls.js';
import HolderCpn from '../../../../components/holder';
interface IProps {
  userId: string;
}
const Video: FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [video, setVideo] = useState<IVideo[]>([]);
  const [videoURL, setVideoURL] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const vioRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const { userId } = props;
  useEffect(() => {
    getUserVideo<IResponseType<IPage<IVideo[]>>>(userId, '', 0, 10).then((data) => {
      if (data.status === 200) {
        setCount(data.data.count);
        setVideo(data.data.list);
      }
    });
  }, [userId]);
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
  const videoRouterHandle = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}/source`, {
      replace: true,
      state: {}
    });
  };
  const mouseImgHandle = async (item: IVideo, index: number) => {
    setCurrentIndex(index);
    const res = await getVideoURL(item.id);
    if (res.status === 200) {
      setVideoURL(res.data.vioUrl);
    }
  };
  const mouseLeaveHandle = () => {
    setCurrentIndex(-1);
  };
  return (
    <VideoWrapper>
      <ul className="user-video-list">
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
                  img={<img src={item.picUrl} />}
                  dtPos={{ left: 98, top: 54 }}
                  isShowMore={false}
                  isShowUser={false}
                  isShowVideo={false}
                  state={item.name}
                  id={item.id}
                  vioHeight={140}
                  user={item.user}
                  createTime={item.createTime}
                  dt={item.dt}
                  playCount={item.playCount}
                  itemWidth={300}
                  scale={0.92}
                />
              </li>
            );
          })}
        {HolderCpn(video.length, 5, 300)}
      </ul>
    </VideoWrapper>
  );
};
export default memo(Video);
