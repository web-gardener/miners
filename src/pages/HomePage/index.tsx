import React from 'react'

import Navbar from '../../components/Navbar';
import Banner from './Banner';
import NewsCarousel from './NewsCarousel';
import Dashboard from './Dashboard';
import Footer from '../../components/Footer';
import './style.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="main-field">
                <div className="banner-field">
                    <Banner />
                </div>
                <div className="news-carousel-field">
                    <NewsCarousel />
                </div>
                <div className="dashboard-field">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default HomePage;