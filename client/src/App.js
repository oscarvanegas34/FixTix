import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from '../src/components/NavBar/NavBar2';
import NavBar1 from '../src/components/NavBar/NavBar1';
// import logo from './logo.svg';
import './App.css';
import History from "./components/Cards/history"
import Search from "./components/Cards/search"

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTicketModal from '../src/components/Modals/CreateTicket/CreateTicketModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1/>
        <NavBar2/>
        <History />
        <Search />

      </div>
    );
  }
}

export default App;
