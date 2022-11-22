import React, {memo, FC, ReactElement, useState,useRef} from "react";
import {Map} from "immutable";
import { Progress , Modal } from 'antd';
import { BrandWrapper } from "./style";
import BrandItem from "./childCpn/brandItem";
import AvatarUpload from "./childCpn/avatarUpload";
import {updateChannel, uploadAvatar as uploadAvatarReq} from "../../../../../../network/channel/index";
import {ILogin} from "../../../../../../types/login/ILogin";
import {useDispatch, useSelector} from "react-redux";
import {updateAvatar} from "../../../../../../network/user";
import {IResponseType} from "../../../../../../types/responseType";
import ImgUpload from "../../../../../../components/common/imgUpload";
import {uploadImage} from "../../../../../../network/image";
import {IChannel} from "../../../../../../types/channel/IChannel";
import {changeChannelAction} from "../../store/actionCreators";
import {Dispatch} from "redux";
import {changeUserDetailAction} from "../../../../../login/store/actionCreators";
const Brand:FC=():ReactElement=>{
  const [isAvatarModalOpen,setIsAvatarModalOpen] = useState<boolean>(false);
  const [isShowCover,setIsShowCover] = useState<boolean>(false);
  const [progress,setProgress]=useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>((state)=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const channel = useSelector<Map<string,IChannel>,IChannel>(state=>{
    return state.getIn(['channelReducer','channel']) as IChannel
  });
  const dispatch = useDispatch<Dispatch<any>>();
  const avatarUpload = useRef<any>(null);
  const uploadAvatar = () =>{
    setIsAvatarModalOpen(true);
  }
  const uploadCover=()=>{
    setIsShowCover(true);
  }
  //频道头像
  const handleAvatarOk=async ()=>{
    const file = await avatarUpload.current.getCropperFile();
    let formData = new FormData();
    formData.append("avatar",file);
    let result:IResponseType<any>;
    if(login.userMsg.avatarUrl){
      result = await updateAvatar(login.userMsg.userId,formData,(progress:any)=>{
        setProgress(progress.loaded/progress.total*100)
      });
    }else{
      result = await uploadAvatarReq(formData,(progress:any)=>{
        setProgress(progress.loaded/progress.total*100);
      }); 
    }
    if(result.status===200){
      dispatch(changeUserDetailAction(login.userMsg.userId))
      setIsAvatarModalOpen(false);
    }
  }
  const handleAvatarCancel=()=>{
    setIsAvatarModalOpen(false);
  }
  //上传横幅
  const uploadCoverHandle= async (res:any)=>{
    if(res && res.data && res.data.id){
      await updateChannel(channel.id, { 'banner':`${res.data.id}` });
      if(login && login.userMsg && channel && Object.keys(res.data).length!==0){
        dispatch(changeChannelAction(login.userMsg.userId))
      }
    }
    setIsShowCover(false);
  }
  return (
      <BrandWrapper>
       <BrandItem title={'照片'}
                  label={'您的个人资料照片会随您的频道一起出现在 YouTube 上的一些地方，例如您的视频和评论旁边'}
                  desc={'建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》'}
                  operator={login.userMsg.avatarUrl?'更换':"上传"}
                  isAvatar={true}
                  img={
                    <img src={login.userMsg.avatarUrl}/>
                  }
                  uploadHandle={()=>uploadAvatar()}/>
        <BrandItem title={'横幅图片'}
                   label={'此图片将会显示在您频道的顶部'}
                   desc={'建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》'}
                   operator={channel.picUrl?'更换':'上传'}
                   isAvatar={false}
                   img={
                     <img src={channel.picUrl}/>
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
        {/*上传横幅*/}
        {
          isShowCover && <ImgUpload isCustom={false}
                     aspectRatio={6.2}
                     realWidth={1000}
                     isShow={isShowCover}
                     handleOk={(res)=>uploadCoverHandle(res)}
                     handleCancel={()=>setIsShowCover(false)}
                     network={uploadImage}
                     uploadName={"file"}/>
        }
      </BrandWrapper>
  )
}
export default memo(Brand)