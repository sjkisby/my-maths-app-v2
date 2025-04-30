import React from 'react';
import { Button, Typography } from '@mui/material';

const MenuScreen = ({setScreen}) => {
  
    const handleMenuButtonPress = (screen)  =>  {
        setScreen(screen);
    }

    return (
    <>
        <Typography variant="h4" gutterBottom>
          🎉 Welcome to Math Fun!
        </Typography>

        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={() => handleMenuButtonPress("Play")}>
          🎮 Play
        </Button>
        <Button variant="contained" color="secondary" fullWidth sx={{ mb: 2 }} onClick={() => handleMenuButtonPress("Settings")}>
          ⚙️ Settings
        </Button>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={() => handleMenuButtonPress("Leaderboard")}>
          🏆 Leaderboard
        </Button>
        <Button variant="contained" color="secondary" fullWidth onClick={() => handleMenuButtonPress("About")}>
          ℹ️ About
        </Button>
    </>
  );
};

export default MenuScreen;
