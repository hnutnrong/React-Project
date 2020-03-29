import React, { Component } from 'react';
import User from './User.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <User
          username={this.props.user.name}>
        </User>
        <button onClick={() => this.props.setName("NutChangeName")}>ChangeName</button> 
      </div>
    );
  }
}
//สร้างComponent ส่งค่า properties ที่มีชื่อว่า username 
//{this.props.user.name}มาจาก mapStatetoProps 
//  onClick เป็นAction ให้ทำเวลากดปุ่ม

const mapStatetoProps = (state) => {    //เปลี่ยน Stateใน index.js มาเป็น Properties
  return {
    user: state.user,   //user มาจาก State user  ที่อยู่ใน userReducer ใน index.js
    emp: state.emp      //user มาจาก State user  ที่อยู่ใน employeeReducer ใน index.js
  };
}

const mapDispatchtoProps = (dispatch) => {  //เปลี่ยนแปลงค่าใน State
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name
      });
    }
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App); 
