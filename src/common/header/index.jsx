import React, { Component } from 'react';
import s from './style.module.scss';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          写文章
        </a>
        <a href="/sign_up" className={`${s.sign_up} ${s.btn}`}>
          注册
        </a>
        <a href="/sign_in" className={`${s.log_in} ${s.btn}`}>
          登录
        </a>
        {/* 中间首页和瞎子啊 */}
        <div className={s.nav}>
          <div>
            <span className={s.home}>首页</span>
          </div>
          <div className={s.download}>下载App</div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className={s.search}
              placeholder="搜索"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
