// components/Home/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../Slider/Slider';

import data from './../../Data/Symptoms'

const LevelDescription = ({ descriptions }) => {
    return (
        <div>
            {descriptions.map((description, index) => (
                <p key={index}>{description}</p>
            ))}
        </div>
    );
};



const HomePage = () => {
    const [symptomLevels, setSymptomLevels] = useState({});

    const [ableToLevels, setAbleToLevels] = useState(['', '']);
    const [mayOrNotBeAbleToLevels, setMayOrNotBeAbleToLevels] = useState(['', '']);
    const [ableToDoSomeOrAllLevels, setAbleToDoSomeOrAllLevels] = useState(['', '']);
    const [notAbleToLevels, setNotAbleToLevels] = useState(['', '']);
    const [unableToLevels, setUnableToLevels] = useState(['', '']);
    const [exceptionsLevels, setExceptionsLevels] = useState(['', '']);
    const [descriptionsLevels, setDescriptionsLevels] = useState(['', '']);
    const [levelAcc, setLevelAcc] = useState(['', '']);

    const index_to_string = (index) => {
        let string = ''
        if (index < 2) {
            string = 'no_symptom'
        } else if (index < 4) {
            string = 'mild'
        } else if (index < 6) {
            string = 'moderate'
        } else if (index < 7) {
            string = 'severe'
        } else if (index < 8) {
            string = 'very_severe'
        } else if (index < 9) {
            string = 'extremely_severe_a'
        } else if (index < 10) {
            string = 'extremely_severe_b'
        } else if (index < 11) {
            string = 'extremely_severe_c'
        } else if (index < 12) {
            string = 'extremely_severe_d'
        }
        return string
    }

    const index_to_string_name = (index) => {
        let string = ''
        if (index < 2) {
            string = 'No symptoms'
        } else if (index < 4) {
            string = 'Mild symptoms'
        } else if (index < 6) {
            string = 'Moderate symptoms'
        } else if (index < 7) {
            string = 'Severe symptoms'
        } else if (index < 8) {
            string = 'Very Severe symptoms'
        } else if (index < 9) {
            string = 'Extremely Severe A symptoms'
        } else if (index < 10) {
            string = 'Extremely Severe B symptoms'
        } else if (index < 11) {
            string = 'Extremely Severe C symptoms'
        } else if (index < 12) {
            string = 'Extremely Severe D symptoms'
        }
        return string
    }



    const handleSliderChange = (symptomIndex, levelIndex) => {

        console.log('Handler', symptomIndex, levelIndex);

        if (true) {
            setSymptomLevels((prevLevels) => ({
                ...prevLevels,
                [symptomIndex]: levelIndex,
            }));

            //levelIndex = levelIndex - 1;

            let lvl_ac = index_to_string(levelIndex)
            let level_name = index_to_string_name(levelIndex)
            //console.log(data['symptoms'][symptomIndex]['levels']['no_symptom']['able_to'], lvl_ac)

            //const accessor = data['symptoms'][symptomIndex]['levels'][]

            setLevelAcc(level_name)
            const ableToLevel = data['symptoms'][symptomIndex]['levels'][lvl_ac]['able_to'] //need this for all
            setAbleToLevels(ableToLevel)


            const may_or_not_be_able_to = data['symptoms'][symptomIndex]['levels'][lvl_ac]['may_or_not_be_able_to'] //need this for all
            setMayOrNotBeAbleToLevels(may_or_not_be_able_to)


            const able_to_do_some_or_all = data['symptoms'][symptomIndex]['levels'][lvl_ac]['able_to_do_some_or_all'] //need this for all
            setAbleToDoSomeOrAllLevels(able_to_do_some_or_all)
            console.log('Able', able_to_do_some_or_all)

            const not_able_to = data['symptoms'][symptomIndex]['levels'][lvl_ac]['not_able_to'] //need this for all
            setNotAbleToLevels(not_able_to)

            const unable_to = data['symptoms'][symptomIndex]['levels'][lvl_ac]['unable_to'] //need this for all
            setUnableToLevels(unable_to)

            const exceptions = data['symptoms'][symptomIndex]['levels'][lvl_ac]['exceptions'] //need this for all
            setExceptionsLevels(exceptions)

            const descriptions = data['symptoms'][symptomIndex]['levels'][lvl_ac]['descriptions'] //need this for all
            setDescriptionsLevels(descriptions)

        }

    };

    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        if (ableToDoSomeOrAllLevels[0] && descriptionsLevels[0]) {
            setLoaded(true)
        }

    }, [ableToDoSomeOrAllLevels, descriptionsLevels]);

    return (
        <Container>
            <WelcomeMessage>Symptom Severity Tracker</WelcomeMessage>
            <FeatureList>
                {data.symptoms.map((symptom, index) => (
                    <FeatureItem key={symptom.name}>
                        <h2>{symptom.name}</h2>

                        <OuputListB>
                            <OuputListTitle>
                                {levelAcc}
                            </OuputListTitle>
                            <ListIndexesN>
                                {isLoaded && descriptionsLevels[0].map((description, index) => (
                                    <ListIndexB key={index}> {description}</ListIndexB>
                                ))}
                            </ListIndexesN>

                        </OuputListB>

                        <Slider
                            divisions={Object.keys(symptom.levels).length}
                            width={300}
                            height={50}
                            key={index}
                            onChange={(levelIndex) => handleSliderChange(index, levelIndex)}
                            callback={handleSliderChange}
                            idx={index}
                        />

                        <OuputContainer>
                            <OuputListTop>
                                <OuputList>
                                    <OuputListTitle>
                                        Able To Do:
                                    </OuputListTitle>
                                    <ListIndexes>
                                        {isLoaded && ableToLevels[0].map((description, index) => (
                                            <ListIndex key={index}>{index + 1}: {description}</ListIndex>
                                        ))}
                                    </ListIndexes>
                                </OuputList>
                                <StyledInput />
                            </OuputListTop>

                            <OuputListTop>
                                <OuputList>
                                    <OuputListTitle>
                                        Maybe Able To Do:
                                    </OuputListTitle>
                                    <ListIndexes>
                                        {isLoaded && mayOrNotBeAbleToLevels[0].map((description, index) => (
                                            <ListIndex key={index}>{index + 1}: {description}</ListIndex>
                                        ))}
                                    </ListIndexes>
                                </OuputList>
                                <StyledInput />
                            </OuputListTop>

                            <OuputListTop>
                                <OuputList>
                                    <OuputListTitle>
                                        Secondary Abilities:
                                    </OuputListTitle>
                                    <ListIndexes>
                                        {isLoaded && ableToDoSomeOrAllLevels[0].map((description, index) => (
                                            <ListIndex key={index}>{index + 1}: {description}</ListIndex>
                                        ))}
                                    </ListIndexes>
                                </OuputList>
                                <StyledInput />
                            </OuputListTop>
                            <OuputListTop>
                                <OuputList>
                                    <OuputListTitle>
                                        Not Able To Do:
                                    </OuputListTitle>
                                    <ListIndexes>
                                        {isLoaded && notAbleToLevels[0].map((description, index) => (
                                            <ListIndex key={index}>{index + 1}: {description}</ListIndex>
                                        ))}
                                    </ListIndexes>
                                    

                                </OuputList>
                                <StyledInput placeholder='Add Notes'/>
                            </OuputListTop>

                            <OuputListTop>

                                <OuputList>
                                    <OuputListTitle>
                                        Unable To Do:
                                    </OuputListTitle>
                                    <ListIndexes>
                                        {isLoaded && unableToLevels[0].map((description, index) => (
                                            <ListIndex key={index}>{index + 1}: {description}</ListIndex>
                                        ))}
                                    </ListIndexes>
                                </OuputList>
                                <StyledInput />
                            </OuputListTop>

                        </OuputContainer>


                    </FeatureItem>
                ))}
            </FeatureList>
        </Container>
    );
};

