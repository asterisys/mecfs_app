import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ScaledComponent from '../ScaledComponent/ScaledComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [id, setId] = useState(0);


    const [loading, SetLoading] = useState(false);
    const [redEmailInput, setRedEmailInput] = useState(false)
    const build = true;

    const handleEmailChange = (event) => {
        const email_input = event.target.value//DOMPurify.sanitize(event.target.value)

        if (isValidEmail(email_input)) {
            setRedEmailInput(false)
        } else {
            setRedEmailInput(true)
        }
        setEmail(email_input);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    //const baseURL = process.env.NODE_ENV === 'development' ? '' : 'https://mecfs.website/';

    const baseURL_auth = build === true ? 'auth.php' : `https://mecfs.website/auth.php`;
    const baseURL_createacc = build === true ? 'createacc.php' : `https://mecfs.website/createacc.php`;

    useEffect(() => {
        setId(id + 1)
    }, [userMessage]);

    const isValidEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async () => {
        //console.log(isValidEmail(email))
        if (isValidEmail(email)) {

            SetLoading(true)
            try {

                const response = await fetch(baseURL_auth, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: email, password: password }),
                });

                const data = await response.json();

                // Handle the response data
                //console.log(data);


                if (data) {
                    if (data['error']) {
                        setUserMessage(<ScaledComponent id={id} text={data['error']} />)
                    } else {
                        //do nothing
                    }

                    if (data['success']) {
                        props.setUsername(email)
                        props.setPassword(password)
                        props.onLogin()
                    } else {
                        //do nothing
                    }
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
            SetLoading(false)
        } else {
            setRedEmailInput(true)
            setUserMessage(<ScaledComponent id={id} text={'Username must be an Email address!'} />)
        }
    };

    const handleCreateAccount = async () => {
        if (isValidEmail(email)) {
            SetLoading(true)
            try {
                const response = await fetch(baseURL_createacc, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: email, password: password }),
                });

                const data = await response.json();

                if (data) {
                    if (data['error']) {
                        setUserMessage(<ScaledComponent id={id} text={data['error']} />)
                    } else {
                        //do nothing
                    }

                    if (data['success']) {
                        props.onLogin()
                    } else {
                        //do nothing
                    }
                }

                // Handle the response data
                //console.log(data);
            } catch (error) {
                console.error('Error during account creation:', error);
            }
            SetLoading(false)
        } else {
            setRedEmailInput(true)
            setUserMessage(<ScaledComponent id={id} text={'Username must be an Email address!'} />)
        }
    };

    return (
        <LoginForm>
            <Row1>
                <Title>ME/CFS Tracker App</Title>
            </Row1>

            <Row2>
                <Input
                    type='email'
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                        color: redEmailInput ? 'red' : '#53565A',
                        border: redEmailInput ? '2px solid  #8C1515' : '2px solid #2E2D29'
                    }}
                />
                <Input
                    type='password'
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{
                        color: redEmailInput ? '#53565A' : '#53565A',
                        border: redEmailInput ? '2px solid  #2E2D29' : '2px solid #2E2D29'
                    }}
                />
            </Row2>
            <Row2>
                {loading ? (
                    <LoadingComponent />
                ) : (
                    <>{userMessage}</>
                )}
            </Row2>

            <Row>
                <Button2
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ backgroundColor: '#FFF', color: '#820000' }}
                    onClick={handleLogin}
                >
                    Login
                </Button2>
                <Button2
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ backgroundColor: '#FFF', color: '#820000' }}
                    onClick={handleCreateAccount}
                >
                    Create Account
                </Button2>
            </Row>
        </LoginForm>
    );
};

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: auto;
  padding-bottom: 2vh;
  padding-left: 4vh;
  padding-right: 4vh;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: 10vh;
  padding-bottom: 2vh;
  padding-left: 4vh;
  padding-right: 4vh;
  margin-bottom: 10px;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 90%;
  min-height: 1vh;
  padding: 10px;
  margin-bottom: 10px;
`;

const LoginForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  min-width: 32vw;
  width: auto;
  max-width: 90vw;
  min-height: 10vh;
  height: auto;
  max-height: 100vh;
  background: RGB(46, 45, 41, 0.3);
  
  padding: 1vw;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  background-color: #820000;
  padding: 20px;
  width: 100%;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  border-radius: 5px;
`;

const Button = styled(motion.button)`
  width: 40%;
  padding: 10px;
  
  margin: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button2 = styled(motion.button)`
  min-width: 50%;
  padding: 1vh;
  min-height: 1.5rem;
  margin: 10px;
  background-color: #820000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export default Login;