import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.demo();
  }
  render() {
    return (
      <div className={s.header}>
        {/* 左边logo */}
        <a href="/" className={s.logo}>
          {' '}
        </a>
        {/* 注册登录 */}
        <a href="/write" className={`${s.write} ${s.btn}`}>
          <span className="iconfont iconyumaobi"></span>
          写文章
        </a>
        <a href="/sign_up" className={`${s.sign_up} ${s.btn}`}>
          注册
        </a>
        <a href="/sign_in" className={`${s.log_in} ${s.btn}`}>
          登录
        </a>
        <div className={`${s.btn} ${s.headerFont}`}>
          <span className="iconfont iconAa"></span>
        </div>
        {/* 中间首页和下载 */}
        <div className={s.nav}>
          <div>
            <span className={s.home}>首页</span>
          </div>
          <div className={s.download}>下载App</div>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name=""
              id=""
              className={s.search}
              placeholder="搜索"
            />
            <span className={`iconfont iconfangdajing ${s.fangdajing}`}></span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.headerReducer.get('value')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demo() {
      dispatch({ type: 'demo' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
