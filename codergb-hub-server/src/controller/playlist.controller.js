const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getAllPlaylistService,
  getUserPlaylistService,
  playlistDetailService,
  playlistVideoService,
  subPlaylistService,
  selectUserSubPlaylist,
  updatePlaylistService,
  deletePlaylistService,
  getUserSubService
} = require("../service/playlist.service");
const {
  createVideoPlaylistService
} =require("../service/video.service");
class PlaylistController{
  async create(ctx,next){
    try{
      const {userId} = ctx.user;
      const id = new Date().getTime();
      const {name="",description="",isPublic=1} = ctx.request.body;
      if(!isEmpty(ctx,name,"播放列表名称不能为空") && !isEmpty(ctx,isPublic,"播放列表是否为公开不能为空")){
        const result = await createService(ctx,id,name,description,userId,isPublic);
        if(result){
          setResponse(ctx,"播放列表创建成功",200,{});
        }
      }
    }catch (e){
      setResponse(ctx,e.message,500,{})
    }
  }
  //更新播放列表
  async updatePlaylist(ctx,next){
    try{
      const { id } = ctx.params;
      const {name="",description="",isPublic,userId} = ctx.request.body;
      if(
        !isEmpty(ctx,name,"播放列表名称不能为空") &&
        !isEmpty(ctx,userId,"用户名称不能为空")&&
        !isEmpty(ctx,isPublic,"播放列表是否为公开不能为空")){
        const result = await updatePlaylistService(ctx,id,name,isPublic,description,userId);
        if(result){
          setResponse(ctx,"播放列表更新成功",200,{});
        }
      }

    }catch (e) {

    }
  }
  //获取所有播放列表
  async getAllPlaylist(ctx,next){
    try{
      const { offset="0",limit="30" } = ctx.query;
      const { keyword="", isPublic = -1 } = ctx.request.body;
      const result = await getAllPlaylistService(ctx,offset,limit,keyword,isPublic);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取用户播放列表
  async getUserPlaylist(ctx,next){
    try{
      const { id } = ctx.params;//当前想要获取播放列表的用户
      const { userId } = ctx.user;//当前用户
      let { offset="0", limit="30", keyword="",isPublic } = ctx.query;
      if(isPublic!==undefined && (`${isPublic}`!=='0'&& `${isPublic}`!=='1')){
        isPublic = undefined;
      }
      const result = await getUserPlaylistService(ctx,id,keyword,offset,limit,userId,isPublic);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //将视频添加到播放列表
  async addVideo(ctx,next){
    try{
      const {vId,pId} = ctx.request.body;
      if(!isEmpty(ctx,vId,"视频ID不能为空")&&!isEmpty(ctx,pId,"播放列表ID不能为空")){
        const result = await createVideoPlaylistService(ctx,vId,pId);
        if(result){
          setResponse(ctx,"success",200,{})
        }
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  //获取播放列表详情
  async playlistDetail(ctx,next){
    try{
      const { id } = ctx.params;
      const result = await playlistDetailService(ctx,id);
      setResponse(ctx,"success",200,result[0]);
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async playlistVideo(ctx,next){
    try{
      const {id} = ctx.params;
      const {offset="0",limit="30"} = ctx.query;
      const result = await playlistVideoService(ctx,id,offset,limit);
      if(result){
        setResponse(ctx,"success",200,result);
      }else{
        setResponse(ctx,"success",200,[]);
      }
    }
    catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async subPlaylist(ctx,next){
    try{
      const {id} = ctx.params;
      const {userId} =ctx.user;
      const isExists = await selectUserSubPlaylist(ctx,id,userId);
      if(isExists[0].length===0){
        const result = await subPlaylistService(ctx,id,userId);
        if(result){
          setResponse(ctx,"收藏成功",200,{});
        }
      }else{
        setResponse(ctx,"您已经收藏",200,{});
      }

    }catch (e) {
      setResponse(ctx,'error',500,{})
    }
  }
  async deletePlaylist(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await deletePlaylistService(ctx,id);
      if(result){
        setResponse(ctx,"删除成功",200,{});
      }
    }catch (e) {
      setResponse(ctx,'error',500,{})
    }
  }
  async getUserSub(ctx,next){
    try{
      const {id} = ctx.params;
      const {offset='0',limit="30"} = ctx.query;
      const result = await getUserSubService(ctx,id,offset,limit);
      console.log(result);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {

    }
  }
}

module.exports = new PlaylistController();
