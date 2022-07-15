
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


// axios.get('http://localhost:3000/api/users')


function App() {
  const [ users, setUsers ]  = useState()
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:3000/api/users')
    const data = await res.data.users
    setUsers(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <AppContainer>
      <h1>Welcome!</h1>
      <h2>Here is your profile:</h2>
     {
      loading ? (
        <h1>Loading...</h1>
      ) : (
        <PersonalProfile ethanInfo={null} />
      )
     }
      <Styledh3>View other Profiles:</Styledh3>
      {
      loading ? (
        <h1>Loading...</h1>
      ) : (
        users?.map(user => {
        return (
          <UserCard user={user} id={user.id}/>
        )
      })
      )
      }
    </AppContainer>
    
  );
}

export default App;
