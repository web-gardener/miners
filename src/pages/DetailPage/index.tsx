import React from 'react';
import DAppData from './DAppData';
import Details from './Details';
import './style.scss';

const DetailPage = () => {
    return (
        <div>
            <DAppData />
            <Details />
        </div>
    );
}

export default DetailPage;