import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PublicFiles from './publicFiles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  	{console.log("dfdfdfdf")}
    <App />
    <PublicFiles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
