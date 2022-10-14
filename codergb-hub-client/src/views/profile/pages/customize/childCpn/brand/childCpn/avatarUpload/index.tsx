import React, {memo, FC, ReactElement, ChangeEvent, useState,useRef,forwardRef,useImperativeHandle} from "react";
import { PictureOutlined } from "@ant-design/icons";
import {
  AvatarUploadWrapper
} from "./style";

import CustomizeUpload from "../../../../../../../../components/customizeUpload";
const AvatarUpload:FC= forwardRef((props,propsRef):ReactElement=>{
  const [file,setFile] = useState<File|null>(null);
  const [isShowCropper,setIsShowCropper] = useState<boolean>(false);

  const uploadRef = useRef<any>(null);
  const fileChange=(e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.files)
    if(e.currentTarget.files){
      setFile(e.currentTarget.files[0]);
      setIsShowCropper(true);
    }
  }
  const getCropperFile=async ()=>{
    return await uploadRef.current.getCropperFile();
  }
  useImperativeHandle(propsRef,()=>{
    return {
      getCropperFile:getCropperFile
    }
  })
  return (
      <AvatarUploadWrapper>
        <div className="upload-outer">
          {
            (!isShowCropper) && <div className="input-container">
              <input type='file' onChange={(e)=>fileChange(e)}/>
              <div className="msg-tip">
                <p className="tip">请选择图片</p>
                <PictureOutlined className="img-icon"/>
              </div>
            </div>
          }
          {
            isShowCropper && <CustomizeUpload file={file}
                                              imgWidth={5}
                                              scale={1}
                                              aspectRatio={1}
                                              isCircle={false}
                //@ts-ignore
                                              ref={uploadRef}/>
          }
        </div>
      </AvatarUploadWrapper>
  )
})
export default memo(AvatarUpload)