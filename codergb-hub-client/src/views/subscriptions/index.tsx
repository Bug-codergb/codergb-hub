import React,{memo,FC,ReactElement} from "react";
import { useNavigate } from "react-router-dom";
import {
  SubscriptionsWrapper
} from "./style"

const Subscriptions:FC=():ReactElement=>{
  const navigate = useNavigate();
  const manageRouteHandle=()=>{
    navigate("/home/sub-manage",{
      replace:true
    })
  }
  return (
    <SubscriptionsWrapper>
      <div className="header-title">
        <div className="current-time">本月</div>
        <div className="manage" onClick={e=>manageRouteHandle()}>管理</div>
      </div>
    </SubscriptionsWrapper>
  )
}
export default memo(Subscriptions)