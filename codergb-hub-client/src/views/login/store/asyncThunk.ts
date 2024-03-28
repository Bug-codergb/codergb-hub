import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../network/login';
import localCache from '../../../utils/cache';
import { IResponseType } from '../../../types/responseType';
import { IUserMsg } from '../../../types/user/IUserMsg';
import { changeUserMsg, changeUserDetail, changeLoginType } from './slice';
const loginAsyncThunk = createAsyncThunk(
  'loginAction',
  async (extraInfo, { dispatch, getState }) => {
    console.log(extraInfo);
    const { username, password, navigate } = extraInfo;
    const result = await login<IResponseType<IUserMsg>>(username, password);
    if (result.status === 200) {
      console.log(result.data);
      localCache.setCache('userMsg', result.data);
      localCache.setCache('loginType', 1);
      dispatch(changeUserMsg(result.data));
    }
    //或者通过return result.data
  }
);
export { loginAsyncThunk as loginAction };
