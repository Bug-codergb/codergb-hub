import { Map } from 'immutable';
import { useSelector } from 'react-redux';
import { ILogin } from '../../types/login/ILogin';

export const useLoginMsg = (): ILogin => {
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  return login;
};
