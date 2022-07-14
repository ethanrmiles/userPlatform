import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';

const StyledUserCard = styled.div`
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-content: left;
    padding: 10%;
    border-radius: 5%
`

const StyledProfilePicture = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    margin-bottom: 5%;
`




const UserCard = props => {
    const { user } = props
    
    return (
        <StyledUserCard className="personal-dash-wrapper">
            <StyledProfilePicture src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
            <h1>{user.name}</h1>
            <h3>{user.description}</h3>
        </StyledUserCard>
    )
}

export default UserCard