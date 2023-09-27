import { Theme, createTheme, responsiveFontSizes } from '@mui/material';
import globalTheme from './global-theme';

const lightTheme: Theme = createTheme({
  ...globalTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#0057E3',
      contrastText: '#fff',
    },
    secondary: { main: '#FF8B01', contrastText: '#000' },
    // tertiary: { main: '#5556c780', contrastText: '#fff' },
    // dark: { main: '#010101', dark: 'rgb(40,40,40)', contrastText: '#fff' },
    // light: {
    //   main: '#EBECED',
    //   light: '#EBECED',
    //   dark: 'rgb(150,150,150)',
    //   contrastText: '#010101',
    // },
    // neutral: {
    //   main: 'rgb(70,70,70)',
    //   contrastText: '#fff',
    // },
    background: {
      default: '#D8EFFF',
    },
    // icons: {
    //   main: '#2A2F41',
    //   dark: '#1d202d',
    //   light: '#404761',
    //   contrastText: '#ffffff',
    // },
  },
  components: {
    ...globalTheme.components,
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          height: '10px',
          width: '12px',
          backgroundColor: 'rgba(0, 24, 53, 0.5)',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(80, 80, 80, 0.1)',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
  },
});

export default responsiveFontSizes(lightTheme);
