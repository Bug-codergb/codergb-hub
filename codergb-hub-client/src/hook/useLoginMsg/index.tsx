import { useSelector } from 'react-redux';
import { type ILogin } from '../../types/login/ILogin';

export const useLoginMsg = (): ILogin => {
  return useSelector<{ loginReducer: ILogin }, ILogin>((state) => {
    return state.loginReducer;
  });
};
