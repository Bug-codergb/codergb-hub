import React, { memo, type FC } from 'react';
interface IProps {
  userId: string;
}
const WonderChannel: FC<IProps> = (props) => {
  const { userId } = props;
  return <div>dddd</div>;
};
export default memo(WonderChannel);
