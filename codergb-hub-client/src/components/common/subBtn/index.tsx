import React,{memo,FC,ReactElement} from "react";
import {
  SubBtnWrapper
} from "./style"
import {useSub} from "../../../hook/useSub";
interface IProps{
  userId:string
}
const SubBtn:FC<IProps>=(props):ReactElement=>{
  const {userId} = props;
  const isSub = useSub(userId);
  return (
      <SubBtnWrapper>
        {
          isSub?'已订阅':'订阅'
        }
      </SubBtnWrapper>
  )
}
export default memo(SubBtn)