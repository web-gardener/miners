import React from 'react'
import SortableTable from '../../../components/SortableTable';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';

import './style.scss';

const Dashboard = () => {
    const products: SortableTableData[] = [
        {
            id: 1,
            name: 'Cheese',
            tvl: 5,
            tvl_usd: 4.9,
            tvl_7d: 20,
            status: 'avoid',
            chain: 'BSC',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'ETH',
            age: '2023-01-12 15:00:04',
            tooltip_status: 'Avoid',
            tooltip_daily: 'tooltip_daily',
            tooltip_fee_in_out: 'tooltip_fee_in_out',
            fee_in_out: "3.5% / 2.5%",
            sum_fee_in_out: 6,
            daily: '10%',
            max_daily: 10,
            tvl_24h: -12.55,
            audit: 'Pending',
            description: 'description 1',
        },
        {
            id: 2,
            name: 'Milk',
            tvl: 1.9,
            tvl_usd: 4.9,
            tvl_7d: 32,
            status: 'active',
            chain: 'ETH',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'BNB',
            age: '2022-01-08 15:00:04',
            tooltip_status: '',
            fee_in_out: "5% / 5%",
            tooltip_daily: 'tooltip_daily',
            tooltip_fee_in_out: 'tooltip_fee_in_out',
            sum_fee_in_out: 10,
            daily: '8.5%',
            max_daily: 8.5,
            tvl_24h: +3.66,
            audit: 'Audit 1',
            description: 'description 2',
        },
        {
            id: 3,
            name: 'Yoghurt',
            tvl: 2.4,
            tvl_usd: 4.9,
            tvl_7d: 12,
            status: 'scam',
            chain: 'POOCHAIN',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'BNB',
            age: '2023-01-18 15:00:04',
            tooltip_status: 'Scam',
            tooltip_daily: 'tooltip_daily',
            tooltip_fee_in_out: 'tooltip_fee_in_out',
            fee_in_out: "4% / 4%",
            sum_fee_in_out: 8,
            daily: '15%',
            max_daily: 15,
            tvl_24h: -15,
            audit: 'Audit 3',
            description: 'description 3',
        },
        // {
        //     id: 4,
        //     name: 'Heavy Cream',
        //     tvl: 3.9,
        //     tvl_usd: 4.9,
        //     stock: 9,
        //     status: 'new',
        //     chain: 'POLYGON',
        //     link: {
        //         dapp: "/",
        //         contract: "/",
        //         chart: "/",
        //         telegram: "/",
        //     },
        //     token: 'BNB',
        //     age: '1 day',
        // },
        // {
        //     id: 5,
        //     name: 'Butter',
        //     tvl: 0.9,
        //     tvl_usd: 4.9,
        //     stock: 99,
        //     status: 'over',
        //     chain: 'BSC',
        //     link: {
        //         dapp: "/",
        //         contract: "/",
        //         chart: "/",
        //         telegram: "/",
        //     },
        //     token: 'BNB',
        //     age: '1 day',
        // },
        // {
        //     id: 6,
        //     name: 'Sour Cream ',
        //     tvl: 2.9,
        //     tvl_usd: 4.9,
        //     stock: 86,
        //     status: 'warning',
        //     chain: 'BSC',
        //     link: {
        //         dapp: "/",
        //         contract: "/",
        //         chart: "/",
        //         telegram: "/",
        //     },
        //     token: 'BNB',
        //     age: '1 day',
        // },
        // {
        //     id: 7,
        //     name: 'Fancy French Cheese 🇫🇷',
        //     tvl: 99,
        //     tvl_usd: 4.9,
        //     stock: 12,
        //     status: 'avoid',
        //     chain: 'BSC',
        //     link: {
        //         dapp: "/",
        //         contract: "/",
        //         chart: "/",
        //         telegram: "/",
        //     },
        //     token: 'BNB',
        //     age: '1 day',
        // },
    ];
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
                    products={products}
                />
            </div>
            <div>
                <h2>Loaded {products.length} projects <SwipeVerticalIcon /></h2>
            </div>
        </div>
    );
}

export default Dashboard;