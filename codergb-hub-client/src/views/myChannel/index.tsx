import React,{memo,FC} from "react";
import {Map} from "immutable";
import {
  MyChannelWrapper
} from "./style"
import {useSelector} from "react-redux";
import {IChannel} from "../../types/channel/IChannel";
import {ILogin} from "../../types/login/ILogin";
const MyChannel:FC=()=>{
  const channel = useSelector<Map<string,IChannel>,IChannel>(state=>{
    return state.getIn(['channelReducer','channel']) as IChannel
  })
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  return (
      <MyChannelWrapper>
        <div className="banner">
          <img src={channel.picUrl}/>
        </div>
        <div className="user-info">
          <div className="img-container">
            <img src={login.userMsg.avatarUrl}/>
          </div>
          <div className="right-info">
            <div className="user-name">{login.userMsg.userName}</div>
          </div>
        </div>
      </MyChannelWrapper>
  )
}
export default memo(MyChannel)