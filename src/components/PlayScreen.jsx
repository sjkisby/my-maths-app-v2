import React from 'react';
import { Button, Typography } from '@mui/material';

const PlayScreen = ({setScreen}) => {

    const handleMenuButtonPress = (screen)  =>  {
        setScreen(screen);
    }

  return (
    <>
        <Typography variant="h4" gutterBottom>
          🎉 Play!
        </Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={() => handleMenuButtonPress("Menu")}>
          Back to Menu
        </Button>
    </>
  );
};

export default PlayScreen;
