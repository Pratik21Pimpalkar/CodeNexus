import React from 'react'
import styled from 'styled-components';

const Answer = () => {
    return (
        <AnswerWrapper>
            <p> 2 <span>Answers</span></p>
            <div className="questionMainBody" style={{ flex: 1 }}>
                <p style={{ marginTop: "1.1rem", fontSize: "0.89rem" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magnam laborum, omnis soluta accusantium excepturi veniam deserunt, sequi quidem aut et voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate tempora, qui impedit voluptatem molestias nisi iusto, nostrum, dolor quis ipsa?</p>

                <div style={{ position: 'relative', height: "2rem" }}>
                    <div style={{ position: "absolute", top: 0, right: 0 }}>
                        <p style={{ fontWeight: "500", fontSize: "0.813rem" }}>Post month ago</p>
                        <p style={{ fontWeight: "500", fontSize: "0.813rem", display: 'flex', alignItems: "center" }}> <span className="initials">X</span>Xavier</p>
                    </div>
                </div>
            </div>
        </AnswerWrapper>
    )
}

const AnswerWrapper = styled.div`
padding: 2rem;
.questionMainBody{
    span{
        display: inline-block;
    color:#2C5877;
    border-radius: 0.188rem;
    padding: 0.313rem 0.375rem;
    margin: 0.5rem 0.5rem 0.2rem 0;
    background: #D0E3F1;
    text-transform: uppercase !important;
    font-weight: 500;
    font-size: 0.75rem;
    }
    height: fit-content;
}
border-bottom: 0.061rem solid  #D6D9DC;
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
`
export default Answer