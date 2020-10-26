import { fromJS } from 'immutable';
let defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  if (action.type === 'login') {
    return state.set('isLogin', action.value);
  }
  if (action.type === 'login_out') {
    return state.set('isLogin', action.value);
  }
  return state;
};
