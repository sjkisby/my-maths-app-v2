// App.jsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;
