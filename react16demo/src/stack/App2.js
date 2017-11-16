import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './List.js';
import Clock from './Clock.js';
import Calculator from './Temp.js';
import UnitComp from './myState.js';
import NameForm from './NameForm.js';
import Reservation from './Reservation.js';
import Inheritance from './Inheritance.js';
import FilterableProductTable from './FilterableProductTable.js';
import OfficialFilterableProductTable from './OfficialFilterableProductTable';
import Grandparent from './Ref';

class App extends Component {
  constructor(props){
      super(props);
      this.hide = true;
  }

  render() {
    let others = "";
    if(!this.hide){
      others =  (          <div>
              <div>==========================</div>
             <Inheritance left={<h2>This is LEft</h2>} right={<h4>rrrrright</h4>} >
                <p>888888</p>
              </Inheritance>
              <div>==========================</div>
              <NameForm></NameForm>
              <UnitComp></UnitComp>
              <Calculator></Calculator>
              <Clock></Clock>
              <Reservation></Reservation>
              <List name="AABBA"></List>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
          </div>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grandparent/>
        <div>-------- OfficialFilterableProductTable -------</div>
        {OfficialFilterableProductTable}
        <div>-------- me -------</div>
        <FilterableProductTable></FilterableProductTable>
        {others}

      </div>
    );
  }
}

export default App;
