import React, {memo, useEffect, useState} from "react";
import {Map} from "immutable";
import {ISubscriber} from "../../../../types/subscriber/ISubscriber";
import {
  SubManageWrapper
} from "./style";
import {useSelector} from "react-redux";
import {ILogin} from "../../../../types/login/ILogin";
import {getUserSub} from "../../../../network/subscriber";
import {IResponseType} from "../../../../types/responseType";
import {IPage} from "../../../../types/IPage";
import {useSub} from "../../../../hook/useSub";
import SubBtn from "../../../../components/common/subBtn";
const SubManage=()=>{
  const [up,setUp] = useState<ISubscriber[]>([]);
  const [count,setCount] = useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  useEffect(()=>{
    getUserSub<IResponseType<IPage<ISubscriber[]>>>(login.userMsg.userId,0,10).then((data)=>{
      setUp(data.data.list);
      setCount(data.data.count);
    })
  },[])
  return (
      <SubManageWrapper>
        <ul className="sub-list">
          {
            up && up.length!==0 && up.map((item)=>{
              return (
                  <li key={item.id}>
                    <div className="left-container">
                      <img src={item.up.avatarUrl}/>
                    </div>
                    <div className="center-container">
                      <div className="channel-name">{item.up.userName}</div>
                      <div className="count">
                        <span>{item.fans}位订阅者</span>
                        <span>{item.video}个视频</span>
                      </div>
                      <div className="desc text-nowrap-mul-line">
                        {item.channel.description}
                      </div>
                    </div>
                    <div className="right-container">
                      <SubBtn userId={item.up.userId}/>
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </SubManageWrapper>
  )
}
export default memo(SubManage)