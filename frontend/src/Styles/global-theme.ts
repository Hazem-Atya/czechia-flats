import { ThemeOptions } from '@mui/material/styles/createTheme';

const globalTheme: ThemeOptions = {
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    h1: {
      fontWeight: 500,
      fontSize: '70px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '60px',
    },
    h3: {
      fontWeight: 400,
      fontSize: '50px',
    },
    h4: {
      fontWeight: 400,
      fontSize: '35px',
    },
    h5: {
      fontWeight: 400,
      fontSize: '25px',
    },
    h6: {
      fontWeight: 400,
      fontSize: '25px',
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: 'capitalize',
        },
        sizeLarge: {
          borderRadius: '20px',
          fontSize: '26px',
          padding: '6px 30px',
        },
      },
    },
  },
};

export default globalTheme;
