import React, { Component } from 'react';
import NavBar2 from '../src/components/NavBar/NavBar2';
import NavBar1 from '../src/components/NavBar/NavBar1';
// import logo from './logo.svg';
import './App.css';
import History from "./components/Cards/history"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1/>
        <NavBar2/>
        <History />


      </div>
    );
  }
}

export default App;
