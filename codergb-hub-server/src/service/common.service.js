const connection = require("../app/databse");
class CommonService{
  async getUserFansCountService(userId){
    try{
      const sql=`
      select count(*) as count
       from subscriber
       where upId = ?`;
      const result = await connection.execute(sql,[userId]);
      return result[0]
    }catch (e) {

    }
  }
  async getUserVideoCountService(userId){
    try{
      const sql=`select count(v.id) as count
                 from video as v
                 where userId=?`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {

    }
  }
}

module.exports = new CommonService();
