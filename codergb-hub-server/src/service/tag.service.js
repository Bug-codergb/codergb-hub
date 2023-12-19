const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class TagService{
  async createService(ctx,name){
    try{
      const id = new Date().getTime();
      const sql = `insert into tag(id,name) values(?,?)`;
      const result = await connection.execute(sql,[id,name]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getTagCountService(ctx,keyword){
    try{
      const sql = `select count(*) as count from tag ${keyword.length!==0 ? `where name like '%${keyword}%'`:''}`;
      const result = await connection.execute(sql);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getAllTagService(ctx,offset,limit,keyword){
    try{
      const sql=`select * from tag ${keyword.length!==0 ? `where name like '%${keyword}%'`:''} limit ?,?`;
      const result = await connection.execute(sql,[offset,limit]);
      const count = await new TagService().getTagCountService(ctx,keyword);
      return {
        list:result[0],
        count:count[0].count
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async deleteTagService(ctx,id){
    try{
      const sql=`delete from tag where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getTagVideoService(ctx,id,offset,limit){
    try{
      const sql=`
                select t.name,v.id,v.name,v.description,v.dt,v.updateTime,
                 v.createTime,v.playCount,f.picUrl,
                 (select JSON_OBJECT(
                  'userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl
                 ) FROM user as u where u.userId = v.userId) as user,
              (select JSON_OBJECT(
               'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
              ) from category as c where c.id = v.cateId) as category
          from tag as t
          left join tag_video tv on t.id = tv.tId
          left join video v on v.id = tv.vId
          left join video_file as vf on vf.videoId = v.id
          left join file as f on f.id = vf.fileId
          where vf.mark="cover" and t.id=?
          limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const countSQL=`
                select count(v.id) as count
          from tag as t
          left join tag_video tv on t.id = tv.tId
          left join video v on v.id = tv.vId
          left join video_file as vf on vf.videoId = v.id
          left join file as f on f.id = vf.fileId
          where vf.mark="cover" and t.id=?`;
      const count = await connection.execute(countSQL,[id]);
      return {
        list:result[0],
        count:count[0][0].count
      }
    }catch (e) {

    }
  }
}

module.exports = new TagService();
