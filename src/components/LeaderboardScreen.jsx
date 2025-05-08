import { Box, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';

const medalEmoji = ['🥇', '🥈', '🥉'];

export default function LeaderboardScreen({ scores, backToMenu }) {
  const sorted = [...scores].sort((a, b) => b.score - a.score).slice(0, 10);

  return (
      <>
      <Typography variant="h4" gutterBottom>
        🏆 Leaderboard
      </Typography>

      {sorted.length === 0 ? (
        <Typography variant="h5" sx={{ color: '#666', mt: 4 }}>
          No scores yet... be the first to shine! 🌟
        </Typography>
      ) : (
        <List sx={{ width: '100%', maxWidth: 400 }}>
          {sorted.map((entry, index) => {
            const rankEmoji = medalEmoji[index] || '⭐';
            return (
              <Paper
                key={index}
                elevation={5}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: '20px',
                  backgroundColor: '#fff8e1',
                  display: 'flex',
                  alignItems: 'center',
                }}
                data-testid="leaderboard-item"
              >
                <Typography
                  variant="h5"
                  sx={{ mr: 2 }}
                >
                  {rankEmoji}
                </Typography>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#4a148c',
                        fontFamily: 'Comic Sans MS, cursive'
                      }}
                    >
                      {entry.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      sx={{ color: '#6a1b9a' }}
                    >
                      {entry.score} points
                    </Typography>
                  }
                />
              </Paper>
            );
          })}
        </List>
      )}
      <Button variant="contained" color="secondary" fullWidth onClick={() => backToMenu()}>
        Back to Menu
      </Button>
    </>
  );
}
