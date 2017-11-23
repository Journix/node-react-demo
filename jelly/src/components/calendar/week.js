import React, { Component } from 'react';

class Week extends Component {

    constructor() {
        super();
        this.state = {
            week: ["日","一","二","三","四","五","六"]
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
      console.log(111)
      let nstr = new Date();
      let ynow = nstr.getFullYear();
      let mnow = nstr.getMonth();
      let dnow = nstr.getDate();
      let mnow_real = mnow;
    }

    componentDidMount () {
      console.log(222)
    }

    componentDidUpdate () {
      console.log(333)
    }

    render() {
        return (
            <div className = "week" >
                {
                    this.state.week.map( (item, index) => {
                        return <span key={index} className="weekName">{item}</span>
                    })
                }
            </div>
        );
    }
}

export default Week;