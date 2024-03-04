import React, {
  memo,
  type FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
  Fragment,
  type SyntheticEvent
} from 'react';
import { Empty } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Hls from 'hls.js';
import moment from 'moment';
import { type Map } from 'immutable';
import { HomeWrapper } from './style';
import { type IChannel } from '../../../../types/channel/IChannel';
import { getVideoURL } from '../../../../network/video';
import { type IResponseType } from '../../../../types/responseType';
import { addHistory } from '../../../../network/history';
import { type IVideo } from '../../../../types/video/IVideo';
interface IProps {
  userId: string;
}
const Home: FC<IProps> = (props) => {
  const channel = useSelector<Map<string, IChannel>, IChannel>((state) => {
    return state.getIn(['channelReducer', 'channel']) as IChannel;
  });
  const navigate = useNavigate();
  const [vioURL, setVioURL] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    console.log(channel);
    if (channel?.trailer) {
      getVideoURL<IResponseType<{ vioUrl: string }>>(channel.trailer.id).then((res) => {
        if (res.status === 200) {
          let url = res.data.vioUrl;
          if (process.env.NODE_ENV === 'development') {
            url = url.replace(
              `${process.env.SERVER_PORT}`,
              `${process.env.WEBPACK_SERVER_PORT}/gb`
            );
          }
          setVioURL(url);
        }
      });
    }
  }, [channel]);
  useEffect(() => {
    if (videoRef.current && channel) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(vioURL);
        hls.attachMedia(videoRef.current);
        if (channel) addHistory(channel.trailer!.id);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
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
      navigate('/videoDetail', {
        replace: true,
        state: {
          id: trailer.id
        }
      });
    }
  };
  const videoPlayHandle = (e: SyntheticEvent<HTMLVideoElement>) => {};
  return (
    <HomeWrapper>
      <div className="video-tip">频道预告片</div>
      <div className="trailer">
        <div className="left-container">
          {channel?.trailer && vioURL && (
            <video
              ref={videoRef}
              controls={true}
              muted={false}
              loop={true}
              onTimeUpdate={(e) => {
                videoPlayHandle(e);
              }}
              onCanPlay={canPlay}
              autoPlay={true}
            />
          )}
          {!channel?.trailer && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'ta还没有添加频道预告片'} />
          )}
        </div>
        {channel?.trailer && (
          <Fragment>
            <div className="right-container">
              <p
                className="video-name"
                onClick={() => {
                  videoRouter(channel.trailer);
                }}
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
          {channel?.featured && (
            <img
              src={channel.featured?.picUrl}
              onClick={() => {
                videoRouter(channel.featured);
              }}
            />
          )}

          {!channel?.featured && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'ta还没有添加频道精选视频'} />
          )}
        </div>
        {channel?.featured && (
          <Fragment>
            <div className="right-container">
              <p
                className="video-name"
                onClick={() => {
                  videoRouter(channel.featured);
                }}
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
