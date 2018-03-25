import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';

const auth = new Auth();

let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0 */
let initialState = {
  name: 'Drew',
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
};

window.setState(initialState);

registerServiceWorker();
