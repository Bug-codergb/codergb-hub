import React, { memo, type FC } from 'react';
import { OrdinaryWrapper } from './style';
import Common from '../common';
interface IProps {
  userId: string;
}
const Ordinary: FC<IProps> = (props) => {
  const { userId } = props;
  return (
    <OrdinaryWrapper>
      <Common userId={userId} />
    </OrdinaryWrapper>
  );
};
export default memo(Ordinary);
