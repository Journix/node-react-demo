import React, { Component } from 'react';

class DetailDate extends Component {

    constructor() {
        super();
        this.state = {
            calendarData: {
              detail: [],
              selectDay: '', // 选中的日期
              showMonth: '' // 现在展示的月份
            }
        }
    }

    /**
     * 闰年计算函数
     * @param  {[type]}  year [description]
     * @return {Boolean}      [description]
     */
    is_leap(year) {
        return (year % 100 == 0 ? (year % 400 == 0 ? 1 : 0) : (year % 4 == 0 ? 1 : 0));
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

    /**
     * 初始化日历函数
     * @param  {[type]} nstr [description]
     * @param  {[type]} ynow [当前年]
     * @param  {[type]} mnow [当前月]
     * @param  {[type]} dnow [当前日]
     * @return {[type]}      [description]
     */
    calendar(nstr, ynow, mnow, dnow) {
        let _self = this;
        let calendar = [];
        let nlstr = new Date(ynow, mnow, 1); //当月第一天
        let firstday = nlstr.getDay(); //第一天星期几

        let m_days = [31, 28 + _self.is_leap(ynow), 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]; //每个月的天数

        let tr_str = Math.ceil((m_days[mnow] + firstday) / 7); //当前月天数+第一天是星期几的数值   获得 表格行数

        for (let i = 0; i < tr_str; i++) { //表格的行
            let dateArr = [];
            for (let k = 0; k < 7; k++) { //表格每行的单元格
                let idx = i * 7 + k; //单元格自然序列号
                let date_str = idx - firstday + 1; //计算日期
                (date_str <= 0 || date_str > m_days[mnow]) ? date_str = "": date_str = idx - firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）
                dateArr.push(date_str);
            }
            calendar.push(dateArr);
        }
        console.log(calendar);
        _self.setState({
            calendarData: {
                detail: calendar,
                selectDay: '', // 选中的日期
                showMonth: '' // 现在展示的月份
            }
        })
    }

    componentWillMount () {
      let _self = this;
      console.log(111)
      let nstr = new Date();
      let ynow = nstr.getFullYear();
      let mnow = nstr.getMonth();
      let dnow = nstr.getDate();
      let mnow_real = mnow;
      _self.calendar(nstr,ynow,mnow,dnow);
    }

    componentDidMount () {
      console.log(222)
    }

    componentDidUpdate () {
      console.log(333)
    }

    render() {
        return (
            <div className = "Calendar" >
                <div className="date-info">
                  {
                    this.state.calendarData.detail.map( (item, index) => {
                      return <div key={index}>
                        {
                          item.map((date,i) => {
                            return <span key={index+i} className="date">{date}</span>
                          })
                        }
                      </div>
                    })
                  }
                </div>
            </div>
        );
    }
}

export default DetailDate;