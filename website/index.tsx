import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

window.R = R;
// @ts-expect-error
window.RA = RA;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}