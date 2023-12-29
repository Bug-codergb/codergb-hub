import React, {
  memo,
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  SyntheticEvent,
  createRef,
  useCallback,
} from "react";
import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  ExpandOutlined,
  CompressOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { Layout, Slider } from "antd";
import {
  VideoDetailWrapper,
  CenterContent,
  LeftContentWrapper,
  RightContentWrapper,
} from "./style";
import {
  getVideoDetail,
  getVideoURL,
  getCollectionVideo,
  recordVideo,
  addPlayCount,
} from "../../../../network/video";
import { IResponseType } from "../../../../types/responseType";
import { IPage } from "../../../../types/IPage";
import Hls from "hls.js";
import { IVideo } from "../../../../types/video/IVideo";
import VideoInfo from "./childCpn/videoInfo";
import Comment from "../../../common/comment";
import { useSelector } from "react-redux";
import { Map } from "immutable";
import { ILogin } from "../../../../types/login/ILogin";
import { addHistory } from "../../../../network/history";
import Dm from "./childCpn/dm";
import { IDm } from "../../../../types/dm/IDm";
import { getVideoDm } from "../../../../network/dm";
import { getRandom, getRandomStr } from "../../../../utils/getRandom";
import { getDurationByTimestamp } from "../../../../utils/time";
import Similar from "./childCpn/similar";
import HeaderTop from "../../../header";
import CollectionVideo from "./childCpn/collectionVideo";
const { Header, Footer, Sider, Content } = Layout;
const VideoDetail: FC = (): ReactElement => {
  const location = useLocation();
  const { id, type = "source", cId } = location.state;
  const [videoSourceType, setVideoSourceType] = useState<string>(type);
  const [currentTime, setCurrentTime] = useState("");
  const [vioURL, setVioURL] = useState<string>("");
  const [vioId, setVioId] = useState<string>(id);
  const [videoDetail, setVideoDetail] = useState<IVideo>();
  const [videoDm, setVideoDm] =
    useState<
      (IDm & { contentRef: MutableRefObject<HTMLLIElement | null> })[]
    >();
  const [dmTotal, setDmTotal] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });
  const contentRef = useRef<HTMLUListElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const [collectionVideo, setCollectionVideo] = useState<IVideo[]>([]);
  useEffect(() => {
    if (type === "collection") {
      getCollectionVideo<IResponseType<IPage<IVideo[]>>>(cId, 0, 10000).then(
        (res) => {
          if (res.status === 200) {
            if (res.data.list && res.data.list.length !== 0) {
              setCollectionVideo(res.data.list);
              setVioId(res.data.list[0].id);
            }
          }
        }
      );
    }
  }, [type, cId]);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.addEventListener("contextmenu", (e) => {
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
      getVideoDm<IResponseType<IDm[]>>(vioId).then((data) => {
        if (data.data.length !== 0) {
          setDmTotal(data.data.length);
          let list: (IDm & {
            contentRef: MutableRefObject<HTMLLIElement | null>;
          })[] = data.data.map((item, index) => {
            return {
              ...item,
              contentRef: createRef<HTMLLIElement>(),
            };
          });
          setVideoDm(list);
        } else {
          setVideoDm([]);
        }
        getVideoURL<IResponseType<{ vioUrl: string }>>(vioId).then((data) => {
          if (data.status === 200) {
            console.log(data.data.vioUrl);
            setVioURL(data.data.vioUrl);
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
  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(vioURL);
        hls.attachMedia(videoRef.current);
        addHistory(vioId);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = vioURL;
      }
    }
  }, [videoRef.current, vioURL]);
  useEffect(() => {
    document.title = videoDetail?.name ?? "youtube";
  }, [videoDetail]);
  const pubSuccess = () => {
    getVideoDm<IResponseType<IDm[]>>(vioId).then((data) => {
      if (data.data.length !== 0) {
        let list: (IDm & {
          contentRef: MutableRefObject<HTMLLIElement | null>;
        })[] = data.data.map((item, index) => {
          return {
            ...item,
            contentRef: createRef<HTMLLIElement>(),
          };
        });
        setVideoDm(list);
      } else {
        setVideoDm([]);
      }
    });
  };

  const [timestamp, setTimeStamp] = useState<number>(0);
  const isController = useRef<boolean>(false);
  const videoPlayHandle = (e: SyntheticEvent<HTMLVideoElement>) => {
    if (videoDetail && !isController.current) {
      const precent =
        ((e.currentTarget.currentTime * 1000) / Number(videoDetail.dt)) * 100;
      setTimeStamp(precent);
    }
    if (videoDm) {
      setCurrentTime(
        moment(e.currentTarget.currentTime * 1000).format("mm:ss")
      );
      for (let index = 0; index < videoDm!.length; index++) {
        if (videoDm && screenRef.current) {
          let item = videoDm[index];
          if (
            moment(e.currentTarget.currentTime * 1000).format("mm:ss") ===
              item.time &&
            item.contentRef.current
          ) {
            let r = getRandom(
              -screenRef.current.offsetHeight +
                index * item.contentRef.current.offsetHeight +
                item.contentRef.current.offsetHeight,
              index * item.contentRef.current.offsetHeight
            );
            let anName = getRandomStr(10);
            let keyframes = `
        @keyframes ${anName}{
          0%{
            transform :translateX(0) translateY(${r}px);
          }  
          100%{
            transform :translateX(${
              screenRef.current.offsetWidth +
              30 +
              item.contentRef.current.offsetWidth
            }px) translateY(${r}px);
          }
        }
        `;
            let style = document.createElement("style");
            style.innerHTML = keyframes;
            let head = document.getElementsByTagName("head")[0];
            head.appendChild(style);
            item.contentRef.current.style.animation = `${anName} 16s normal`;
            item.contentRef.current.style.animationFillMode = `forwards`;
          }
        }
      }
    }
  };
  const pauseHandle = (
    item: IDm & { contentRef: MutableRefObject<HTMLLIElement | null> }
  ) => {
    if (item.contentRef.current)
      item.contentRef.current.style.animationPlayState = "paused";
  };
  const playHandle = (
    item: IDm & { contentRef: MutableRefObject<HTMLLIElement | null> }
  ) => {
    if (item.contentRef.current)
      item.contentRef.current.style.animationPlayState = "running";
  };
  const playVideo = (id: string) => {
    setVioId(id);
    setIsPlay(true);
  };
  const changeVideoType = (id: string) => {
    setVideoSourceType("source");
    playVideo(id);
  };

  const [playCount, setPlayCount] = useState<number | string>(0);
  const canPlayHandler = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
      addPlayCount<IResponseType<{ playCount: number }>>(vioId).then((res) => {
        setPlayCount(res.data.playCount);
      });
    }
  };

  const dmInner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dmInner.current) {
      dmInner.current.addEventListener("fullscreenchange", (e) => {
        if (document.fullscreenElement) {
          if (screenRef.current) {
            screenRef.current.style.width = "100vw";
            screenRef.current.style.height = "100vh";
            setIsFull(true);
          }
          //进入全屏
        } else {
          //退出全屏幕
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
  };

  useEffect(() => {
    document.onkeydown = (e) => {
      if (
        e.code.toLocaleLowerCase() === "space" ||
        e.code.toLocaleLowerCase() === "keyf" ||
        e.code.toLocaleUpperCase() === "escape"
      ) {
        e.preventDefault();
      }
    };
    document.onkeyup = (e) => {
      if (e.code === "space" || e.code === "Space") {
        e.preventDefault();
        playHandler();
      } else if (e.code.toLocaleLowerCase() === "keyf") {
        dmInner.current?.requestFullscreen();
        setIsFull(true);
      } else if (e.code.toLocaleLowerCase() === "escape") {
        document.exitFullscreen();
        setIsFull(false);
      }
    };
  }, [videoRef.current, isPlay]);

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
                <div className="inner">
                  <div className="start">
                    <ul ref={contentRef}>
                      {videoDm &&
                        videoDm.map((item, index) => {
                          return (
                            <li
                              key={item.id}
                              className="text"
                              ref={item.contentRef}
                              onMouseEnter={(e) => pauseHandle(item)}
                              onMouseLeave={(e) => playHandle(item)}
                            >
                              {item.text}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="video-container" ref={screenRef}>
                    {vioURL && videoDetail && (
                      <video
                        ref={videoRef}
                        poster={videoDetail.picUrl}
                        controls={false}
                        muted={false}
                        onCanPlay={canPlayHandler}
                        onTimeUpdate={(e) => videoPlayHandle(e)}
                        autoPlay={true}
                        onEnded={() => endHandler()}
                      />
                    )}
                    {videoDetail && (
                      <div className="controller-container">
                        <Slider
                          defaultValue={0}
                          value={timestamp}
                          step={0.1}
                          tooltip={{ open: false }}
                          onChange={(e) => silderChange(e)}
                          onAfterChange={(e) => onAfterChange(e)}
                        />
                        <div className="container">
                          <div className="left">
                            <div
                              className="play-pause"
                              onClick={() => playHandler()}
                            >
                              {!isPlay && (
                                <PlayCircleOutlined
                                  style={{ color: "#ffffff" }}
                                />
                              )}
                              {isPlay && (
                                <PauseCircleOutlined
                                  style={{ color: "#ffffff" }}
                                />
                              )}
                            </div>
                            <div className="dt">
                              {currentTime} /{" "}
                              {getDurationByTimestamp(videoDetail.dt)}
                            </div>
                          </div>
                          <div className="right">
                            <div className="volume">
                              <Slider defaultValue={30} />
                            </div>
                            <div className="full" onClick={fullHandler}>
                              {!isFull && <ExpandOutlined />}
                              {isFull && <CompressOutlined />}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="end"> </div>
                </div>
              </div>
              <Dm id={vioId} time={currentTime} pub={() => pubSuccess()} />
              <div className="video-info">
                {videoDetail && videoDetail.user && (
                  <VideoInfo
                    videoInfo={videoDetail}
                    id={vioId}
                    playCount={playCount}
                  />
                )}
              </div>
              <div className="video-comment">
                {loginState && loginState.userMsg && videoDetail && (
                  <Comment
                    user={loginState.userMsg}
                    id={videoDetail.id}
                    alias={"vId"}
                  />
                )}
              </div>
            </LeftContentWrapper>
            <RightContentWrapper>
              {videoSourceType === "collection" && (
                <CollectionVideo
                  videoList={collectionVideo}
                  cId={cId}
                  onClick={(item, index) => playVideo(item.id)}
                />
              )}
              {videoDetail && videoDetail.user && (
                <Similar
                  id={videoDetail?.category.id}
                  key={vioId}
                  videoId={videoDetail?.id}
                  userId={videoDetail?.user.userId}
                  userName={videoDetail?.user.userName}
                  play={(id: string) => changeVideoType(id)}
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
