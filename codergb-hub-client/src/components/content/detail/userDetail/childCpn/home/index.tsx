import React,{memo,FC,Fragment} from 'react';
import moment from "moment";
import {IChannel} from "../../../../../../types/channel/IChannel";
import {HomeWrapper} from "./style";
interface IProps{
  userId:string,
  channel?:IChannel,
}
const Home:FC<IProps>=(props)=>{
  const {channel}=props;
  return (
      <HomeWrapper>
        <div className="trailer">
          <div className="left-container">
            {
              channel && channel.trailer && <img src={channel.trailer?.picUrl} alt={channel.trailer.name}/>
            }
          </div>
          {
            channel &&channel.trailer&& <Fragment>
              <div className="right-container">
                <p className="video-name">{channel.trailer?.name}</p>
                <p className="play-count-time">
                  <p className="count">{channel.trailer?.playCount}次观看</p>
                  <p>{moment(channel.trailer?.createTime).fromNow()}</p>
                </p>
                <p className="desc">{channel.trailer?.description}</p>
              </div>
            </Fragment>
          }
        </div>
      </HomeWrapper>
  )
}
export default memo(Home);