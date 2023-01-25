import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const Sport:FC<IProps>=(props)=>{
  return (
      <div>
        e体育
      </div>
  )
}
export default memo(Sport)