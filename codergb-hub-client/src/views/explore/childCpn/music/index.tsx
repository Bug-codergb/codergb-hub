import React, { memo, type FC, useEffect, useState } from 'react';
import { Tabs, notification } from 'antd';
import { MusicWrapper } from './style';
import { getUserChannel } from '../../../../network/channel';
import { type IResponseType } from '../../../../types/responseType';
import { type IChannel } from '../../../../types/channel/IChannel';
import Home from './childCpn/home';
import Community from './childCpn/community';
import Desc from './childCpn/desc';
import { useDispatch } from 'react-redux';
import { type Dispatch } from 'redux';
import { useSub } from '../../../../hook/useSub';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import { cancelSub, sub } from '../../../../network/subscriber';
import { changeUserDetailAction } from '../../../login/store/actionCreators';
import { getUserFans } from '../../../../network/user';
import { type IPage } from '../../../../types/IPage';
import { type IUserMsg } from '../../../../types/user/IUserMsg';
interface IProps {
  userId: string;
}
const Music: FC<IProps> = (props) => {
  const { userId } = props;
  const [channel, setChannel] = useState<IChannel>();

  const dispatch = useDispatch<Dispatch<any>>();
  const isSub = useSub(userId);
  const loginMsg = useLoginMsg();
  useEffect(() => {
    getUserChannel<IResponseType<IChannel>>(userId).then((data) => {
      if (data.status === 200) {
        setChannel(data.data);
      }
    });
  }, [userId]);

  const [fans, setFans] = useState<number>(0);
  useEffect(() => {
    getUserFans<IResponseType<IPage<IUserMsg[]>>>(userId, 0, 1).then((res) => {
      if (res.status === 200) {
        setFans(res.data.count);
      }
    });
  }, [userId]);
  const items = [
    { label: '首页', key: 'item-1', children: <Home userId={userId} /> },
    { label: '社区', key: 'item-2', children: <Community userId={userId} cId={channel?.id} /> },
    { label: '简介', key: 'item-3', children: <Desc userId={userId} /> }
  ];
  const subHandler = async () => {
    if (!isSub) {
      const result = await sub(userId);
      if (result.status === 200) {
        notification.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: 'bottomLeft'
        });
      }
    } else {
      const result = await cancelSub(userId);
      if (result.status === 200) {
      }
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch(changeUserDetailAction(loginMsg.userMsg.userId, false));
    }
  };
  return (
    <MusicWrapper>
      <div className="music-header">
        <img src={channel?.picUrl} alt={channel?.name} />
      </div>
      <div className="channel-msg">
        <div className="left-container">
          <div className="left">
            <img src={channel?.user.avatarUrl} />
          </div>
          <div className="right">
            <div className={'name'}>{channel?.name}</div>
            <div className={'sub'}>{fans}位订阅</div>
          </div>
        </div>
        {loginMsg.userMsg.userId !== userId && (
          <div
            className="right-container"
            onClick={async () => {
              await subHandler();
            }}
          >
            {isSub ? '已订阅' : '订阅'}
          </div>
        )}
      </div>
      <Tabs items={items} />
    </MusicWrapper>
  );
};
export default memo(Music);
