import React, { Component } from 'react';
import NavBar2 from '../src/components/NavBar/NavBar2';
import NavBar1 from '../src/components/NavBar/NavBar1';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTicketModal from '../src/components/Modals/CreateTicket/CreateTicketModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1/>
        <NavBar2/>
        <CreateTicketModal />



      </div>
    );
  }
}

export default App;
