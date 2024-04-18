import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Slider = (props) => {
  const constraintsRef = useRef(null);
  const [position, setPosition] = useState(1);
  const dragX = useMotionValue(0);

  const onDrag = (event, info) => {
    // Calculate the position within the constraints
    
    const newPosition = Math.round(info.point.x / (constraintsRef.current.clientWidth / props.divisions));
    
    let temp = 1//newPosition + 1
    setPosition(2)
    
  };

  useEffect(() => {
    console.log('Current position:', position);
    props.callback(props.idx, position)
  }, [position]);

useEffect(() => {
    console.log('Current idx:', props.index);

  }, [props.idx]);


  return (
    <DragArea className="drag-area" ref={constraintsRef}>
      <DraggableElement
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={onDrag}
        style={{
          x: useTransform(dragX, (value) => value),
          width: '5%',
          height: '100%',
        }}
      />
    </DragArea>
  );
};

const DraggableElement = styled(motion.div)`
  background:  #8C1515;
  width: 100px;
  height: 100%;
  border-radius: 30px;
`;

const DragArea = styled(motion.div)`
  display: flex;
  width: 30vw;
  margin: 1vw;
  height: 2vh;
border: 2px solid #EAEAEA;
    background: #EAEAEA;
    box-shadow: 0px 0px 0px 4px #8C1515;
  border-radius: 30px;
  background: linear-gradient(to right, #EAEAEA, #B83A4B);
  margin: 5px;
`;

export default Slider;
