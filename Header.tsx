import React, { FC } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, withStyles, Tooltip } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

const AppBar = withStyles({
  root: {
    color: 'white',
  },
})(MuiAppBar);

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">React UI Roundup</Typography>
        <div style={{ flex: '1 1 auto' }} />

        <Tooltip title="GitHub" enterDelay={300}>
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
}