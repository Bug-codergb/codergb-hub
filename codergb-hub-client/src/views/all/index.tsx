import { memo, type FC, type ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import { getAllCate } from '../../network/category';
import { type ICate } from '../../types/category/ICate';
import { type IResponseType } from '../../types/responseType';
import { AllWrapper } from './style';
import { type IPage } from '../../types/IPage';
import { type IVideo, type ICarousel } from '../../types/video/IVideo';
import { getCarousel, getCateVideo } from '../../network/video';

import Cate from './childCpn/cate/index';
import VideoItem from '../../components/videoItem';
import HolderCpn from '../../components/holder';
const AllVideo: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [carousel, setCarousel] = useState<ICarousel[]>([]);

  useEffect(() => {
    getCarousel<IResponseType<IPage<ICarousel[]>>>().then((res) => {
      if (res.status) {
        setCarousel(res.data.list);
      }
    });
  }, []);
  const videoRouter = (item: ICarousel) => {
    navigate(`/videoDetail/${item.videoId}`, {
      replace: true,
      state: {}
    });
  };

  const [video, setVideo] = useState<IVideo[]>([]);
  const itemClick = (item: ICate) => {
    getCateVideo<IResponseType<IPage<IVideo[]>>>(item.id, 0, 20).then((res) => {
      if (res.status === 200) {
        setVideo(res.data.list);
      }
    });
  };
  const videoRouterHandle = (item: IVideo) => {
    navigate(`/videoDetail/${item.id}`, {
      replace: true,
      state: {}
    });
  };
  return (
    <AllWrapper>
      <div className="carousel-container">
        <Carousel autoplay={true}>
          {carousel &&
            carousel.length !== 0 &&
            carousel.map((item: ICarousel) => {
              return (
                <div
                  key={item.id}
                  className="carousel-item"
                  onClick={() => {
                    videoRouter(item);
                  }}
                >
                  <img src={item.picUrl} />
                </div>
              );
            })}
        </Carousel>
      </div>
      <Cate
        itemClick={(item: ICate) => {
          itemClick(item);
        }}
      />

      <ul className="video-list">
        {video &&
          video.length !== 0 &&
          video.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={(e) => {
                  videoRouterHandle(item);
                }}
              >
                <VideoItem
                  img={<img src={item.picUrl} />}
                  dtPos={{ left: 98, top: 54 }}
                  isShowVideo={false}
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
    </AllWrapper>
  );
};
export default memo(AllVideo);
