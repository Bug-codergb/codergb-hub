import React, { memo, FC, ReactElement } from "react";
import { notification } from "antd";
import { SubBtnWrapper } from "./style";
import { useSub } from "../../../hook/useSub";
import { useLoginMsg } from "../../../hook/useLoginMsg";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { sub, cancelSub } from "../../../network/subscriber";
import { changeUserDetailAction } from "../../../views/login/store/actionCreators";
interface IProps {
  userId: string;
}
const SubBtn: FC<IProps> = (props): ReactElement => {
  const { userId } = props;
  const isSub = useSub(userId);
  const loginMsg = useLoginMsg();
  const dispatch = useDispatch<Dispatch<any>>();
  const subHandler = async () => {
    if (!isSub) {
      const result = await sub(userId);
      if (result.status === 200) {
        notification.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: "bottomLeft",
        });
      }
    } else {
      const result = await cancelSub(userId);
      if (result.status === 200) {
      }
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch(changeUserDetailAction(loginMsg.userMsg.userId));
    }
  };
  return (
    <SubBtnWrapper>
      <div className="inner" onClick={() => subHandler()}>
        {isSub ? "已订阅" : "订阅"}
      </div>
    </SubBtnWrapper>
  );
};
export default memo(SubBtn);
