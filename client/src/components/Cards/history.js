import React from "react"
import { Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
  



function History(){

return (

    <div className="col-5" style={{float:"right"}}>
      <Card>
        <CardBody className="bg-secondary">
        <CardTitle><h3 className="text-white"> History <Button>Reply</Button> <Button>Forward</Button></h3></CardTitle>



        <Card>
         
        <CardTitle><h5>Name</h5></CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        
        </Card>
    </CardBody>
      </Card>
    </div>
)
}

export default History;