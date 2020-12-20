import { AppBar as MuiAppBar, IconButton, Toolbar as MuiToolbar, Tooltip, Typography, withStyles } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import React, { FC } from 'react';

import { kubernetesBlue } from './theme';

const AppBar = withStyles({
  root: {
    color: 'white',
  },
})(MuiAppBar);

const Toolbar = withStyles({
  root: {
    backgroundColor: kubernetesBlue,
  },
})(MuiToolbar);

export const Header: FC = () => (
  <AppBar position="static">
    <Toolbar>
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
