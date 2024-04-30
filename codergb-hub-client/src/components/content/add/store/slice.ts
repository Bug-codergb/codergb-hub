import { createSlice } from '@reduxjs/toolkit';
import localCache from '@/utils/cache';
const queueSlice = createSlice({
  name: 'queue',
  initialState: {
    queue: []
  },
  reducers: {
    changeQueue(state, { payload }) {
      const q = [...state.queue];
      q.unshift(payload);
      state.queue = q;
      localCache.setCache('queue', q);
    },
    changeQueueList(state, { payload }) {
      localCache.setCache('queue', payload);
      state.queue = payload;
    }
  }
});
const { changeQueue, changeQueueList } = queueSlice.actions;
const reducer = queueSlice.reducer;
export { changeQueue, changeQueueList, reducer };
