import { Map } from 'immutable';
import { type IVideo } from '../../../../types/video/IVideo';
import localCache from '../../../../utils/cache';
const defaultState = Map<IVideo[]>({
  queue: []
});
const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'changeQueue':
      const q = state.getIn(['queue']) as IVideo[];
      q.unshift(action.video as IVideo);
      localCache.setCache('queue', q);
      return state.setIn(['queue'], q);
    case 'changeQueueList':
      localCache.setCache('queue', action.queue);
      return state.setIn(['queue'], action.queue);
    default:
      return state;
  }
};
export default reducer;
