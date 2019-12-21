import React, { FC } from 'react';
import { ThemeProvider, createMuiTheme, Container } from '@material-ui/core';

import { Components } from './Components';
import { FrameworkStats } from './FrameworkStats';
import { FrameworkFeatures } from './FrameworkFeatures';
import { Header } from './Header';

export const reactBackground = '#282c34';
export const reactLightBlue = '#61dafb';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: reactBackground,
  //   },
  // }
});

export const App: FC = () => {


  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <FrameworkStats />
        <FrameworkFeatures />
        <Components />
      </Container>
    </ThemeProvider>
  )
};
