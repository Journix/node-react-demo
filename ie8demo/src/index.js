require('core-js/fn/object/assign');

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/index/index';
import List from './pages/list/list';
import registerServiceWorker from './registerServiceWorker';

import store from './stores'


import { createHashHistory } from 'history';
// var routerHistory = require('react-router').useRouterHistory;   //去掉?_k=****
// var routerHistory = require('react-router').useRouters;   //去掉?_k=****
// import { useRouters } from 'react-router/lib';
// const appHistory = routerHistory(createHashHistory)({ queryKey: false }) ;
// const appHistory = useRouters(createHashHistory)({ queryKey: false }) ;
// import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Router, Route, Link, hashHistory} from 'react-router';

// 需要服务端做配置
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();

// import createHistory from 'history/lib/createHashHistory';
// const history = createHistory();


class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)

const Home = () => (
  <div>
    <h3>Home10</h3>
  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

const Inbox = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>

  </div>
)

// ReactDOM.render(
//   <Provider store={store}>
//     <HashRouter>
//       <App>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/inbox" component={Inbox} />
//       </App>
//     </HashRouter>
//   </Provider>,
//   document.getElementById('root')
// );

React.render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <App>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/inbox" component={Inbox} />
//       </App>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );





