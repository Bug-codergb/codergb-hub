import React, { memo, FC } from 'react';
import { DescWrapper } from './style';
interface IProps {
  userId: string;
}
const Desc: FC<IProps> = () => {
  return <DescWrapper>jianjie</DescWrapper>;
};
export default memo(Desc);
