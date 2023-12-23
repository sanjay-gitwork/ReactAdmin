import React from 'react';
import Header from '../../Header';
import { Box } from '@mui/material';

const Dashboard = () => {
    
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DashBoard" subtitle="Welcome to Admin Panel" />
        </Box>
    </Box>
  );
};

export default Dashboard