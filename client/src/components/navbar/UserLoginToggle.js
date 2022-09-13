import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const UserLoginToggle = ({isLoginFunc}) => {
  return (
    <LoginUserWrapper>
        <div  className='userInitials'>
            <p>P</p>
        </div>
         <div className='login'>
            
              <Button onClick={isLoginFunc} style={{ height: '2rem', background: " hsl(205,46%,92%)", color: "#2C5877", fontSize: "0.813rem", textTransform: "capitalize", border: "0.063rem solid #7AA7C7" }}>Logout</Button>
            </div>
    </LoginUserWrapper>
  )
}

const LoginUserWrapper=styled.div`
display: flex;
gap:0.2rem;
.userInitials{
    border-radius: 50%;
    background-color: purple;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    p{
        text-align:center;
    }
}
`

export default UserLoginToggle