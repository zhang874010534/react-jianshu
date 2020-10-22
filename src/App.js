import React, { Component } from 'react';
// import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Detail from './pages/detail/index.jsx';
import Login from './pages/login/index.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail/:id" component={Detail}></Route>
            <Route exact path="/sign_in" component={Login}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
