import React, { FC } from 'react';
import { ThemeProvider, Container } from '@material-ui/core';

import { Components } from './Components';
import { FrameworkStatistics } from './FrameworkStatistics';
import { FrameworkFeatures } from './FrameworkFeatures';
import { Header } from './Header';
import { theme } from './theme';

export const App: FC = () => {


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
