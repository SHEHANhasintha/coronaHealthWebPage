import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import jwt_decode from 'jwt-decode'


class User extends Component {
    constructor() {
    super()
    this.state = {
      userID: '',
      username: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      userID: decoded._id,
      username: decoded.username,
      email: decoded.email
      
    })
  }
  




  render() {
const user = {id: this.state.userID, "User Nmae": this.state.username, registered: '2018/01/01', "Email": this.state.email, status: 'Pending'}

const userDetails = Object.entries(user)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col >
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.state.userID}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
