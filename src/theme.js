// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB703', // Bright yellow-orange
    },
    secondary: {
      main: '#8ECAE6', // Soft blue
    },
    background: {
      default: '#FFF7E0', // Warm pastel
    },
  },
  typography: {
    fontFamily: "'Comic Neue', cursive",
    h4: {
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    button: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '16px 24px',
          margin: '12px 0',
          width: '80%',
        },
      },
    },
  },
});

export default theme;
