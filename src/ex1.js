import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.
//2)using the object:
//go through each menuItem and display the "value" in your react html
/*{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuItem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}*/
class DaysOfClass extends Component{
  constructor(){
    super();
    this.today = new Date();
    this.end = new Date("2017/12/08");
    this.daysUntilEnd = Math.floor(Math.abs(this.end-this.today) / 1000/60/60/24) + " Days until end of School!";
    this.obj = {"menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", "onclick": "CreateNewDoc()"},
          {"value": "Open", "onclick": "OpenDoc()"},
          {"value": "Close", "onclick": "CloseDoc()"}
        ]
      }
    }}
    this.list = [];
   this.obj.menu.popup.menuitem.forEach((e, i)=>{
     this.list.push("Menu item " + (i + 1) + ": " + this.obj.menu.popup.menuitem[i].value);
   });
  }
  render(){
    return (
      <div>
        {this.daysUntilEnd}
        <ul>
          <li>
          {this.list[0]}
          </li>
          <li>
          {this.list[1]}
          </li>
          <li>
          {this.list[2]}
          </li>
        </ul>
      </div>
    );
  }
}

export default DaysOfClass;
//using the reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html

