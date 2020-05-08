import React from '../../../../../node_modules/react';
import ReactDOM from '../../../../../node_modules/react-dom';
import DefaultAside from '../DefaultAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});
