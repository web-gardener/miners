import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.scss';

const Layout = () => {
    return (
        <div className='layout'>
            <div className='navbar-field'>
                <Navbar />
            </div>
            <Outlet />
            <div className='footer-field'>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;