import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const Movie:FC<IProps>=(props)=>{
  return (
      <div>
        电影
      </div>
  )
}
export default memo(Movie)