import React from 'react'
import HomeComponent from '../components/HomeComponent'
import Navbar from '../layout/Navbar'
import '../assets/css/pages/Home/Home.css'
const Home = () => {
    return (
    <div> 
        <Navbar />
        <HomeComponent/>
    </div>
  )
}

export default Home