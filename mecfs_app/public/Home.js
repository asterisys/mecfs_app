// components/Home/Home.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from '../Slider/Slider';

import data from './../../Data/Symptoms'
import paragraphs from '../../Data/Paragraphs';
import schema from '../../Data/json_state.js'

import chartPicture from './../../Data/imgs/kelvin.png'

import LeftArrow from './../../Data/imgs/chevron_left_FILL0_wght400_GRAD0_opsz24.svg'
import RightArrow from './../../Data/imgs/chevron_right_FILL0_wght400_GRAD0_opsz24.svg'

import AbleorNot from '../Pages/AbleorNot';
import BodilyNeeds from '../Pages/BodilyNeeds';
import Improvement from '../Pages/Improvement';

import LoginPage from './../Login/Login';

const LevelDescription = ({ descriptions }) => {
    return (
        <div>
            {descriptions.map((description, index) => (
                <p key={index}>{description}</p>
            ))}
        </div>
    );
};

const LOGIN_PAGE = -1
const FIRST_PAGE = 0
const LAST_PAGE = 4
const HomePage = () => {

    const [page, setPage] = useState(3) //-1
    const [goodBadScale, setGoodBadScale] = useState(['Perfect', 'Very Good', 'Decent', 'Mostly Good', 'Slightly Good', 'Slightly Bad', 'Mostly Bad', 'Decently Bad', 'Very Bad', 'Horrible'])
    const [EasyHard, setEasyHardScale] = useState(['No Problem', 'Easy', 'Annoying', 'Able To', 'Maybe Able To', 'Probably Not Able To', 'Mentally Not Able To', 'Physically Unable To', 'Would Hurt', 'Would Kill'])
    const [responses, setResponses] = useState(schema)

    const [click, setClick] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        console.log('click', click)
    }, [click]);

    useEffect(() => {
        console.log('submit', submit)
    }, [submit]);

    useEffect(() => {
        console.log('responses', responses)
    }, [responses]);

    function set_click() {
        console.log('set')
        if (!click) {
            setClick(true)
        }

    }
    function set_submit() {
        if (!submit) {
            setSubmit(true)
        }
    }
    function next_page() {
        if (page + 1 != LAST_PAGE) {
            setPage(page + 1)
            setClick(false)
            setSubmit(false)
        }
    }
    function past_page() {

        if (page != FIRST_PAGE) {
            setPage(page - 1)
            setClick(false)
            setSubmit(false)
        }
    }

    function updateProfile(username, timestamp) {
        // Use the timestamp parameter if provided, otherwise use 'date'
        timestamp = timestamp || 'date';
    
        // Update profile properties
        setResponses((prevResponses) => ({
            ...prevResponses,
            profile: {
                username,
                timestamp,
            },
        }));
    }
    
    function updateResponses(section, alias, rating, response) {
        // Update responses for the specified section, alias, rating, and response
        console.log(section, alias, rating, response);
        setResponses((prevResponses) => ({
            ...prevResponses,
            [section]: {
                ...prevResponses[section],
                [alias]: {
                    ...prevResponses[section][alias], // Preserve existing fields
                    rating,
                    response,
                },
            },
        }));
        setClick(false);
    }

    //paragraphs['intro'] <LoginPage/> <StyledImage src={chartPicture} /> <Title>{paragraphs[page]['Title']}</Title>
    return (
        < OutsideContainer >

            {page == -1 ? (
                <LoginPage onLogin={next_page} />
            ) : (



                <Container>
                    <ContainerIN2>
                        {page == 0 && (
                            <InnerContainer>
                                <TextBlock>
                                    <Title>{paragraphs[page]['Title']}</Title>
                                    <SubTitle>{paragraphs[page]['SubTitle']}</SubTitle>
                                    <Body>{paragraphs[page]['Body']}</Body>
                                    <SubTitle>{paragraphs[page]['SubTitle1']}</SubTitle>
                                    <Body>{paragraphs[page]['Body1']}</Body>
                                    <SubTitle>{paragraphs[page]['SubTitle2']}</SubTitle>
                                    <Body>{paragraphs[page]['Body2']}</Body>
                                    <StyledImage src={chartPicture} />

                                </TextBlock>

                            </InnerContainer>
                        )}
                        {page == 1 && (
                            <InnerContainer>

                                <AbleorNot paragraphs={paragraphs[1]} list={EasyHard}></AbleorNot>

                            </InnerContainer>
                        )}
                        {page == 2 && (
                            <InnerContainer>
                                <BodilyNeeds paragraphs={paragraphs[2]} list={goodBadScale}></BodilyNeeds>

                                <Improvement title = {'Habits'} alias = {'habits'} paragraphs={responses['habits']} updateResponses={updateResponses} click={click} list={goodBadScale}></Improvement>

                            </InnerContainer>
                        )}

                        {page == 3 && (
                            <InnerContainer>

                                <Improvement title = {'Feedback'} alias = {'feedback'} paragraphs={responses['feedback']} updateResponses={updateResponses} click={click} list={EasyHard}></Improvement>

                            </InnerContainer>
                        )}


                    </ContainerIN2>

                    <Row>
                        {page != 0 || true ?
                            (
                                <PageButton onClick={past_page}>
                                    <ButtonImage src={LeftArrow} />
                                </PageButton>
                            ) : (
                                <PageButtonPlaceHolder onClick={past_page}>
                                    <ButtonImage src={LeftArrow} />
                                </PageButtonPlaceHolder>
                            )
                        }


                        {page != (LAST_PAGE - 1) ?
                            (
                                <Button2
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ backgroundColor: '#FFF', color: '#820000' }}
                                    onClick={set_click}
                                >
                                    Save Page Responses
                                </Button2>
                            ) : (
                                <Button2
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ backgroundColor: '#FFF', color: '#820000' }}
                                    onClick={set_click}
                                >
                                    Submit Form!
                                </Button2>
                            )
                        }



                        {page != (LAST_PAGE - 1) || true ?
                            (
                                <PageButton onClick={next_page}>
                                    <ButtonImage src={RightArrow} />
                                </PageButton>
                            ) : (
                                <PageButtonPlaceHolder onClick={past_page}>
                                    <ButtonImage src={LeftArrow} />
                                </PageButtonPlaceHolder>
                            )
                        }
                    </Row>

                </Container>




            )
            }
        </OutsideContainer >
    );
};

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const OutsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 100vh;

    @media only screen and (max-device-width: 736px) {
        height: 100vh;
        padding: 0;
    }

    scale: 1;
    
    overflow: hidden;
    background-color:  #EAEAEA;
    
    padding: 0;
    padding-top: 1vh;
    padding: 0;
    
    margin: 0;

    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    text-align: center;
    width: 100%;
    max-height: 100%;
    height: 100%;
    

    background-color:  transparent;

    overflow-y: hidden;
    overflow-x: hidden;
