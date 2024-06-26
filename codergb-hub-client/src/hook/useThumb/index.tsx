import { useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../types/login/ILogin';
import { useLoginMsg } from '../useLoginMsg';

export const useThumb = (alias: 'video' | 'comment' | 'moment', id?: string): boolean => {
  const loginState = useLoginMsg();
  let isExists = -1;
  if (loginState) {
    const { userDetail } = loginState;
    if (userDetail?.thumb[alias] && userDetail.thumb[alias].length !== 0 && id) {
      isExists = userDetail.thumb[alias].findIndex((item, index) => {
        return id === item.id;
      });
    }
  }
  return isExists !== -1;
};
export const useTread = (alias: 'video' | 'comment' | 'moment', id?: string): boolean => {
  const loginState = useLoginMsg();
  let isExists = -1;
  if (loginState) {
    const { userDetail } = loginState;
    if (userDetail?.tread[alias] && userDetail.tread[alias].length !== 0 && id) {
      isExists = userDetail.tread[alias].findIndex((item, index) => {
        return id === item.id;
      });
    }
  }
  return isExists !== -1;
};
