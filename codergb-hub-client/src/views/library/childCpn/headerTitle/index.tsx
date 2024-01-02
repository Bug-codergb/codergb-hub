import React, { memo, FC } from 'react';
import { HeaderTitleWrapper } from './style';
interface IProp {
  title: string;
  more: string;
  moreHandle: () => void;
}
const HeaderTitle: FC<IProp> = (props) => {
  const { title, more, moreHandle } = props;
  const moreClickHandle = () => {
    moreHandle();
  };
  return (
    <HeaderTitleWrapper>
      <div className="header-title">
        <div className="left-title">{title}</div>
        <div className="more" onClick={(e) => moreClickHandle()}>
          {more}
        </div>
      </div>
    </HeaderTitleWrapper>
  );
};
export default memo(HeaderTitle);
