import React, { Component } from 'react';

class Barf extends Component{
  render(){
    return (
      <h2>Having a bad day</h2>
    );
  }
}
//Create another react component the same way as you did before
//This time, we're going to use this component WITHIN your other 
//component - that's right, we can nest components. Call the component
// "Barf"
export default Barf;
//export it in this file, then import it into your index.js file and put the tag
//inside the div's in your render method and viola! 
