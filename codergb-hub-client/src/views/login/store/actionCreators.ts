import { type IUserDetail } from '../../../types/user/IUserDetail';
import { type IUserMsg } from '../../../types/user/IUserMsg';
import { type IResponseType } from '../../../types/responseType';
import { login } from '../../../network/login';
import localCache from '../../../utils/cache';
import { type NavigateFunction } from 'react-router/dist/lib/hooks';
import { getLoginMsg, getUserMsg } from '../../../network/user';
import { changeChannelAction } from '../../profile/pages/customize/store/actionCreators';
import { type ILogin } from '../../../types/login/ILogin';

export function changeUserMsg(userMsg: IUserMsg) {
  return {
    type: 'changeUserMsg',
    userMsg
  };
}
export function changeUserDetail(userDetail: IUserDetail) {
  return {
    type: 'changeUserDetail',
    userDetail
  };
}
export function changeLoginType(loginType: number) {
  return {
    type: 'changeLoginType',
    loginType
  };
}
export function loginAction(userName: string, password: string, navigate: NavigateFunction) {
  return async (dispatch: any) => {
    try {
      const data = await login<IResponseType<IUserMsg>>(userName, password);
      if (data.status === 200) {
        localCache.setCache('userMsg', data.data);
        localCache.setCache('loginType', 1);
        await dispatch(changeUserMsg(data.data));
        await dispatch(changeUserDetailAction(data.data.userId, false));
        await dispatch(changeLoginType(1));
        await dispatch(changeChannelAction(data.data.userId));

        navigate('/Home', {
          replace: true
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function changeUserDetailAction(userId: string, setMsg: boolean = false) {
  return async (dispatch: any, state: any) => {
    const loginState = state().getIn(['loginReducer', 'login']) as ILogin;
    try {
      const data = await getUserMsg<IResponseType<IUserDetail>>(userId);
      if (data.status === 200) {
        dispatch(changeUserDetail(data.data));
        localCache.deleteCache('userDetail');
        localCache.setCache('userDetail', data.data);
        await dispatch(changeChannelAction(userId));
      }

      if (setMsg) {
        const userMsg = await getLoginMsg<IResponseType<IUserMsg>>(userId);
        if (userMsg.status === 200) {
          const msg = userMsg.data;
          msg.token = loginState.userMsg.token ?? '';
          localCache.setCache('userMsg', msg);
          dispatch(changeUserMsg(msg));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
}
