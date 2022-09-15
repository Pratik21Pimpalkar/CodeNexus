import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Questions = ({ questionHead }) => {
    return (
        <QuestionWrapper>
            <div className='queTitle'>
                <p>{questionHead}</p>
                <Link to='/askquestions'>  <Button style={{ marginTop: '1.5rem', height: "2.3rem", background: "#0a95ff", boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)", color: "white", fontSize: "0.813rem", textTransform: "capitalize", }}>Ask Questions</Button></Link>
            </div>
            <div>
                <p> 8 questions</p>
            </div>
            <div className='questions'>
                <div className='votes'>
                    <p> 0 <span>votes</span> </p>
                    <p> 2 <span>answers</span></p>
                </div>
                <div style={{ flex: 1, textAlign: "left" }}><p style={{ color: "#0074cc", cursor: 'pointer' }}>Why React JS is popular?</p>
                    <div className='tagstime'>
                        <span className='tags'>React JS</span> <span className='time'>posted a month ago</span>
                    </div>
                </div>
            </div>
        </QuestionWrapper>
    )
}
const QuestionWrapper = styled.div`
margin-top: 1.2rem;
padding: 1rem;
.queTitle{
    display: flex;
    align-items: center;
    p{
        flex: 1;
        font-size:1.6rem;
    }
}
.questions{
    border-top : 1px solid  #E3E6E8;
    display: flex;
    align-items: center;
    div{
        padding: 1rem;
        text-align: center;
    }
}
.votes{
    color:  #0C0D0E;
   font-size:0.813rem ;
   span{
    margin-left:0.1rem;
   }
}
.tagstime{
   padding: 0!important;
   display: flex;
   align-items: center;
   position: relative;
   .tags{
  display: inline-block;
  
   }
   .time{
    position: absolute;
    right: 0;
    font-size: 0.7rem;
    font-weight: 600;
   }
}

.tags{
    display: inline-block;
    color:#2C5877;
    border-radius: 0.188rem;
    padding: 0.313rem 0.375rem;
    margin:  0.5rem 0 0.4rem  0;
    text-transform: lowercase;
    background: #D0E3F1;
    font-weight: 500;
    font-size: 0.75rem;
}
`

export default Questions