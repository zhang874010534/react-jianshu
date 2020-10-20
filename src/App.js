import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Detail from './pages/detail/index.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail" component={Detail}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
