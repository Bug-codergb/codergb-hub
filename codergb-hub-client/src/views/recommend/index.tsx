import React, {
  memo,
  type FC,
  type ReactElement,
  useEffect,
  useState,
  useRef,
  createRef,
  type RefObject,
  useMemo
} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { RecommendWrapper } from './style';
import { type IVideo } from '../../types/video/IVideo';
import { getAllVideo, getVideoURL } from '../../network/video';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import VideoItem from '../../components/videoItem';
import HolderCpn from '../../components/holder';
import Hls from 'hls.js';
interface IRecommendVideo extends IVideo {
  vioRef: RefObject<HTMLLIElement>;
}
const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
const Recommend: FC = (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  const [video, setVideo] = useState<IRecommendVideo[]>([]);
  const [videoURL, setVideoURL] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const [isRight, setIsRight] = useState<boolean>(false);
  const [isLeft, setIsLeft] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(false);

  const navigate = useNavigate();
  const vioRef = useRef<HTMLVideoElement>(null);
  const vioListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getAllVideo<IResponseType<IPage<IRecommendVideo[]>>>(0, 44, '').then((data) => {
      if (data.status === 200) {
        if (data.data.list && data.data.list.length !== 0) {
          for (const item of data.data.list) {
            item.vioRef = createRef<HTMLLIElement>();
          }
          setVideo(data.data.list);
          setCount(data.data.count);
          setLoading(false);
        }
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
  const videoRouterHandle = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}/source`, {
      replace: true,
      state: {}
    });
  };
  const isBoundary = (
    containerWidth: number,
    itemWidth: number,
    itemOffset: number,
    boundary: 'left' | 'right' | 'top'
  ): boolean => {
    // console.log(containerWidth,itemOffset,itemWidth)
    if (boundary === 'right') {
      if (containerWidth - itemOffset - 16 <= itemWidth) {
        return true;
      } else {
        return false;
      }
    } else if (boundary === 'left') {
      console.log(itemWidth, itemOffset);
      if (itemOffset < itemWidth) {
        console.log(itemWidth, itemOffset);
        return true;
      } else {
        return false;
      }
    } else if (boundary === 'top') {
      if (itemOffset < itemWidth) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const mouseImgHandle = async (item: IRecommendVideo, index: number) => {
    if (item.vioRef.current && vioListRef.current) {
      const isR = isBoundary(
        vioListRef.current.offsetWidth,
        item.vioRef.current.offsetWidth,
        item.vioRef.current.offsetLeft,
        'right'
      );
      setIsRight(isR);
      const isL = isBoundary(
        vioListRef.current.offsetWidth,
        item.vioRef.current.offsetWidth,
        item.vioRef.current.offsetLeft,
        'left'
      );
      setIsLeft(isL);
      const isT = isBoundary(
        vioListRef.current.offsetHeight,
        item.vioRef.current.offsetHeight,
        item.vioRef.current.offsetTop,
        'top'
      );
      setIsTop(isT);
    }
    if (timer) clearTimeout(timer);
    const timeoutTimer = setTimeout(async (): void => {
      setCurrentIndex(index);
      const res = await getVideoURL(item.id);
      if (res.status === 200) {
        let url: string = res.data.vioUrl;
        if (process.env.NODE_ENV === 'development') {
          url = url.replace(`${process.env.SERVER_PORT}`, `${process.env.WEBPACK_SERVER_PORT}/gb`);
        }
        setVideoURL(url);
      }
    }, 2500);
    setTimer(timeoutTimer);
  };
  const mouseLeaveHandle = () => {
    setCurrentIndex(-1);
    if (timer !== null) clearTimeout(timer);
  };
  return (
    <RecommendWrapper isLeftBoundray={isLeft} isRightBoundray={isRight} isTopBoundray={isTop}>
      <Spin spinning={loading} size="large">
        <ul className="video-list" ref={vioListRef}>
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
                  ref={item.vioRef}
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
                    dtPos={{ left: 98, top: 54 }}
                    isShowVideo={currentIndex === index}
                    state={item.name}
                    vioHeight={200}
                    id={item.id}
                    user={item.user}
                    createTime={item.createTime}
                    dt={item.dt}
                    playCount={item.playCount}
                    itemWidth={380}
                    isShowMore={true}
                    scale={0.92}
                  />
                </li>
              );
            })}
          {HolderCpn(video.length, 4, 380)}
        </ul>
      </Spin>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
