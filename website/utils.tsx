import React, { ReactNode, FC } from 'react';
import { withStyles, Box, Link, Typography, Toolbar } from "@material-ui/core";
import { HelpOutline, Check as MuiCheck, Close as MuiClose } from '@material-ui/icons';
import { pipe, sortBy, prop, map } from 'ramda';
import { DesignKit, FrameworkFeaturesById, SuperString } from '../entities';
import { noValue } from '../utils';

export const TitleWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '1em 0',
  },
})(Box);

interface GroupTitleProps {
  title: string;
  subtitle?: SuperString;
  actions?: JSX.Element;
}

export const GroupTitle: FC<GroupTitleProps> = ({ title, subtitle, actions }) => {
  const subtitleSection = subtitle && (
    <Typography variant="subtitle2">
      {typeof subtitle === 'string' ? subtitle : subtitle.jsx}
    </Typography>
  );

  return (
    <Toolbar>
      <TitleWrapper>
        {<Typography variant="h5">{title}</Typography>}
        {subtitleSection}
      </TitleWrapper>
      {actions}
    </Toolbar>
  );
};

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
