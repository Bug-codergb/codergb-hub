import React, { memo, type FC, useEffect, useState } from 'react';
import { SimilarWrapper } from './style';
import { getSimilarVideo, getUserVideo } from '../../../../../../network/video';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IPage } from '../../../../../../types/IPage';
import { type IVideo } from '../../../../../../types/video/IVideo';
import moment from 'moment';
import { getDurationByTimestamp } from '../../../../../../utils/time';
interface IProps {
  videoId?: string;
  id?: string;
  userId?: string;
  userName?: string;
  play: (id: string) => void;
}
const Similar: FC<IProps> = (props) => {
  const { id, userId, userName, play, videoId } = props;
  const [video, setVideo] = useState<IVideo[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [bar, setBar] = useState<string[]>(['全部']);
  useEffect(() => {
    console.log(userName);
    if (userName) {
      setBar(['全部', userName]);
    }
  }, [userName]);
  useEffect(() => {
    if (id) {
      getSimilarVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 15).then((data) => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    }
  }, [id]);
  const liClick = (item: string, index: number) => {
    if (item !== '全部' && userId) {
      getUserVideo<IResponseType<IPage<IVideo[]>>>(userId, '', 0, 15).then((data) => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    } else if (id) {
      getSimilarVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 15).then((data) => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    }
    setCurrentIndex(index);
  };
  const videoClick = (item: IVideo) => {
    play(item.id);
  };
  return (
    <SimilarWrapper>
      <ul className="bar">
        {bar &&
          bar.map((item, index) => {
            return (
              <li
                key={item}
                className={currentIndex === index ? 'active' : ''}
                onClick={(e) => {
                  liClick(item, index);
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>

      <ul className="similar-video-list">
        {video &&
          video.length !== 0 &&
          video.map((item, index) => {
            return (
              videoId !== item.id && (
                <li key={item.id}>
                  <div
                    className="vio-img-container"
                    onClick={(e) => {
                      videoClick(item);
                    }}
                  >
                    <img src={item.picUrl} alt={item.name} />
                    <div className="dt">{getDurationByTimestamp(item.dt ? item.dt : '0')}</div>
                  </div>
                  <div className="right-container">
                    <div className="label-n text-nowrap-mul-line" title={item.name}>
                      {item.name}
                    </div>
                    <div className="label-n">{item.user.userName}</div>
                    <div className="dt-play-count">
                      <p>{item.playCount}次观看</p>
                      <p>{moment(item.createTime).fromNow()}</p>
                    </div>
                  </div>
                </li>
              )
            );
          })}
      </ul>
    </SimilarWrapper>
  );
};
export default memo(Similar);
