import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

declare global {
  interface Window {
    R: typeof R;
    RA: typeof RA;
  }
}