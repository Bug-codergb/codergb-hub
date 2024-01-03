import React, { memo, type FC, ReactElement } from 'react';
interface IProps {
  userId: string;
}
const Channel: FC<IProps> = (props) => {
  return <div>频道</div>;
};
export default memo(Channel);
