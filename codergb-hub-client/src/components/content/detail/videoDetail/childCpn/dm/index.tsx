import React, {memo, FC, useState, FormEvent} from "react";
import {
  DmWrapper
} from "./style";
import {pubDm} from "../../../../../../network/dm";
interface IProps{
  id:string,
  time:string,
  pub:()=>void
}
const Dm:FC<IProps>=(props)=>{
  const {id,time,pub} = props;
  const [content,setContent] = useState<string>("");
  const dmInp=(e:FormEvent<HTMLInputElement>)=>{
    setContent(e.currentTarget.value);
  }
  const pubHandle=()=>{
    pubDm(id,content,time).then((data)=>{
      if(data.status === 200){
        setContent("");
        pub();
      }
    })
  }
  return (
      <DmWrapper>
        <span>已装填2条弹幕</span>
        <div className="dm-outer">
          <input type={"text"} value={content} onInput={(e)=>dmInp(e)} placeholder={"发个弹幕,见证当下"}/>
          <div className="pub" onClick={e=>pubHandle()}>发送</div>
        </div>
      </DmWrapper>
  )
}
export default memo(Dm);