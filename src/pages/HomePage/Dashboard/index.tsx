import React, { useState, useEffect } from 'react'
import SortableTable from '../../../components/SortableTable';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import axios from 'axios';
import './style.scss';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState<SortableTableData[]>([]);

    function isNew(date: string) {
        const today = new Date();
        const created_day = new Date(date);
        const period = today.getTime() - created_day.getTime();
        if (period < 1000 * 3600 * 24) {
            return true
        } else {
            return false;
        }
    }

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

    const getStatusString = (status: string, age: string): ("avoid" | "active" | "scam" | "new" | "over" | "warning") => {
        switch (status) {
            case "Warning#ed6c02":
                return "warning";
            case "Over#808080":
                return "over";
            case "Scam#d32f2f":
                return "scam";
            case "Avoid#d34f2f":
                return "avoid";
            default:
                return isNew(age) ? "new" : "active";
        }
    }

    const getData = () => {
        axios
            .get('https://api.goatminers.com/json_data_general')
            .then(
                response => {
                    console.log(response.data);
                    let newDashboardData: SortableTableData[] = [];
                    response.data.map((dataItem: DashboardData, index: number) => {
                        let id = index;
                        let name = dataItem.name;
                        let status: ("avoid" | "active" | "scam" | "new" | "over" | "warning") = getStatusString(dataItem.status, dataItem.age);
                        let tvl = dataItem.tvl;
                        let tvl_usd = dataItem.tvl_usd;
                        let tvl_7d = dataItem.tvl_7d;
                        let tvl_24h = dataItem.tvl_24h;
                        let chain: ('BSC' | 'ETH' | 'POLYGON' | 'POOCHAIN') = getCorrectChain(dataItem.chain);
                        let link = {
                            dapp: dataItem.dapp_link,
                            contract: dataItem.link_contract,
                            chart: dataItem.link_balance_chart,
                            telegram: dataItem.tg_group,
                        };
                        let token: ('BNB' | 'USDT' | 'ETH' | 'POOP' | 'BUSD' | 'MATIC') = getCorrectToken(dataItem.token);
                        let age = dataItem.age;
                        let tooltip_status = dataItem.tooltip_status === null ? "" : dataItem.tooltip_status;
                        let tooltip_daily = dataItem.tooltip_daily;
                        let tooltip_fee_in_out = dataItem.tooltip_fee_in_out;
                        let fee_in_out = dataItem.fee_in_out;
                        let sum_fee_in_out = dataItem.sum_fee_in_out;
                        let daily = dataItem.daily;
                        let max_daily = dataItem.max_daily;
                        let audit = dataItem.audit;
                        let description = dataItem.description;
                        newDashboardData.push({
                            id: id,
                            name: name,
                            status: status,
                            tvl: tvl,
                            tvl_usd: tvl_usd,
                            tvl_7d: tvl_7d,
                            tvl_24h: tvl_24h,
                            chain: chain,
                            link: link,
                            token: token,
                            age: age,
                            tooltip_status: tooltip_status,
                            tooltip_daily: tooltip_daily,
                            tooltip_fee_in_out: tooltip_fee_in_out,
                            fee_in_out: fee_in_out,
                            sum_fee_in_out: sum_fee_in_out,
                            daily: daily,
                            max_daily: max_daily,
                            audit: audit,
                            description: description
                        });
                        setDashboardData(newDashboardData);
                    });
                })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="dashboard">
            <div>
                <h1>ROI Dapps/Miners</h1>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <SortableTable
                    products={dashboardData}
                />
            </div>
            <div>
                <h2>Loaded {dashboardData.length} projects <SwipeVerticalIcon /></h2>
            </div>
        </div>
    );
}

export default Dashboard;