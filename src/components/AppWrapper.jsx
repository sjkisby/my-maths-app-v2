import React from 'react';
import { Box } from '@mui/material';
import MenuScreen from './MenuScreen';

const AppWrapper = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        overflow: 'auto', // allows scroll if needed
        px: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: '#ffffff',
          px: 3,
          py: 4,
          borderRadius: '24px',
          boxShadow: 3,
          border: '2px solid #FFB703',
          textAlign: 'center',
        }}
      >
        <MenuScreen />
      </Box>
    </Box>
  );
};

export default AppWrapper;
