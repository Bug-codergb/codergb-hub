import React, { memo, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "immutable";
import { Divider, Radio, Table } from "antd";
import { MessageWrapper } from "./style";
import { INotify } from "../../../../types/message";
import { ILogin } from "../../../../types/login/ILogin";
import { useSelector } from "react-redux";
import { getAllNotify } from "../../../../network/notify";
import { IResponseType } from "../../../../types/responseType";
import { IPage } from "../../../../types/IPage";
import { columns } from "./config";
const Message: FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  const [nofity, setNotify] = useState<INotify[]>([]);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });

  useEffect(() => {
    getAllNotify<IResponseType<IPage<INotify[]>>>(
      login.userMsg.userId,
      0,
      4
    ).then((data) => {
      if (data.status === 200) {
        setNotify(data.data.list);
        setCount(data.data.count);
      }
    });
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: INotify[]) => {
      console.log("selectedRows: ", selectedRows);
    },
  };
  const pageChangeHandle = (e: number) => {
    getAllNotify<IResponseType<IPage<INotify[]>>>(
      login.userMsg.userId,

      (e - 1) * 4,
      4
    ).then((data) => {
      if (data.status === 200) {
        setNotify(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return (
    <MessageWrapper>
      {nofity && nofity.length !== 0 && (
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          rowKey={"id"}
          columns={columns(navigate)}
          dataSource={nofity}
          pagination={{
            pageSize: 4,
            total: count,
            onChange: (e) => pageChangeHandle(e),
          }}
        />
      )}
    </MessageWrapper>
  );
};
export default memo(Message);
