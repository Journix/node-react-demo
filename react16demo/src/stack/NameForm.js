import React, { Component } from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            value:evt.target.value
        });
    }

    handleSubmit(evt){
        alert('提交内容:'+this.state.value);
        evt.preventDefault();
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="提交按钮"></input>
            </form>
        );
    }
}

export default NameForm;