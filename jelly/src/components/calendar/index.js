import React, { Component } from 'react';

import Header from './header'
import Week from './week'
import DetailDate from './detailDate'
import './index.css';

class Calendar extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentWillMount () {
      let _self = this;
      console.log(111)
      let nstr = new Date();
      let ynow = nstr.getFullYear();
      let mnow = nstr.getMonth();
      let dnow = nstr.getDate();
    }

    componentDidMount () {
    }

    componentDidUpdate () {
    }

    render() {
        return (
            <div className = "Calendar" >
                <Header/>
                <Week/>
                <DetailDate/>
            </div>
        );
    }
}

export default Calendar;