import React from 'react';
import { Box, Button } from '@mui/material';

const keys = ['1','2','3','4','5','6','7','8','9','⌫','0','➡️'];

const NumericKeypad = ({ onKeyPress }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        maxWidth: 300,
        margin: '0 auto',
      }}
    >
      {keys.map((key, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => onKeyPress(key)}
          sx={{
            aspectRatio: '1 / 1',
            fontSize: '1.8rem',
            borderRadius: '1.5rem',
            minWidth: 0,
            width: '100%',
          }}
        >
          {key}
        </Button>
      ))}
    </Box>
  );
};

export default NumericKeypad;
