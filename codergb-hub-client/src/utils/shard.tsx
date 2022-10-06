import {mergeVideo, uploadVideo} from "../network/video";
import SparkMD5 from 'spark-md5';
const chunkSize = 1024 * 1000;
async function getFileHash(file:File){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload=function(e){
      if(e.target){
        let buffer = e.target.result as ArrayBuffer;
        let spark = new SparkMD5.ArrayBuffer();
        let HASH;
        let suffix;
        if(buffer){
          spark.append(buffer);
          HASH = spark.end();
          suffix = file.name.substring(file.name.lastIndexOf(".")+1);
          resolve({
            buffer,
            HASH,
            suffix
          })
        }
      }
    }
  })
}
async function chunkHandle(HASH:string,index:number,file:File,name:string,
                           total:number,type:string,uploadedSize:number,dest:string,
                           fn:(size:number)=>void){
  try{
    fn(uploadedSize);
    if(uploadedSize>total) {
      await mergeVideo(dest,HASH);
      return;
    }
    let end = index*chunkSize + chunkSize;
    if(end > total-1){
      end = total-1
    }
    let blobFile = file.slice(index*chunkSize,end);

    let formData = new FormData();
    let fileBlob = new File([blobFile],name,{
      type:type,
    });
    formData.append("index",`${index}`);
    formData.append("hash",HASH);
    formData.append("name",name);
    formData.append("size",`${total}`);
    formData.append("type",type);
    formData.append("chunkSize",`${chunkSize}`);
    formData.append("uploadedSize",`${uploadedSize}`)
    formData.append("video",fileBlob);
    const result = await uploadVideo(formData);
    if(result.status === 200){
       chunkHandle(HASH,index+1,file,name,total,type,result.data.uploadedSize,result.data.dest,fn);
    }
  }catch (e) {
    console.log(e)
  }
}
async function shardUtils(file:File,fn:(size:number)=>void){
  const { name,size,type } = file;
  let index = 0
  const fileData:any = await getFileHash(file);
  await chunkHandle(fileData.HASH,index,file,name,size,type,0,"",fn);
}
export {
  shardUtils
}