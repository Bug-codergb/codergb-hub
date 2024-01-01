import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";

import { NavigateFunction } from "react-router-dom";
import { INotify } from "../../../../types/message";

const videoRouter = (item: INotify, navigate: NavigateFunction) => {};
const columns = (navigate: NavigateFunction): ColumnsType<INotify> => {
  return [
    {
      title: "视频",
      dataIndex: "name",
      render: (text: string, item) => {
        return (
          <div>
            <div className="left-container">
              <div
                className="img-container"
                onClick={() => videoRouter(item, navigate)}
              ></div>
            </div>
            <div className="right-container">
              <div className="right-msg">
                <p className="name" onClick={() => videoRouter(item, navigate)}>
                  {item.content}
                </p>
                <p className="desc">{item.content}</p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "分类",
      dataIndex: "category",
      render: (cate: INotify) => {
        return <Tag color={"green"}>1</Tag>;
      },
    },
    {
      title: "标签",
      dataIndex: "tag",
      render: (_, item) => {
        return <div>1</div>;
      },
    },
    {
      title: "日期",
      dataIndex: "createTime",
      width: "140",
      sorter: (a, b) =>
        new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (time: string) => {
        return moment(time).format("yyyy-MM-DD HH:mm");
      },
    },
  ];
};
export { columns };
