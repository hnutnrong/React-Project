import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}


const App = () => {
  const getGreeting = () => {
    return "Welcome to React";
  }


  

  return (
    <div className="App">
      <header className="App=header">
        <h1>{getGreeting()}</h1>
        <h1><Counter/></h1>
      </header>
    </div>
  );
}

export default App;
