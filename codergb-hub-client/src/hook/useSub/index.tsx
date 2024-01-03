import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../types/login/ILogin';

export const useSub = (upId?: string): boolean => {
  let isExists = -1;
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  if (loginState) {
    const { userDetail } = loginState;
    if (userDetail && userDetail.subscriber.length !== 0 && upId) {
      isExists = userDetail.subscriber.findIndex((item, index) => {
        return upId === item.userId;
      });
    }
  }
  return isExists !== -1;
};
