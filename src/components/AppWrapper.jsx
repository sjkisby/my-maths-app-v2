import React, { useState } from 'react';
import { Box } from '@mui/material';
import MenuScreen from './MenuScreen';
import Leaderboard from './LeaderboardScreen';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import PlayScreen from './PlayScreen';

const AppWrapper = () => {

  const [screen, setScreen] = useState('Menu'); // 'Menu' | 'Play' | 'Leaderboard' | 'Settings' | 'About'

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        overflow: 'auto', // allows scroll if needed
        px: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: '#ffffff',
          px: 3,
          py: 4,
          borderRadius: '24px',
          boxShadow: 3,
          border: '2px solid #FFB703',
          textAlign: 'center',
        }}
      >
        {screen === 'Menu' && <MenuScreen setScreen={setScreen}  /> }
        {screen === 'Play' && <PlayScreen setScreen={setScreen} /> }
        {screen === 'Settings' && <SettingsScreen /> }       
        {screen === 'Leaderboard' && <Leaderboard /> }
        {screen === 'About' && <AboutScreen setScreen={setScreen} /> }        
      </Box>
    </Box>
  );
};

export default AppWrapper;
