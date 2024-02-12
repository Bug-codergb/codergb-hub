import { memo, type FC } from 'react';
import { Tabs } from 'antd';
import { TabContentWrapper } from './style';
import { tabs } from '../../../../constant/profile/tabs';

interface IProps {
  userId: string;
  channelId: string;
}
const TabContent: FC<IProps> = (props) => {
  const { userId, channelId } = props;
  return (
    <TabContentWrapper>
      <Tabs defaultActiveKey="1" items={tabs(userId, channelId)} />
    </TabContentWrapper>
  );
};
export default memo(TabContent);
