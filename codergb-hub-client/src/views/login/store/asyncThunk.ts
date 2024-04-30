import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../network/login';
import localCache from '../../../utils/cache';
import { type IResponseType } from '../../../types/responseType';
import { type IUserMsg } from '../../../types/user/IUserMsg';
import { changeUserMsg, changeUserDetail, changeLoginType } from './slice';
import { getUserMsg } from '../../../network/user';
import { type IUserDetail } from '../../../types/user/IUserDetail';

import { changeChannelAction } from '../../profile/pages/customize/store/asyncThunk';

const loginAsyncThunk = createAsyncThunk(
  'loginAction',
  async (extraInfo, { dispatch, getState }) => {
    const { username, password, navigate } = extraInfo;
    const result = await login<IResponseType<IUserMsg>>(username, password);
    if (result.status === 200) {
      console.log(result.data);
      localCache.setCache('userMsg', result.data);
      localCache.setCache('loginType', 1);
      await dispatch(changeUserMsg(result.data));
      await dispatch(changeUserDetailAsyncThunk({ userId: result.data.userId, setMsg: false }));
      await dispatch(changeLoginType(1));
      await dispatch(changeChannelAction({ userId: result.data.userId }));
      navigate('/home');
    }
    // 或者通过return result.data
  }
);
const changeUserDetailAsyncThunk = createAsyncThunk(
  'changeUserDetailAction',
  async (extraInfo: { userId: string; setMsg: boolean }, { dispatch }) => {
    const { userId, setMsg = false } = extraInfo;
    const data = await getUserMsg<IResponseType<IUserDetail>>(userId);
    if (data.status === 200) {
      dispatch(changeUserDetail(data.data));
      localCache.deleteCache('userDetail');
      localCache.setCache('userDetail', data.data);
    }
  }
);
export { loginAsyncThunk as loginAction };
