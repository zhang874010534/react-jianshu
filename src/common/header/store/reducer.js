import { fromJS } from 'immutable';
// 把对象转换成immutable对象
const initialState = fromJS({
  value: 'header value'
});
export default (state = initialState, action) => {
  switch (action.type) {
    case 'demo':
      // .set方法会结合以前的state，返回新的对象
      return state.set('value', 'header change');
    default:
      return state;
  }
};
