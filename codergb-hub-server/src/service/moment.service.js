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
      setResponse(ctx,e.message,500,{});
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
			 ) as video
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
      console.log(result);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
}

module.exports = new MomentService();
