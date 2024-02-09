const connection = require("../app/databse.js");
class DashboardService {
  async dataAnalysisService(ctx){
    try{
      const userSQL=`
      select count(u.userId) as count
      from user as u`;

      const playlistSQL=`
      select count(p.id) as count
      from playlist as p`;

      const videoSQL=`
      select count(v.id) as count
      from video as v`;

      const userRes = await connection.execute(userSQL);
      const playlistRes = await connection.execute(playlistSQL);
      const videoRes = await connection.execute(videoSQL);
      return {
        user:userRes[0][0].count,
        playlist:playlistRes[0][0].count,
        video:videoRes[0][0].count
      }
    }catch (e) {

    }
  }
  async getUserWorksService(ctx){
    try{
      const sql=`select u.userId as userId,u.userName,count(v.id) as count,
(select(count(p.id)) from playlist as p where p.userId = u.userId)  as playlist
                      from user as u
                      left join video v on u.userId = v.userId
                      group by u.userId
                      order by count desc`;
      const result  = await connection.execute(sql);
      return result[0]
    }catch (e) {

    }
  }
  async getCateVideoService(ctx){
    try{
      const sql=`
      select c.id,c.name,count(v.id) as count
      from category as c
      left join video v on c.id = v.cateId
      group by c.id
      order by count desc`;
      const result = await connection.execute(sql);
      return result[0]
    }catch (e) {

    }
  }
  async getVideoAnalysisService(ctx){
    try{
      const sql=`
      select count(v.id) as count,date(v.createTime) as time
      from video as v
      group by time;`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {

    }
  }
}
module.exports = new DashboardService()
