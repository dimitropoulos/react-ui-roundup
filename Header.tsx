import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">React UI Roundup</Typography>
      </Toolbar>
    </AppBar>
  );
}