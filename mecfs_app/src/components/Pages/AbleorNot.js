import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Toggle from './Toggle';
import paragraphs from '../../Data/Paragraphs';

const AbleorNot = (props) => {
    const [paragraphs, setParagraphs] = useState(null)

    useEffect(() => {

        setParagraphs(props.paragraphs)

    }, [props.paragraphs]);

    return (
        <Container>
            {paragraphs != null && (
                <TextBlock2>
                    <Title>{paragraphs['Title']}</Title>
                    <SubTitle>{paragraphs['SubTitle']}</SubTitle>
                    <Body>{paragraphs['Body']}</Body>
                    <Toggle list={props.list}></Toggle>
                    <StyledInput type="text" placeholder="Type something..." />
                    
                    <SubTitle>{paragraphs['SubTitle1']}</SubTitle>
                    <Body>{paragraphs['Body1']}</Body>
                    <Toggle list={props.list}></Toggle>
                    <StyledInput type="text" placeholder="Type something..." />

                    <SubTitle>{paragraphs['SubTitle2']}</SubTitle>
                    <Body>{paragraphs['Body2']}</Body>
                    <Toggle list={props.list}></Toggle>
                    <StyledInput type="text" placeholder="Type something..." />

                    <SubTitle>{paragraphs['SubTitle3']}</SubTitle>
                    <Body>{paragraphs['Body3']}</Body>
                    <Toggle list={props.list}></Toggle>
                    <StyledInput type="text" placeholder="Type something..." />

                    <SubTitle>{paragraphs['SubTitle4']}</SubTitle>
                    <Body>{paragraphs['Body4']}</Body>
                    <Toggle list={props.list}></Toggle>
                    <StyledInput type="text" placeholder="Type something..." />

                    
                </TextBlock2>
            )}
            

        </Container>
    );
};

const StyledInput = styled.input`
  padding: 0;
  font-size: 1rem;
  margin-top: 1vh;
  outline: none;
  min-height: 10vh;
  width: 90%;

  display: flex;
  align-items: flex-start; /* Align text to the top */
  white-space: normal; /* Allow text to wrap */

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const TextBlock2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: left;
    min-width: 100%;
    max-width: 100%;
    height: auto;

    border: none;
    
    background-color: transparent;
    overflow: auto;
    
    padding-bottom: 11vh;
    @media only screen and (max-device-width: 736px) {
        padding-bottom: 25vh;
    }
`;


const Title = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 3rem;
    width: auto;
    
    
    height: auto;
    background: transparent;
    color: #820000;
    text-align: center;
    padding: 0;
    margin-bottom: 1vh;
    border-bottom: 3px solid #EAEAEA;


    @media only screen and (max-device-width: 736px) {
        font-size: 2.5rem;
        
    }
`;

const SubTitle = styled.div`
    text-align: center;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 2.3rem;
    width: auto;
    min-height: auto;
    background: transparent;
    color: #820000;
    
    padding: 0;
    margin-top: 2vh;
    margin-bottom: 2vh;

    @media only screen and (max-device-width: 736px) {
        font-size: 1.5rem;
    }

`;

const Body = styled.div`
    text-align: center; 
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.5rem;
    width: auto;
    min-height: auto;
    background: transparent;
    color: white;

    padding: 0;
    margin-bottom: 2vh;

    @media only screen and (max-device-width: 736px) {
        font-size: 1.1rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    text-align: center;
    width: 100%;

    min-height: 100%;
    max-height: 100%;
    height: auto;

    background-color:  transparent;
    border: none;
    overflow-y: hidden;
`;

export default AbleorNot