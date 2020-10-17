import React, { FC, useEffect } from 'react';
import { ThemeProvider, Container as MuiContainer, withStyles } from '@material-ui/core';

import { Components } from './Components';
import { FrameworkStatistics } from './FrameworkStatistics';
import { FrameworkFeatures } from './FrameworkFeatures';
import { Header } from './Header';
import { theme } from './theme';
import { scrollIntoView } from './utils';

const Container = withStyles(theme => ({
  [theme.breakpoints.down('sm')]: {
    root: {
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))(MuiContainer);

export const App: FC = () => {
  useEffect(() => {
    scrollIntoView(window.location.hash.replace('#', ''))();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <FrameworkStatistics />
        <FrameworkFeatures />
        <Components />
      </Container>
    </ThemeProvider>
  );
};
