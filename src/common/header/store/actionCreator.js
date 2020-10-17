// 可以考虑在这个里面把异步操作统一管理
// redux-thunk使得dispatch可以传入一个函数
import axios from 'axios';
export const getSearchItem = () => {
  return (dispatch) => {
    axios.get('/api/demo.json').then((res) => {
      console.log(res);
    });
  };
};
