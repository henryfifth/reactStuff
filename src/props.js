//create or use two react components you have built. next one inside the other. 
//In the top most component, pass a 'prop' into it and display that 'prop'
//in the bottom component. You'll probably need to look this up
import React, { Component } from 'react';

export default class Props extends Component{
  constructor(){
    super();
    this.prop = "this is a STRING";
    }
  render(){
    return (<Props2 value="cookies"/>);
  }
}
class Props2 extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    console.log(this.props);
    return (
      <p>
     {this.props.value}
      </p>
    );
  }
}
