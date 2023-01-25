import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const Study:FC<IProps>=(props)=>{
  return (
      <div>
        e学习
      </div>
  )
}
export default memo(Study)