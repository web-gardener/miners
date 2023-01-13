import React, { useState } from 'react';
import DAppData from './DAppData';
import PriceChart from './PriceChart';
import Details from './Details';
import Grid from '@mui/material/Grid';
import './style.scss';

const DetailPage = () => {
    const [dappData, setDAppData] = useState<DAppData>({
        name: "name",
        chain: "POOCHAIN",
        token: "POOP",
        tvl: 1000,
        tvl_usd: 1000,
        fees: "10% / 10%",
        daily_rate: "5%",
        age: "2019/01/01",
        audit: "Pending",
        ref: "5%",
        update: "",
        links: {
            dapp: "/",
            contract: "/",
            chart: "/",
            telegram: "/",
        },
    });
    return (
        <div className="detail-page">
            <Grid container>
                <Grid xs={12} md={6} style={{ padding: 10 }}>
                    <DAppData data={dappData} />
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