import React, { Component } from 'react';
//import { Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false],
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
        

	   <Navbar expand="lg">
	      <Navbar.Brand href="/">Code Life</Navbar.Brand>
	      <Navbar.Toggle aria-controls="basic-navbar-nav" />
	      <Navbar.Collapse id="basic-navbar-nav">
		<Nav >
		  <Nav.Item>
		    <Nav.Link>
		      <Link to="/">Home</Link>
		    </Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link>
		      <Link to="/about">About</Link>
		    </Nav.Link>
		  </Nav.Item>
		  <Nav.Item>
		    <Nav.Link>
		      <Link to="/contact">Contact</Link>
		    </Nav.Link>
		  </Nav.Item>
		</Nav>
		<Nav className="ml-auto">
		  <Nav.Item>
		    <Nav.Link>
		      <Link to="/login">Login</Link>
		    </Nav.Link>
		  </Nav.Item>
		</Nav>
	      </Navbar.Collapse>
	    </Navbar>

    );
  }
}

export default Navs;
