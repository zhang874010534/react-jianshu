import { Map } from 'immutable';
// 把对象转换成immutable对象
const initialState = Map({
  value: 'header value'
});
export default (state = initialState, action) => {
  if (action.type === 'demo') {
    // .set方法会结合以前的state，返回新的对象
    return state.set('value', 'header change');
  }
  return state;
};
