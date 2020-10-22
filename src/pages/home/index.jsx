import React, { PureComponent, Fragment } from 'react';
import s from './style.module.scss';
import banner from '../../static/home/images/banner.png';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Write from './components/Write';
import Header from '../../common/header/index';
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollToTopFlag: false
    };
  }
  componentDidMount() {
    this.throttle.date = Date.now();
    window.addEventListener('scroll', this.throttle);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle);
  }
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className={s.home_wrapper}>
          {/* 左边 */}
          <div className={s.home_left}>
            <img src={banner} alt="" />
            <Topic></Topic>
            <List></List>
          </div>
          {/* 右边 */}
          <div className={s.home_right}>
            <Recommend></Recommend>
            <Write></Write>
          </div>
          {/* 回到顶部 */}
          {this.showScrollTop()}
        </div>
      </Fragment>
    );
  }
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  showScrollTop = () => {
    if (this.state.scrollToTopFlag) {
      return <div className={s.scroll_to_top} onClick={this.scrollToTop}></div>;
    } else {
      return null;
    }
  };
  throttle = () => {
    if (Date.now() - this.throttle.date > 300) {
      this.throttle.date = Date.now();
      if (document.documentElement.scrollTop > 100) {
        this.setState({
          scrollToTopFlag: true
        });
      } else {
        this.setState({
          scrollToTopFlag: false
        });
      }
    }
  };
}

export default Home;
