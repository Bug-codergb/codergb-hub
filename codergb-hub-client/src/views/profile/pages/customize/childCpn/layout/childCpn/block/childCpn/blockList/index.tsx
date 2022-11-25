import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {
  BlockListWrapper
} from "./style"
import {getAllBlock, userAddBlock} from "../../../../../../../../../../network/block";
import {IResponseType} from "../../../../../../../../../../types/responseType";
import {IBlock} from "../../../../../../../../../../types/block/IBlock";
interface IProps{
  addBlock:()=>void
}
const BlockList:FC<IProps>=(props):ReactElement=>{
  const { addBlock } = props;
  const [block,setBlock] = useState<IBlock[]>([]);
  useEffect(()=>{
    getAllBlock<IResponseType<IBlock[]>>().then((data)=>{
      if(data.status===200){
        setBlock(data.data);
      }
    })
  },[])
  const addBlockHandle=(item:IBlock)=>{
    userAddBlock(item.id).then((data)=>{
      if(data.status === 200){
        addBlock();
      }
    })
  }
  return (
      <BlockListWrapper>
        <ul className="block-list">
          {
            block && block.length!==0 && block.map((item,index)=>{
              return (
                  <li key={item.id} onClick={e=>addBlockHandle(item)}>{item.name}</li>
              )
            })
          }
        </ul>
      </BlockListWrapper>
  )
}
export default memo(BlockList);