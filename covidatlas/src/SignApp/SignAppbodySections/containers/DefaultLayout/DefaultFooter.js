import React, { Component } from '../../../../../node_modules/react';
import PropTypes from '../../../../../node_modules/prop-types';
import "./../wrap.css";


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment className="">
       {/* <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>*/}
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
