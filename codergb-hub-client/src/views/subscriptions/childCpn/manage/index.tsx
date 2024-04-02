import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { type ISubscriber } from '../../../../types/subscriber/ISubscriber';
import { SubManageWrapper } from './style';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../../../types/login/ILogin';
import { getUserSub } from '../../../../network/subscriber';
import { type IResponseType } from '../../../../types/responseType';
import { type IPage } from '../../../../types/IPage';
import { useSub } from '../../../../hook/useSub';
import SubBtn from '../../../../components/common/subBtn';
import { type IUserMsg } from '../../../../types/user/IUserMsg';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
const SubManage = () => {
  const [up, setUp] = useState<ISubscriber[]>([]);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  const login = useLoginMsg();
  useEffect(() => {
    getUserSub<IResponseType<IPage<ISubscriber[]>>>(login.userMsg.userId, 0, 10).then((data) => {
      setUp(data.data.list);
      setCount(data.data.count);
    });
  }, []);
  const userRouter = (user: IUserMsg) => {
    if (user) {
      navigate('/home/userDetail', {
        state: {
          userId: user.userId
        },
        replace: false
      });
    }
  };
  return (
    <SubManageWrapper>
      <ul className="sub-list">
        {up &&
          up.length !== 0 &&
          up.map((item) => {
            return (
              <li key={item.id}>
                <div
                  className="left-container"
                  onClick={() => {
                    userRouter(item.up);
                  }}
                >
                  <img src={item.up.avatarUrl} />
                </div>
                <div className="center-container">
                  <div
                    className="channel-name"
                    onClick={() => {
                      userRouter(item.up);
                    }}
                  >
                    {item.up.userName}
                  </div>
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
    </SubManageWrapper>
  );
};
export default memo(SubManage);
