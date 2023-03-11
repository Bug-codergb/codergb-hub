import React,{memo,FC} from "react";
import {
  UploadedVideoWrapper
} from "./style"
interface IProps{
  userId:string
}
const UploadedVideo:FC<IProps>=(props)=>{
  const {userId}=props;
  return (
      <UploadedVideoWrapper>
        dddd
      </UploadedVideoWrapper>
  )
}
export default memo(UploadedVideo);