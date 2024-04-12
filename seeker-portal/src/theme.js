import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#00A599',
    },
    secondary: {
      main: '#FED654',
    },
    accent: {
      main: '#0062FF',
    },
    lightGrey: {
      main: '#F3F4F5',
    },
  },
});

export default theme;
