import React, {
  memo,
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  createRef
} from 'react';
import VideoItem from './childCpn/videoItem';
import lodash from 'lodash';
import Hls from 'hls.js';
import { ShortsWrapper } from './style';
import { type IVideo } from '../../types/video/IVideo';
import { getAllVideo, getVideoURL } from '../../network/video';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';

interface ICustomVideo extends IVideo {
  ref: any;
}

interface ICustomHtmlElement extends HTMLDivElement {
  g_flag: boolean;
}
interface IVideoItem {
  changeShow: () => void;
}
const DOWN = '向下';
const UP = '向上';
const Shorts: FC = (): ReactElement => {
  const [video, setVideo] = useState<ICustomVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const pending = useRef(false);
  const offset = useRef<number>(1);

  const [direction, setDirection] = useState<string>('');

  const dataOffset = useRef(0);
  const dataLimit = useRef(3);
  const [url, setURL] = useState<string>('');
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);
  const getShortVideoReq = async (offset: number, limit: number) => {
    if (!pending.current) {
      const result = await getAllVideo<IResponseType<IPage<ICustomVideo[]>>>(offset, limit, '');
      if (result.status === 200) {
        setVideo(result.data.list);
        setTotal(result.data.count);
      }
    }
  };
  useEffect(() => {
    getShortVideoReq(0, 3);
  }, []);
  useEffect(() => {
    if (video.length !== 0) {
      if (dataOffset.current === 0) {
        setCurrentVideo(video[0]);
      } else {
        setCurrentVideo(video[1]);
      }
    }
  }, [video]);

  useEffect(() => {
    if (currentVideo) {
      getVideoURL(currentVideo.id).then((res) => {
        if (res.status === 200) {
          let url = res.data.vioUrl;
          if (process.env.NODE_ENV === 'development') {
            url = url.replace(
              `${process.env.SERVER_PORT}`,
              `${process.env.WEBPACK_SERVER_PORT}/gb`
            );
          }
          setURL(url);
        }
      });
    }
  }, [currentVideo]);

  const listRef = useRef<any>(null);
  const itemRef = useRef<any>(null);

  const refreshUp = async () => {
    dataOffset.current += 1;
    await getShortVideoReq(dataOffset.current, 3);
  };
  const refreshDown = async () => {
    dataOffset.current -= 1;
    if (dataOffset.current <= 0) {
      dataOffset.current = 0;
    }
    await getShortVideoReq(dataOffset.current, 3);
    setTimeout(() => {
      if (dataOffset.current !== 0) listRef.current.scrollTop = itemRef.current.offsetHeight;
    }, 0);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = url;
      }
    }
  }, [videoRef.current, url]);
  const scrollRef = useRef<ICustomHtmlElement>(null);

  const videoItemRef = useRef<IVideoItem>({ changeShow: () => {} });
  // 向上滑动时
  const moveSubScrollTop = () => {
    const fn = () => {
      requestAnimationFrame(() => {
        if (listRef.current.scrollTop === 0) {
          const scrollHeight = scrollRef.current!.scrollHeight;
          const clientHeight = scrollRef.current!.clientHeight;
          scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;
          setDirection('');
          refreshDown();
          offset.current = 1;
          setTimeout(() => {
            scrollRef.current!.g_flag = true;
          }, 500);
        } else if (
          listRef.current.scrollTop >
          itemRef.current.offsetHeight * (offset.current - 2)
        ) {
          listRef.current.scrollTop -= 20;
          setURL('');
          videoItemRef.current.changeShow();
          fn();
        } else {
          listRef.current.scrollTop = itemRef.current.offsetHeight * (offset.current - 2);
          if (offset.current <= 0) {
            offset.current = 0;
          } else {
            offset.current -= 1;
          }

          const scrollHeight = scrollRef.current!.scrollHeight;
          const clientHeight = scrollRef.current!.clientHeight;
          scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;
          setDirection('');
          setTimeout(() => {
            scrollRef.current!.g_flag = true;
          }, 500);
        }
      });
    };
    fn();
  };
  // 向下滑动时
  const moveAddScrollTop = () => {
    let t: number | null = null;
    const fn = () => {
      t = requestAnimationFrame(() => {
        if (listRef.current.scrollTop < itemRef.current.offsetHeight * offset.current) {
          const scrollTop = listRef.current.scrollTop;
          listRef.current.scrollTop = scrollTop + listRef.current.offsetHeight / 33;

          setURL('');
          videoItemRef.current.changeShow();
          console.log(scrollTop, listRef.current.scrollTop, listRef.current.offsetHeight);
          if (scrollTop === listRef.current.scrollTop) {
            debugger;
            // 到达最底部
            listRef.current.scrollTop = itemRef.current.offsetHeight * offset.current;

            offset.current = 2;
            const scrollHeight = scrollRef.current!.scrollHeight;
            const clientHeight = scrollRef.current!.offsetHeight;
            scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;
            refreshUp();
            setDirection('');
            setTimeout(() => {
              scrollRef.current!.g_flag = true;
            }, 500);
          } else {
            fn();
          }
        } else {
          if (t) {
            cancelAnimationFrame(t);
          }
          console.log('zheli');
          listRef.current.scrollTop = itemRef.current.offsetHeight * offset.current;
          if (offset.current < dataLimit.current) {
            offset.current += 1;
          }
          const scrollHeight = scrollRef.current!.scrollHeight;
          const clientHeight = scrollRef.current!.offsetHeight;
          scrollRef.current!.scrollTop = (scrollHeight - clientHeight) / 2;

          setDirection('');

          if (dataOffset.current === 0) {
            setCurrentVideo(video[1]);
          }
          setTimeout(() => {
            scrollRef.current!.g_flag = true;
          }, 500);
        }
      });
    };
    fn();
  };

  useEffect(() => {
    if (direction === UP) {
      moveAddScrollTop();
    } else if (direction === DOWN) {
      moveSubScrollTop();
    }
  }, [direction]);

  let lastScrollTopTime = 0;
  useEffect(() => {
    if (scrollRef.current) {
      console.log('effect执行·------------------');
      scrollRef.current.g_flag = true;
      const handler = (e: any) => {
        const time = new Date().getTime();

        console.log(time - lastScrollTopTime);
        if (time - lastScrollTopTime > 40) {
          console.log('这里·', scrollRef.current?.g_flag);
          if (scrollRef.current!.g_flag) {
            scrollRef.current!.g_flag = false;

            if (e.deltaY > 0) {
              setDirection(UP);
            } else {
              setDirection(DOWN);
            }
          }
        }
        lastScrollTopTime = time;
      };
      scrollRef.current.onmouseover = function (e) {
        window.addEventListener('wheel', handler);
      };
      scrollRef.current.onmouseleave = function (e) {
        window.removeEventListener('wheel', handler);
      };
    }
  }, [scrollRef, scrollRef.current]);
  return (
    <ShortsWrapper>
      <div className="box">
        <div className="box-inner">
          <div className="scroll-container" ref={scrollRef}>
            <div className="scroll-inner"></div>
          </div>
          <div className="outer" ref={listRef}>
            <div className="inner">
              <ul className="short-video-list">
                {video &&
                  video.length !== 0 &&
                  video.map((item, index) => {
                    return (
                      <li key={item.id} className="item" ref={index === 0 ? itemRef : null}>
                        <VideoItem video={item} ref={videoItemRef} />
                        <div className="g-video-container">
                          {url && index === 0 && <video ref={videoRef} src={url} autoPlay />}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ShortsWrapper>
  );
};
export default memo(Shorts);
