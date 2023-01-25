import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const News:FC<IProps>=(props)=>{
  return (
      <div>
        e新闻
      </div>
  )
}
export default memo(News)