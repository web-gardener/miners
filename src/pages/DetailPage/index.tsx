import React, { useState, useEffect } from 'react';
import DAppData from './DAppData';
import PriceChart from './PriceChart';
import Details from './Details';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import './style.scss';

const tokenLinks = {
    BNB: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    BUSD: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
    ETH: 'https://dexscreener.com/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    MATIC: 'https://dexscreener.com/polygon/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    POOP: 'https://poocoin.app/tokens/0xa1611e8d4070dee36ef308952cf34255c92a01c5',
    USDT: 'https://poocoin.app/tokens/0x55d398326f99059ff775485246999027b3197955',
};

const DetailPage = () => {
    const [dappName, setName] = useState<string>("");

    const [dappData, setDAppData] = useState<DAppData>({
        name: "",
        chain: "",
        token: "",
        tvl: 0,
        tvl_usd: 0,
        fees: "0% / 0%",
        daily_rate: "0%",
        age: "",
        audit: "Pending",
        ref: "0%",
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
    });

    const getCorrectChain = (chain: string): ("BSC" | "ETH" | "POLYGON" | "POOCHAIN") => {
        let result = chain.toUpperCase();
        if (result === "BSC" || result === "ETH" || result === "POLYGON" || result === "POOCHAIN") {
            return result;
        } else {
            return "BSC";
        }
    }

    const getCorrectToken = (token: string): ('BNB' | 'USDT' | 'ETH' | 'POOP' | 'BUSD' | 'MATIC') => {
        let result = token.toUpperCase();
        if (result === "BNB" || result === "USDT" || result === "ETH" || result === "POOP" || result === "BUSD" || result === "MATIC") {
            return result;
        } else {
            return "BNB";
        }
    }

    function getPeriod(date: string) {
        const today = new Date();
        const created_day = new Date(date);
        const period = today.getTime() - created_day.getTime();
        if (period > 0) {
            if (period > 1000 * 3600 * 24) {
                let days = Math.ceil(period / (1000 * 3600 * 24));
                return days + " days";
            } else if (period > 1000 * 3600) {
                let hours = Math.ceil(period / (1000 * 3600));
                return hours + " hours ago";
            } else {
                let minutes = Math.ceil(period / (1000 * 60));
                return minutes + " minutes ago";
            }
        } else {
            if (-period < 1000 * 3600 * 24) {
                let hours = Math.ceil(-period / (1000 * 3600));
                return "in " + hours + " hours";
            } else {
                let days = Math.ceil(-period / (1000 * 3600 * 24));
                return "in " + days + " days";
            }
        }
    }

    useEffect(() => {
        let newName = localStorage.getItem("name");
        setName(newName === null ? "" : newName);
    }, []);

    useEffect(() => {
        axios
            .post("https://api.goatminers.com/json_data_details", {
                name: dappName
            })
            .then((response) => {
                console.log(response.data[1]);
                let data: DAppDataResponse = response.data[0];
                let updated_date = response.data[1].last_updt;
                setDAppData({
                    name: dappName,
                    chain: getCorrectChain(data.chain),
                    token: getCorrectToken(data.token),
                    tvl: data.tvl,
                    tvl_usd: data.tvl_usd,
                    fees: data.fee_in_out,
                    daily_rate: data.daily,
                    age: getPeriod(data.age),
                    audit: data.audit,
                    ref: data.referrer,
                    update: getPeriod(updated_date),
                    links: {
                        dapp: data.dapp_link,
                        contract: data.link_contract,
                        chart: tokenLinks[getCorrectToken(data.token)],
                        telegram: data.tg_group,
                    }
                });
                setDetailData({
                    name: dappName,
                    description: data.description,
                    added: data.added,
                });
            })
            .catch(err => { console.log(err) })
    }, [dappName]);

    return (
        <div className="detail-page">
            <Grid container item>
                <Grid xs={12} md={6} item style={{ padding: 10 }}>
                    <DAppData data={dappData} />
                </Grid>
                <Grid xs={12} md={6} item style={{ padding: 10 }}>
                    <PriceChart name={dappName} />
                </Grid>
            </Grid >
            <div className="details-field">
                <Details data={detailData} />
            </div>
        </div>
    );
}

export default DetailPage;