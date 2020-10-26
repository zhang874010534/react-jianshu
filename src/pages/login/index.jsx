import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import s from './style.module.scss';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    if (!this.props.isLogin) {
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
            <button className={s.button} onClick={this.props.login}>
              登录
            </button>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
let mapState = (state) => {
  return {
    isLogin: state.getIn(['loginReducer', 'isLogin'])
  };
};
let mapDispatch = (dispatch) => {
  return {
    login() {
      dispatch({ type: 'login', value: true });
    }
  };
};
export default connect(mapState, mapDispatch)(Login);
