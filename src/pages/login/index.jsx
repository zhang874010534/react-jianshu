import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './style.module.scss';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.login_wrapper}>
        <div className={s.main}>
          <input
            type="text"
            className={s.phone_num}
            placeholder="手机号和邮箱"
          />
          <button className={s.button}>登录</button>
        </div>
      </div>
    );
  }
}
let mapState = () => {
  return {};
};
export default connect(mapState, null)(Login);
