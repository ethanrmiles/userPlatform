
import './App.css';
import React from 'react';
import styled from 'styled-components'
import UserCard from './components/userCard';
import PersonalProfile from './components/personalProfile'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'



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
  const [ users, setUsers ]  = useState()

useEffect(() => {

  const fetchData = async () => {
    axios.get('http://localhost:3000/api/users')
  .then(res => {
    
    setUsers(res.data.users)
  })
  .catch(err => console.log(err))
  }
  fetchData()
  
}, [])
  return (
    <AppContainer>
      <h1>Welcome!</h1>
      <h2>Here is your profile:</h2>
      <PersonalProfile/>
      <Styledh3>View other Profiles:</Styledh3>
      {users.map(user => <UserCard user={user} />)}
    </AppContainer>
    
  );
}

export default App;
