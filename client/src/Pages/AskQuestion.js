import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const AskQuestion = () => {
    return (
        <AskQuestionWrapper>
            <Box style={{ background: "#F1F2F3", minHeight: "100vh", width: "100%" }}>
                <Container maxWidth="lg">
                    <Typography variant='h5' style={{ paddingTop: "3rem", fontSize: "1.688rem" }}> Ask a public question</Typography>
                    <Box style={{ background: "#fff", padding: '2rem',marginTop:'2rem',borderRadius:"0.18rem" ,boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 2px 6px 0px, rgba(0, 0, 0, 0.09) 0px 3px 8px 0px"}}>
                        <div>
                            <p style={{ fontSize: "0.938rem", fontWeight: "500" }}>Title</p>
                            <p style={{ fontSize: "0.758rem", color: " #3B4045" }}>Be specific and imagine you’re asking a question to another person</p>
                            <input type="text" className='questionText' />
                        </div>
                        <div className='questionBody'>
                            <p style={{ fontSize: "0.938rem", fontWeight: "500" }}>Body</p>
                            <p style={{ fontSize: "0.758rem", color: " #3B4045" }}>Include all the information someone would need to answer your question</p>
                            <textarea type="text" className='questionText' />
                        </div>
                        <div>
                            <p style={{ fontSize: "0.938rem", fontWeight: "500" }}>Tags</p>
                            <p style={{ fontSize: "0.758rem", color: " #3B4045" }}>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" className='questionText' />
                        </div>
                        <Button style={{ marginTop: '1.5rem', height: "2.3rem", background: "#0a95ff", boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)", color: "white", fontSize: "0.813rem", textTransform: "capitalize", }}>Post your question</Button>
                    </Box>
                </Container>
            </Box>
        </AskQuestionWrapper>
    )
}
const AskQuestionWrapper = styled.div`
font-family: 'Open Sans';
input{

    margin-top: 0.2rem; width: 100%; padding: 0.5rem 0.563rem; border-radius: 0.18rem;
    outline: none; border: 1px solid grey;
    &:hover,&:focus,&:active{
    box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
    border: 0.063rem solid  #59A4DE;}
}
.questionBody{
    margin-top: 1.2rem;
    textarea{
        width:100%;
        min-height: 14rem;
    }
}
`

export default AskQuestion