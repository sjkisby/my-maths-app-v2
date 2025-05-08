import React, { useState } from 'react';
import { Box } from '@mui/material';
import MenuScreen from './MenuScreen';
import Leaderboard from './LeaderboardScreen';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import PlayScreen from './PlayScreen';
import { getLeaderboard } from '../utils/leaderboard' 

const AppWrapper = () => {

  const [screen, setScreen] = useState('Menu'); // 'Menu' | 'Play' | 'Leaderboard' | 'Settings' | 'About'

  const backToMenu = () => {
    setScreen("Menu");
  }

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
        {screen === 'Play' && <PlayScreen backToMenu={backToMenu} /> }
        {screen === 'Settings' && <SettingsScreen backToMenu={backToMenu} /> }       
        {screen === 'Leaderboard' && <Leaderboard backToMenu={backToMenu} scores={getLeaderboard()} /> }
        {screen === 'About' && <AboutScreen backToMenu={backToMenu}  /> }        
      </Box>
    </Box>
  );
};

export default AppWrapper;
