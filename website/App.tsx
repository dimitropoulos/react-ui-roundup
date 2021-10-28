import { Container as MuiContainer, styled, ThemeProvider } from '@mui/material';
import { FC, useEffect } from 'react';

import { frameworkInfo, frameworkInfoByFeatureId, frameworks } from '../frameworks';
import { Components } from './Components';
import { FrameworkFeatures } from './FrameworkFeatures';
import { FrameworkStatistics } from './FrameworkStatistics';
import { Header } from './Header';
import { TableOfContents } from './TableOfContents';
import { theme } from './theme';
import { scrollIntoView } from './utils';

const Container = styled(MuiContainer)({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const App: FC = () => {
  useEffect(() => {
    scrollIntoView(window.location.hash.replace('#', ''))();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <TableOfContents />

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
