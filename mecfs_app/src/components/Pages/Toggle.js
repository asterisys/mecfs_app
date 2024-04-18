import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const ToggleContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  z-index:0;

  
  min-height: 6vh;
  width: 95%;
  background: transparent;
`;

const ToggleTextLabel = styled.div`
  overflow: hidden;
  position: relative;
  
  width: 10%;
  
  min-height: 6vh;

  background: transparent;
  opacity: ${({ isChecked }) => (isChecked ? '0.5' : '1')};
 
  
  transition-duration: 0.5s;
  z-index:1;
  color:white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;

  @media only screen and (max-device-width: 736px) {
    font-size: 0.5rem;
  }
  
  border-right: 1px solid black;
  &:hover {
    opacity: ${({ isChecked }) => (isChecked ? '0.7' : '1')};
    
  }
`;





const ToggleLabel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  z-index:0;
  background: linear-gradient(to right, #00A407, #4DC005, #A7E102, #F8F301, #EC9A06, #DA0E0E);
  
`;

//border-bottom: ${({ isChecked }) => (isChecked ? '1px solid green' : ' 1px solid blue')};
const ToggleSlider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  z-index:10;
  
  border-bottom: 1px solid white;
  transition: transform 0.1s;
  transform: translateX(${({ isChecked }) => (isChecked ? ((isChecked) * 100) : 0)}%);

  
  width: 10%;
`;



const StyledImage = styled.img`
  z-index: 2;
  width: 50%;
  height: 50%;
`;

const Toggle = (props) => {
  const [isChecked, setChecked] = useState(-1);
  const [rating, setRating] = useState(-1);

  const handleToggle = (e) => {
    e.stopPropagation();
    setChecked(0);
  };
  const handleToggle1 = (e) => {
    e.stopPropagation();
    setChecked(1);
  };
  const handleToggle2 = (e) => {
    e.stopPropagation();
    setChecked(2);
  };
  const handleToggle3 = (e) => {
    e.stopPropagation();
    setChecked(3);
  };
  const handleToggle4 = (e) => {
    e.stopPropagation();
    setChecked(4);
  };
  const handleToggle5 = (e) => {
    e.stopPropagation();
    setChecked(5);
  };
  const handleToggle6 = (e) => {
    e.stopPropagation();
    setChecked(6);
  };
  const handleToggle7 = (e) => {
    e.stopPropagation();
    setChecked(7);
  };
  const handleToggle8 = (e) => {
    e.stopPropagation();
    setChecked(8);
  };
  const handleToggle9 = (e) => {
    e.stopPropagation();
    setChecked(9);
  };


  useEffect(() => {

    //props.callback(isChecked);
    if(props.updateRating != null && isChecked != -1){
      //console.log(props.updateRating);
      props.updateRating(isChecked)
    }
    

  }, [isChecked]);

  useEffect(() => {
    if(props.rating != null && props.rating != -1){
      console.log('props rating', props.rating)
      setRating(props.rating)
    } 
  }, [props.rating]);

  useEffect(() => {
    if(rating != isChecked){
      console.log('update is checked',rating)
      setChecked(rating);
    } 
  }, [rating]);

  return (
    <ToggleContainer>
      <ToggleLabel>

        <ToggleTextLabel onClick={handleToggle} isChecked={(isChecked > 0 ? isChecked == 0 : isChecked+1 == 0)}>

          {props.list[0]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle1} isChecked={isChecked == 1}>

          {props.list[1]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle2} isChecked={isChecked == 2}>

          {props.list[2]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle3} isChecked={isChecked == 3}>

          {props.list[3]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle4} isChecked={isChecked == 4}>

          {props.list[4]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle5} isChecked={isChecked == 5}>

          {props.list[5]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle6} isChecked={isChecked == 6}>

          {props.list[6]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle7} isChecked={isChecked == 7}>

          {props.list[7]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle8} isChecked={isChecked == 8}>

          {props.list[8]}
        </ToggleTextLabel>

        <ToggleTextLabel onClick={handleToggle9} isChecked={isChecked == 9}>

          {props.list[9]}
        </ToggleTextLabel>





        <ToggleSlider isChecked={(isChecked > 0 ? isChecked : isChecked+1)} />


      </ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;
