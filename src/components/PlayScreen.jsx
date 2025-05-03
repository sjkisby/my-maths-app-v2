import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import questionsData from '../data/questions.json';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use'; // to get window dimensions
import NumericKeypad from './NumericKeypa';
import AnswerFeedback from './AnswerFeedback';

const PlayScreen = ({setScreen}) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState(null); // "correct" | "incorrect" | null
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [points, setPoints] = useState(0);
  const [questionTimeTaken, setQuestionTimeTaken] = useState(0);
  
  
  const { width, height } = useWindowSize();

  const getRandomQuestions = (count = 10) => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setQuestions(getRandomQuestions());
    setQuestionStartTime(Date.now());
  }, []);

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = parseInt(userAnswer, 10) === currentQuestion.answer;
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    setQuestionTimeTaken(timeTaken);

    if (isCorrect) {
      setScore(prev => prev + 1);
      setPoints((currentPoints) => currentPoints + 100 + (timeTaken <= 140 ? 140 - timeTaken : 0));
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setQuestionStartTime(Date.now());
        setUserAnswer('');
        setFeedback(null);
      } else {
        setIsComplete(true);
      }
    }, 2000);
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
        <Typography variant="h6">
          🧮 Your Points: {Math.floor(points)}
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
      <AnswerFeedback feedback={feedback} questionTimeTaken={questionTimeTaken} />
    ) : (
      <>
        <Typography variant="h5" gutterBottom>
          🤔 Question {currentIndex + 1}
        </Typography>
        <Typography variant="h6" mb={2}>
          {questions[currentIndex].question}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '2rem',
            border: '2px solid #ccc',
            borderRadius: '1rem',
            px: 4,
            py: 2,
            my: 2,
            bgcolor: '#fff',
            userSelect: 'none'
          }}
        >
          {userAnswer || '🤔'}
        </Box>
        <NumericKeypad onKeyPress={(key) => {
          if (key === '⌫') {
            setUserAnswer((prev) => prev.slice(0, -1));
          } else if (key === '➡️') {
            handleSubmit();
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
