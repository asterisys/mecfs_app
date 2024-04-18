import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Toggle from './Toggle';
import paragraphs from '../../Data/Paragraphs';

const Improvement = (props) => {
    const [paragraphs, setParagraphs] = useState(null)
    const [click, setClick] = useState(false)

    const [rating, setRating] = useState(-1)
    const [response, setResponse] = useState(0)
    const [questions, setQuestions] = useState('')

    useEffect(() => {
        //console.log(props.paragraphs)
        if(props.paragraphs != null){
            setParagraphs(props.paragraphs)
        }
    }, [props.paragraphs]);

    useEffect(() => {
        console.log('setting click', props.click)
        setClick(props.click)
    }, [props.click]);

    useEffect(() => {
        console.log('paragrap', paragraphs)
        if (paragraphs != null) {
            if(paragraphs.improvement){
                if (paragraphs.improvement.rating) {
                    if(paragraphs.improvement.rating != 'int'){
                        setRating(paragraphs.improvement.rating)
                    }
                }
                if (paragraphs.improvement.response) {
                    setResponse(paragraphs.improvement.response)
                }
                if(paragraphs.improvement.question){
                    setQuestions(paragraphs.improvement.question)
                }
            }
        }
    }, [paragraphs]);


    useEffect(() => {
        console.log('response', response)
    }, [response]);

    function updateRating(val) {
        
        if(val == -1){
            console.log('setting rating', val)
            setRating(val+1)
        } else if (val != 'int'){
            console.log('setting rating', val)
            setRating(val)
        }
        
    }

    function updateResponse(event) {
        console.log('setting response', event.target.value)
        setResponse(event.target.value)
    }

    useEffect(() => {
        
        if (click) {
            if(rating < 0){
                //console.log('Click Improve 1', click, rating)
                props.updateResponses('feedback', 'improvement', rating+1, response)
            } else {
                //console.log('Click Improve 2', click, rating)
                props.updateResponses('feedback', 'improvement', rating, response)
            }
            
        }

    }, [click]);

    return (
        <Container>
            {paragraphs != null && (
                <TextBlock2>
                    <Title> Feedback </Title>
                    
                    <SubTitle>{questions}</SubTitle>
                    
                    <Toggle list={props.list} alias={'improvement'} updateRating={updateRating} rating={rating}></Toggle>
                    <StyledInput type="text" value={response} onChange={updateResponse} />

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
        
        padding-bottom: 10vh;
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
    max-height: 90vh;
    height: auto;

    background-color:  transparent;

    overflow-y: hidden;
`;

export default Improvement