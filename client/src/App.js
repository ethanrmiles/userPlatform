
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
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    const fetched = await axios.get('http://localhost:3000/api/users')
    .then(res => {
      setUsers(res.data.users)
    })
    .catch(err => {
      console.log('🚨', err)
    })
  }

  
useEffect(() => {
  setLoading(true)
  fetchUsers()
  setLoading(false)
}, [])

// useEffect(() => {
//   console.log(users)
// }, [users])

// useEffect(() => {
//   const loadUsers = async () => {
//     setLoading(true)
//     const res = await axios.get('http://localhost:3000/api/users')
//     setUsers(res.data.users)
//     debugger
//     setLoading(false)
//     console.log(`Fetched Users: ${ { users } }`)
//   }

//   loadUsers()
// }, [])

  const found = users?.find(user => {
    return user.name === 'Ethan'
  })

  return (
    <AppContainer>
      <h1>Welcome!</h1>
      <h2>Here is your profile:</h2>
     {
      loading ? (
        <h1>Loading...</h1>
      ) : (
        <PersonalProfile ethanInfo={found} />
      )
     }
      <Styledh3>View other Profiles:</Styledh3>
      {users?.map(user => {
        return (
          <UserCard user={user} id={user.id}/>
        )
      })}
    </AppContainer>
    
  );
}

export default App;
