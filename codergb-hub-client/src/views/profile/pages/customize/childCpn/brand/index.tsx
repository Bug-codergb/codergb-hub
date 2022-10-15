import React, {memo, FC, ReactElement, useState,useRef} from "react";
import { Progress , Modal } from 'antd';
import { BrandWrapper } from "./style";
import BrandItem from "./childCpn/brandItem";
import AvatarUpload from "./childCpn/avatarUpload";
import { uploadAvatar as uploadAvatarReq } from "../../../../../../network/channel/index";
const Brand:FC=():ReactElement=>{
  const [isAvatarModalOpen,setIsAvatarModalOpen] = useState<boolean>(false);
  const [progress,setProgress]=useState<number>(0);
  const avatarUpload = useRef<any>(null);
  const uploadAvatar = () =>{
    setIsAvatarModalOpen(true);
  }
  const uploadCover=()=>{

  }
  //频道头像
  const handleAvatarOk=async ()=>{
    const file = await avatarUpload.current.getCropperFile();
    let formData = new FormData();
    formData.append("avatar",file);
    const result = await uploadAvatarReq(formData,(progress:any)=>{
      setProgress(progress.loaded/progress.total*100);
    });
    if(result.status===200){
      setIsAvatarModalOpen(false);
    }
  }
  const handleAvatarCancel=()=>{
    setIsAvatarModalOpen(false);
  }
  return (
      <BrandWrapper>
       <BrandItem title={'照片'}
                  label={'您的个人资料照片会随您的频道一起出现在 YouTube 上的一些地方，例如您的视频和评论旁边'}
                  desc={'建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》'}
                  img={
                    <img src={'http://8.140.110.78:8200/playlist/cover?id=1643517085989'}/>
                  }
                  uploadHandle={()=>uploadAvatar()}/>
        <BrandItem title={'横幅图片'}
                   label={'此图片将会显示在您频道的顶部'}
                   desc={'建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》'}
                   img={
                     <img src={'http://8.140.110.78:8200/playlist/cover?id=1643517085989'}/>
                   }
                   uploadHandle={()=>uploadCover()}/>
          <Modal title="自定义图片"
                 open={isAvatarModalOpen}
                 destroyOnClose={true}
                 onOk={handleAvatarOk}
                 width={'65%'}
                 onCancel={handleAvatarCancel}>
            <AvatarUpload
                //@ts-ignore
                ref={avatarUpload}/>
            <Progress percent={parseFloat(progress.toFixed(1))} />
          </Modal>
      </BrandWrapper>
  )
}
export default memo(Brand)