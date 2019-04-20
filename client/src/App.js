import React, { Component } from 'react';
import NavBar2 from '../src/components/NavBar/NavBar2';
// import logo from './logo.svg';
import './App.css';
import History from "./components/Cards/history"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar2/>
        <History />


      </div>
    );
  }
}

export default App;
