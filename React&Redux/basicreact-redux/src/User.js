import React, { Component } from 'react';

import './App.css';

class User extends Component {
  render(){
    return (
    
    <h1>Hello World: {this.props.username}</h1>  //เรียกใช้ username จาก App.js
    );
   }
  }


export default User;
