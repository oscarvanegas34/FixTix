import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from '../src/components/NavBar/NavBar2';
import NavBar1 from '../src/components/NavBar/NavBar1';
import CreateUserModal from '../src/components/Modals/CreateUser/CreateUsersModal';
import ForwardTicketModal from '../src/components/Modals/Forward/ForwardTicketModal';

// import logo from './logo.svg';
import './App.css';

// import ReplyForm from './components/Modals/Reply/ReplyForm'

import History from "./components/Cards/history"
import Search from "./components/Cards/search"


import 'bootstrap/dist/css/bootstrap.min.css';
import ReplyModal from './components/Modals/Reply/ReplyModal';
// import CreateTicketModal from '../src/components/Modals/CreateTicket/CreateTicketModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar1/>
        <NavBar2/>

        <ReplyModal/>


        
        <CreateUserModal/>

        <ForwardTicketModal/>
        

master



      </div>
    );
  }
}

export default App;
