import React from 'react';
import { Button, Typography } from '@mui/material';

const AboutScreen = ({backToMenu}) => {

  return (
    <>
        <Typography variant="h4" gutterBottom>
          🎉 About!
        </Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={() => backToMenu()}>
          Back to Menu
        </Button>
    </>
  );
};

export default AboutScreen;
