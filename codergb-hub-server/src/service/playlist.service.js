const connection = require("../app/databse");
const {setResponse} = require("../utils/setResponse");
class PlaylistService{
  async createService(ctx,id,name,description,userId,isPublic){
    try{
      const sql = `insert into playlist(id,name,description,userId,isPublic) values(?,?,?,?,?)`;
      const result =await connection.execute(sql,[id,name,description,userId,isPublic]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getPlaylistCount(ctx,keyword,isPublic){
    try{
      let pSQL = '',execArr=[];
      if(keyword.trim().length!==0 && isPublic!==-1){
        pSQL = `where name like '%${keyword}%' and isPublic = ?`;
        execArr=[isPublic]
      }else if(keyword.trim().length===0 && isPublic!==-1){
        pSQL = `where isPublic = ?`;
        execArr=[isPublic]
      }else if(keyword.trim().length!==0 && isPublic === -1){
        pSQL = `where name like '%${keyword}%'`;
      }
      const sql=`select count(*) as count from playlist ${pSQL}`;
      const result = await connection.execute(sql,execArr);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getAllPlaylistService(ctx,offset,limit,keyword,isPublic){
    try{
      let pSQL = '',execArr=[offset,limit];
      if(keyword.trim().length!==0 && isPublic!==-1){
        pSQL = `where name like '%${keyword}%' and isPublic = ?`;
        execArr=[isPublic,offset,limit]
      }else if(keyword.trim().length===0 && isPublic!==-1){
        pSQL = `where isPublic = ?`;
        execArr=[isPublic,offset,limit]
      }else if(keyword.trim().length!==0 && isPublic === -1){
        pSQL = `where name like '%${keyword}%'`;
      }
      const sql=`select p.id,p.name,p.isPublic,p.description,p.createTime,p.updateTime,
                 JSON_OBJECT('userId',p.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) as user
                 from playlist as p
                 left join user as u on u.userId = p.userId
                 ${pSQL}
                 order by p.createTime desc
                 limit ?,?`;
      console.log(sql)
      const result = await connection.execute(sql,execArr);
      const count = await new PlaylistService().getPlaylistCount(ctx,keyword,isPublic);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserPlaylistCountService(ctx,userId,keyword){
    try{
      const sql=`select count(*) as count from playlist where userId=? ${keyword!==''? `and playlist.name like '%${keyword}%'` :''}`;
      const result = await connection.execute(sql,[userId]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async getUserPlaylistService(ctx,userId,keyword,offset,limit){
    try{
      const sql=`select p.id,p.name,p.isPublic,p.description,JSON_OBJECT('userId',p.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user,
                 p.createTime,p.updateTime,count(p.id) as video,
                 if(f.picUrl is null,u.avatarUrl,f.picUrl) as picUrl
                 from playlist as p
                 LEFT JOIN user as u on u.userId = p.userId
                 LEFT JOIN playlist_video as pv on pv.pId = p.id
                 LEFT JOIN video as v on v.id = pv.vId
                 LEFT JOIN video_file as vf on vf.videoId =v.id
                 LEFT JOIN file as f on f.id = vf.fileId
                 where p.userId=? ${keyword!==''? `and playlist.name like '%${keyword}%'` :''} and (vf.mark="cover" or vf.mark is null)
                 GROUP BY p.id
                 ORDER BY p.updateTime desc
                 limit ?,?`;
      const result = await connection.execute(sql,[userId,offset,limit]);
      const count = await new PlaylistService().getUserPlaylistCountService(ctx,userId,keyword);
      return {
        count:count[0].count,
        list:result[0],
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{});
    }
  }
  async playlistDetailService(ctx,id){
    try{
      const sql=`SELECT p.id,p.name,p.isPublic,p.description,p.createTime,p.updateTime,
       JSON_OBJECT('userId',p.userId,'userName',u.userName,'avatarUrl',u.avatarUrl) AS user
       FROM playlist as p
       LEFT JOIN user as u on u.userId = p.userId
       where p.id = ?`;
      const result = await connection.execute(sql,[id]);
      return result[0];
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async playlistVideoCountService(ctx,id){
    try{
      const sql=`
      select count(DISTINCT(v.id)) as count
      from video as v
      INNER JOIN playlist_video as pv on v.id = pv.vId
      LEFT JOIN playlist as p on pv.pId = p.id
      LEFT JOIN category as c on c.id = v.cateId
      LEFT JOIN tag_video as tv on tv.vId = v.id
      LEFT JOIN tag on tag.id = tv.tId
      LEFT JOIN video_file as vf on vf.videoId =v.id
      LEFT JOIN file as f on f.id = vf.fileId
      WHERE p.id = ?`;
      const result = await connection.execute(sql,[id]);
      return result[0]
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async playlistVideoService(ctx,id,offset,limit){
    try{
      const sql=`
      select v.id,v.name,v.playCount,v.dt,v.description,v.createTime,v.updateTime,f.picUrl,
       (select JSON_object('userId',v.userId,'userName',u.userName,'avatarUrl',u.avatarUrl)
			 from user as u where u.userId = v.userId) as user,
			 JSON_OBJECT('id',v.cateId,'name',c.name,'createTime',c.createTime,'updateTime',c.updateTime) AS category,
			 JSON_ARRAYagg(JSON_OBJECT('id',tv.tId,'name',tag.name,'createTime',tag.createTime,'updateTime',tag.updateTime)) as tag
       from video as v
       INNER JOIN playlist_video as pv on v.id = pv.vId
       LEFT JOIN playlist as p on pv.pId = p.id
       LEFT JOIN category as c on c.id = v.cateId
       LEFT JOIN tag_video as tv on tv.vId = v.id
       LEFT JOIN tag on tag.id = tv.tId
       LEFT JOIN video_file as vf on vf.videoId =v.id
       LEFT JOIN file as f on f.id = vf.fileId
       WHERE p.id = ? and vf.mark="cover"
       GROUP BY v.id
       limit ?,?`;
      const result = await connection.execute(sql,[id,offset,limit]);
      const count = await new PlaylistService().playlistVideoCountService(ctx,id);
      return {
        count:count[0].count,
        list:result[0]
      }
    }catch (e) {
      setResponse(ctx,e.message,500,{})
    }
  }
  async selectUserSubPlaylist(ctx,playlistId,userId){
    try{
      const sql=`select userId playlistId from sub_playlist where userId = ? and playlistId = ?`;
      const result = await connection.execute(sql,[userId,playlistId]);
      return result;
    }catch (e) {
      setResponse(ctx,'error',500,{})
    }
  }
  async subPlaylistService(ctx,playlistId,userId){
    try{
      const sql=`insert into sub_playlist(userId,playlistId) values(?,?)`;
      const result = await connection.execute(sql,[userId,playlistId]);
      return result[0]
    }catch (e) {
      setResponse(ctx,'error',500,{})
    }
  }
}
module.exports = new PlaylistService();
