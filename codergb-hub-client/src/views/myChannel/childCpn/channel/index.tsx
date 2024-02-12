import { memo, type FC, type ReactElement, useState, useEffect } from 'react';
import { ChannelWrapper } from './style';
import SubBtn from '../../../../components/common/subBtn';
import { getUserSub } from '../../../../network/subscriber';
import { type ISubscriber } from '../../../../types/subscriber/ISubscriber';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
interface IProps {
  userId: string;
}
const Channel: FC<IProps> = (props): ReactElement => {
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
    <ChannelWrapper>
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
    </ChannelWrapper>
  );
};
export default memo(Channel);
