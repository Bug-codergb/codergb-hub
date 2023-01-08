import type { ColumnsType } from 'antd/es/table';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import moment from "moment";
import {
  PlaylistItemWrapper
} from "./style";
import {IPlaylist} from "../../../../types/playlist/IPlaylist";
import {USER_PLAYLIST} from "../../../../constant/menu";
import {NavigateFunction} from "react-router/dist/lib/hooks";

const playlistRouter=(item:IPlaylist,navigate:NavigateFunction)=>{
  navigate(`${USER_PLAYLIST}/${item.id}`,{
    replace:false
  })
}
const columns=(navigate :NavigateFunction): ColumnsType<IPlaylist> =>{
  return [
    {
      title: '播放列表',
      dataIndex: 'name',
      render: (text: string,item) =>{
        return <PlaylistItemWrapper>
          <div className="left-container">
            <div className="img-container" onClick={e=>playlistRouter(item,navigate)}>
              <img src={item.picUrl} alt={item.name}/>
            </div>
          </div>
          <div className="right-container">
            <div className="right-msg">
              <p className="name">{item.name}</p>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        </PlaylistItemWrapper>;
      },
    },
    {
      title:"公开范围",
      dataIndex: 'isPublic',
      render:(text:string,item:IPlaylist)=>{
        const { isPublic } = item;
        if(isPublic ===1){
          return <EyeOutlined/>
        }else{
          return <EyeInvisibleOutlined/>
        }
      }
    },
    {
      title: '上次更新时间',
      dataIndex: 'createTime',
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render:(time:string)=>{
        return moment(time).format("yyyy-MM-DD HH:mm")
      }
    },
    {
      title: '视频数',
      dataIndex: 'video',
      render:(video:number|null)=>{
        return video ? video : 0
      }
    },
  ];
}
export {
  columns
}