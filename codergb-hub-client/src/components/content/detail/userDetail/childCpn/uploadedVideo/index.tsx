import React, { memo, type FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadedVideoWrapper } from './style';
import { type IVideo } from '../../../../../../types/video/IVideo';
import { getUserVideo } from '../../../../../../network/video';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IPage } from '../../../../../../types/IPage';
import VideoItem from '../../../../../videoItem';
import HolderCpn from '../../../../../holder';
interface IProps {
  userId: string;
}
const UploadedVideo: FC<IProps> = (props) => {
  const { userId } = props;
  const navigate = useNavigate();
  const [video, setVideo] = useState<IVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const getUserVideoReq = (userId: string, keyword: '', offset: number, limit: number) => {
    getUserVideo<IResponseType<IPage<IVideo[]>>>(userId, keyword, offset, limit).then((data) => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  useEffect(() => {
    getUserVideoReq(userId, '', 0, 10);
  }, [userId]);
  const videoRouter = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}`, {
      replace: true,
      state: {}
    });
  };
  return (
    <UploadedVideoWrapper>
      <ul className="video-list">
        {video &&
          video.length !== 0 &&
          video.map((item) => {
            return (
              <li key={item.id}>
                <VideoItem
                  img={
                    <img
                      src={item.picUrl}
                      onClick={() => {
                        videoRouter(item);
                      }}
                    />
                  }
                  dt={item.dt}
                  isShowUser={false}
                  playCount={item.playCount}
                  createTime={item.createTime}
                  id={item.id}
                  state={item.name}
                  isShowVideo={false}
                  scale={0.92}
                  itemWidth={300}
                  vioHeight={140}
                  dtPos={{ left: 98, top: 54 }}
                  user={item.user}
                />
              </li>
            );
          })}
        {HolderCpn(video.length, 5, 300)}
      </ul>
    </UploadedVideoWrapper>
  );
};
export default memo(UploadedVideo);
