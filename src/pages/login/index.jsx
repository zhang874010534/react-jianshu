import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.login_wrapper}>
        <Link to="/" className={s.logo}></Link>
        <div className={s.main}>
          <input
            type="text"
            className={s.phone_num}
            placeholder="手机号和邮箱"
          />
          <input type="text" className={s.phone_num} placeholder="密码" />
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
