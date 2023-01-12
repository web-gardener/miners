import React from 'react'
import SortableTable from '../../../components/SortableTable';

import './style.scss';

const Dashboard = () => {
    const products: SortableTableData[] = [
        {
            id: 1,
            name: 'Cheese',
            tvl: 5,
            tvl_usd: 4.9,
            stock: 20,
            status: 'avoid',
            chain: 'BSC',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'ETH',
            age: '1 day',
            tooltip_status: 'Avoid',
        },
        {
            id: 2,
            name: 'Milk',
            tvl: 1.9,
            tvl_usd: 4.9,
            stock: 32,
            status: 'active',
            chain: 'ETH',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'BNB',
            age: '1 day',
            tooltip_status: '',
        },
        {
            id: 3,
            name: 'Yoghurt',
            tvl: 2.4,
            tvl_usd: 4.9,
            stock: 12,
            status: 'scam',
            chain: 'POOCHAIN',
            link: {
                dapp: "/",
                contract: "/",
                chart: "/",
                telegram: "/",
            },
            token: 'BNB',
            age: '1 day',
            tooltip_status: 'Scam',
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
        <div>
            <SortableTable
                products={products}
            />
        </div>
    );
}

export default Dashboard;