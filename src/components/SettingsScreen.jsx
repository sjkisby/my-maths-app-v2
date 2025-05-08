import React from 'react';
import { Button, Typography } from '@mui/material';

const SettingsScreen = ({backToMenu}) => {
  return (
    <>
        <Typography variant="h4" gutterBottom>
          🎉 Settings!
        </Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={() => backToMenu()}>
          Back to Menu
        </Button>
    </>
  );
};

export default SettingsScreen;
