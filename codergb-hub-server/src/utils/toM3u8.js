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
            ffmpeg(sourcePath)
              .output(path.resolve(destPath,`${videoName}.m3u8`))
              .outputOptions([
                '-g 60',               // 设置GOP长度，影响切片的切割
                '-sc_threshold 0',     // 防止动态切换码率
                '-hls_time 30',        // 每个TS片段的时长为10秒
                '-hls_list_size 0',    // M3U8播放列表中所有片段都会列出
                '-f hls'               // 输出格式为HLS
              ]).on('progress',(progress)=>{
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
              .on('end', () => {
                resolve(true);
              })
              .on('error', (err) => {
                console.error('FFmpeg出错:', err);
              })
              .run();
            /*ffmpeg(sourcePath).videoCodec('libx264').format('hls')
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
              .run();*/
          }
        })
      }
    })
  })
}

module.exports = {
  videoToM3u8
}
