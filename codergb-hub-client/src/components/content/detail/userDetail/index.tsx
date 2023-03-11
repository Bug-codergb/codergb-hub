import React, {memo, FC, ReactElement, useEffect, useState} from 'react';
import { Tabs } from 'antd';
import {useLocation} from 'react-router-dom';
import {
  UserDetailWrapper
} from "./style"
import {IChannel} from "../../../../types/channel/IChannel";
import {getUserChannel} from "../../../../network/channel";
import {IResponseType} from "../../../../types/responseType";
import {channel} from "diagnostics_channel";
import {tabs} from "./config";
import {getUserBlock} from "../../../../network/block";
import {IBlock} from "../../../../types/block/IBlock";
import {UPLOADED_VIDEO} from "../../../../constant/block";
import UploadedVideo from "./childCpn/uploadedVideo";
const UserDetail:FC=():ReactElement=>{
  const location = useLocation();
  const {userId} = location.state;
  const [userChannel,setUserChannel] = useState<IChannel>();
  const [block,setBlock] = useState<IBlock[]>([]);
  const [userTabs,setUserTabs]=useState<any[]>([]);
  useEffect(()=>{
    const tabList = tabs(userId);
    setUserTabs(tabList);
    console.log(tabList)
  },[userId]);
  useEffect(()=>{
    getUserChannel<IResponseType<IChannel>>(userId).then((data)=>{
      if(data.status===200){
        setUserChannel(data.data);
      }
    })
  },[userId]);
  useEffect(()=>{
    getUserBlock<IResponseType<IBlock[]>>(userId).then((data)=>{
      if(data.status===200){
        setBlock(data.data);
        console.log(userTabs)
        if(data.data.length!==0){
          for(let item of data.data){
            if(item.name===UPLOADED_VIDEO){
              let tabs = [userTabs,<UploadedVideo userId={userId}/>];
              setUserTabs(tabs);
            }
          }
        }
      }
    })
  },[userId])
  return (
      <UserDetailWrapper>
        <div className={'banner'}>
          <img src={userChannel?.picUrl}/>
        </div>
        <div className="user-info">
          <div className="img-container">
            <img src={userChannel?.user.avatarUrl}/>
          </div>
          <div className="right-info">
            <div className="user-name">{userChannel?.user.userName}</div>
          </div>
        </div>
        <Tabs
            defaultActiveKey="1"
            items={userTabs}
        />
      </UserDetailWrapper>
  )
}
export default memo(UserDetail);