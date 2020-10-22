import { fromJS } from 'immutable';

let initState = fromJS({
  title: ' 心理学家：房间越乱的人，这3种能力越突出，无论男女',
  content: `  <div className={s.img_container}>
  <p>
    有句老话叫：金窝银窝不如自己的狗窝。当我看到有心理学家说房间越乱的人，某种能力越突出时，超级开心。因为平时经常被老妈念叨房间太乱，这下我终于有理由拒绝整理啦！
  </p>
  
</div>`
});

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
