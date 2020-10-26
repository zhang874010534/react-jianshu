import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../common/header';
// import s from './style.module.scss';
class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.isLogin)
      return (
        <div>
          <Header></Header>
          write
        </div>
      );
    else {
      return <Redirect to="/sign_in"></Redirect>;
    }
  }
}
let mapState = (state) => {
  return {
    isLogin: state.getIn(['loginReducer', 'isLogin'])
  };
};
export default connect(mapState, null)(Write);
