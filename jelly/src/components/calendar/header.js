import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    preMonth() { //上一个月
        console.log(mnow);
        if (mnow <= 0) {
            mnow = 11;
            ynow = ynow - 1;
        } else {
            mnow--;
        }
        calendar(nstr, ynow, mnow, dnow);
    }

    nextMonth() { //下一个月
        if (mnow >= 11) {
            mnow = 0;
            ynow = ynow + 1;
        } else {
            mnow++;
        }
        calendar(nstr, ynow, mnow, dnow);
    }

    componentWillMount () {
      let _self = this;
      let ynow = this.props.date.getFullYear();
      let mnow = this.props.date.getMonth()+1;
      this.setState({
        ynow,
        mnow
      })
    }

    componentDidMount () {
      console.log(222)
    }

    componentDidUpdate () {
      console.log(333)
    }

    render() {
        return (
            <div className = "CalendarHeader" >
                <span>&lt;</span>
                <span>{this.state.ynow}年{this.state.mnow}月</span>
                <span>&gt;</span>
            </div>
        );
    }
}

export default Header;