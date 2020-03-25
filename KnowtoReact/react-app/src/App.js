import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  var users = [
    { name: "Nutnarong", isDeveloper: true },     ///true คือเป็น Developer
    { name: "Miler", isDeveloper: false }
  ];

  const numbers = [10, 20, 30, 40];
  const result = numbers.reduce((sum, number) => {
    return sum + number
  }, 0) //0 คือค่า default ตอนต้นว่าจะให้เป็นเท่าไหร่



  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            users
              .filter(user => user.isDeveloper)   ///ให้แสดงเฉพาะที่เป็น Developer
              .map(user => <li>{user.name}</li>)
          }
          {/* {users.map(user=> <li>{user.name}</li>)}    */}
        </ul>
        {result}
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
