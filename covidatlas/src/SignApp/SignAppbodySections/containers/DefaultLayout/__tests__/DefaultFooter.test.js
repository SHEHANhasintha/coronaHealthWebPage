import React from '../../../../../node_modules/react';
import ReactDOM from '../../../../../node_modules/react-dom';
import DefaultFooter from '../DefaultFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
