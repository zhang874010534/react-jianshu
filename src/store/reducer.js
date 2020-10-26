import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';
export default combineReducers({
  headerReducer,
  detailReducer,
  loginReducer
});
