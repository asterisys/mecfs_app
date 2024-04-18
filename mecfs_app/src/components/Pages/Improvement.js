import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';

const Improvement = (props) => {
    const [items, setItems] = useState({});
    const [itemLen, setItemLen] = useState(0);
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (props.paragraphs != null) {
            setItems(props.paragraphs);
        } else {
            // Set items to an empty object if props.paragraphs is null
           // setItems({});
        }
       //console.log('items', items);
    }, [props.paragraphs]);

    useEffect(() => {
        setClick(props.click);
    }, [props.click]);

    function updateRating(index, val) {
        setItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const itemKey = Object.keys(updatedItems)[index]; // Get the key at the specified index
    
            if (itemKey) {
                updatedItems[itemKey].rating = val; // Update the rating using the key
            } else {
                // Handle the case where the key at the given index is undefined
               //console.error(`Key at index ${index} is undefined`);
            }
    
            return updatedItems;
        });
    }

    function updateResponse(index, event) {
        setItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const itemKey = Object.keys(updatedItems)[index]; // Get the key at the specified index
            if (itemKey) {
                updatedItems[itemKey].response = event.target.value; // Update the response using the key
            } else {
                // Handle the case where the key at the given index is undefined
               //console.error(`Key at index ${index} is undefined`);
            }
            return updatedItems;
        });
    }

    useEffect(() => {
        if (click) {
            Object.values(items).map((item, index) => 
                //const itemKey = ;
                {
                    console.log(item, index, Object.keys(items)[index])
                    props.updateResponses(props.alias, Object.keys(items)[index], item.rating, item.response);
                }
            )
            //props.updateResponses('feedback', 'improvement', );
        }
       //console.log('IL-', Object.values(items).length);
        //if (typeof Object.values(items).length != 'undefined') {
           //console.log('IL-2-', itemLen + 1);
            
        //}
    }, [click, items]);

    return (
        <Container>
            <Title> {props.title}</Title>
            {Object.values(items).length> 0 &&
                Object.values(items).map((item, index) => (
                    <TextBlock2 key={index}>
                        
                        <SubTitle>{item.question}</SubTitle>
                        <Toggle
                            list={props.list}
                            updateRating={(val) => updateRating(index, val)}
                            rating={item.rating}
                        />
                        <StyledInput
                            type="text"
                            value={item.response}
                            onChange={(event) => updateResponse(index, event)}
                        />
                    </TextBlock2>
                ))}
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
  flex-direction: column;
  align-items: flex-start; /* Align text to the top-left */
  justify-content: flex-start;
  white-space: pre-wrap; /* Allow text to wrap and break at newlines */
  text-align: left;
    
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
    
    
    padding-bottom: 1vh;
    @media only screen and (max-device-width: 736px) {
        
        padding-bottom: 1vh;
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

    overflow-y: scroll;
`;

export default Improvement