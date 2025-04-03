import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/ui/BackToTop'
import '../components/css/Home.css'

const Home = () => {

    return (
        <div className='home'>
            <Navbar />
            <Outlet />
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Home