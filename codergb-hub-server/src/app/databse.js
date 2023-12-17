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
        console.log("数据库连接失败")
      }
      else{
        console.log("数据库连接成功");
      }
    })
  }else{
    console.log("数据库连接失败")
  }
})
let c = connection.promise();
let initSQL=` SET @@GLOBAL.sql_mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION";`
c.execute(initSQL);
initSQL = `SET sql_mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION";`;
c.execute(initSQL)
module.exports=c;
