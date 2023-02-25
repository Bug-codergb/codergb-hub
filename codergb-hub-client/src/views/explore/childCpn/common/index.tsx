import React, {memo, FC, useState, useEffect} from 'react';
import {Avatar} from 'antd'
import { UserOutlined  } from '@ant-design/icons';

import errorImg from "../../../../assets/img/1677308494819.png";
import {
  CommonWrapper
} from "./style";
import {IChannel} from "../../../../types/channel/IChannel";
import {getUserChannel} from "../../../../network/channel";
import {IResponseType} from "../../../../types/responseType";
import {Tabs} from "antd";
import Home from "./childCpn/home/index";
import Community from "./childCpn/community";
import Desc from "./childCpn/desc";
interface IProps{
  userId:string
}
const Common:FC<IProps>=(props)=>{
  const { userId } = props;
  const [channel,setChannel] = useState<IChannel>();
  useEffect(()=>{
    getUserChannel<IResponseType<IChannel>>(userId).then((data)=>{
      if(data.status === 200){
        setChannel(data.data);
      }
    })
  },[])
  const items = [
    { label: '首页', key: 'item-1', children: <Home userId={userId}/> },
    { label: '社区', key: 'item-2', children: <Community/> },
    { label: '简介', key: 'item-3', children: <Desc/> },
  ];
  return (
      <CommonWrapper>
        <div className='common-header'>
         { channel?.picUrl&& <img src={channel?.picUrl} alt={channel?.name}/>}
          {(!channel || !channel.picUrl) && <img src={errorImg} alt={channel?.name}/>}
        </div>
        <div className="channel-msg">
          <div className="left-container">
            <div className="left">
             {/* <img src={}/>*/}
              {
                channel&& channel.user&&<Avatar
                    src={channel?.user.avatarUrl}
                    size={70}
                    icon={<UserOutlined  style={{fontSize:'80px'}}/>}
                />
              }
            </div>
            <div className="right">
              <div className={'name'}>{channel?.name}</div>
              <div className={'sub'}>1.8亿位订阅</div>
            </div>
          </div>
          <div className="right-container">
            订阅
          </div>
        </div>
        <Tabs items={items} />
      </CommonWrapper>
  )
}
export default memo(Common);