import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserChannel } from '../../../../../network/channel';
import { IResponseType } from '../../../../../types/responseType';
import { IChannel } from '../../../../../types/channel/IChannel';
const changeChannelAction = createAsyncThunk(
  'changeChannelAction',
  async (extraInfo: { userId: string }, { dispatch }) => {
    const { userId } = extraInfo;
    const data = await getUserChannel<IResponseType<IChannel>>(userId);
    if (data.status === 200) {
      console.log(data.data);
      return data.data;
    }
  }
);
export { changeChannelAction };
