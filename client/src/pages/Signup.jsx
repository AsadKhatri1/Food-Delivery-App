import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignForm from '../components/SignForm';

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <div className='m-5 h-100'>
        <SignForm/>
        </div>
  
    <Footer/>
    </div>
  );
}

export default Signup;
