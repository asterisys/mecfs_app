import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from './components/Login/Login';
import HomePage from './components/Home/Home';
import './App.css'; 

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: #EAEAEA;
`;

function App() {
  //Make sure this is set to false on prod
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.title = 'ME/CFS Tracker App';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#820000');
  }, []);

  // Placeholder function for handling login. Replace with your actual login logic.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (

    <HomePage/>

  );
}

export default App;
