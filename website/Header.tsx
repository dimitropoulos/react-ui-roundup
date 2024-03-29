import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { FC } from 'react';

import { kubernetesBlue } from './theme';

export const Header: FC = () => (
  <AppBar position="static" sx={{ color: 'white' }}>
    <Toolbar sx={{ backgroundColor: kubernetesBlue }}>
      <Typography variant="h6">React UI Roundup</Typography>
      <div style={{ flex: '1 1 auto' }} />

      <Tooltip enterDelay={300} title="GitHub">
        <IconButton
          color="inherit"
          href="https://github.com/dimitropoulos/react-ui-roundup"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
    </Toolbar>
  </AppBar>
);
