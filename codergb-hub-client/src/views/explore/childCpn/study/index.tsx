import React, { memo, FC } from 'react';
import Common from '../common';
interface IProps {
  userId: string;
}
const Study: FC<IProps> = (props) => {
  const { userId } = props;
  return (
    <div>
      <Common userId={userId} />
    </div>
  );
};
export default memo(Study);