`;


const ContainerIN2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    text-align: center;
    width: 100%;

    height: 100%;
    
    overflow-y: hidden;
    background-color:  #EAEAEA;
    background: RGB(46, 45, 41, 0.3);
    
    
  
    padding: 0;
    margin: 0;
`;


const WelcomeMessage = styled.h1`
    width: 100%;
    min-height: 1vh;
    height: auto;
    color: #820000;

    padding: 0;
    margin: 0;
`;

//Transparent
const InnerContainer = styled.div`
    animation: ${fadeInOut} 1s ease;  

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 99%;
    width: 100%;
    

    @media only screen and (max-device-width: 736px) {
        width: 98%;
        height: 100%;
        
    }
    border: 3px solid #B83A4B;
    border: none;

    box-shadow: 0px 0px 0px 4px #820000;
    box-shadow: none;
    background-color: transparent; 
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
    
    
    
`;

const Row = styled.div`
    
    
    position:fixed;
    bottom: 2vh;
    width: auto;
    height: 8vh;
    max-height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    

    @media only screen and (max-device-width: 736px) {
        bottom: 15vh;
        width: 100%;
    }
    overflow:hidden;

    border: 3px solid #820000;

`;

const Button2 = styled.button`
  min-width: 50%;
  
  
  margin: 10px;
  background-color: #820000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;


  height: 70%;
  &:hover{
    scale: 1.1;
}

&:active{
    scale: 0.9;
}
`;

const PageButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    visibility: visible;
    width: 7vh;
    height: 70%;

    border: none;
    
    background-color:   transparent;
    
    overflow:hidden;
    margin: 0;
    padding: 0;
`;

const PageButtonPlaceHolder = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 10vh;
    min-height: 7vh;
    opacity: 0;
    border: none;
    
    background-color:   red;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;

    @media only screen and (max-device-width: 736px) {
        bottom: 8vh;
        min-height: 11vh;
    }
`;

const ButtonImage = styled.img`
    z-index: 2;
    width: 80%;
    height: auto;

    background: color: 
    margin: none;
    padding:none;

    
    background: #820000;

    &:hover{
        scale: 1.1;
    }

    &:active{
        scale: 0.9;
    }
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: left;

    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    height: auto;
    scale: 1;
    border: none;
    
    background-color: transparent;
    overflow-y: scroll;
    overflow-x: hidden;
    
    @media only screen and (max-device-width: 736px) {
        padding-top: 0vh;
    }

`;



const Title = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 5vh;
    width: auto;
    
    min-height: 6vh;
    height: auto;
    max-height: 6vh;
    background: transparent;
    color: #820000;
    text-align: center;
    padding: 0;
    margin-bottom: 5vh;
    border-bottom: 3px solid #EAEAEA;
`;

const SubTitle = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 2.3rem;
    width: auto;
    min-height: auto;
    background: transparent;
    color: #820000;
    text-align: center;
    padding: 0;
    margin-bottom: 2vh;

`;

const Body = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.5rem;
    width: 90%;
    min-height: auto;
    
    color: white;
    text-align: center;
    padding: 0;
    margin-bottom: 2vh;

    @media only screen and (max-device-width: 736px) {
        width: 100%;
    }
`;

//background: RGB(234, 234, 234, 0.3);



const StyledImage = styled.img`
    z-index: 2;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;

    padding-bottom: 10vh;

    @media only screen and (max-device-width: 736px) {
        padding-bottom: 25vh;
    }
    
`;




export default HomePage;
