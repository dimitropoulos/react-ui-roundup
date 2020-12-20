import { Container as MuiContainer, ThemeProvider, withStyles } from '@material-ui/core';
import React, { FC, useEffect } from 'react';

import { frameworkInfo, frameworkInfoByFeatureId, frameworks } from '../frameworks';
import { Components } from './Components';
import { FrameworkFeatures } from './FrameworkFeatures';
import { FrameworkStatistics } from './FrameworkStatistics';
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
        <FrameworkStatistics
          frameworks={frameworks}
        />
        <FrameworkFeatures
          frameworkInfo={frameworkInfo}
          frameworkInfoByFeatureId={frameworkInfoByFeatureId}
          frameworks={frameworks}
        />
        <Components
          frameworks={frameworks}
        />
      </Container>
    </ThemeProvider>
  );
};
