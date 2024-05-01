import { getUserChannel } from '../../../../../network/channel';
import { type IChannel } from '../../../../../types/channel/IChannel';
import { type IResponseType } from '../../../../../types/responseType';
import localCache from '../../../../../utils/cache';

export function changeChannel(channel: IChannel) {
  return {
    type: 'changeChannel',
    channel
  };
}
export function changeChannelAction(userId: string) {
  return async (dispatch: any) => {
    const data = await getUserChannel<IResponseType<IChannel>>(userId);
    if (data.status === 200) {
      dispatch(changeChannel(data.data));
      localCache.setCache('channel', data.data);
    }
  };
}
