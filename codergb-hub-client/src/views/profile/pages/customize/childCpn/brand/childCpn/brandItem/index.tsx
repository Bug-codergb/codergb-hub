import React,{memo,FC,ReactElement} from "react";
import {
  BrandItemWrapper
} from "./style";
interface IProps{
  title:string,
  label:string,
  img:ReactElement,
  desc:string,
}
const BrandItem:FC<IProps>=(props):ReactElement=>{
  const {title,label,img,desc} = props;
  return (
      <BrandItemWrapper>
        <div className="title">{title}</div>
        <div className="label">{label}</div>
        <div className="content">
          <div className="img-container">
            {img}
          </div>
          <div className="right-content">
            <p className="desc">{desc}</p>
            <div className="upload">上传</div>
          </div>
        </div>
      </BrandItemWrapper>
  )
}
export default memo(BrandItem)