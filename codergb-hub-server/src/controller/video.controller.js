const path = require("path");
const fsPromise = require("fs/promises");
const {setResponse} = require("../utils/setResponse");
const {mergeVideo} = require("../utils/mergeVideo");
const {isEmpty} = require("../utils/isEmpty")
const {videoToM3u8} = require("../utils/toM3u8");
const {deleteFile} = require("../utils/deleteFile");
const {getFileName} = require("../utils/getFileName");
const {judgeFile} =require("../utils/judgeFile");
const {videoPath} = require("../constant/uploadPath");
const {APP_PORT, APP_HOST} = require("../app/config")
const {
  uploadVideoService,
  createVideoService,
  allVideoService,
  getVideoURLService,
  getVideoDetailService,
  getSubUserVioService,
  getThumbUserVioService,
  getSimilarVideoService,
  getColVideoService,
  getVideoSourceService,
  deleteVideoService,
  updateVideoInfoService,
  cateVideoService,
  addPlayCountService,
  getVideoChunkService,
  addCarouselService,
  deleteCarouselService,
  getAllCarouselService
} = require("../service/video.service")
const {createUploadPath} = require("../middleware/file.middleware");
const { getFansService } = require("../service/subscriber.service")
const { createService:insertNotify } = require("../service/notify.service")
class VideoController {
  async uploadVideo(ctx, next) {
    try {
      const {
        chunkSize, hash, index, name, size, type, uploadedSize,
      } = ctx.req.body;
      const data = {
        chunkSize, hash, index, name, size, type,
        uploadedSize: chunkSize * 1 + uploadedSize * 1,
        dest: ctx.req.body.dest
      }
      setResponse(ctx, "上传成功", 200, data);
    } catch (e) {
      console.log(e);
      setResponse(ctx, e.message, 500, {})
    }
  }

  //视频合并
  async mergeVideo(ctx, next) {
    try {
      const {dest = "", hash = "", originalname, type, total, dt = 0} = ctx.query;
      console.log(dt);
      if (!isEmpty(ctx, dest, "目的路径不能为空") && !isEmpty(ctx, hash, "文件HASH值不能为空")) {
        const id = new Date().getTime();
        const result = await mergeVideo(ctx, dest, path.resolve(__dirname, "../../", "./upload/video"), hash);
        if (result) {
          const suffix = originalname.substring(originalname.lastIndexOf("."));
          const sourcePath = path.resolve(__dirname, "../../", `./upload/video/${hash}${suffix}`);
          const destPath = path.resolve(__dirname, "../../", `./upload/video/`)
          const result = await videoToM3u8(sourcePath, destPath, hash, dt,(progress) => {
            let res = {
              isProgress: true,
              percent: progress.percent
            }

            ctx.websocket.send(JSON.stringify(res));
          });
          if (result) {
            await deleteFile(sourcePath);
            const vioPath = videoPath.replace("./upload", "");
            const vioUrl = `${APP_HOST}:${APP_PORT}${vioPath}${hash}.m3u8`;
            const result = await uploadVideoService(ctx, id, videoPath, `${hash}.m3u8`, originalname, vioUrl);
            let res = {
              id: id,
              isProgress: false,
              percent: 100
            }
            ctx.websocket.send(JSON.stringify(res));
            ctx.websocket.close();
          }
        }
        /*setResponse(ctx,"文件上传成功",200,{
          id:id
        })*/
      }
    } catch (e) {
      console.log(e)
      setResponse(ctx, e.message, 500);
    }
  }

