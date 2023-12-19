import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {

  

    return (
        <div>
            {/* Navbar starts */}
            <Navbar />
            {/* product cards */}
            <div style={{height:'100vh'}}>
            <Card/>

            </div>

            {/* footer starts */}
            <Footer />
        </div>
    );
}

export default Home;
