import React from '../../../../../node_modules/react';
import ReactDOM from '../../../../../node_modules/react-dom';
import {MemoryRouter, Route} from '../../../../../node_modules/react-router-dom';
import DefaultLayout from '../DefaultLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Route path="/" name="Home" component={DefaultLayout} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
