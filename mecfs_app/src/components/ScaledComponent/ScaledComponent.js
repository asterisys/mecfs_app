import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const ScaledComponent = (props) => {
    const controls = useAnimation();

    const animateOnPropsChange = async () => {
        await controls.start({ scale: 1.1 });
        await controls.start({ scale: 1 });
    };

    const animateOnExit = async () => {
        await controls.start({ scale: 0 });
    };

    // Trigger animation when props.text changes
    React.useEffect(() => {
        animateOnPropsChange();
    }, [props.id]);

    return (
        <Container
            initial={{ scale: 0 }} // Initial scale when the component is mounted
            animate={controls} // Use controls to dynamically set the animation
            exit={{ scale: 0 }} // Exit animation configuration
            transition={{ duration: 0.2 }} // Transition duration in seconds
        >
            {props.text}
        </Container>
    );
};

const Container = styled(motion.div)`
    margin-bottom: 20px;
    background-color: #6FC3FF;
    padding: 20px;
    width: 60%;
    color: white;
    text-align: center;
    border-radius: 20px;
    font-size: 1.1rem;
`;

export default ScaledComponent;
