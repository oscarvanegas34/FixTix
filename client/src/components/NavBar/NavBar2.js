import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
  } from 'reactstrap';

export default class NavBar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand >FIXTIX </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-1">
                <Button  color="primary" size="sm">Create Ticket</Button>{' '}                 
              </NavItem>
              <NavItem className="mr-1">
                <Button color="secondary" size="sm">Sign-out</Button>                
              </NavItem>    
              <NavItem>
                <Button color="secondary" size="sm">Reset Password</Button>                 
              </NavItem>          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}