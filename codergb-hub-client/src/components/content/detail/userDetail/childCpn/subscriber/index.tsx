import React, { memo, FC, useState, useEffect } from 'react';
import { ISubscriber } from '../../../../../../types/subscriber/ISubscriber';
import { getUserSub } from '../../../../../../network/subscriber';
import { IResponseType } from '../../../../../../types/responseType';
import { IPage } from '../../../../../../types/IPage';
import { SubWrapper } from './style';
import SubBtn from '../../../../../common/subBtn';
interface IProps {
  userId: string;
}
const Subscriber: FC<IProps> = (props) => {
  const { userId } = props;
  const [sub, setSub] = useState<ISubscriber[]>([]);
  const [total, setTotal] = useState<number>(0);
  const getUserSubReq = (userId: string, offset: number, limit: number) => {
    getUserSub<IResponseType<IPage<ISubscriber[]>>>(userId, offset, limit).then((data) => {
      if (data.status === 200) {
        setSub(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  useEffect(() => {
    getUserSubReq(userId, 0, 10);
  }, [userId]);
  return (
    <SubWrapper>
      <ul className="sub-list">
        {sub &&
          sub.length !== 0 &&
          sub.map((item) => {
            return (
              <li key={item.id}>
                <div className="left-container">
                  <img src={item.up.avatarUrl} />
                </div>
                <div className="center-container">
                  <div className="channel-name">{item.up.userName}</div>
                  <div className="count">
                    <span>{item.fans}位订阅者</span>
                    <span>{item.video}个视频</span>
                  </div>
                  <div className="desc text-nowrap-mul-line">{item.channel.description}</div>
                </div>
                <div className="right-container">
                  <SubBtn userId={item.up.userId} />
                </div>
              </li>
            );
          })}
      </ul>
    </SubWrapper>
  );
};
export default memo(Subscriber);
