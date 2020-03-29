// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// serviceWorker.unregister();

const initialState = {
  result: 15000,
  value: []
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer); ///15000คือค่า State เอามาเก็ฐไว้ใน Store

store.subscribe(() => {  ///ใช่อัพเดทค่า State แสดงค่า State
  console.log("Update Store:", store.getState());
})
store.dispatch({   ///.dispatch ใช้ในการเปลี่ยนแปลงค่าใน State
  type: "ADD",   /// ดู action.type ว่าเป็นอะไรถ้าเป็น "ADD" มันก็จะไปตาม Case  acion.payload คือค่าที่เราส่งไปเผื่อเปลี่ยนแปลงค่า State
  payload: 15000  ///ค่าที่เราส่งไปเพื่อทำการเปลี่ยนแปลงค่า State

});

store.dispatch({
  type: "ADD",
  payload: 15000
});

store.dispatch({
  type: "SUBTRACT",
  payload: 8000
});