import React from 'react';
import { Button, Typography } from '@mui/material';

const MenuScreen = () => {
  return (
    <>
        <Typography variant="h4" gutterBottom>
          🎉 Welcome to Math Fun!
        </Typography>

        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
          🎮 Play
        </Button>
        <Button variant="contained" color="secondary" fullWidth sx={{ mb: 2 }}>
          ⚙️ Settings
        </Button>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
          🏆 Leaderboard
        </Button>
        <Button variant="contained" color="secondary" fullWidth>
          ℹ️ About
        </Button>
    </>
  );
};

export default MenuScreen;
