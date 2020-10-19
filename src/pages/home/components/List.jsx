import React, { Component } from 'react';
import s from '../style.module.scss';
import listImg1 from '../images/list_img1.png';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={s.list_info}>
        <div className={s.list_item}>
          {/* 左 */}
          <div className={s.list_content}>
            <h3>心理学家：房间越乱的人，这3种能力越突出，无论男女</h3>
            <p>
              有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说
              房间越乱的人，某种能力越突出时，超级开心。因为平时经常
              被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！
            </p>
          </div>
          {/* 右*/}
          <img src={listImg1} alt="" />
        </div>
        <div className={s.list_item}>
          {/* 左 */}
          <div className={s.list_content}>
            <h3>心理学家：房间越乱的人，这3种能力越突出，无论男女</h3>
            <p>
              有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说
              房间越乱的人，某种能力越突出时，超级开心。因为平时经常
              被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！
            </p>
          </div>
          {/* 右*/}
          <img src={listImg1} alt="" />
        </div>
        <div className={s.list_item}>
          {/* 左 */}
          <div className={s.list_content}>
            <h3>心理学家：房间越乱的人，这3种能力越突出，无论男女</h3>
            <p>
              有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说
              房间越乱的人，某种能力越突出时，超级开心。因为平时经常
              被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！
            </p>
          </div>
          {/* 右*/}
          <img src={listImg1} alt="" />
        </div>
      </div>
    );
  }
}

export default List;
