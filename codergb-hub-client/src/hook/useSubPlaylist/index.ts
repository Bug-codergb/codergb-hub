import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../types/login/ILogin';

export const useSubPlaylist = (pId: string): boolean => {
  let isExists = -1;
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  if (loginState) {
    const { userDetail } = loginState;
    if (userDetail?.subPlaylist && userDetail.subPlaylist.length !== 0 && pId) {
      isExists = userDetail.subPlaylist.findIndex((item, index) => {
        return `${item}` === `${pId}`;
      });
    }
  }
  return isExists !== -1;
};
