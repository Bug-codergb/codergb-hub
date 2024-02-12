import { memo, type FC, type ReactElement } from 'react';
import Community from '../../../../views/explore/childCpn/common/childCpn/community';
interface IProps {
  userId: string;
  channelId: string;
}
const Moment: FC<IProps> = (props): ReactElement => {
  const { userId, channelId } = props;
  return <div>{channelId && <Community userId={userId} cId={channelId} isShowPub={false} />}</div>;
};
export default memo(Moment);
