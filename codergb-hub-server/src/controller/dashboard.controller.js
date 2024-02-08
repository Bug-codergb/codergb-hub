const { setResponse } = require("../utils/setResponse.js");
const {dataAnalysisService,getUserWorksService} = require("../service/dashboard.service");
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
}
module.exports = new DashboardController()
