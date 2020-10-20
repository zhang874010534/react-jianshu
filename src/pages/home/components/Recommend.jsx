import React, { Component } from 'react';
import s from '../style.module.scss';
import recommend1 from '../images/recommend1.png';
import recommend2 from '../images/recommend2.png';
import recommend3 from '../images/recommend3.png';
import recommend4 from '../images/recommend4.png';
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.recommend_wrapper}>
        <div className={s.recommend_item}>
          <img src={recommend1} alt="" />
        </div>
        <div className={s.recommend_item}>
          <img src={recommend2} alt="" />
        </div>
        <div className={s.recommend_item}>
          <img src={recommend3} alt="" />
        </div>
        <div className={s.recommend_item}>
          <img src={recommend4} alt="" />
        </div>
      </div>
    );
  }
}

export default Recommend;
