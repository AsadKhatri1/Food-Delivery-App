import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

import ControlledCarousel from '../components/Carousel';

const Home = () => {



    return (
        <div>
            {/* Navbar starts */}
            <Navbar />
            {/* {carousel} */}
            <div className='container-fluid'>
                <ControlledCarousel/>
            </div>

            {/* product cards */}
            <div className='d-flex' style={{ minHeight: '100vh' , flexWrap:'wrap'}}>
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

            {/* footer starts */}
            <Footer />
        </div>
    );
}

export default Home;
