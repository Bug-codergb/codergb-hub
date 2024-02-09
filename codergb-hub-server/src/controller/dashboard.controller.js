const { setResponse } = require("../utils/setResponse.js");
const {
  dataAnalysisService,
  getUserWorksService,
  getCateVideoService,
  getVideoAnalysisService
} = require("../service/dashboard.service");
const moment = require("moment");
class DashboardController{
  async dataAnalysis(ctx,next){
    try{
      const result = await dataAnalysisService(ctx);
      if(result){
        setResponse(ctx,"success",200,result);
      }
    }catch (e) {

    }
  }
  async getUserWorks(ctx,next){
    try{
      const result = await getUserWorksService(ctx);
      setResponse(ctx,"success",200,result)
    }catch (e) {

    }
  }
  async getCateVideo(ctx,next){
    try{
      const result = await getCateVideoService(ctx);
      setResponse(ctx,"success",200,result);
    }catch (e) {

    }
  }
  async getVideoAnalysis(ctx,next){
    try{
      const result = await getVideoAnalysisService(ctx);
      if(result.length!==0){
        for(let item of result){
          item.time = moment(item.time).format("yyyy-MM-DD")
        }
      }
      setResponse(ctx,"success",200,result);
    }catch (e) {

    }
  }
}
module.exports = new DashboardController()
