import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { IVideo } from "../../../../../../types/video/IVideo";
import { ICate } from "../../../../../../types/category/ICate";
import { VideoListItemWrapper } from "./style";
import { NavigateFunction } from "react-router-dom";

const videoRouter = (item: IVideo, navigate: NavigateFunction) => {
  navigate(`/videoDetail`, {
    replace: false,
    state: {
      id: item.id,
    },
  });
};
const columns = (navigate: NavigateFunction): ColumnsType<IVideo> => {
  return [
    {
      title: "视频",
      dataIndex: "name",
      render: (text: string, item) => {
        return (
          <VideoListItemWrapper>
            <div className="left-container">
              <div
                className="img-container"
                onClick={() => videoRouter(item, navigate)}
              >
                <img src={item.picUrl} alt={item.name} />
              </div>
            </div>
            <div className="right-container">
              <div className="right-msg">
                <p className="name" onClick={() => videoRouter(item, navigate)}>
                  {item.name}
                </p>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          </VideoListItemWrapper>
        );
      },
    },
    {
      title: "分类",
      dataIndex: "category",
      render: (cate: ICate) => {
        return <Tag color={"green"}>{cate.name}</Tag>;
      },
    },
    {
      title: "标签",
      dataIndex: "tag",
      render: (_, item) => {
        return (
          item.tag &&
          item.tag.length !== 0 &&
          item.tag.map((record) => {
            return (
              <Tag key={record.id} color={"geekblue"}>
                {record.name}
              </Tag>
            );
          })
        );
      },
    },
    {
      title: "日期",
      dataIndex: "createTime",
      sorter: (a, b) =>
        new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (time: string) => {
        return moment(time).format("yyyy-MM-DD HH:mm");
      },
    },
  ];
};
export { columns };
