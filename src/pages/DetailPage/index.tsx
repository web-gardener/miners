import React from 'react';
import DAppData from './DAppData';
import PriceChart from './PriceChart';
import Details from './Details';
import './style.scss';

const DetailPage = () => {
    return (
        <div>
            <DAppData />
            <PriceChart />
            <Details />
        </div>
    );
}

export default DetailPage;