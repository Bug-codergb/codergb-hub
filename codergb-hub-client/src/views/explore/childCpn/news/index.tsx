import React,{memo,FC} from "react";
import {
  NewsWrapper
} from "./style"
import Common from "../common";
interface IProps{
  userId:string
}
const News:FC<IProps>=(props)=>{
  const {userId} = props;
  return (
      <NewsWrapper>
        <Common userId={userId}/>
      </NewsWrapper>
  )
}
export default memo(News)