import { configureStore } from '@reduxjs/toolkit';
import { reducer as loginReducer } from '../views/login/store/index';
const store = configureStore({
  reducer: {
    login: loginReducer
  },
  devTools: true
});

export default store;
