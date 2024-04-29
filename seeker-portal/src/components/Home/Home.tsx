import { useNavigate } from "react-router-dom";
import { pageRoutes } from '../../routes';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/themes'


const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAgent = () => {
    navigate(pageRoutes.LOGIN);
  };

  const handleIndividual = () => {
    console.log('Button 2 clicked!');
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="column">
        <Button variant="outlined" size="large" color="primary" onClick={handleAgent}>Continue as Agent</Button>
        <Button variant="outlined" size="large" onClick={handleIndividual}>Continue as Individual</Button>
      </Stack>
    </ThemeProvider>

  );
};

export default Home;
