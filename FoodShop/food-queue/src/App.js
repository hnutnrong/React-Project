import React, { Component } from 'react';
import FoodInput from './components/FoodInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 align="center">Food Queue Application</h2>
        <div className="row">
          <FoodInput />

        </div>

      </div>
    );
  }
}

export default App;
