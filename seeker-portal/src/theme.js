import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
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
