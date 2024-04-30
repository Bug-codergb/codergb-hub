import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAction as loginAsyncThunk } from './asyncThunk';
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userMsg: {
      userId: '',
      userName: '',
      avatarUrl: '',
      token: ''
    },
    userDetail: {
      userId: '',
      userName: '',
      avatarUrl: '',
      token: '',
      subscriber: [],
      thumb: {
        video: [],
        comment: []
      },
      tread: {
        video: [],
        comment: []
      }
    },
    loginType: 0
  },
  reducers: {
    changeUserMsg(state, { payload }) {
      state.userMsg = payload;
    },
    changeUserDetail(state, { payload }) {
      state.userDetail = payload;
    },
    changeLoginType(state, { payload }) {
      state.loginType = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncThunk.pending, (state, action) => {})
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        console.log(action);
      });
  }
});

/* const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'changeUserMsg':
      return state.setIn(['login', 'userMsg'], action.userMsg);
    case 'changeLoginType':
      return state.setIn(['login', 'loginType'], action.loginType);
    case 'changeUserDetail':
      return state.setIn(['login', 'userDetail'], action.userDetail);
    default:
      return state;
  }
}; */
const { changeUserMsg, changeUserDetail, changeLoginType } = loginSlice.actions;
const reducer = loginSlice.reducer;
export { changeUserMsg, changeUserDetail, changeLoginType, reducer, loginSlice };
