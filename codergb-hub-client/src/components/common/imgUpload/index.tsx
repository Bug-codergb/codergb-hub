import React, {memo, FC, ReactElement, useState, ChangeEvent, useEffect,useRef} from "react";
import {
  ImgUploadWrapper
} from "./style"
import {Modal, Progress} from "antd";
import {PictureOutlined} from "@ant-design/icons";
import CustomizeUpload from "../../customizeUpload";
import {IResponseType} from "../../../types/responseType";
interface IProps{
  realWidth:number,
  isShow:boolean,
  fileSource?:File|null,
  isCustom:boolean
  handleOk:(file?:File|any)=>void,
  handleCancel:()=>void,
  network:(formDate:FormData,getProgress:(e:any)=>void)=>Promise<IResponseType<any>>
  uploadName:string,
  aspectRatio:number
}
const ImgUpload:FC<IProps>=(props):ReactElement=>{
  const {isShow,fileSource,isCustom,handleOk,network,uploadName,realWidth,aspectRatio,handleCancel} = props;
  const [progress,setProgress] = useState<number>(0);
  const [isShowCropper,setIsShowCropper] = useState<boolean>(false);
  const [file,setFile] = useState<File|null>(null);
  useEffect(()=>{
    if(isCustom){
      setIsShowCropper(true);
    }
  },[isCustom])
  const uploadRef=useRef<any>();
  const fileChange=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget.files && e.currentTarget.files.length!==0){
      setFile(e.currentTarget.files[0]);
      setIsShowCropper(true);
    }
  }
  const handleAvatarOk=async ()=>{
    let formData = new FormData();
    if(uploadRef.current){
      const f = await uploadRef.current.getCropperFile();
      formData.append(uploadName,f);
      const res=await network(formData,(e)=>{
        setProgress(e.loaded/e.total*100);
      });
      if(res.status===200){
        handleOk(res);
      }
    }
  }
  const handleAvatarCancel=()=>{
    setProgress(0);
    setIsShowCropper(false);
    setFile(null)
    handleCancel();
  }
  return <Modal title="自定义图片"
           open={isShow}
           maskClosable={false}
           destroyOnClose={true}
           onOk={handleAvatarOk}
           width={'65%'}
           onCancel={handleAvatarCancel}>
    {
      isShow && <ImgUploadWrapper>
        <div className="global-upload-outer-cpn-style">
          {
            (!isShowCropper && (!isCustom)) && <div className="input-container">
              <input type='file' onChange={(e)=>fileChange(e)}/>
              <div className="msg-tip">
                <p className="tip">请选择图片</p>
                <PictureOutlined className="img-icon"/>
              </div>
            </div>
          }
          {
            isShowCropper && <CustomizeUpload file={isCustom?(fileSource!) : file}
                                              imgWidth={5}
                                              scale={1}
                                              aspectRatio={aspectRatio}
                                              isCircle={false}
                                              realWidth={realWidth}
                //@ts-ignore
                                              ref={uploadRef}/>
          }
        </div>
        <Progress percent={parseFloat(progress.toFixed(1))} />
      </ImgUploadWrapper>
    }
    </Modal>

}
export default memo(ImgUpload);