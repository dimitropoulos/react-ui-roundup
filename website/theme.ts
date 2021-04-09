import { createMuiTheme } from '@material-ui/core';

export const reactBackground = '#282c34';
export const reactLightBlue = '#61dafb';
export const kubernetesBlue = '#326ce5';

export const theme = createMuiTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 33,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          background: '#fafafa',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle2: {
          fontWeight: 400,
        },
      },
    },
  },
  palette: {
    primary: {
      main: kubernetesBlue,
    },
  },
});
