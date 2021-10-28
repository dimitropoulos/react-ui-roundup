import { createTheme } from '@mui/material';

export const reactBackground = '#282c34';
export const reactLightBlue = '#61dafb';
export const kubernetesBlue = '#326ce5';

export const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: 'transparent',
        },
      },
    },
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
