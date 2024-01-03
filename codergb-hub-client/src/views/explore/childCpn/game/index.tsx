import React, { memo, type FC } from 'react';
import Common from '../common';
interface IProps {
  userId: string;
}
const Game: FC<IProps> = (props) => {
  const { userId } = props;
  return (
    <div>
      <Common userId={userId} />
    </div>
  );
};
export default memo(Game);
