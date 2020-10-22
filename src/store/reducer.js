import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
export default combineReducers({
  headerReducer,
  detailReducer
});
