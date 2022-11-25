import React, {memo, FC, ReactElement, useState, useEffect} from "react";
import { Map } from "immutable";
import {MoreOutlined} from "@ant-design/icons"
import {
  UserBlockListWrapper
} from "./style"
import {IBlock} from "../../../../../../../../../../types/block/IBlock";
import {getUserBlock} from "../../../../../../../../../../network/block";
import {IResponseType} from "../../../../../../../../../../types/responseType";
import {useSelector} from "react-redux";
import {ILogin} from "../../../../../../../../../../types/login/ILogin";
import EmptyHolder from "../../../../../../../../../../components/common/emptyHolder";
const UserBlockList:FC=():ReactElement=>{
  const [block,setBlock] = useState<IBlock[]>([]);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  useEffect(()=>{
    if(login && login.userMsg){
      getUserBlock<IResponseType<IBlock[]>>(login.userMsg.userId).then((data)=>{
        if(data.status===200){
          setBlock(data.data);
        }
      })
    }
  },[login])
  return (
      <UserBlockListWrapper>
        <ul className="user-block-list">
          {
            block && block.length!==0 && block.map((item)=>{
              return (
                  <li key={item.id}>
                    <div className="left-container">
                      <div className="layout-icon"> </div>
                      <div className="block">
                        <div className="block-name">{item.name}</div>
                        <div className="block-desc">{item.description}</div>
                      </div>
                    </div>
                    <div className="right-container">
                      <MoreOutlined />
                    </div>
                  </li>
              )
            })
          }
          {
            block && block.length==0 && <EmptyHolder msg={"请添加板块，添加后在您的首页显示"} padding={70}/>
          }
        </ul>
      </UserBlockListWrapper>
  )
}
export default memo(UserBlockList);