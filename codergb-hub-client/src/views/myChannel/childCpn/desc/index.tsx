import React, { memo, FC, ReactElement } from 'react';
interface IProps {
  userId: string;
}
const Desc: FC<IProps> = (props) => {
  return <div>简介</div>;
};
export default memo(Desc);
