import React from 'react';
import DAppData from './DAppData';
import PriceChart from './PriceChart';
import Details from './Details';
import Grid from '@mui/material/Grid';
import './style.scss';

const DetailPage = () => {
    return (
        <div className="detail-page">
            <Grid container>
                <Grid xs={12} md={6} style={{ padding: 10 }}>
                    <DAppData />
                </Grid>
                <Grid xs={12} md={6} style={{ padding: 10 }}>
                    <PriceChart />
                </Grid>
            </Grid >
            <div className="details-field">
                <Details />
            </div>
        </div>
    );
}

export default DetailPage;