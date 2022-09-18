import { Button } from '@mui/material'
import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch ,useSelector} from 'react-redux'
import { UserContext } from '../../context'
import { currentUser } from '../../redux/actions/authActions'

const UserLoginToggle = () => {
  const dispatch = useDispatch()
  var User = useSelector(state=>state.currentUserReducer)
  const [isLogin, setIsLogin] = useContext(UserContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("Profile");
    dispatch(currentUser(localStorage.getItem('Profile')))
    navigate('/')
  }
  return (
    <LoginUserWrapper>
      <div className='userInitials'>
        <p>{User.user.name[0].toUpperCase()}</p>
      </div>
      <div className='login'>
        <Button onClick={handleLogout} style={{ height: '2rem', background: " hsl(205,46%,92%)", color: "#2C5877", fontSize: "0.813rem", textTransform: "capitalize", border: "0.063rem solid #7AA7C7" }}>Logout</Button>
      </div>
    </LoginUserWrapper>
  )
}

const LoginUserWrapper = styled.div`
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