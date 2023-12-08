import React, { memo, FC } from "react";
import CommunityPro from "../../../../../../views/explore/childCpn/common/childCpn/community";
import { IChannel } from "../../../../../../types/channel/IChannel";
interface IProps {
  userId: string;
  channel?: IChannel;
}
const Community: FC<IProps> = (props) => {
  const { userId, channel } = props;
  console.log(channel);
  return (
    <div>
      {channel && (
        <CommunityPro userId={userId} cId={channel.id} isShowPub={false} />
      )}
    </div>
  );
};
export default memo(Community);
