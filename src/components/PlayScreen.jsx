import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import questionsData from '../data/questions.json';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'; // to get window dimensions
import NumericKeypad from './NumericKeypa';

const PlayScreen = ({setScreen}) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState(null); // "correct" | "incorrect" | null
  
  const { width, height } = useWindowSize();

  const getRandomQuestions = (count = 10) => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = parseInt(userAnswer, 10) === currentQuestion.answer;
  
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setUserAnswer('');
        setFeedback(null);
      } else {
        setIsComplete(true);
      }
    }, 1000);
  };
  
  const isPerfectScore = isComplete && score === questions.length;

  const handlBackButtonPress = ()  =>  {
    setScreen("Menu");
  }

  if (!questions.length) return null;

  return (
    <>
    {isComplete ? (
      <>
        {isPerfectScore && <Confetti width={width} height={height} />}

        <Typography variant="h4" gutterBottom>
          🎉 All done!
        </Typography>
        <Typography variant="h5">
          🧮 Your Score: {score} / {questions.length}
        </Typography>
        {isPerfectScore && (
          <Typography variant="h6" mt={2}>
            🏅 Perfect Score! You're a math star!
          </Typography>
        )}
        <Button variant="contained" color="secondary" fullWidth onClick={() => handlBackButtonPress()}>
          Back to Menu
        </Button>        
      </>
    ) : feedback ? (
      <Typography
        variant="h3"
        sx={{ color: feedback === 'correct' ? 'green' : 'red' }}
      >
        {feedback === 'correct' ? '✅ Correct!' : '❌ Oops!'}
      </Typography>
    ) : (
      <>
        <Typography variant="h5" gutterBottom>
          🤔 Question {currentIndex + 1}
        </Typography>
        <Typography variant="h6" mb={2}>
          {questions[currentIndex].question}
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          sx={{ mb: 2, borderRadius: '12px' }}
          inputProps={{ style: { fontSize: '1.2rem', textAlign: 'center' } }}
        />
        <NumericKeypad onKeyPress={(key) => {
          if (key === '⌫') {
            setUserAnswer((prev) => prev.slice(0, -1));
          } else if (key === '➡️') {
            handleSubmit(); // your existing function
          } else {
            setUserAnswer((prev) => prev + key);
          }
        }} />
      </>
    )}    
  </>
);
}

export default PlayScreen;
