import React, { Component, Fragment } from 'react';
import Header from './common/header';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Header></Header>
      </Fragment>
    );
  }
}

export default App;
