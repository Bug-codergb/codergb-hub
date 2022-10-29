import React, {memo, FC, ReactElement, useState, useEffect} from "react";
import {MoreOutlined} from "@ant-design/icons"
import {
  UserBlockListWrapper
} from "./style"
import {IBlock} from "../../../../../../../../../../types/block/IBlock";
import {getUserBlock} from "../../../../../../../../../../network/block";
import {IResponseType} from "../../../../../../../../../../types/responseType";
const UserBlockList:FC=()=>{
  const [block,setBlock] = useState<IBlock[]>([]);
  useEffect(()=>{
    getUserBlock<IResponseType<IBlock[]>>("1664789923657").then((data)=>{
      if(data.status===200){
        setBlock(data.data);
      }
    })
  },[])
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
        </ul>
      </UserBlockListWrapper>
  )
}
export default memo(UserBlockList);