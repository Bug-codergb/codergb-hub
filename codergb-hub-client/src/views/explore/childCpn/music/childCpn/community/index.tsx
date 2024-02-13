import React, { memo, type FC } from 'react';
import { CommunityWrapper } from './style';
import CommunityPro from '../../../../../../views/explore/childCpn/common/childCpn/community/index';
interface IProps {
  cId?: string;
  userId: string;
}
const Community: FC<IProps> = (props) => {
  const { cId, userId } = props;
  return (
    <CommunityWrapper>
      {cId && <CommunityPro userId={userId} cId={cId} isShowPub={false} />}
    </CommunityWrapper>
  );
};
export default memo(Community);
