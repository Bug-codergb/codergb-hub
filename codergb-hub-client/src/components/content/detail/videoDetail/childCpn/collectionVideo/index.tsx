import React, { memo, type FC, useState, useEffect } from 'react';
import { PauseOutlined } from '@ant-design/icons';
import { CollectionVideoWrapper } from './style';
import { type IVideo } from '../../../../../../types/video/IVideo';
import { getDurationByTimestamp } from '../../../../../../utils/time';
import { type ICollection } from '../../../../../../types/collection/ICollection';
import { getCollectionDetail } from '../../../../../../network/collection/index';
import { type IResponseType } from '../../../../../../types/responseType';
interface IProps {
  videoList: IVideo[];
  cId: string;
  onClick: (item: IVideo, index: number) => void;
}
const CollectionVideo: FC<IProps> = (props) => {
  const { videoList, cId, onClick } = props;

  const [collection, setCollection] = useState<ICollection | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    getCollectionDetail<IResponseType<ICollection>>(cId).then((res) => {
      if (res.status === 200) {
        setCollection(res.data);
      }
    });
  }, [cId]);
  const videoClick = (item: IVideo, index: number) => {
    onClick(item, index);
    setCurrentIndex(index);
  };
  return (
    <CollectionVideoWrapper>
      <div className="col-header">
        <span className="name">{collection && collection.name} . 合集</span>
        <span className="count">
          ({currentIndex + 1}/{videoList.length})
        </span>
      </div>
      <ul className="video-list">
        {videoList &&
          videoList.length !== 0 &&
          videoList.map((item, index) => {
            return (
              <li
                key={item.id}
                className="item"
                onClick={() => {
                  videoClick(item, index);
                }}
              >
                {currentIndex === index && (
                  <PauseOutlined
                    className="gb-play"
                    spin={false}
                    style={{ color: index === currentIndex ? '' : '#f1f2f3' }}
                  />
                )}
                {currentIndex !== index && (
                  <span className="sort">{(index + 1).toString().padStart(2, '0')}</span>
                )}
                <div className="img-container">
                  <img src={item.picUrl} />
                </div>
                <div className="right-container">
                  <span className="label">{item.name}</span>
                  <span className="dt">{getDurationByTimestamp(item.dt)}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </CollectionVideoWrapper>
  );
};
export default memo(CollectionVideo);
