//using react components, create a 3 x 3 table,  where each cell in the table
//contains a react component that displays the integers 1 - 9 like this:
//1 2 3
//4 5 6
//7 8 9
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';

export default class App extends Component {
  constructor(){
    super();
    this.arr = [];
    for(var i = 1; i <= 9; i++){
      this.arr[i]=i;
     console.log("The number is: " + i);
    }
  }
  render(){
    /*
    <table>
      <tr>
        <td>info</td>
      </tr>
      </table>
    */ 
    
    return (
  
    <table>
      <tr>
        <td>{this.arr[1]}</td>
        <td>{this.arr[2]}</td>
        <td>{this.arr[3]}</td>
      </tr>
      <tr>
        <td>{this.arr[4]}</td>
        <td>{this.arr[5]}</td>
        <td>{this.arr[6]}</td>
      </tr>
      <tr>
        <td>{this.arr[7]}</td>
        <td>{this.arr[8]}</td>
        <td>{this.arr[9]}</td>
      </tr>
      </table>
    )
  }
}