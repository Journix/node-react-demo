import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

const App = function(props){

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {props.children}
      </div>
    )
}

const About = function(){

    return <h3>About</h3>
}

const Inbox = function(props){
    return (
      <div>
        <h2>Inbox</h2>
        {props.children || "Welcome to your Inbox"}
      </div>
    )
}

const Message = function(props){

    return <h3>Message {props.params.id}</h3>
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: App },
  childRoutes: [
    { path: 'about', component: About },
    {
      path: 'inbox',
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    },
    {
      component: Inbox,
      childRoutes: [{
        path: 'messages/:id', component: Message
      }]
    }
  ]
}

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>
// ), document.body)

ReactDOM.render((
  <Router history={browserHistory} routes={routes} />
), document.body)