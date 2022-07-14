
import './App.css';
import React from 'react';
import styled from 'styled-components'
import UserCard from './components/userCard';
import PersonalProfile from './components/personalProfile'
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
  margin-top: 30%
`


function App() {
  return (
    <AppContainer>
      <h1>Welcome!</h1>
      <h2>Here is your profile:</h2>
      <PersonalProfile/>
      <Styledh3>View other Profiles:</Styledh3>
      <UserCard />
    </AppContainer>
    
  );
}

export default App;
