import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useState } from "react";


const StyledPersonalProfile = styled.div`
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
const StaticProfile = props => {
    const [edit, setEdit] = useState(false)
    return (
        <StyledPersonalProfile className="personal-dash-wrapper">
            <div className="profile">
                <StyledProfilePicture src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                <h1>Ethan Miles</h1>
                <h3>Description Here</h3>
                <Button variant="contained" onClick={() => setEdit(false)}>Edit Profile</Button>
            </div>
        </StyledPersonalProfile>
    )
}

export default StaticProfile