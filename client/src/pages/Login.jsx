import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className='container m-5'>
        <LoginForm/>
    </div>
    </>
  );
}

export default Login;
