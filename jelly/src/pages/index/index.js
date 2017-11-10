import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Index page</h2>
        </div>
        <p>props {this.props.name}</p>
      </div>
    );
  }
}

export default App;
