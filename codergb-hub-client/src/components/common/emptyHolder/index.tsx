import React, { memo, FC } from 'react';
import { Empty } from 'antd';
import { EmptyHolderWrapper } from './style';
interface IProps {
  msg?: string;
  padding: number;
}
const EmptyHolder: FC<IProps> = (props) => {
  const { msg, padding } = props;
  return (
    <EmptyHolderWrapper padding={padding}>
      <Empty description={msg ? msg : '暂无数据'} />
    </EmptyHolderWrapper>
  );
};
export default memo(EmptyHolder);
