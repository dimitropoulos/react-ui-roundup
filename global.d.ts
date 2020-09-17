import * as React from 'react';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import 'jest-extended';

declare global {
  namespace JSX {
    export interface Element extends React.ReactElement<any, any> { }
  }
  interface Window {
    R: typeof R;
    RA: typeof RA;
  }
}
