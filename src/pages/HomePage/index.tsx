import React from 'react'

import Navbar from './Navbar';
import Banner from './Banner';
import Carousel from './Carousel';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './style.scss';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Carousel />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default HomePage;