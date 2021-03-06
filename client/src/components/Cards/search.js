import React from "react"
import { Card, CardText, CardBody,
    CardTitle, Button , Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
  

    export default class Search extends React.Component {
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

           
            <Card className="bg-info" style={{marginLeft: 30, height: 400, width: 500}}>
            <CardBody>
            <CardTitle> <h3>
       
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle>
    Dropdown
  </DropdownToggle>
  <DropdownMenu
    modifiers={{
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: (data) => {
          return {
            ...data,
            styles: {
              ...data.styles,
              overflow: 'auto',
              maxHeight: 200,
            },
          };
        },
      },
    }}
  >
    <DropdownItem header>Status</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Status 1</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Status 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Status 3</DropdownItem>
    <DropdownItem divider />
    <DropdownItem header>Classification</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Classification 1</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Classification 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Classification 3</DropdownItem>
    <DropdownItem divider />
    <DropdownItem header>Urgency</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Urgency 1</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Urgency 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Urgency 3</DropdownItem>
  </DropdownMenu>
</Dropdown>
            
                </h3>
           </CardTitle>
      
      
            <Card>
            <Table>
        <thead>
          <tr>
            <th>Ticket#</th>
            <th>Summary</th>
          </tr>
        </thead>
    
            </Table>
              
            </Card>
        </CardBody>
          </Card>
      

         

          );
        }
      }




