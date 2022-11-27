import React,{memo,FC,ReactElement} from "react";
interface IProps{
  userId:string
}
const Live:FC<IProps>=(props)=>{
  return (
      <div>直播</div>
  )
}
export default memo(Live);