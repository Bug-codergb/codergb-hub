const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require('path');
const { toSecond } = require("../utils/addTime");
function videoToM3u8(sourcePath,destPath,videoName,dt,progressHandle){
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

                if(progress.percent!==undefined){
                  progressHandle(progress)
                }else{
                  const { timemark } = progress;
                  if(timemark!==undefined){
                    const timestamp = toSecond(timemark);
                    progressHandle({
                      ...progress,
                      percent: (timestamp / (dt??1))*100
                    })
                  }
                }

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
