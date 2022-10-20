import React, {memo, FC, ReactElement, useState, useEffect,useRef , useImperativeHandle,forwardRef} from "react";
import Cropper from 'cropperjs';
import {
  CustomizeUploadWrapper
} from "./style";
interface IProps{
  file:File | null,
  imgWidth:number,
  scale:number,
  aspectRatio:number,
  isCircle:boolean,
}
const CustomizeUpload:FC<IProps>= forwardRef((props,propsRef):ReactElement=>{
  const {file,scale,imgWidth,aspectRatio,isCircle } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgURL,setImgURL]=useState<string>("");
  const [cropper,setCropper] = useState<Cropper>();
  useEffect(()=>{
    if(file){
      if(imgRef && imgRef.current){
        console.log(cropper)
        let url = URL.createObjectURL(file);
        let cropperContainer = new Cropper(imgRef.current, {
          ready: function () {
            console.log("ready")
          },
          dragMode:'move',
          aspectRatio: aspectRatio,
          viewMode: 1,
          background: false,
          zoomable: false,
          preview: ".small",
        });
        setCropper(cropperContainer);
        cropperContainer.replace(url)
      }
    }
  },[file]);
  const getCropperFile = async () =>{
    return new Promise((resolve,reject)=>{
      if(cropper){
        let canvasFile = cropper.getCroppedCanvas({
          imageSmoothingQuality: 'high',
          width:imgWidth*40,
          imageSmoothingEnabled: false,
          fillColor: '#fff',
        });
        canvasFile.toBlob((blob:Blob|null)=>{
          if(blob && file){
            const cropperFile = new File([blob],file.name,{
              type:file.type
            })
            resolve(cropperFile);
          }else{
            resolve(null);
          }
        })
      }else {
        reject(new Error("cropper 不存在"));
      }
    })
  }
  useImperativeHandle(propsRef,()=>{
    return {
      getCropperFile:getCropperFile
    }
  })
  return (
      <CustomizeUploadWrapper scale={scale} imgWidth={imgWidth} isCircle={isCircle}>
        <div className="container">
          <img ref={imgRef} className="cropper-img" src={imgURL}/>
        </div>
        <div className="preview">
          <div className="small"></div>
        </div>
      </CustomizeUploadWrapper>
  )
})
export default memo(CustomizeUpload)