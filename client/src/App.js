import React, { Component } from 'react';
import NavBar2 from '../src/components/NavBar/NavBar2';
import NavBar1 from '../src/components/NavBar/NavBar1';
// import logo from './logo.svg';
import './App.css';
// import ReplyForm from './components/Modals/Reply/ReplyForm'
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



      </div>
    );
  }
}

export default App;
