import React,{memo,FC,ReactElement} from "react";
interface IProps{
  userId:string
}
const Moment:FC<IProps>=(props)=>{
  return (
      <div>
        动态
      </div>
  )
}
export default memo(Moment);