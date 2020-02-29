import { createMuiTheme } from "@material-ui/core";

export const reactBackground = '#282c34';
export const reactLightBlue = '#61dafb';
export const kubernetesBlue = '#326ce5';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: kubernetesBlue,
    },
  },
  overrides: {
    MuiTableRow: {
      root: {
        height: 33,
      },
    },
    MuiToolbar: {
      root: {
        background: '#fafafa',
      },
    },
    MuiTypography: {
      subtitle2: {
        fontWeight: 400,
      },
    },
  },
});
