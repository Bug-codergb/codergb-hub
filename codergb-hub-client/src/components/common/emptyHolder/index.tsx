import React, { memo, type FC, type ReactElement } from 'react';
import { Empty } from 'antd';
import { EmptyHolderWrapper } from './style';
interface IProps {
  msg?: string;
  padding: number;
}
const EmptyHolder: FC<IProps> = (props): ReactElement => {
  const { msg, padding } = props;
  return (
    <EmptyHolderWrapper padding={padding}>
      <Empty description={msg || '暂无数据'} />
    </EmptyHolderWrapper>
  );
};
export default memo(EmptyHolder);
