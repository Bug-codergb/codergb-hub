import { memo, useEffect, type FC, useState } from 'react';
import moment from 'moment';
import { DescWrapper } from './style';
import { getUserChannel } from '../../../../../../network/channel';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IChannel } from '../../../../../../types/channel/IChannel';
interface IProps {
  userId: string;
}
const Desc: FC<IProps> = (props) => {
  const { userId } = props;

  const [channel, setChannel] = useState<IChannel | null>(null);
  useEffect(() => {
    getUserChannel<IResponseType<IChannel>>(userId).then((res) => {
      if (res.status === 200) {
        setChannel(res.data);
      }
    });
  }, [userId]);
  return (
    <DescWrapper>
      {channel && <div className="desc">{channel.description}</div>}
      <div className="create-time">
        于{moment(channel?.createTime).format('yyyy-MM-DD HH:mm')}加入codergb-hub
      </div>
    </DescWrapper>
  );
};
export default memo(Desc);
