import React, {memo, FC, useEffect, useState, useImperativeHandle, forwardRef, Ref,Fragment} from "react";
import {
  MomentListWrapper
} from "./style";
import {getChannelMoment} from "../../../../../../../../network/moment";
import {IMoment} from "../../../../../../../../types/moment";
import {IResponseType} from "../../../../../../../../types/responseType";
import {IPage} from "../../../../../../../../types/IPage";
import timeMoment from "moment";
import {Dropdown, Pagination} from "antd";
import Operation from "./childCpn/operation";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, MoreOutlined} from "@ant-design/icons";
interface IMomentList{
  getChannelMomentReq:(id:string,offset:number,limit:number)=>void
}
interface IProps{
  cId:string,
  ref:Ref<IMomentList>
}
const MomentList:FC<IProps>=forwardRef((props,propsRef)=>{
  const {cId} = props;
  const [total,setTotal] = useState<number>(0);
  const [moment,setMoment] = useState<IMoment[]>([]);
  const getChannelMomentReq = async (id:string,offset:number,limit:number)=>{
    const result = await getChannelMoment<IResponseType<IPage<IMoment[]>>>(id,offset,limit);
    if(result.status===200){
      setTotal(result.data.count);
      setMoment(result.data.list);
    }
  }
  useImperativeHandle(propsRef,()=>{
    return {
      getChannelMomentReq
    }
  })
  useEffect(()=>{
    getChannelMomentReq(cId,0,10).then(()=>{});
  },[cId]);
  const pageChange=(e:number)=>{
    getChannelMomentReq(cId,(e-1)*10,10).then(()=>{});
  }
  return (
      <MomentListWrapper>
        <ul className="moment-list">
          {
            moment  && moment.length!==0&& moment.map((item,index)=>{
              return (
                  <li key={item.id}>
                    <div className="avatar-container">
                      <img src={item.user.avatarUrl}/>
                    </div>
                    <div className="right-container">
                      <div className="operation">
                        <Dropdown trigger={['click']} overlay={<Operation/>} placement="bottom">
                          <MoreOutlined className="more-icon"/>
                        </Dropdown>
                      </div>
                      <div className="user-info">
                        <p className="user-name">{item.user.userName}</p>
                        <p className="create-time">{timeMoment(item.createTime).fromNow()}</p>
                      </div>
                      <p className="title">
                        {item.title}
                      </p>
                      <p className="content">
                        {item.content}
                      </p>
                      <div className="video-container">
                        <img src={item.video.picUrl}/>
                      </div>
                      <div className="thumb">
                        <div className="thumb-inner">
                           <LikeOutlined className={`thumb-icon`}/>
                            <LikeFilled  className={`thumb-icon`}/>
                          <span className="label">14万</span>
                        </div>
                        <div className="tread">
                          <DislikeOutlined className="tread-icon"/>
                          <DislikeFilled className="tread-icon"/>
                        </div>
                      </div>
                    </div>
                  </li>
              )
            })
          }
        </ul>
        {
          total>10&&<Fragment>
            <div className={'page'}>
              <Pagination defaultCurrent={1} pageSize={10} total={total} onChange={e=>pageChange(e)}/>
            </div>
          </Fragment>
        }
      </MomentListWrapper>
  )
})
export default memo(MomentList);