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
    const [detailData, setDetailData] = useState<DetailData>({
        name: "Solar Kingdom",
        description: "Beautiful dApp by the Solar Farm team. This is a fork of Baked Beans v2 with many additions. Boost your daily ROI (uo ti 7.5%) by referring people. Anti-whale mechanisms: - Maximum deposit - Accumulation cut-off - Penalties for early withdrawal and more. Solar Frenzy game: Reward pool in which last person to deposit before countdown reaches 0 will 70% of the jackpot! The remaining 30% will be won for the user who made the biggest investment since last Solar Frenzy. Note this is a proxy contract which entails additional risks.",
        added: "January 10, 2023 5: 30 PM"
    })
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
                <Details data={detailData} />
            </div>
        </div>
    );
}

export default DetailPage;