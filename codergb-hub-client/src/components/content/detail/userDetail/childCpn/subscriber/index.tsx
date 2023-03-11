import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const Community:FC<IProps>=(props)=>{
  const {userId}=props;
  return (
      <div>
        dddd
      </div>
  )
}
export default memo(Community);