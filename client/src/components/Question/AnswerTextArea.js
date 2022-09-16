import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const AnswerTextArea = () => {
    return (
        <AnswerTextAreaWrapper>
            <div className='answerBody'>
                <p style={{ fontSize: "1.238rem", fontWeight: "500" }}>Your Answer</p>

                <textarea type="text" className='questionText' />
            </div>
            <Button style={{ marginTop: '1.5rem', height: "2.3rem", background: "#0a95ff", boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)", color: "white", fontSize: "0.813rem", textTransform: "capitalize", }}>Post Your Answer</Button>
        </AnswerTextAreaWrapper>
    )
}

const AnswerTextAreaWrapper = styled.div`
padding: 2rem;
.answerBody{
    margin-top: 1.2rem;
    textarea{
        resize: none;
        margin-top: 1rem;
        width:100%;
        min-height: 14rem;
        &:hover,&:focus,&:active{
    box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
    outline: none;
    border: 0.063rem solid  #59A4DE;}
    }
}
`
export default AnswerTextArea