import React, { Component, Suspense, lazy } from 'react';
// import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
// import Home from './pages/home';
const Home = lazy(() => import('./pages/home'));
const Detail = lazy(() =>
  import(/*webpackChunkName:'hello'*/ './pages/detail')
);
const Login = lazy(() => import('./pages/login'));
const Write = lazy(() => import('./pages/write'));
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
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/detail/:id" component={Detail}></Route>
              <Route exact path="/sign_in" component={Login}></Route>
              <Route exact path="/write" component={Write}></Route>
            </Switch>
          </Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
