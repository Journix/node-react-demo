import React,{Component} from 'react';



function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={props.inputRef} />
    </div>
  );
}


class Grandparent extends React.Component {
    constructor(props){
        super(props);
        this.inputFocus = this.inputFocus.bind(this);
    }
  inputFocus(el){
    this.inputElement = el;
    this.inputElement.focus();
  }

  render() {
    return (
      <Parent
        inputRef={this.inputFocus}
      />
    );
  }
}


export default Grandparent