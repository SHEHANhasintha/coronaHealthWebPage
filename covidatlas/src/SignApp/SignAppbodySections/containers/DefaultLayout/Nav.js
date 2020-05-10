import React, { Component } from 'react';
import { Link ,withRouter } from 'react-router-dom';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText

} from 'reactstrap';
import PropTypes from 'prop-types';
import "./../wrap.css";
import "./nav.css";


import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../../assets/img/brand/person-icon.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {

  constructor(props){
    super(props);
    this.state = {
      toggle : false,
      isOpen: false

    }

    
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)

  }

  toggle = () => {

  }

  isOpen = () => {

    console.log("isopen");
  }


  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment className="nav">
        <header class="app-header navbar">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">CovidAtlas</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="navItem">
                  
                  <NavLink href="/components/"><span className="text-primary icon-truck"></span><span className="label">OnTheWay</span></NavLink>
                </NavItem>
                <NavItem className="navItem">
                  <NavLink href="/components/"><span className="text-primary icon-gift"></span><span className="label">Delivered</span></NavLink>
                </NavItem>
                <NavItem className="navItem">
                  <NavLink href="/components/"><span className="text-primary icon-verified_user"></span><span className="label">Verification</span></NavLink>
                </NavItem>
                <NavItem className="navItem">
                  <NavLink href="/components/"><span className="text-primary icon-add"></span></NavLink>
                </NavItem>

              </Nav>
                <div>
                <NavLink href="/components/"><span className="text-primary icon-phone2"></span></NavLink>
                </div>
                <div>
                <NavLink href="/components/"><span className="text-primary icon-markunread"></span></NavLink>
                </div>
                <img src="assets/img/avatars/3.jpg" className="profilePhoto" />
                <NavbarText>Simple Text</NavbarText>
              
            </Collapse>
          </Navbar>
        </header>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
