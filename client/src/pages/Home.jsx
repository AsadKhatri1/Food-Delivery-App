import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import axios from 'axios'
import ControlledCarousel from '../components/Carousel';

const Home = () => {
    const [foodCat, setFoodCat]=useState([])
    const [foodItems, setFoodItems]=useState([])
    const loadData=async()=>{
    //    await axios.post("http://localhost:8000/api/foodData").then((result)=>{
    //         console.log(result)
    
    //     }).catch((err)=>{
    //         console.log(err)
    //         console.log('bhand')
    
    //     })
    let response= await fetch("http://localhost:8000/api/foodData",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        }
    })
    response=await response.json()
    console.log(response)
    
    }
  useEffect(()=>{
    loadData()
  },[])

    return (
        <div>
            {/* Navbar starts */}
            <Navbar />
            {/* {carousel} */}
            <div >
                <ControlledCarousel/>
            </div>

            {/* product cards */}
            <div className='d-flex' style={{ minHeight: '100vh' , flexWrap:'wrap'}}>
                <Card />
            </div>

            {/* footer starts */}
            <Footer />
        </div>
    );
}

export default Home;
