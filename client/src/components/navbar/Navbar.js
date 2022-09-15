import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo-stackoverflow.png"
import { Container } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import UserLoginToggle from './UserLoginToggle';

const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false);
  const isLoginFunc = () => {
    setIsLogin(!isLogin);
  }

  return (
    <Nav>
      <Container maxWidth={'lg'} className="nav">
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className='About'>
          <p >About</p>
        </div>
        <div className='Products'>
          <p >Products</p>
        </div>
        <div className='For-teams'>
          <p>For Teams</p>
        </div>
        <div className='auth'>
          <div className='search'>
            <SearchIcon />
            <input type="text" placeholder='Search...' />
          </div>
          {isLogin ? <UserLoginToggle isLoginFunc={isLoginFunc} /> :
            <>
              <div className='login'>
                <Link to='/auth'>
                  <Button onClick={isLoginFunc} style={{ height: '2rem', background: " hsl(205,46%,92%)", color: "#2C5877", fontSize: "0.813rem", textTransform: "capitalize", border: "0.063rem solid #7AA7C7" }}>Login</Button>
                </Link>
              </div>
              <Link to='/auth'>
                <div className='signup'>
                  <Button style={{ height: "2rem", background: " #0074CC", color: "white", fontSize: "0.813rem", textTransform: "capitalize", }}>Sign Up</Button>
                </div>
              </Link>
            </>}
        </div>
      </Container>
    </Nav>
  )
}

const Nav = styled.div`
position: sticky;
top:0;
border-top: 0.18rem solid #f48225;
      background-color: #f8f9f9;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
.nav{
      display: flex;
      align-items: center;
      min-height: 2.9rem;
      gap: 2rem;
      
      .logo{
        img{
        width: 9rem; }  
      }
      .About,.Products,.For-teams{
      p{
        font-size: 0.813rem;
        color:hsl(210,8%,35%);
        }
      }
      .search{
        display: flex;
        align-items: center;
        position: relative;
        svg{
          position: absolute;
          top: 0.3rem;
          left: 0.5rem;      
          color:#757575 !important;
          
        }
        flex:1;
        input{
          width: 100%;
          outline:hsl(210,8%,35%);
          border: 0.061px solid  #BABFC4;
          height: 2rem;
          border-radius: 0.188rem;
          padding: 0.5rem 0.591rem;
          padding-left:2rem ;
        }
      }
      .auth{
        display: flex;
        flex:1;
        gap:0.3rem;
      }
    }
      `
export default Navbar