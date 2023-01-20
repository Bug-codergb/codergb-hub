import React, {memo, FC, ReactElement, useState, useEffect} from "react";
import {ExploreWrapper} from "./style";
import {ICate} from "../../types/category/ICate";
import {getCateExplore} from "../../network/category";
import {IResponseType} from "../../types/responseType";
const Explore:FC=()=>{
  const [explore,setExplore] = useState<ICate[]>([]);
  const [currentIndex,setCurrentIndex]= useState<number>(0);
  useEffect(()=>{
    getCateExplore<IResponseType<ICate[]>>().then((data)=>{
      setExplore(data.data);
    })
  },[])
  const liClick=(item:ICate,index:number)=>{
    setCurrentIndex(index);
  }
  return (
    <ExploreWrapper>
      <ul className="explore-list">
        {
          explore && explore.length!==0 && explore.map((item,index)=>{
            return (
                <li key={item.id} className={currentIndex === index? 'active':''} onClick={e=>liClick(item,index)}>
                  <span>{item.name}</span>
                </li>
            )
          })
        }
      </ul>
    </ExploreWrapper>
  )
}
export default memo(Explore)