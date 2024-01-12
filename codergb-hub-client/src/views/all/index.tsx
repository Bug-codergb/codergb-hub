import React, { memo, type FC, type ReactElement, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { getAllCate } from '../../network/category';
import { type ICate } from '../../types/category/ICate';
import { type IResponseType } from '../../types/responseType';
import { AllWrapper } from './style';
import { type IPage } from '../../types/IPage';
import { type ICarousel } from '../../types/video/IVideo';
import { getCarousel } from '../../network/video';
const AllVideo: FC = (): ReactElement => {
  const [cate, setCate] = useState<ICate[]>([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    getAllCate<IResponseType<IPage<ICate[]>>>(0, 10).then((res) => {
      if (res.status === 200) {
        setCate(res.data.list);
        setCount(res.data.count);
      }
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const liClick = (item: ICate, index: number) => {
    setCurrentIndex(index);
  };

  const [carousel, setCarousel] = useState<ICarousel[]>([]);

  useEffect(() => {
    getCarousel<IResponseType<IPage<ICarousel[]>>>().then((res) => {
      if (res.status) {
        setCarousel(res.data.list);
      }
    });
  }, []);
  return (
    <AllWrapper>
      <div className="carousel-container">
        <Carousel autoplay={true}>
          {carousel &&
            carousel.length !== 0 &&
            carousel.map((item) => {
              return (
                <div key={item.id} className="carousel-item">
                  <img src={item.picUrl} />
                </div>
              );
            })}
        </Carousel>
      </div>
      <ul className="cate-list">
        {cate &&
          cate.length !== 0 &&
          cate.map((item, index) => {
            return (
              <li
                className={`item ${currentIndex === index ? 'active' : ''}`}
                onClick={() => {
                  liClick(item, index);
                }}
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </AllWrapper>
  );
};
export default memo(AllVideo);
