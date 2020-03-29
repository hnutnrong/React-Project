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
const reducer = (state, action) => {
  switch (action.type) {  //action ใช้ในการเปลี่ยนแปลงค่า
    case "ADD":  //ถ้าเป็น ADD ให้บวก
        state = state + action.payload;
      break;
    case "SUBTRACT":  //ถ้าเป็น subtract ให้ -
        state = state - action.payload;
      break;
    default:
  }
  return state;
}

const store = createStore(reducer, 15000); ///15000คือค่า State เอามาเก็ฐไว้ใน Store

store.subscribe(()=>{  ///ใช่อัพเดทค่า State แสดงค่า State
    console.log("Update Store:",store.getState());
})
store.dispatch({   ///.dispatch ใช้ในการเปลี่ยนแปลงค่าใน State
      type:"ADD",   /// ดู action.type ว่าเป็นอะไรถ้าเป็น "ADD" มันก็จะไปตาม Case  acion.payload คือค่าที่เราส่งไปเผื่อเปลี่ยนแปลงค่า State
      payload:500  ///ค่าที่เราส่งไปเพื่อทำการเปลี่ยนแปลงค่า State
  
});

store.dispatch({
      type:"SUBTRACT",
      payload:1000
});