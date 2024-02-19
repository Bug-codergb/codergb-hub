const { setResponse } = require("../utils/setResponse");
const { isEmpty } = require("../utils/isEmpty");
const {
  createService,
  getVideoService,
  updateCountService,
  getUserVideoRecordService,
  getUserSubService,
  getUserVideoThumbService
}=require("../service/record.service");
const moment = require("moment");
class RecordController{
  async create(ctx,next){
    try{
      const { vId } = ctx.params;
      const {userId} = ctx.user;
      const time = moment(new Date()).format("yyyy-MM-DD");
      const count = await getVideoService(vId,userId,time);
      let num = 0;
      if(!count||!count[0]){
        num=1;
        const result = await createService(ctx,vId,userId,num,time);

        if(result){
          setResponse(ctx,"success",200,result);
        }else{
          setResponse(ctx,"error",500,{})
        }
      }else {
        num = count[0].count ?? 0;
        const result = await updateCountService(ctx, vId, userId, Number(num) + 1,count[0].createTime);
        if(result){
          setResponse(ctx,"success",200,result);
        }else{
          setResponse(ctx,"error",500,{})
        }
      }

    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserVideoRecord(ctx,next){
    try{
      const { id } = ctx.params;
      let result = await getUserVideoRecordService(ctx,id);
      if(result){
        if(result.length!==0){
          const oneMonth = [];
          for(let i=0;i<=30;i++){
            oneMonth.push(moment(new Date).subtract(i,"days").format("yyyy-MM-DD"))
          }
          let map = new Map();
          for(let item of result){
            item.createTime = moment(item.createTime).format("yyyy-MM-DD")
            map.set(item.createTime,true);
          }

          for(let item of oneMonth){
            if(!map.get(item)){
              result.push({
                createTime:item,
                count:0
              })
            }
          }
          result.sort((a,b)=>new Date(a.createTime).getTime()-new Date(b.createTime).getTime())
        }
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserVideoThumb(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getUserVideoThumbService(ctx,id);
      if(result){
        const oneMonth = [];
        for(let i=0;i<=30;i++){
          oneMonth.push(moment(new Date).subtract(i,"days").format("yyyy-MM-DD"))
        }
        let map = new Map();
        for(let item of result){
          item.createTime = moment(item.createTime).format("yyyy-MM-DD")
          map.set(item.createTime,true);
        }
        for(let item of oneMonth){
          if(!map.get(item)){
            result.push({
              createTime:item,
              count:0
            })
          }
        }
        result.sort((a,b)=>new Date(a.createTime).getTime()-new Date(b.createTime).getTime());
        setResponse(ctx,"success",200,result);
      }else{
        setResponse(ctx,'error',500,{})
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getUserSub(ctx,next){
    try{
      const {id} = ctx.params;
      const result = await getUserSubService(ctx,id);
      if(result){
        const oneMonth = [];
        for(let i=0;i<=30;i++){
          oneMonth.push(moment(new Date()).subtract(i,"days").format("yyyy-MM-DD"))
        }
        let map = new Map();
        for(let item of result){
          item.time = moment(item.time).format("yyyy-MM-DD");
          map.set(item.time,true)
        }
        for(let item of oneMonth){
          if(!map.get(item)){
            result.push({
              time:item,
              count:0
            })
          }
        }
        result.sort((a,b)=>new Date(a.time).getTime() - new Date(b.time).getTime());
        setResponse(ctx,"success",200,result);
      }else{
        setResponse(ctx,'error',500,{})
      }
    }catch (e) {

    }
  }
}
module.exports = new RecordController()
