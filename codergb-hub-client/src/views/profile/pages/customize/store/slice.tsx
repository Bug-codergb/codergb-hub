import { createSlice } from '@reduxjs/toolkit';
import { changeChannelAction } from './asyncThunk';
import { type IChannel } from '../../../../../types/channel/IChannel';
import { IUserMsg } from '../../../../../types/user/IUserMsg';
interface IChannelSlice {
  channel: IChannel;
}
const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    channel: {
      id: '',
      name: '',
      alias: '',
      official: 0,
      createTime: '',
      updateTime: '',
      description: '',
      user: {
        userId: '',
        userName: '',
        avatarUrl: '',
        token: ''
      }
    }
  },
  reducers: {
    changeChannel(state, { payload }) {
      state.channel = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeChannelAction.pending, (state, action) => {})
      .addCase(changeChannelAction.fulfilled, (state, action) => {
        if (action.payload) state.channel = action.payload;
      })
      .addCase(changeChannelAction.rejected, () => {});
  }
});
const { changeChannel } = channelSlice.actions;
const reducer = channelSlice.reducer;
export { changeChannel, reducer };
