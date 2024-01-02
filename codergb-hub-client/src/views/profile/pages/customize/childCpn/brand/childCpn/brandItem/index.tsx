import React, { memo, FC, ReactElement } from 'react';
import { BrandItemWrapper } from './style';
interface IProps {
  title: string;
  label: string;
  img: ReactElement;
  desc: string;
  uploadHandle: () => void;
  operator: string;
  isAvatar: boolean;
}
const BrandItem: FC<IProps> = (props): ReactElement => {
  const { title, label, img, desc, uploadHandle, operator, isAvatar } = props;
  const uploadClick = () => {
    uploadHandle();
  };
  return (
    <BrandItemWrapper isAvatar={isAvatar}>
      <div className="title">{title}</div>
      <div className="label">{label}</div>
      <div className="content">
        <div className="img-container">{img}</div>
        <div className="right-content">
          <p className="desc">{desc}</p>
          <div className="upload" onClick={(e) => uploadClick()}>
            {operator}
          </div>
        </div>
      </div>
    </BrandItemWrapper>
  );
};
export default memo(BrandItem);
