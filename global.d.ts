import 'jest-extended';

import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as React from 'react';

declare global {
  namespace JSX {
    export interface Element extends React.ReactElement<any, any> { }
  }
  interface Window {
    R: typeof R;
    RA: typeof RA;
  }
}