  //视频创建
  async createVideo(ctx, next) {
    try {
      const {userId} = ctx.user;
      const {
        videoId,
        title,
        desc,
        imgId,
        playlistId,
        tagIds,
        cateId,
        dt
      } = ctx.request.body;
      if (!isEmpty(ctx, videoId, "请选择文件") &&
        !isEmpty(ctx, title, "视频标题不能为空") &&
        !isEmpty(ctx, desc, "视频简介不能为空") &&
        !isEmpty(ctx, imgId, "视频封面不能为空") &&
        !isEmpty(ctx, playlistId, "请选择视频播放列表") &&
        !isEmpty(ctx, tagIds, "视频标签不能为空") &&
        !isEmpty(ctx, dt, "视频时长不能为空") &&
        !isEmpty(ctx, cateId, "视频分类不能为空")) {
        const result = await createVideoService(ctx, userId, videoId, title, desc, imgId, playlistId, tagIds, cateId, dt);
        if (result) {
          const fans = await getFansService(ctx, userId,'0','1000000');
          console.log(fans);
          if(fans && fans.list && fans.list.length!==0){
            for(let item of fans.list){
              await insertNotify(ctx,"发布了",item.userId,userId,"upload",result.id);
            }
          }
          setResponse(ctx, "success", 200, {});
        }
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }

  //获取所有video
  async allVideo(ctx, next) {
    try {
      const {offset = "0", limit = "30"} = ctx.query;
      const {keyword = "", tag = [], cate = ""} = ctx.request.body;
      if (!Array.isArray(tag)) {
        setResponse(ctx, '标签必须为数组', 400, {});
      } else {
        const result = await allVideoService(ctx, offset, limit, keyword, tag, cate);
        if (result) {
          setResponse(ctx, "success", 200, result);
        }
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }

  //获取视频URL
  async getVideoURL(ctx, next) {
    try {
      const {id} = ctx.params;
      const result = await getVideoURLService(ctx, id);
      if (result) {
        setResponse(ctx, "success", 200, result[0]);
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }

  //获取视频详情
  async getVideoDetail(ctx, next) {
    try {
      const {id} = ctx.params;
      const result = await getVideoDetailService(ctx, id);
      if (result) {
        if(result[0] && result[0].user===null){
          result[0].user = {};
        }
        setResponse(ctx, "success", 200, result[0]);
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }

  async getSubUserVio(ctx, next) {
    try {
      const {id} = ctx.params;
      const {isMonth = 0} = ctx.request.body;
      const {offset = "0", limit = "30"} = ctx.query;
      const result = await getSubUserVioService(ctx, id, isMonth, offset, limit);
      if (result) {
        setResponse(ctx, "success", 200, result);
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }

  async getThumbUserVio(ctx, next) {
    try {
      const {id} = ctx.params;
      const {offset = "0", limit = "30"} = ctx.query;
      const result = await getThumbUserVioService(ctx, id, offset, limit);
      if (result) {
        setResponse(ctx, "success", 200, result);
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }

  async getSimilarVideo(ctx, next) {
    try {
      const {id} = ctx.params;//分类ID
      const {offset = "0", limit = "30"} = ctx.query;
      const result = await getSimilarVideoService(ctx, id, offset, limit);
      if (result) {
        setResponse(ctx, "success", 200, result);
      } else {
        setResponse(ctx, e.message, 500, {})
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }

  async getColVideo(ctx, next) {
    try {
      const {offset = "0", limit = "30"} = ctx.query;
      const {id} = ctx.params;
      const {keyword = "", tag = [], cate = ""} = ctx.request.body;
      if (!Array.isArray(tag)) {
        setResponse(ctx, '标签必须为数组', 400, {});
      } else {
        const result = await getColVideoService(ctx, id, offset, limit, keyword, tag, cate);
        if (result) {
          setResponse(ctx, "success", 200, result);
        }
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {})
    }
  }
  async getVideoChunk(ctx,next){
    try{
      const { id } =ctx.params;
      const res = await getVideoChunkService(ctx,id);
      if(res && res[0]){
        const files = await fsPromise.readdir(path.resolve(__dirname, "../../", `./upload/video`))
        const videoFile = res[0].filename;
        let chunk = []
        for(let file of files){
          const fileName = getFileName(videoFile);
          if(file.includes(fileName) && !file.includes(".m3u8")){
            chunk.push(file);
          }
        }
        setResponse(ctx,"success",200,chunk);
      }else{
        setResponse(ctx,"error",400,{})
      }
    }catch (e) {
      setResponse(ctx,"error",500,{})
    }
  }
  async getVideoSource(ctx, next) {
    try {
      const {offset = "0", limit = "30", keyword = '', isNull = 0} = ctx.query;
      const files = await fsPromise.readdir(path.resolve(__dirname, "../../", `./upload/video`));
      let res = [];
      const result = await getVideoSourceService();
      for (let item of files) {
        const fileName = getFileName(item);
        let source = "";
        let chunk = [];
        for (let file of files) {
          if (file.includes(fileName) && file !== item) {
            chunk.push(file);
          }
        }
        chunk.sort((a,b)=>a-b)
        if (item.includes(".m3u8")) {
          source = item;
          let videos = [];
          for (let videoFile of result) {
            if (videoFile.hasOwnProperty("dest")) {
              delete videoFile.dest;
            }
            if (videoFile.filename === source) {
              videos.push(videoFile);
            }
          }
          res.push({
            name: source,
            chunk: chunk,
            count: videos.length,
            videos: videos
          })
        }
      }
      if (keyword && keyword.trim().length !== 0) {
        res = res.filter((item, index) => {
          return item.name.includes(keyword);
        })
      }
      if (`${isNull}` === `1`) {
        res = res.filter((item) => {
          return item.count === 0;
        })
      }
      if (`${isNull}` === `0`) {
        res = res.filter((item) => {
          return item.count > 0;
        })
      }
      res={
        count:res.length,
        list:res.slice(parseInt(offset),parseInt(offset)+parseInt(limit)),
      }
      setResponse(ctx, "success", 200, res);
    } catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async deleteVideo(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deleteVideoService(ctx,id);
      if(result){
        setResponse(ctx, "success", 200, {});
      }
    }catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async deleteVideoSource(ctx,next){
    try{
      const {name} = ctx.params;
      if(!name.includes(".m3u8") && !name.includes(".ts")){
        setResponse(ctx, "文件不存在", 400, {});
      }else{
        const rootPath = path.resolve(__dirname,"../../");
        const videoPath = path.resolve(rootPath,"./upload/video");
        const isExists = await judgeFile(videoPath);
        if(isExists){
          const isExistsFile = await judgeFile(path.resolve(videoPath,name));
          if(isExistsFile){
            const fileName = getFileName(name);
            const files = await fsPromise.readdir(path.resolve(__dirname, "../../", `./upload/video`));
            const newFiles = files.filter((item)=>item.includes(fileName));
            if(name.includes(".m3u8")){
              for(let item of newFiles){
                const videoFullPath = path.resolve(videoPath,item);
                await deleteFile(videoFullPath);
              }
              setResponse(ctx, "success", 200, {});
            }else if(name.includes(".ts")){
              const videoFullPath = path.resolve(videoPath,name);
              await deleteFile(videoFullPath);
              setResponse(ctx, "success", 200, {});
            }
          }else{
            setResponse(ctx, "文件不存在", 400, {});
          }
        }else{
          setResponse(ctx, "文件不存在", 400, {});
        }
      }
    }catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async updateVideo(ctx,next){
    try {
      const {userId} = ctx.user;
      const {
        id,
        videoId,
        title,
        desc,
        imgId,
        playlistId,
        tagIds,
        cateId,
        dt
      } = ctx.request.body;
      if (!isEmpty(ctx, id, "视频id不能为空")&&
        !isEmpty(ctx, videoId, "请选择文件") &&
        !isEmpty(ctx, title, "视频标题不能为空") &&
        !isEmpty(ctx, desc, "视频简介不能为空") &&
        !isEmpty(ctx, imgId, "视频封面不能为空") &&
        !isEmpty(ctx, playlistId, "请选择视频播放列表") &&
        !isEmpty(ctx, tagIds, "视频标签不能为空") &&
        !isEmpty(ctx, dt, "视频时长不能为空") &&
        !isEmpty(ctx, cateId, "视频分类不能为空")) {
        const result = await updateVideoInfoService(ctx, id, videoId, title, desc, imgId, playlistId, tagIds, cateId, dt);
         if (result) {
           setResponse(ctx, "success", 200, {});
         }
        setResponse(ctx, "success", 200, {});
      }
    } catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async cateVideo(ctx,cateId){
    try{
      const {offset='0',limit='30'} = ctx.query;
      const {keyword=""} = ctx.request.body
      const {id} = ctx.params;
      const res = await cateVideoService(ctx,id,offset,limit,keyword);
      if(res){
        setResponse(ctx, "success", 200, res);
      }
    }catch (e) {
      setResponse(ctx, e.message, 500, {});
    }
  }
  async addPlayCount(ctx,next){
    try{
      const { id } = ctx.params;
      const result = await getVideoDetailService(ctx,id);
      if(result){
        const video = result[0]??{playCount:0};
        let {playCount} = video;
        playCount++;
        const res = await addPlayCountService(ctx,id,playCount);
        res.playCount = playCount;
        setResponse(ctx, "success", 200, res);
      }
    }catch (e) {
      setResponse(ctx, 'error', 500, {});
    }
  }
  async addCarousel(ctx,next){
    try{
      const { title='',description='',fileId='',videoId='' } = ctx.request.body;
      if(!isEmpty(ctx,title,"标题不能为空")&& !isEmpty(ctx,description,"简介不能为空")&&
      !isEmpty(ctx,fileId,"图片不能为空")&&!isEmpty(ctx,videoId,"关联视频不能为空")){
        const result = await addCarouselService(ctx,title,description,fileId,videoId);
        if(result){
          setResponse(ctx, "success", 200, {});
        }
      }
    }catch (e) {
      setResponse(ctx, 'error', 500, {});
    }
  }
  async deleteCarousel(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deleteCarouselService(ctx,id);
      setResponse(ctx, "success", 200, {});
    }catch (e) {
      setResponse(ctx, 'error', 500, {});
    }
  }
  async getAllCarousel(ctx,next){
    try{
      const { offset="0",limit="30" } = ctx.query;
      const result = await getAllCarouselService(ctx,offset,limit);
      setResponse(ctx, "success", 200, result);
    }catch (e) {

    }
  }
}

module.exports = new VideoController();
