import React, { memo, type FC, useEffect, useState, useRef, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Empty } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import moment from 'moment';
import { VideoListWrapper } from './style';
import { getPlaylistVideo } from '../../../../../../../../network/playlist';
import { type IResponseType } from '../../../../../../../../types/responseType';
import { type IPage } from '../../../../../../../../types/IPage';
import { type IVideo } from '../../../../../../../../types/video/IVideo';
import HolderCpn from '../../../../../../../../components/holder';
import { type CarouselRef } from 'antd/lib/carousel';

interface IProps {
  id: string;
}
const VideoList: FC<IProps> = (props) => {
  const { id } = props;
  const [total, setTotal] = useState<number>(0);
  const [videoList, setVideo] = useState<IVideo[]>([]);
  const carouselRef = useRef<CarouselRef | null>(null);
  useEffect(() => {
    getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id, 0, 10).then((data) => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setVideo(data.data.list);
      }
    });
  }, [id]);
  const prevHandle = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current?.prev();
    }
  };
  const nextHandle = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current?.next();
    }
  };
  const navigate = useNavigate();
  const videoRouter = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}`, {
      replace: true,
      state: {}
    });
  };
  return (
    <VideoListWrapper>
      <Carousel ref={carouselRef} dots={false}>
        {[0, 1].map((item, index) => {
          return (
            <ul key={item} className="common-video-list">
              {videoList &&
                videoList.length !== 0 &&
                videoList.slice(item * 5, item * 5 + 5).map((item) => {
                  return (
                    <li key={item.id}>
                      <div
                        className="img-container"
                        onClick={(e) => {
                          videoRouter(item);
                        }}
                      >
                        <img src={item.picUrl} />
                      </div>
                      <div className="video-name text-nowrap-mul-line">{item.name}</div>
                      <div className="user-name">{item.user.userName}</div>
                      <div className="create-time">{moment(item.createTime).fromNow()}</div>
                    </li>
                  );
                })}
              {videoList && videoList.length !== 0 && HolderCpn(videoList.length, 5, 300)}
              {videoList && videoList.length > 5 && (
                <Fragment>
                  <div
                    className={'prev'}
                    onClick={(e) => {
                      prevHandle();
                    }}
                  >
                    {' '}
                    <LeftOutlined />
                  </div>
                  <div
                    className={'next'}
                    onClick={(e) => {
                      nextHandle();
                    }}
                  >
                    <RightOutlined />{' '}
                  </div>
                </Fragment>
              )}
            </ul>
          );
        })}
      </Carousel>
      {(!videoList || videoList.length === 0) && (
        <Empty description={'暂无视频'} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </VideoListWrapper>
  );
};
export default memo(VideoList);
