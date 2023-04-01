function addTime(time){
  if(time.toString().includes(":")){
    const diff=2;
    const timeArr = time.split(":").filter((item)=>item!==null && item.toString().length!==0);
    let hour="";
    let minute="";
    let second="";
    if(timeArr.length===2){
      let  m =timeArr[0]??"0";
      let s = timeArr[1]??"0";
      let newSecond = parseInt(s??"")+2;
      let newMinute= parseInt(m??"");
      if(newSecond>59){
        newSecond = newSecond-60;
        newMinute = parseInt(m??"")+1;
      }
      return `${newMinute>59?'01:':''}${newMinute>59 ?'00' :newMinute.toString().padStart(2,"0")}:${newSecond.toString().padStart(2,"0")}`
    }else if(timeArr.length===3){
      let  m =timeArr[1]??"0";
      let s = timeArr[2]??"0";
      let h=timeArr[0]??"0"
      let newSecond = parseInt(s??"")+2;
      let newMinute= parseInt(m??"");
      let newHour = parseInt(h??'');
      if(newSecond>59){
        newSecond = newSecond-60;
        newMinute = parseInt(m??"")+1;
      }
      if(newMinute>59){
        newMinute=newMinute-60;
        newHour = parseInt(h??"")+1
      }
      return `${newHour.toString().padStart(2,"0")}:${newMinute>59?'01:':''}${newMinute>59 ?'00' :newMinute.toString().padStart(2,"0")}:${newSecond.toString().padStart(2, "0")}`
    }else{
      return time;
    }
  }else{
    return time;
  }
}
module.exports={
  addTime
}
