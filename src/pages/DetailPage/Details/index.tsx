import React from 'react';

import './style.scss';

const Details = () => {
    return (
        <div className="details">
            <div className="heading">
                <h1>Details</h1>
            </div>
            <div>
                <hr />
            </div>
            <div className="images">
                <div>
                    <img src={"https://goatminers.com/screenshots/ETH%20Machine/desktop-medium.jpg"} alt='desktop-medium' />
                </div>
                <div>
                    <img src={"https://goatminers.com/screenshots/ETH%20Machine/mobile-medium.jpg"} alt='desktop-medium' />
                </div>
            </div>
            <div className="description">
                <h4>
                    From the creators of successful Bean Machine project. ETH version with improved mechanics with all lessons learnt during Bean Machine history. 2% tax goes to Bean Machine TVL. *description in progress
                    In GoatMiners since January 9, 2023 11:14 PM UTC.
                </h4>
            </div>
        </div>
    );
}

export default Details;