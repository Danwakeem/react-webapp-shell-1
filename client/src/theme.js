import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },

    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },

    MuiTextField: {
      root: {
        width: '100%',
      },
    },

    MuiFormControl: {
      root: {
        width: '100%',
      },
    },

    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },

    MuiTypography: {
      body1: {
        color: '#00000099',
      },
    },
  },

  palette: {
    background: {
      default: '#FFFFFF',
    },

    primary: {
      light: '#35baf6',
      main: '#03a9f4',
      dark: '#0276aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900',
      contrastText: '#fff',
    },
  },

  spacing: (factor) => (
    `${0.25 * factor}rem`
  ),

  typography: {
    h1: {
      fontSize: '2.1em',
    },

    h2: {
      fontSize: '1.7em',
    },

    h3: {
      fontSize: '1.4em',
    },

    h5: {
      fontSize: '1.2em',
    },

    h6: {
      fontSize: '1.1em',
    },
  },
});

export default theme;
