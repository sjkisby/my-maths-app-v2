import { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

export default function ScoreSubmitScreen({ points, saveScore, onDone }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      saveScore(name.trim(), points);
      onDone("Menu");
    }
  };

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        🏁 New HIGH score: <strong>{points}</strong>
      </Typography>

      <TextField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mt: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Save to Leaderboard
      </Button>
    </Box>
  );
}
