import React from 'react'
import Marquee from 'react-fast-marquee';
import { FaBars } from 'react-icons/fa'
import LogoImg from '../../../assets/image/logo.png';
import './style.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <div className="logo-img">
                    <img src={LogoImg} alt="logo" width="50" height="50" />
                </div>
                <div className='brand'>
                    <p>MINERS</p>
                </div>
            </div>

            <div className='moving-text'>
                <div>
                    <Marquee style={{
                        'margin': 0,
                        fontWeight: 600,
                        fontSize: 30,
                        color: '#E8B21E',
                        borderRadius: 4,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }} gradient={false} speed={40}>
                        We are giving away $50!! Check TG for details
                    </Marquee>
                </div>
            </div>
            <div className='menu-btn'>
                <FaBars />
            </div>
        </div >
    );
}

export default Navbar;