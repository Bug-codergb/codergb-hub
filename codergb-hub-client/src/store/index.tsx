import { configureStore } from '@reduxjs/toolkit';
import { reducer as loginReducer } from '../views/login/store/index';
import { reducer as channelReducer } from '../views/profile/pages/customize/store/index';
const store = configureStore({
  reducer: {
    loginReducer,
    channelReducer
  },
  devTools: true
});

export default store;
