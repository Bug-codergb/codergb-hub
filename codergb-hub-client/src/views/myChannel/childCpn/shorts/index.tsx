import React,{memo,FC,ReactElement} from "react";
interface IProps{
  userId:string
}
const Shorts:FC<IProps>=(props)=>{
  return (
      <div>
        短视频
      </div>
  )
}
export default memo(Shorts);