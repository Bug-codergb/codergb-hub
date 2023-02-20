import React, {memo, FC, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Image, Pagination} from 'antd';
import {
  HomeWrapper
} from "./style"
import {ICollection} from "../../../../../../types/collection/ICollection";
import {getUserCol} from "../../../../../../network/collection";
import {IResponseType} from "../../../../../../types/responseType";
import {IPage} from "../../../../../../types/IPage";
import HolderCpn from "../../../../../../components/holder";
import holder from "../../../../../../assets/img/placeholder.png"
interface IProps{
  userId:string
}
const Home:FC<IProps>=(props)=>{
  const { userId } = props;
  const [collection,setCollection] = useState<ICollection[]>([]);
  const [total,setTotal] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(()=>{
    getUserCol<IResponseType<IPage<ICollection[]>>>(userId,0,8).then((data)=>{
      if(data.status===200){
        setTotal(data.data.count);
        setCollection(data.data.list);
      }
    })
  },[userId])
  const pageChange=(e:number)=>{
    getUserCol<IResponseType<IPage<ICollection[]>>>(userId,(e-1)*8,8).then((data)=>{
      if(data.status===200){
        setTotal(data.data.count);
        setCollection(data.data.list);
      }
    })
  }
  const videoRouter=(item:ICollection)=>{
    navigate("/videoDetail",{
      replace:true,
      state:{
        cId:item.id
      }
    })
  }
  return <HomeWrapper>
    <ul className='col-list'>
      {
        collection && collection.length!==0 && collection.map((item,index)=>{
          return (
              <li key={item.id}>
                <div className='left-container'>
                  <Image className={'img-cover'}
                         width={120}
                         height={120}
                         src={item.picUrl}
                         onClick={()=>videoRouter(item)}
                         fallback={holder} preview={false}/>
                </div>
                <div className='right-container'>
                  <p className="name text-nowrap-mul-line">{item.name}</p>
                  <p className={'desc text-nowrap-mul-line'}>{item.description}</p>
                  <p className='count'>{item.count}个作品</p>
                </div>
              </li>
          )
        })
      }
      {
        HolderCpn(collection.length, 4, 350)
      }
    </ul>
    <div className='page'>
      <Pagination defaultCurrent={1} pageSize={8} total={total} onChange={e=>pageChange(e)}/>
    </div>
  </HomeWrapper>
}
export default memo(Home);