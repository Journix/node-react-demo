import React, { Component } from 'react';


class NameComp extends React.Component {
    constructor(props){
        super(props);
        this.nameChange = this.nameChange.bind(this);
    }
    nameChange(e){
        this.props.onNameChange(e.target.value);
    }
    render(){
        const name_ = this.props.name_;
        return (
            <div>
                <input value={name_} onChange={this.nameChange}></input>
            </div>
        );
    }
}
class AgeComp extends React.Component {
    constructor(props){
        super(props);
        this.ageChange = this.ageChange.bind(this);
    }
    ageChange(e){
        this.props.onAgeChange(e.target.value);
    }
    render(){
        const age = this.props.age;
        return (
            <div>
                <input value={age}
                onChange={this.ageChange}></input>
            </div>
        );
    }
}

class UnitComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            age:""
        }
        this.nameChange = this.nameChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
    }
    nameChange(name){
        this.setState({name:name})
    }
    ageChange(age){
        this.setState({age:age})
    }
    render(){
        return (
            <div>
                
            Name <NameComp name_={this.state.name}
                onNameChange={this.nameChange}
            ></NameComp>
            Age <AgeComp age={this.state.age}
                onAgeChange={this.ageChange}>
            </AgeComp>
            // <br/>
             MyName {this.state.name};;
             MyAge {this.state.age};;
            </div>
            );
    }
}


export default UnitComp;