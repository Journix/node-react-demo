import React, { Component } from 'react';
import './list.css';
import Calendar from '../../components/calendar'

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="List-header">
          <h2>list page</h2>
        </div>
        <Calendar/>
      </div>
    );
  }
}

export default List;
