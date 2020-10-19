import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      mouseIn: false,
      list: [
        '学习1',
        '学习2',
        '学习3',
        '学习4',
        '学习5',
        '学习6',
        '读书7',
        '读书8',
        '读书9',
        '读书10',
        '读书11',
        '读书12'
      ],
      page: 1,
      totalPage: 2
    };
  }
  componentDidMount() {
    // this.props.demo();
  }
  componentDidUpdate() {}
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
        {/* 中间首页、下载、搜索 */}
        <div className={s.nav}>
          <div>
            <span className={s.home}>首页</span>
          </div>
          <div className={s.download}>下载App</div>
          {/* 搜索 */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name=""
              id=""
              className={s.search}
              placeholder="搜索"
              onFocus={() => {
                this.setState({ focus: true });
              }}
              onBlur={() => {
                this.setState({ focus: false });
              }}
            />
            <span className={`iconfont iconfangdajing ${s.fangdajing}`}></span>

            {/* 搜索提示框 */}
            {this.showSearchContent(this.state.focus, this.state.mouseIn)}
          </div>
        </div>
      </div>
    );
  }
  showSearchContent(focus, mouseIn) {
    let { page } = this.state;
    let start = (page - 1) * 6;
    let end = page * 6;
    if (focus || mouseIn)
      return (
        <div
          className={s.search_info}
          onMouseEnter={() => {
            this.setState({ mouseIn: true });
          }}
          onMouseLeave={() => {
            this.setState({ mouseIn: false });
          }}
        >
          <div className={s.search_header}>
            <span className={s.hot_search}>热门搜索</span>
            <span onClick={this.changeSearchInfo} style={{ cursor: 'pointer' }}>
              换一批
            </span>
          </div>
          <div className={s.search_content}>
            {this.state.list.slice(start, end).map((item) => {
              return (
                <a href="/" key={item}>
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      );
    else return <div></div>;
  }
  changeSearchInfo = () => {
    let { page, totalPage } = this.state;
    if (page <= totalPage) {
      page++;
    }
    this.setState({
      page
    });
  };
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    value: state.getIn(['headerReducer', 'value'])
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    demo() {
      dispatch(actionCreator.getSearchItem());
    }
    // changeSearchInfo(){
    //   dispatch({tpye:'change_search_info'})
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
