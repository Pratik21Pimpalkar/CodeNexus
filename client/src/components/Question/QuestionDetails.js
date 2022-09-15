import React from 'react'
import styled from 'styled-components'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const QuestionDetails = () => {
    return (
        <QuestionDetailsWrapper>
            <div>
                <h3>Spring OAuth2 - JWT token working on server but not on localhost?</h3>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='questionDetails' ><ArrowDropUpIcon /><span>10</span><ArrowDropDownIcon /></div>
                <div className="questionMainBody" style={{ flex: 1, position: 'relative' }}>
                    <p style={{ marginTop: "1.1rem", fontSize: "0.89rem" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magnam laborum, omnis soluta accusantium excepturi veniam deserunt, sequi quidem aut et voluptatibus!</p>
                    <span>ssss</span>
                    <span>ssss</span>
                    <span>ssss</span>
                    <span>ssss</span>
                    <div style={{ position: 'absolute', right: 0, bottom: 0, }}>
                        <p style={{ fontWeight: "500", fontSize: "0.813rem" }}>Post month ago</p>
                        <p style={{ fontWeight: "500", fontSize: "0.813rem", display: 'flex', alignItems: "center" }}> <span className="initials">X</span>Xavier</p>
                    </div>
                </div>
            </div>
        </QuestionDetailsWrapper>
    )
}

const QuestionDetailsWrapper = styled.div`
padding: 2rem;
.initials{
    border-radius: 50% !important;
    background-color: purple !important;
    color:white !important;
    display: flex !important;
    padding: 0.2rem !important;
    justify-content: center !important;
    align-items: center !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
}
.questionDetails{
display: flex;
flex-direction: column;

svg{
    margin: 0.2rem 0;
    font-size: 4rem;
    color: #BABFC4;
}
span{
    color: #6A737C;
    font-size: 1.313rem;
}
}
.questionMainBody{
    span{
        display: inline-block;
    color:#2C5877;
    border-radius: 0.188rem;
    padding: 0.313rem 0.375rem;
    margin: 0.5rem 0.5rem 0.2rem 0;
    background: #D0E3F1;
    text-transform: lowercase;
    font-weight: 500;
    font-size: 0.75rem;
    }
}
border-bottom: 0.061rem solid  #D6D9DC;
`
export default QuestionDetails