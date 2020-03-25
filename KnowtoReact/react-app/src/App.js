import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  var users = [
    { name: "Nutnarong" },
    { name: "Miler" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {users.map(user=> <li>{user.name}</li>)}   
        </ul>
      </header>
    </div>
    ///เขียนเป็น arrow function
    ///map ทำการวนไปเอาข้อมูลที่อยู่ใน array
  )
}



// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }

// const App = () => {
//   const getGreeting = (what) => {
//     return `Welcome to ${what}`;
//       //หรือจะเขียนแบบเก่าแบบปกติ "Welcome to " + what;
//   }

// const greeting = getGreeting('JavaScript');


//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{getGreeting()}</h1>
//         {/* <h1><Counter/></h1> */}
//         {greeting}
//       </header>
//     </div>
//   );
// }

export default App;
