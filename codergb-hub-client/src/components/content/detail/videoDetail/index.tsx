import {
  memo,
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  type MutableRefObject,
  type SyntheticEvent,
  createRef
} from 'react';
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  ExpandOutlined,
  CompressOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { Layout, Slider, Progress, message } from 'antd';
import {
  VideoDetailWrapper,
  CenterContent,
  LeftContentWrapper,
  RightContentWrapper
} from './style';
import {
  getVideoDetail,
  getVideoURL,
  getCollectionVideo,
  recordVideo,
  addPlayCount
} from '../../../../network/video';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import Hls from 'hls.js';
import Player, { Events } from 'xgplayer';
import HlsPlugin from 'xgplayer-hls';
import 'xgplayer/dist/index.min.css';
import { type IVideo } from '../../../../types/video/IVideo';
import VideoInfo from './childCpn/videoInfo';
import Comment from '../../../common/comment';
import { useSelector, useDispatch } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../../../types/login/ILogin';
import { addHistory } from '../../../../network/history';
import Dm from './childCpn/dm';
import { type IDm } from '../../../../types/dm/IDm';
import { getVideoDm } from '../../../../network/dm';
import { getRandom, getRandomStr } from '../../../../utils/getRandom';
import { getDurationByTimestamp } from '../../../../utils/time';
import Similar from './childCpn/similar';
import HeaderTop from '../../../header';
import CollectionVideo from './childCpn/collectionVideo';
import { generateAnimation } from '../../../../utils/dom';
import lodash from 'lodash';
import { changeQueueList } from '../../add/store/index';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import Danmu from 'xgplayer/es/plugins/danmu';
import 'xgplayer/es/plugins/danmu/index.css';
const { Header, Footer, Sider, Content } = Layout;
const VideoDetail: FC = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const state = location.state || { type: 'source', cId: '' };
  const { type = 'source', cId } = state;

  const [videoSourceType, setVideoSourceType] = useState<string>(type);
  const [currentTime, setCurrentTime] = useState(0);
  const [vioURL, setVioURL] = useState<string>('');
  const [vioId, setVioId] = useState<string>(id);
  const [videoDetail, setVideoDetail] = useState<IVideo>();
  const [videoDm, setVideoDm] = useState<any[]>([]);
  const [dmTotal, setDmTotal] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loginState = useLoginMsg();

  const queue = useSelector<{ queueReducer: { queue: IVideo[] } }, IVideo[]>((state) => {
    return state.queueReducer.queue;
  });
  const dispatch = useDispatch();

  const contentRef = useRef<HTMLUListElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const [collectionVideo, setCollectionVideo] = useState<IVideo[]>([]);
  useEffect(() => {
    if (type === 'collection') {
      getCollectionVideo<IResponseType<IPage<IVideo[]>>>(cId, 0, 10000).then((res) => {
        if (res.status === 200) {
          if (res.data.list && res.data.list.length !== 0) {
            setCollectionVideo(res.data.list);
            setVioId(res.data.list[0].id);
          }
        }
      });
    }
  }, [type, cId]);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });
    }
  }, [screenRef.current]);
  useEffect(() => {
    if (vioId) {
      recordVideo(vioId);
    }
  }, [vioId]);

  useEffect(() => {
    if (vioId) {
      getVideoDm<IResponseType<IPage<IDm[]>>>(vioId).then((res) => {
        if (res.data.list.length !== 0) {
          setDmTotal(res.data.count);
          setVideoDm(res.data.list);
        } else {
          setVideoDm([]);
        }
        getVideoURL<IResponseType<{ vioUrl: string }>>(vioId).then((data) => {
          if (data.status === 200) {
            let url = data.data.vioUrl;
            if (process.env.NODE_ENV === 'development') {
              url = url.replace(
                `${process.env.SERVER_PORT}`,
                `${process.env.WEBPACK_SERVER_PORT}/gb`
              );
            }
            setVioURL(url);
          }
        });
      });

      getVideoDetail<IResponseType<IVideo>>(vioId).then((data) => {
        if (data.status === 200) {
          setVideoDetail(data.data);
          setPlayCount(data.data.playCount);
        }
      });
    }
  }, [vioId]);
  const [playerInstace, setPlayerInstance] = useState<Player | null>(null);
  useEffect(() => {
    if (videoRef.current !== null) {
      const player = new Player({
        lang: 'zh-cn',
        id: 'vs',
        url: vioURL,
        height: '100%',
        width: '100%',
        autoplay: true,
        plugins: [HlsPlugin, Danmu],
        danmu: {
          comments: []
        }
      });

      setPlayerInstance(player);
      console.log(videoDm);
      if (videoDm && videoDm.length !== 0) {
        player.danmu.updateComments(
          videoDm.map((item) => {
            return {
              txt: item.text,
              duration: 20000,
              id: item.id,
              start: Number(item.time || 0),
              style: {
                color: '#ffffff',
                fontSize: '18px',
                padding: '4px 13px',
                borderRadius: '50px',
                backgroundColor: 'rgba(0,0,0,0.4)'
              }
            };
          }),
          false
        );
      }
      // player.danmu.sendComment({

      // })

      player.on(Events.TIME_UPDATE, (e: any) => {
        setCurrentTime(e.currentTime * 1000);
      });
      addHistory(vioId);
      setIsPlay(true);
      addPlayCount<IResponseType<{ playCount: number }>>(vioId).then((res) => {
        setPlayCount(res.data.playCount);
      });
    }
  }, [videoRef.current, vioURL]);
  useEffect(() => {
    document.title = videoDetail?.name ?? 'codergbhub';
  }, [videoDetail]);
  const pubSuccess = () => {
    getVideoDm<IResponseType<IPage<IDm[]>>>(vioId).then((res) => {
      if (res.data.list.length !== 0) {
        setVideoDm(res.data.list);

        if (playerInstace) {
          playerInstace.danmu.updateComments(
            res.data.list.map((item) => {
              return {
                txt: item.text,
                duration: 20000,
                id: item.id,
                start: Number(item.time || 0),
                style: {
                  color: '#ffffff',
                  fontSize: '18px',
                  padding: '4px 13px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(0,0,0,0.4)'
                }
              };
            }),
            false
          );
        }
      } else {
        setVideoDm([]);
      }
    });
  };

  const [timestamp, setTimeStamp] = useState<number>(0);
  const isController = useRef<boolean>(false);

  const dmGenerateHandler = () => {};
  const videoPlayHandle = (e: SyntheticEvent<HTMLVideoElement>) => {
    if (videoDetail && !isController.current) {
      const precent = ((e.currentTarget.currentTime * 1000) / Number(videoDetail.dt)) * 100;
      setTimeStamp(precent);
    }
    if (videoDm) {
      setCurrentTime(moment(e.currentTarget.currentTime * 1000).format('mm:ss'));
      for (let index = 0; index < videoDm.length; index++) {
        if (videoDm && screenRef.current) {
          const item = videoDm[index];
          if (
            moment(e.currentTarget.currentTime * 1000).format('mm:ss') === item.time &&
            item.contentRef.current
          ) {
            generateAnimation(screenRef.current, item.contentRef.current, index);
          }
        }
      }
    }
  };

  const pauseHandle = (item: IDm & { contentRef: MutableRefObject<HTMLLIElement | null> }) => {
    if (item.contentRef.current) item.contentRef.current.style.animationPlayState = 'paused';
  };
  const playHandle = (item: IDm & { contentRef: MutableRefObject<HTMLLIElement | null> }) => {
    if (item.contentRef.current) item.contentRef.current.style.animationPlayState = 'running';
  };
  const playVideo = (id: string) => {
    setVioId(id);
    setIsPlay(true);
  };
  const changeVideoType = (id: string) => {
    setVideoSourceType('source');
    playVideo(id);
    setVioId(id);
    navigate(`/videoDetail/${id}`, {
      replace: true,
      state: {}
    });
  };

  const [playCount, setPlayCount] = useState<number | string>(0);
  const canPlayHandler = () => {
    console.log(1);
    setPercent(100);
    // setIsPlay(true);
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
    }
  };

  const dmInner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dmInner.current) {
      dmInner.current.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement) {
          if (screenRef.current) {
            screenRef.current.style.width = '100vw';
            screenRef.current.style.height = '100vh';
            setIsFull(true);
          }
          // 进入全屏
        } else {
          // 退出全屏幕
          if (screenRef.current) {
            screenRef.current.style.width = `${1190 / 40}rem`;
            screenRef.current.style.height = `${640 / 40}rem`;
            setIsFull(false);
          }
        }
      });
    }
  }, [dmInner, dmInner.current]);

  const [isFull, setIsFull] = useState<boolean>(false);
  useEffect(() => {}, [isFull]);
  const fullHandler = () => {
    if (dmInner.current) {
      if (isFull) {
        document.exitFullscreen();
      } else {
        dmInner.current?.requestFullscreen();
      }
    }
  };

  const [isPlay, setIsPlay] = useState<boolean>(true);
  const playHandler = () => {
    setIsPlay(!isPlay);
    setIsShowQueue(false);
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };
  const onAfterChange = (e: number) => {
    if (videoDetail && videoRef.current) {
      const precent = e / 100;
      const current = (Number(videoDetail.dt) * precent) / 1000;
      console.log(current);
      videoRef.current.currentTime = current;
    }
    isController.current = false;
  };
  const silderChange = (e: number) => {
    setTimeStamp(e);
    if (!isController.current) isController.current = true;
  };
  const endHandler = () => {
    setIsPlay(false);
    if (queue.length !== 0) {
      setIsShowQueue(true);
      changePercent();
    }
  };

  useEffect(() => {
    /* document.onkeydown = (e) => {
      if (
        e.code !== undefined &&
        (e.code.toLocaleLowerCase() === 'space' ||
          e.code.toLocaleLowerCase() === 'keyf' ||
          e.code.toLocaleUpperCase() === 'escape')
      ) {
        e.preventDefault();
      }
    };
    document.onkeyup = (e) => {
      if (e.code && (e.code === 'space' || e.code === 'Space')) {
        e.preventDefault();
        playHandler();
      } else if (e.code && e.code.toLocaleLowerCase() === 'keyf') {
        dmInner.current?.requestFullscreen();
        setIsFull(true);
      } else if (e.code && e.code.toLocaleLowerCase() === 'escape') {
        document.exitFullscreen();
        setIsFull(false);
      }
    }; */
  }, [videoRef.current, isPlay]);

  const volumeChangeHandler = (e: number) => {
    console.log(e);
    if (videoRef.current) {
      videoRef.current.volume = e / 100;
    }
  };

  const [percent, setPercent] = useState<number>(100);
  const [isShowQueue, setIsShowQueue] = useState<boolean>(false);
  const changePercent = () => {
    if (percent <= 10) {
      setPercent(10);
      if (queue.length !== 0) {
        setVioId(queue[0].id);
        const q = lodash.cloneDeep(queue);
        const value: IVideo = q.shift();
        q.push(value);
        dispatch(changeQueueList(q));
        setIsShowQueue(false);
        setIsPlay(true);
      }
    } else {
      const value = percent - 0.3;
      setPercent(value);
    }
  };
  let t: null | number = null;
  useEffect(() => {
    if (percent !== 100 && percent !== 10) {
      t = requestAnimationFrame(() => {
        changePercent();
      });
    }
  }, [percent]);
  const queueVideoHandler = (item: IVideo) => {
    setVioId(item.id);

    if (t) {
      cancelAnimationFrame(t);
    }
    setPercent(100);
    const q = lodash.cloneDeep(queue);
    for (let i = 0; i < q.length; i++) {
      if (q[i].id === item.id) {
        q.splice(i, 1);
      }
    }
    q.push(item);
    dispatch(changeQueueList(q));
    setIsShowQueue(false);
    setIsPlay(true);
  };
  return (
    <VideoDetailWrapper>
      <Layout>
        <Header>
          <HeaderTop />
        </Header>
        <Content>
          <CenterContent>
            <LeftContentWrapper videoRef={videoRef}>
              <div className="video-dm-container" ref={dmInner}>
                <div id="vs" ref={videoRef}></div>
              </div>
              <Dm
                id={vioId}
                time={currentTime}
                dmLength={videoDm ? videoDm.length : 0}
                pub={() => {
                  pubSuccess();
                }}
              />
              <div className="video-info">
                {videoDetail?.user && (
                  <VideoInfo videoInfo={videoDetail} id={vioId} playCount={playCount} />
                )}
              </div>
              <div className="video-comment">
                {loginState && loginState.userMsg && videoDetail && (
                  <Comment user={loginState.userMsg} id={videoDetail.id} alias={'vId'} />
                )}
              </div>
            </LeftContentWrapper>
            <RightContentWrapper>
              {videoSourceType === 'collection' && (
                <CollectionVideo
                  videoList={collectionVideo}
                  cId={cId}
                  onClick={(item, index) => {
                    playVideo(item.id);
                  }}
                />
              )}
              {videoDetail && videoDetail.user && (
                <Similar
                  id={videoDetail?.category.id}
                  key={vioId}
                  videoId={videoDetail?.id}
                  userId={videoDetail?.user.userId}
                  userName={videoDetail?.user.userName}
                  play={(id: string) => {
                    changeVideoType(id);
                  }}
                />
              )}
            </RightContentWrapper>
          </CenterContent>
        </Content>
      </Layout>
    </VideoDetailWrapper>
  );
};
export default memo(VideoDetail);
