import React, {
  memo,
  FC,
  ReactElement,
  useEffect,
  useState,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "immutable";
import { SubscriptionsWrapper } from "./style";
import { getSubUserVideo, getVideoURL } from "../../network/video";
import { useSelector } from "react-redux";
import { ILogin } from "../../types/login/ILogin";
import { IVideo } from "../../types/video/IVideo";
import { IResponseType } from "../../types/responseType";
import { IPage } from "../../types/IPage";
import VideoItem from "../../components/videoItem";
import HolderCpn from "../../components/holder";
import Hls from "hls.js";
import MoreVideo from "./childCpn/more";

const Subscriptions: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [weekVideo, setWeekVideo] = useState<IVideo[]>([]);
  const [videoURL, setVideoURL] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const vioRef = useRef<HTMLVideoElement>(null);
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });
  useEffect(() => {
    getSubUserVideo<IResponseType<IPage<IVideo[]>>>(
      login.userMsg.userId,
      0,
      10,
      1
    ).then((data) => {
      if (data.status === 200) {
        setWeekVideo(data.data.list);
      }
    });
  }, []);
  useEffect(() => {
    if (vioRef.current) {
      if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(videoURL);
        hls.attachMedia(vioRef.current);
      } else if (vioRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        vioRef.current.src = videoURL;
      }
    }
  }, [vioRef.current]);
  const manageRouteHandle = () => {
    navigate("/home/sub-manage", {
      replace: true,
    });
  };

  const videoRouterHandle = (item: IVideo) => {
    navigate("/videoDetail", {
      replace: true,
      state: {
        id: item.id,
      },
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
    <SubscriptionsWrapper>
      <div className="header-title">
        <div className="current-time">本月</div>
        <div className="manage" onClick={(e) => manageRouteHandle()}>
          管理
        </div>
      </div>
      <ul className="sub-user-vio-list">
        {weekVideo &&
          weekVideo.length !== 0 &&
          weekVideo.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={(e) => videoRouterHandle(item)}
                className={currentIndex === index ? "active" : ""}
              >
                <VideoItem
                  img={
                    <img
                      src={item.picUrl}
                      onMouseLeave={(e) => mouseLeaveHandle()}
                      onMouseEnter={(e) => mouseImgHandle(item, index)}
                    />
                  }
                  video={
                    <video
                      src={videoURL}
                      ref={vioRef}
                      autoPlay={true}
                      onMouseLeave={(e) => mouseLeaveHandle()}
                      muted={true}
                    />
                  }
                  isShowVideo={currentIndex === index}
                  state={item.name}
                  id={item.id}
                  vioHeight={152.5}
                  user={item.user}
                  createTime={item.createTime}
                  dt={item.dt}
                  playCount={item.playCount}
                  itemWidth={300}
                  isShowMore={true}
                  dtPos={{ left: 98, top: 54 }}
                  scale={0.93}
                />
              </li>
            );
          })}
        {HolderCpn(weekVideo.length, 5, 300)}
      </ul>
      <MoreVideo />
    </SubscriptionsWrapper>
  );
};
export default memo(Subscriptions);
