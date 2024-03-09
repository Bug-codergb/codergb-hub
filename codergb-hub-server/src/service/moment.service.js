const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class MomentService{
  async createService(ctx,title,content,vid,userId,cId){
    try{
      const id = new Date().getTime();
      const sql=`insert into moment(id,title,content,vid,userId,cId) values(?,?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,title,content,vid,userId,cId]);
      return result[0];
    }catch (e) {
      if(e.message.includes("Duplicate") && e.message.includes("moment.title")){
        setResponse(ctx,"频道标题重复",400,{});
      }else{
        setResponse(ctx,e.message,500,{});
      }
    }
  }
  async channelMomentCountService(ctx,id){
    try{
      const sql=`
      select count(DISTINCT(m.id)) as count
      from moment as m
      LEFT JOIN video as v on v.id = m.vid
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN video_file as vf on vf.videoId = v.id
      LEFT JOIN file as f on f.id = vf.fileId
      where vf.mark="cover" and cId=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async channelMomentService(ctx,offset,limit,id){
    try{
      const sql=`
       select m.id,m.title,m.content,m.cId,m.createTime,m.updateTime,
       (select JSON_OBJECT('userId',u.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 FROM user as u where m.userId=u.userId ) as user,JSON_OBJECT(
			  'id',m.vid,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',
				v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,'user',
       (select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 from user as u where u.userId = v.userId)
			 ) as video,
			  (select count(t.userId) from thumb as t where t.mId = m.id and t.tread=0) as thumb
       from moment as m
       LEFT JOIN video as v on v.id = m.vid
       LEFT JOIN category as c on c.id = v.cateId
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where vf.mark="cover" and cId=?
       order by m.createTime desc
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new MomentService().channelMomentCountService(ctx,id);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async momentDetailService(ctx,id){
    try{
      const sql=`select m.id,m.title,m.content,m.cId,m.createTime,m.updateTime,
       (select JSON_OBJECT('userId',u.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 FROM user as u where m.userId=u.userId ) as user,JSON_OBJECT(
			  'id',m.vid,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',
				v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,'user',
       (select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 from user as u where u.userId = v.userId)
			 ) as video
       from moment as m
       LEFT JOIN video as v on v.id = m.vid
       LEFT JOIN category as c on c.id = v.cateId
       LEFT JOIN video_file as vf on vf.videoId = v.id
       LEFT JOIN file as f on f.id = vf.fileId
       where vf.mark="cover" and m.id=?`;
      const result = await connection.execute(sql,[id]);

      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllMomentService(ctx,offset,limit,keyword){
    try{
      const sql=`
                  select m.id,m.title,m.content,m.createTime,m.updateTime,m.cId as cId,
                   JSON_OBJECT(
                    'id',v.id,'name',v.name,'playCount',v.playCount,v.description,v.dt
                   ) AS video,
                JSON_OBJECT(
                 'userId',m.userId,'userName',user.userName,'avatarUrl',user.avatarUrl
                ) AS user,
                JSON_OBJECT("id",m.cId,'name',c.name) as channel
            from moment as m
            left join video v on m.vid = v.id
            left join video_file as vf on vf.videoId = v.id
            left join file as f on f.id = vf.fileId
            left join user on user.userId =m.userId
            left join channel c on m.cId = c.id
            where vf.mark="cover" ${keyword.trim().length!==0 ? `and m.title like '%${keyword}%' or m.content like '%${keyword}%'`:''}
            order by m.createTime desc
            limit ?,?`;
      const count = `
                select count(distinct (m.id)) as count
          from moment as m
          left join video v on m.vid = v.id
          left join video_file as vf on vf.videoId = v.id
          left join file as f on f.id = vf.fileId
          left join user on user.userId =m.userId
          left join channel c on m.cId = c.id  
          where vf.mark="cover" ${keyword.trim().length!==0 ? `and m.title like '%${keyword}%' or m.content like '%${keyword}%'`:''}`;
      const result = await connection.execute(sql,[offset,limit]);

      const countRes = await connection.execute(count);
      return {
        list:result[0],
        count:countRes[0][0]?countRes[0][0].count:0
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async deleteMomentService(ctx,id){
    try{
      const sql=`delete from moment where id=?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {

    }
  }
  async updateMomentService(ctx,id,title,content,vid){
    try{
      const sql=`
      update moment set title=?,content=?,vid=? where id=?`;
      const result = await connection.execute(sql,[title,content,vid,id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,"server error",500)
    }
  }
}

module.exports = new MomentService();
