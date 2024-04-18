import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingComponent = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid #ccc;
  border-top: 4px solid #820000;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingComponent;
