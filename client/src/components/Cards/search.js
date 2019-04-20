import React from "react"
import { Card, CardText, CardBody,
    CardTitle, Button , Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  

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





            <Card>
            <CardBody className="bg-info">
            <CardTitle> 
      
            
            
            
            
            
            
            
            
            
            
           </CardTitle>
      
      
      
            <Card>
             
            <CardTitle>Name</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
            </Card>
        </CardBody>
          </Card>
      

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

          );
        }
      }




