import React, { Component } from 'react';
import s from './style.module.scss';
import banner from '../../static/home/images/banner.png';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Write from './components/Write';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.home_wrapper}>
        <div className={s.home_left}>
          <img src={banner} alt="" />
          <Topic></Topic>
          <List></List>
        </div>
        <div className={s.home_right}>
          <Recommend></Recommend>
          <Write></Write>
        </div>
      </div>
    );
  }
}

export default Home;
