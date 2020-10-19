import { fromJS } from 'immutable';
// 把对象转换成immutable对象
const initialState = fromJS({
  value: 'header value'
});
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
