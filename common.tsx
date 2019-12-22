import React, { ReactNode } from 'react';
import { withStyles, Box, Link } from "@material-ui/core";
import { HelpOutline, Check as MuiCheck, Close as MuiClose } from '@material-ui/icons';
import { pipe, sortBy, prop, map } from 'ramda';
import { DesignKit, FrameworkFeaturesById, Checkbox } from './entities';
import { noValue } from './utils';

export const GroupTitle = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    background: theme.palette.background.default,
  },
}))(Box);

export const Check = withStyles({
  root: {
    fill: 'green',
  }
})(MuiCheck);

export const Close = withStyles({
  root: {
    fill: 'red',
  }
})(MuiClose);

export const checkmark = (value: boolean | undefined) => {
  if (value === undefined) {
    return <HelpOutline />;
  }

  if (value) {
    return <Check />;
  }
  return noValue;
  // return null;
};

export const stringArray = (sizes: string[] | null) => sizes ? sizes.sort().join(', ') : noValue;

export const designKits = (designKits: FrameworkFeaturesById['designKits']) => designKits !== false ? (
  pipe<DesignKit[], DesignKit[], ReactNode[], ReactNode>(
    sortBy(prop('type')),
    map(({ href, type }) => (
      <Link href={href} key={type} style={{ marginRight: 8 }}>{type}</Link>
    )),
    kits => <>{kits}</>,
  )(designKits)
) : checkmark(false);

export const themer = (themer: FrameworkFeaturesById['themer']) => themer !== false ? (
  <Link href={themer as unknown as string}>Link</Link>
) : checkmark(themer);
