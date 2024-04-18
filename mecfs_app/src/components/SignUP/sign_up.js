import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { UserContext } from '../../contexts/user.context';
import  {Link, useLocation, useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {emailPasswordSignUp} = useContext(UserContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onFormInputChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace('?redirectTo=', '');
    navigate(redirectTo ? redirectTo : '/');
  }

  const 