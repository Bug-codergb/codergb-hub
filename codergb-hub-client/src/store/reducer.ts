import { combineReducers } from 'redux-immutable';
import {reducer as loginReducer} from "../views/login/store/index";
const reducer = combineReducers({
  loginReducer
});

export default reducer;
