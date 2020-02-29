import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as ramda from 'ramda';
import * as ramdaAdjunct from 'ramda-adjunct';

// @ts-ignore
window.R = ramda;
// @ts-ignore
window.RA = ramdaAdjunct;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}