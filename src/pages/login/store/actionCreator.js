// 如果header的退出要修改login的redux数据，应该引用
// login的actionCreator进行处理

export const loginOut = () => {
  return {
    type: 'login_out',
    value: false
  };
};
