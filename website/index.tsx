import { CssBaseline } from '@material-ui/core';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

window.R = R;
window.RA = RA;

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
