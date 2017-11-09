import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/index/index';
import List from './pages/list/list';
import registerServiceWorker from './registerServiceWorker';


import { HashRouter, Route, Link, Switch } from 'react-router-dom';

// 需要服务端做配置
// import createHistory from 'history/createBrowserHistory';
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
    <h3>Home</h3>
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

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(
//     <Router history={history}>
//       <div>
//         <Route path="/" exact component={Index} />
//         <Route exact path='aaa/:urlPathParams' component={App}/>
//       </div>
//     </Router>,
//   document.getElementById('root')
// );



