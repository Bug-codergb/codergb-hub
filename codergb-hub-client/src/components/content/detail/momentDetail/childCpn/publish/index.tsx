import React, { memo, type FC } from 'react';
import { PublishWrapper } from './style';
import Comment from '../../../../../common/comment';
import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../../../../../types/login/ILogin';

interface IProps {
  id: string;
}
const Publish: FC<IProps> = (props) => {
  const { id } = props;
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  return (
    <PublishWrapper>
      <Comment alias={'mId'} user={loginState.userMsg} id={id} />
    </PublishWrapper>
  );
};
export default memo(Publish);
