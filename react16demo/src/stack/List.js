import React, { Component } from 'react';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems(){
    const num = [1,2,3,4,5];
    const items = num.map((n)=>{
      return (
          <li key={n.toString()}>
            {n}
          </li>
        );
    })
    return items
  }


  render() {
    return (
      <div>
        <div>========List==========</div>
          {this.listItems()}
        <div>====================</div>
      </div>
    );
  }
}


export default List;