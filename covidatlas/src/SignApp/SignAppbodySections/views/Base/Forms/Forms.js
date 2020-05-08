import React, { Component } from 'react';
import { order } from './../../UserFunctions';
import jwt_decode from 'jwt-decode'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {

 constructor(props) {
    super(props);
    
    this.onChangeOrderName = this.onChangeOrderName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDiscription = this.onChangeDiscription.bind(this);
    this.onChangePayment = this.onChangePayment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userID : '',
      orderName:'',
      address: '',
      discription:'',
      paymentType:'',
    }
  }
    componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      userID: decoded._id,
    })
  }

  onChangeOrderName(e) {
    this.setState({
      orderName: e.target.value
    })
  }
  
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

   onChangeDiscription(e) {
    this.setState({
        discription: e.target.value
    });
  }

   onChangePayment(e) {
    this.setState({
       paymantType: e.target.value
    })
  }





 onSubmit(e) {
    e.preventDefault();

    const medicin = {
      userID : this.state.userID,
      orderName: this.state.orderName,
      address : this.state.address,
      discription: this.state.discription,
      paymentType: this.state.paymentType,
    }

    console.log(medicin);
    console.log(medicin);

    order(medicin).then(res => {
      this.props.history.push(`/profile/forms`)
    })

    this.setState({
      address: '',
      discription:'',
      paymentType:'',
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" 
                      id="text-input" 
                      name="orderName" 
                      placeholder="Order Name"
                      value={this.state.orderName}
		      onChange={this.onChangeOrderName}
                       />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" 
                      id="text-input" 
                      name="address" 
                      placeholder="Address"
                      value={this.state.address}
		      onChange={this.onChangeAddress}
                       />
                    </Col>
                  </FormGroup>
 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">discription</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" 
                      name="discription" 
                      id="textarea-input" rows="9"
                      placeholder="Content..."
                      value={this.state.discription}
		      onChange={this.onChangeDiscription} 
		      />
                    </Col>
                  </FormGroup>
               
               
                  <FormGroup row>
                    <Col md="3">
                      <Label>Payment Type</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" 
                        type="radio" 
                        id="radio1" 
                        name="radios"
                        value="cash"
                        checked={this.state.paymentType = "cash"}
		        onChange={this.onChangePayment}  
		        />
                        <Label check className="form-check-label" htmlFor="radio1">Cash</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" 
                        type="radio" 
                        id="radio2" 
                        name="radios" 
                        value="credit_card"
                        checked={this.state.paymentType = "credit_card"}
		        onChange={this.onChangePayment} 
		      	/>
                        <Label check className="form-check-label" htmlFor="radio2">Credit Card</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>          
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Form>
              </CardBody>
              
            </Card>
          </Col>
      
        </Row>
        
      </div>
    );
  }
}

export default Forms;
