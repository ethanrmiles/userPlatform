
import './App.css';
import React from 'react';
import styled from 'styled-components'
import PersonalDash from './components/personalDashboard';
import Button from '@mui/material/Button';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 40%;
`;

const Styledh3 = styled.h3`
  font-size: 16;
  margin-top: 7%
`


function App() {
  return (
    <AppContainer>
      <h1>Welcome!</h1>
      <h2>Here is your profile:</h2>
      <PersonalDash/>
      <Styledh3>View other Profiles:</Styledh3>
      <Button variant="outlined">View other Profiles</Button>
    </AppContainer>
    
  );
}

export default App;
