import React, { Component } from 'react';
import s from '../style.module.scss';
import listImg1 from '../images/list_img1.png';
import { Link } from 'react-router-dom';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          header: '心理学家：房间越乱的人，这3种能力越突出，无论男女',
          content:
            '有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说房间越乱的人，某种能力越突出时，超级开心。因为平时经常被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！'
        },
        {
          id: 2,
          header: '心理学家：房间越乱的人，这3种能力越突出，无论男女',
          content:
            '有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说房间越乱的人，某种能力越突出时，超级开心。因为平时经常被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！'
        },
        {
          id: 3,
          header: '心理学家：房间越乱的人，这3种能力越突出，无论男女',
          content:
            '有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说房间越乱的人，某种能力越突出时，超级开心。因为平时经常被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！'
        }
      ],
      fakeId: 4
    };
  }
  render() {
    return (
      <Link to={'/detail/' + 1} className={s.list_info}>
        {this.state.list.map((item) => {
          return (
            <div className={s.list_item} key={item.id}>
              {/* 左 */}
              <div className={s.list_content}>
                <h3>{item.header}</h3>
                <p>{item.content}</p>
              </div>
              {/* 右*/}
              <img src={listImg1} alt="" />
            </div>
          );
        })}
        {/* 加载更多 */}
        <div className={s.add_more} onClick={this.addMore}>
          加载更多
        </div>
      </Link>
    );
  }
  addMore = () => {
    // 假装获取了数据
    let obj = {
      id: this.state.fakeId,
      header: '心理学家：房间越乱的人，这3种能力越突出，无论男女',
      content:
        '有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说房间越乱的人，某种能力越突出时，超级开心。因为平时经常被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！'
    };
    this.setState({
      list: [...this.state.list, obj],
      fakeId: this.state.fakeId + 1
    });
  };
}

export default List;
