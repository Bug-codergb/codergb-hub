const mysql=require('mysql2');
const config=require('./config')
const connection=mysql.createPool({
  host:config.MYSQL_HOST,
  database:config.MYSQL_DATABASE,
  user:config.MYSQL_USER,
  port:config.MYSQL_PORT,
  password:config.MYSQL_PASSWORD,
})
connection.getConnection((err,conn)=>{
  if(conn){
    conn.connect((err,connect)=>{
      if(err) {
        console.log("连接失败")
      }
      else{
        console.log("数据库连接成功");
      }
    })
  }else{
    console.log("连接失败")
  }
})
module.exports=connection.promise();