import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row} from 'reactstrap';
import jwt_decode from 'jwt-decode';
import { getOrderDetails } from './../../UserFunctions';

class ListGroups extends Component {

constructor(props) {
    super(props);

    this.state = {
      userID:'',
      email:'',
      password:'',
      userOrders:[],
    }
  }
  
 componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token) ;      
    this.state.userID = decoded._id;
     getOrderDetails(this.state.userID).then(res => {
        if (res) {
        this.setState({ userOrders : res });
        console.log(this.state.userOrders);
        console.log('Data has been received!!');
        }
      })
  }


 render() {

    return (
   
    
      <div className="animated fadeIn">
        

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>List Group</strong>
                <small> custom content</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                { this.state.userOrders.map((order,index) => {
                return(
                  <ListGroupItem  action key={order.index}>
                    
                    <ListGroupItemHeading>{order.orderName}</ListGroupItemHeading>
                    <ListGroupItemText>{order.discription}</ListGroupItemText>
                    
                  </ListGroupItem>
                  )})}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default ListGroups;
