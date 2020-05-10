import React, { Component } from '../../../../../node_modules/react';
import { 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
 } from '../../../../../node_modules/reactstrap/lib';
import PropTypes from '../../../../../node_modules/prop-types';
import classNames from '../../../../../node_modules/classnames';
import { AppSwitch } from '@coreui/react'
import "./card.css"
import "./../wrap.css";


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment className="card">
        <Card>
          <CardImg top width="100%" height="300px" src={`${this.props.src}`} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button outline>Button</Button>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
