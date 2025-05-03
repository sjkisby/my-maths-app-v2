import { Card, CardContent, Typography, Box } from '@mui/material';
import { calculateScore } from '../utils/calculateScore';

const AnswerFeedback = ({ feedback, questionTimeTaken }) => {
  const isCorrect = feedback === 'correct';
  const {base, bonus, total} = calculateScore(questionTimeTaken);
  
  return (
    <Card
      sx={{
        bgcolor: isCorrect ? '#e8f5e9' : '#ffebee',
        border: '3px solid',
        borderColor: isCorrect ? 'green' : 'red',
        borderRadius: '1.5rem',
        textAlign: 'center',
        mt: 4,
        mb: 2,
        mx: 'auto',
        maxWidth: 320,
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? '✅ Great Job!' : '❌ Try Again!'}
        </Typography>
        {isCorrect && (
        <Box mt={2}>
          <Typography variant="h5" sx={{ color: '#333' }}>
            🎯 Points: <strong>{base}</strong>
          </Typography>
          <Typography variant="h5" sx={{ color: '#333' }}>
            🕒 Time Bonus: <strong>{bonus}</strong>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'purple', mt: 1, fontWeight: 'bold' }}
          >
            ⭐ Total: {total} pts!
          </Typography>          
        </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default AnswerFeedback;