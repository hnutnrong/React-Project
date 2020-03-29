import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';  /// combineReducers ในกรณีมี Ruducer หลายตัว
import { Provider } from 'react-redux';


const initialState = {
  result: 15000,
  value: []
}

const userReducer = (state = { name: "Nutnarong", age: 21 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload
      }
      break;

    case "setAge":
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
  }
  return state;
}

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {  //action ใช้ในการเปลี่ยนแปลงค่า
    case "ADD":  //ถ้าเป็น ADD ให้บวก
      // state += action.payload;
      state = {
        // result:state.result,  
        // value:state.value
        ...state,
        //หรือจะเขียนแบบนี้ก็ได้
        result: state.result += action.payload,
        value: [...state.value, action.payload]

      }
      break;

    case "SUBTRACT":  //ถ้าเป็น subtract ให้ -
      // state -= action.payload;
      state = {
        // result:state.result,  
        // value:state.value
        ...state,
        //หรือจะเขียนแบบนี้ก็ได้
        result: state.result -= action.payload,
        value: [...state.value, action.payload]

      }
      break;
    default:
  }
  return state;
}

const store = createStore(combineReducers({emp:employeeReducer,user:userReducer })); 
//มี Reducer หลายตัว ใช้ combineReducer อย่าลืม import ด้วย
//emp,user กำหนดตัวแปรไปใช้ mapStatetoProps ใน App.js

store.subscribe(() => {  ///ใช่อัพเดทค่า State แสดงค่า State
  console.log("Update Store:", store.getState());
})
// store.dispatch({   ///.dispatch ใช้ในการเปลี่ยนแปลงค่าใน State
//   type: "ADD",     /// ดู action.type ว่าเป็นอะไรถ้าเป็น "ADD" มันก็จะไปตาม Case  acion.payload คือค่าที่เราส่งไปเผื่อเปลี่ยนแปลงค่า State
//   payload: 15000   ///ค่าที่เราส่งไปเพื่อทำการเปลี่ยนแปลงค่า State

// });

// store.dispatch({    ///.dispatch ใช้ในการเปลี่ยนแปลงค่าใน State
//   type:"setName",
//   payload:"Redux"
// })

// store.dispatch({    ///.dispatch ใช้ในการเปลี่ยนแปลงค่าใน State
//   type:"setAge",
//   payload:"22"
// })

ReactDOM.render(                  //Provider เราจะนำ state ใน store มาทำงานร่วมกับ component
  <Provider store={store}>  
    <App />
  </Provider>

  ,document.getElementById('root')
);

