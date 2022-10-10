import React,{memo,FC,ReactElement} from "react";
import { BrandWrapper } from "./style";
import BrandItem from "./childCpn/brandItem";
const Brand:FC=()=>{
  return (
      <BrandWrapper>
       <BrandItem title={'照片'}
                  label={'您的个人资料照片会随您的频道一起出现在 YouTube 上的一些地方，例如您的视频和评论旁边'}
                  desc={'建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》'}
                  img={
                    <img src={'http://8.140.110.78:8200/playlist/cover?id=1643517085989'}/>
                  }/>
      </BrandWrapper>
  )
}
export default memo(Brand)