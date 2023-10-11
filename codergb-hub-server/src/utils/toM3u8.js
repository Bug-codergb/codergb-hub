const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require('path');
function videoToM3u8(sourcePath,destPath,videoName,progressHandle){
  console.log(sourcePath)
  return new Promise((resolve,reject)=>{
    fs.access(sourcePath,(err)=>{
      if(err){
        reject(new Error("视频源路径不存在"))
      }else{
        fs.access(destPath,(err)=>{
          if(err){
            reject(new Error("目的路径不存在"))
          }else{
            ffmpeg(sourcePath).videoCodec('libx264').format('hls')
              .outputOption('-hls_list_size 0')
              .outputOption('-hls_time 30')
              .output(path.resolve(destPath,`${videoName}.m3u8`))
              .on('progress',(progress)=>{
                console.log(progress);
                progressHandle(progress)
              })
              .on("end",()=>{
                resolve(true);
              })
              .run();
          }
        })
      }
    })
  })
}

module.exports = {
  videoToM3u8
}
