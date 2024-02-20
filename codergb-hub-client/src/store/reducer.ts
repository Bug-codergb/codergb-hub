import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../views/login/store/index';
import { reducer as channelReducer } from '../views/profile/pages/customize/store/index';
import { reducer as queueReducer } from '../components/content/add/store/index';
const reducer = combineReducers({
  loginReducer,
  channelReducer,
  queueReducer
});
export default reducer;
