import React, {Component} from 'react';

class Inheritance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p>This is Inheritance</p>
                <div>=============</div>
                {this.props.children}
                <p>LLLLLLfet:</p>
                {this.props.left}
                <p>RRRRRRRR:</p>
                {this.props.right}
            </div>
        );
    }
}

export default Inheritance;