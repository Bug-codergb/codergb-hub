import React, { memo, type FC, useState, useEffect } from 'react';
import { Avatar, Empty, Tabs, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import errorImg from '../../../../assets/img/1677308494819.png';
import { CommonWrapper } from './style';
import { type IChannel } from '../../../../types/channel/IChannel';
import { getUserChannel } from '../../../../network/channel';
import { type IResponseType } from '../../../../types/responseType';
import Home from './childCpn/home/index';
import Community from './childCpn/community';
import Desc from './childCpn/desc';
import { useSub } from '../../../../hook/useSub';
import { useLoginMsg } from '../../../../hook/useLoginMsg';
import { cancelSub, sub } from '../../../../network/subscriber';
import { type Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { changeUserDetailAction } from '../../../login/store/actionCreators';
import { getUserFans } from '../../../../network/user';
import { IPlaylist } from '../../../../types/playlist/IPlaylist';
import { type IPage } from '../../../../types/IPage';
import { type IUserMsg } from '../../../../types/user/IUserMsg';
interface IProps {
  userId: string;
}
const Common: FC<IProps> = (props) => {
  const { userId } = props;

  const isSub = useSub(userId);
  const loginState = useLoginMsg();
  const [channel, setChannel] = useState<IChannel>();

  const dispatch = useDispatch<Dispatch<any>>();
  useEffect(() => {
    getUserChannel<IResponseType<IChannel>>(userId).then((data) => {
      if (data.status === 200) {
        setChannel(data.data);
      }
    });
  }, []);

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
    {
      label: '社区',
      key: 'item-2',
      children: channel ? <Community cId={channel.id} userId={userId} /> : <Empty />
    },
    { label: '简介', key: 'item-3', children: <Desc /> }
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
    if (loginState && loginState.userMsg) {
      dispatch(changeUserDetailAction(loginState.userMsg.userId, false));
    }
  };
  return (
    <CommonWrapper>
      <div className="common-header">
        {channel?.picUrl && <img src={channel?.picUrl} alt={channel?.name} />}
        {!channel?.picUrl && <img src={errorImg} alt={channel?.name} />}
      </div>
      <div className="channel-msg">
        <div className="left-container">
          <div className="left">
            {/* <img src={}/> */}
            {channel?.user && (
              <Avatar
                src={channel?.user.avatarUrl}
                size={70}
                icon={<UserOutlined style={{ fontSize: '80px' }} />}
              />
            )}
          </div>
          <div className="right">
            <div className={'name'}>{channel?.name}</div>
            <div className={'sub'}>{fans}位订阅</div>
          </div>
        </div>
        {loginState.userMsg.userId !== userId && (
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
    </CommonWrapper>
  );
};
export default memo(Common);
