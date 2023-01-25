import React, {memo, FC, useEffect, useState} from 'react';
import { Image } from 'antd';
import {
  HomeWrapper
} from "./style"
import {ICollection} from "../../../../../../types/collection/ICollection";
import {getUserCol} from "../../../../../../network/collection";
import {IResponseType} from "../../../../../../types/responseType";
import {IPage} from "../../../../../../types/IPage";
import HolderCpn from "../../../../../../components/holder";
interface IProps{
  userId:string
}
const Home:FC<IProps>=(props)=>{
  const { userId } = props;
  const [collection,setCollection] = useState<ICollection[]>([]);
  const [total,setTotal] = useState<number>(0);
  useEffect(()=>{
    getUserCol<IResponseType<IPage<ICollection[]>>>(userId,0,8).then((data)=>{
      if(data.status===200){
        setTotal(data.data.count);
        setCollection(data.data.list);
      }
    })
  },[userId])
  return <HomeWrapper>
    <ul className='col-list'>
      {
        collection && collection.length!==0 && collection.map((item,index)=>{
          return (
              <li key={item.id}>
                <div className='left-container'>
                  <Image className={'img-cover'} width={120} height={120} src={item.picUrl} alt={item.name} preview={false}/>
                </div>
                <div className='right-container'>
                  <p className="name">{item.name}</p>
                  <p className={'desc text-nowrap-mul-line'}>{item.description}</p>
                </div>
              </li>
          )
        })
      }
      {
        HolderCpn(collection.length, 4, 350)
      }
    </ul>
  </HomeWrapper>
}
export default memo(Home);