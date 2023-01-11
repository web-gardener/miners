import React from 'react'

import './style.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-item">
                <a href="https://www.greengrower.club" target="_blank" rel="noopener noreferrer">
                    <img src="https://goatminers.com/sugcxas/Green-Grower/Green-Grower-top.gif" alt="" title="" width="320" height="100" style={{ borderRadius: 5 }} />
                </a>
            </div>
            <div className="banner-item">
                <a href="https://infinitybeans.app" target="_blank" rel="noopener noreferrer">
                    <img src="https://goatminers.com/sugcxas/Infinity-Beans/Infinity-Beans-top.gif" alt="" title="" width="320" height="100" style={{ borderRadius: 5 }} />
                </a>
            </div>
        </div>
    );
}

export default Banner;