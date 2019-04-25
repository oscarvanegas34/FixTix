import React from 'react';
import { Col, Form, FormGroup, Label, Input, Dropdown, DropdownMenu, DropdownToggle, DropdownItem   } from 'reactstrap';

export default class CreateUserForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="firstName" sm={4}>First Name</Label>
          <Col sm={8}>
            <Input type="name" name="name" id="firstName" placeholder="Enter your first name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="secondName" sm={4}>Last Name</Label>
          <Col sm={8}>
            <Input type="lastname" name="lastname" id="secondName" placeholder="Enter your last name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={4}>Email</Label>
          <Col sm={8}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Ex: Jon.Doe@email.com" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="companyName" sm={4}>Company Name</Label>
          <Col sm={8}>
            <Input type="email" name="email" id="companyName" placeholder="Enter the company name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={4}>User Type</Label>
          <Col sm={4}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="primary">
                All clients are regular users
                </DropdownToggle>
                <DropdownMenu right>                    
                    <DropdownItem>Regular User</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Super User</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </Col>
        </FormGroup>        
        {/* <FormGroup check row>
          <Col sm={{ size:2, offset: 2 }}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup> */}
      </Form>
    );
  }
}