import React, { Component, Fragment } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';
import detail_img1 from './images/detail_img1.png';
import Header from '../../common/header/index';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // 临时处理，真正的项目img的src肯定是在服务器上有地址的
    let img = document.querySelector('#detailImg');
    document.querySelector('#content').append(img);
  }
  render() {
    // 这里面可以查询到参数  /detail/:id  的id
    // console.log(this.props.match);
    return (
      <Fragment>
        <Header></Header>
        <div className={s.detail_wrapper}>
          <div className={s.header}>{this.props.title}</div>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.content }}
            id="content"
          ></div>
          <img src={detail_img1} alt="" id="detailImg" />
        </div>
      </Fragment>
    );
  }
}

let mapState = (state) => {
  return {
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
  };
};
export default connect(mapState, null)(Detail);
