const connection = require("../app/databse");
const { setResponse } = require("../utils/setResponse");
class ChannelService{
  async createChannelService(ctx,id,params){
    try{
      let execArr=[];
      let keys="";

      for(let item of params){
        const objArr = Object.entries(item);
        keys+=`${objArr[0][0]}=?,`;
        execArr.push(objArr[0][1])
      }
      keys = keys.substring(0,keys.length-1)
      const sql=`update channel set ${keys} where id=?`;
      execArr.push(id);
      const result =await connection.execute(sql,execArr);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //上传频道头像
  async uploadAvatarService(ctx,id,picUrl,originalname,mimetype,dest,filename,size){
    try{
      const sql=`insert into file(id,picUrl,originalname,mimetype,dest,filename,size)
                 values(?,?,?,?,?,?,?)`;
      const result = await connection.execute(sql,[id,picUrl,originalname,mimetype,dest,filename,size]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  //获取用户频道
  async userChannelService(ctx,id){
    try {
      const sql=`
      select c.id,c.name,c.alias,c.description,c.official,c.createTime,c.updateTime,
       JSON_OBJECT('userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user,
			 f.picUrl,
			 (select JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,
			                     'dt',v.dt,'description',v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,
													 'user',(select JSON_OBJECT(
			  'userId',v.userId,
				'userName',u.userName,
				'avatarUrl',u.avatarUrl
			 ) from user as u WHERE u.userId = v.userId),'category',(select JSON_OBJECT(
			  'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) from category as c where c.id = v.cateId),'tag',null)
			 from video as v
			 LEFT JOIN video_file as vf on vf.videoId = v.id
			 LEFT JOIN file as f on f.id = vf.fileId	where v.id = c.trailer and vf.mark="cover") as trailer,
			 (select JSON_OBJECT('id',v.id,'name',v.name,'playCount',v.playCount,
			                     'dt',v.dt,'description',v.description,'createTime',v.createTime,'updateTime',v.updateTime,'picUrl',f.picUrl,
													 'user',(select JSON_OBJECT(
			  'userId',v.userId,
				'userName',u.userName,
				'avatarUrl',u.avatarUrl
			 ) from user as u WHERE u.userId = v.userId),'category',(select JSON_OBJECT(
			  'id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime
			 ) from category as c where c.id = v.cateId),'tag',null)
			 from video as v
			 LEFT JOIN video_file as vf on vf.videoId = v.id
			 LEFT JOIN file as f on f.id = vf.fileId	where v.id = c.featured and vf.mark="cover") as featured
       from channel as c
       LEFT JOIN user as u on u.userId= c.userId
       LEFT JOIN file as f on f.id = banner
       where c.userId = ?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async getAllChannelService(ctx,offset,limit,keyword){
    try{
      const sql=`
              SELECT c.id,c.name,c.alias,c.description,c.banner,JSON_OBJECT(
              'userId',c.userId,'userName',u.userName,'avatarUrl',u.avatarUrl
            ) as user,official,c.createTime,c.updateTime,f.picUrl,
            (
              select JSON_OBJECT(
                  'id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',v.description,'createTime',v.createTime,
                  'updateTime',v.updateTime,'category',(JSON_OBJECT('id',c2.id,'name',c2.name,'createTime',c2.createTime,'updateTime',c2.updateTime)),
                  'user',(select JSON_OBJECT('userId',u1.userId,'userName',u1.userName,'avatarUrl',u1.avatarUrl) FROM user as u1 where u1.userId = v.userId)
                  )
              FROM video as v
              left join category c2 on v.cateId = c2.id
              where v.id = c.trailer
            ) as trailer,
            (
              select JSON_OBJECT(
                  'id',v.id,'name',v.name,'playCount',v.playCount,'dt',v.dt,'description',v.description,'createTime',v.createTime,
                  'updateTime',v.updateTime,'category',(JSON_OBJECT('id',c2.id,'name',c2.name,'createTime',c2.createTime,'updateTime',c2.updateTime)),
                  'user',(select JSON_OBJECT('userId',u1.userId,'userName',u1.userName,'avatarUrl',u1.avatarUrl) FROM user as u1 where u1.userId = v.userId)
                  )
              FROM video as v
              left join category c2 on v.cateId = c2.id
              where v.id = c.featured
            ) as featured
        from channel as c
        left join user u on c.userId = u.userId
        left join file as f on f.id=banner
        where f.vioUrl is null ${keyword.trim().length!==0 ? `and c.name like '%${keyword}%'`:''}
        order by c.createTime desc
        limit ?,?`;

      const res = await connection.execute(sql,[offset,limit]);
      const countSQL=`
                SELECT COUNT(c.id) AS count
          from channel as c
          left join user u on c.userId = u.userId
          left join file as f on f.id=banner
        where f.vioUrl is null ${keyword.trim().length!==0 ? `and c.name like '%${keyword}%'`:''}
          `;
      const count = await connection.execute(countSQL);
      return {
        list:res[0],
        count:count[0][0]?count[0][0].count:0
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async updateChannelService(ctx,id,name,alias,description,official,trailer,featured,banner){
    try{
      const sql=`
      update channel set name = ?,alias=?,description=?,official=?,trailer=?,featured=?,banner=?
      where id=?`;
      const result = await connection.execute(sql,[name,alias,description,official,trailer,featured,banner,id]);
      return result[0];
    }catch (e) {
      if(e.message.includes("Duplicate") && e.message.includes("channel.name")){
        setResponse(ctx,'频道名称已经存在',400,{})
        return;
      }
      setResponse(ctx,'error',500,{})
    }
  }
}

module.exports = new ChannelService()