const Container = styled.div`
  text-align: center;
  width: 95vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color:  #EAEAEA;
`;

const OuputContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 20vh;
`;

const ListIndexes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
`;
const ListIndexesN = styled.div`
  width: auto%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: left;
`;


const ListIndex = styled.div`
  min-width: 100%;
  height: auto;
    text-align: left;
    padding: 3px;
    font-size: 0.9rem;
`;

const ListIndexB = styled.div`
  min-width: 100%;
  height: auto;
    text-align: center;
    padding: 3px;
    font-size: 1.2rem;
`;

const OuputList = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 15vw;
  min-height: 50%;
  color: black;
 
  
  background: #EAEAEA;
  margin: 0.5vw;
`;

const OuputListTop = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 15vw;
  height: auto;
  color: black;
  border: 3px solid #EAEAEA;
  box-shadow: 0px 0px 0px 4px #8C1515;
  background: #EAEAEA;
  margin: 0.5vw;
`;

const OuputListB = styled.div`
text-align: center;
display: flex;
flex-direction: column;
min-width: 90%;
height: 6vh;
color: black;
border: 3px solid #EAEAEA;
box-shadow: 0px 0px 0px 4px #8C1515;
background: #EAEAEA;
border-radius: 30px;
margin: 0.5vw;

justify-content: start;
  align-items: center;
`;

const OuputListTitle = styled.div`
  font-size: 1.1rem;
  color: #820000;
  width: 80%;
  border-bottom:1px solid #8C1515;
  margin-bottom: 4px;
`;


const WelcomeMessage = styled.h1`
  margin-bottom: 20px;
  color: #820000;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  border: 3px solid #B83A4B;
  box-shadow: 0px 0px 0px 4px #820000;
  background-color:   #979694;
  overflow-x: hidden;
  height: 100%;
`;

const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
    padding: 1vw;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 30px;
    color:  #B83A4B;
  box-shadow: 5px 5px 0px 1px #EAEAEA;
  margin-top: 2vh;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s;

  &:focus {
    border: 1px solid dodgerblue;
    outline: none;
  }
`;


export default HomePage;
