import React, {
  memo,
  FC,
  Fragment,
  useRef,
  useState,
  useEffect,
  SyntheticEvent,
} from "react";
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Hls from "hls.js";
import { addHistory } from "../../../../../../network/history";
import { IChannel } from "../../../../../../types/channel/IChannel";
import { HomeWrapper } from "./style";
import { IVideo } from "../../../../../../types/video/IVideo";
import { getVideoURL } from "../../../../../../network/video";
import { IResponseType } from "../../../../../../types/responseType";
interface IProps {
  userId: string;
  channel?: IChannel;
}
const Home: FC<IProps> = (props) => {
  const { channel } = props;
  const navigate = useNavigate();

  const [vioURL, setVioURL] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    console.log(channel);
    if (channel && channel.trailer) {
      getVideoURL<IResponseType<{ vioUrl: string }>>(channel.trailer.id).then(
        (res) => {
          if (res.status === 200) {
            setVioURL(res.data.vioUrl);
          }
        }
      );
    }
  }, [channel]);
  useEffect(() => {
    if (videoRef.current && channel) {
      if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(vioURL);
        hls.attachMedia(videoRef.current);
        if (channel) addHistory(channel.trailer!.id);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = vioURL;
      }
    }
  }, [videoRef.current, vioURL, channel]);

  const canPlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  };
  const videoRouter = (trailer?: IVideo) => {
    if (trailer) {
      navigate("/videoDetail", {
        replace: true,
        state: {
          id: trailer.id,
        },
      });
    }
  };
  const videoPlayHandle = (e: SyntheticEvent<HTMLVideoElement>) => {};
  return (
    <HomeWrapper>
      <div className="video-tip">频道预告片</div>
      <div className="trailer">
        <div className="left-container">
          {channel && channel.trailer && vioURL && (
            <video
              ref={videoRef}
              controls={true}
              muted={false}
              loop={true}
              onTimeUpdate={(e) => videoPlayHandle(e)}
              onCanPlay={canPlay}
              autoPlay={true}
            />
          )}
          {(!channel || !channel.trailer) && (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={"ta还没有添加频道预告片"}
            />
          )}
        </div>
        {channel && channel.trailer && (
          <Fragment>
            <div className="right-container">
              <p
                className="video-name"
                onClick={() => videoRouter(channel.trailer)}
              >
                {channel.trailer?.name}
              </p>
              <p className="play-count-time">
                <p className="count">{channel.trailer?.playCount}次观看</p>
                <p>{moment(channel.trailer?.createTime).fromNow()}</p>
              </p>
              <p className="desc">{channel.trailer?.description}</p>
            </div>
          </Fragment>
        )}
      </div>
      <div className="video-tip">频道精选视频</div>
      <div className="trailer">
        <div className="left-container">
          {channel && channel.featured && (
            <img
              src={channel.featured?.picUrl}
              onClick={() => videoRouter(channel.featured)}
            />
          )}

          {(!channel || !channel.featured) && (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={"ta还没有添加频道精选视频"}
            />
          )}
        </div>
        {channel && channel.featured && (
          <Fragment>
            <div className="right-container">
              <p
                className="video-name"
                onClick={() => videoRouter(channel.featured)}
              >
                {channel.featured?.name}
              </p>
              <p className="play-count-time">
                <p className="count">{channel.featured?.playCount}次观看</p>
                <p>{moment(channel.featured?.createTime).fromNow()}</p>
              </p>
              <p className="desc">{channel.featured?.description}</p>
            </div>
          </Fragment>
        )}
      </div>
    </HomeWrapper>
  );
};
export default memo(Home);
