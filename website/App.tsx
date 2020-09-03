import React, { FC, useEffect } from 'react';
import { ThemeProvider, Container } from '@material-ui/core';

import { Components } from './Components';
import { FrameworkStatistics } from './FrameworkStatistics';
import { FrameworkFeatures } from './FrameworkFeatures';
import { Header } from './Header';
import { theme } from './theme';
import { scrollIntoView } from './utils';

export const App: FC = () => {
  useEffect(() => {
    scrollIntoView(window.location.hash.replace('#', ''))()
  }, [window.location.hash])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <FrameworkStatistics />
        <FrameworkFeatures />
        <Components />
      </Container>
    </ThemeProvider>
  )
};
