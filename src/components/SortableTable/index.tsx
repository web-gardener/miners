import React from 'react';
import Chip from '@mui/material/Chip';
import DAppImg from '../../assets/image/dapp.png';
import BSCScanChartImg from '../../assets/image/bscscan_chart.svg';
import TelegramImg from '../../assets/image/telegram-icon.svg';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import SafeIcon from '../../assets/image/safety-icon.webp';
import UnsafeIcon from '../../assets/image/unsafe-icon.svg';
import InfoIcon from '../../assets/image/info-icon.svg';
import { useNavigate } from "react-router-dom";
import './style.scss';

const tokenLinks = {
    BNB: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    BUSD: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
    ETH: 'https://dexscreener.com/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    MATIC: 'https://dexscreener.com/polygon/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    POOP: 'https://poocoin.app/tokens/0xa1611e8d4070dee36ef308952cf34255c92a01c5',
    USDT: 'https://poocoin.app/tokens/0x55d398326f99059ff775485246999027b3197955',
};

const chainLinks = {
    BSC: 'https://www.bnbchain.org/en',
    ETH: 'https://ethereum.org/en',
    POLYGON: 'https://polygon.technology/',
    POOCHAIN: 'https://www.poochain.co/',
}

const useSortableData = (items: SortableTableData[], config?: SortConfig) => {
    const [sortConfig, setSortConfig] = React.useState<SortConfig | undefined>(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems: SortableTableData[] = [...items];
        if (sortConfig !== undefined) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key: keyof SortableTableData) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const SortableTable = (props: SortableTablePorps) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const navigate = useNavigate();

    const getClassNamesFor = (name: string) => {
        if (sortConfig === undefined) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getPeriod(date: string) {
        const today = new Date();
        const created_day = new Date(date);
        const period = today.getTime() - created_day.getTime();
        if (period > 0) {
            if (period < 1000 * 3600 * 24) {
                let hours = Math.ceil(period / (1000 * 3600));
                return hours + " hours ago";
            } else {
                let days = Math.ceil(period / (1000 * 3600 * 24));
                return days + " days";
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

    const handleClickName = (name: string) => {
        localStorage.setItem('name', name);
        navigate("detail");
    }

    return (
        <div className="sortable-table">
            <table>
                <thead>
                    <tr>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}
                            >
                                Name
                                {(getClassNamesFor('name') === "ascending") && "↑"}
                                {(getClassNamesFor('name') === "descending" || getClassNamesFor('name') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('tvl')}
                                className={getClassNamesFor('tvl')}
                            >
                                Tvl
                                {(getClassNamesFor('tvl') === "ascending") && "↑"}
                                {(getClassNamesFor('tvl') === "descending" || getClassNamesFor('tvl') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            Links
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('token')}
                                className={getClassNamesFor('token')}
                            >
                                Token
                                {(getClassNamesFor('token') === "ascending") && "↑"}
                                {(getClassNamesFor('token') === "descending" || getClassNamesFor('token') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('sum_fee_in_out')}
                                className={getClassNamesFor('sum_fee_in_out')}
                            >
                                Fees
                                {(getClassNamesFor('sum_fee_in_out') === "ascending") && "↑"}
                                {(getClassNamesFor('sum_fee_in_out') === "descending" || getClassNamesFor('sum_fee_in_out') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('max_daily')}
                                className={getClassNamesFor('max_daily')}
                            >
                                Daily%
                                {(getClassNamesFor('max_daily') === "ascending") && "↑"}
                                {(getClassNamesFor('max_daily') === "descending" || getClassNamesFor('max_daily') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            Security &<br />Info
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('age')}
                                className={getClassNamesFor('age')}
                            >
                                Age
                                {(getClassNamesFor('age') === "ascending") && "↑"}
                                {(getClassNamesFor('age') === "descending" || getClassNamesFor('age') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('tvl_24h')}
                                className={getClassNamesFor('tvl_24h')}
                            >
                                Tvl 24h
                                {(getClassNamesFor('tvl_24h') === "ascending") && "↑"}
                                {(getClassNamesFor('tvl_24h') === "descending" || getClassNamesFor('tvl_24h') === undefined) && "↓"}
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('tvl_7d')}
                                className={getClassNamesFor('tvl_7d')}
                            >
                                Tvl 7d
                                {(getClassNamesFor('tvl_7d') === "ascending") && "↑"}
                                {(getClassNamesFor('tvl_7d') === "descending" || getClassNamesFor('tvl_7d') === undefined) && "↓"}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Tooltip title="Click for more info" placement="top" arrow>
                                    <Button style={{ color: 'black', minWidth: '0' }} onClick={() => handleClickName(item.name)}>{item.name}</Button>
                                </Tooltip>
                            </td>
                            <td>
                                <Tooltip title={`${item.tooltip_status === "" ? getPeriod(item.age) : item.tooltip_status}`} placement="top" arrow>
                                    <Chip label={capitalizeFirstLetter(item.status)} style={{ ...style[item.status] }} />
                                </Tooltip>
                            </td>
                            <td>
                                <Tooltip title={`${item.tvl} ${item.token}`} placement="top" arrow>
                                    <Button style={{ color: 'black' }}>${item.tvl_usd}</Button>
                                </Tooltip>
                            </td>
                            <td>
                                <div className="links">
                                    <a href={item.link.dapp} className="link-item">
                                        <img src={DAppImg} alt="dapp-link" width={20} height={20} />
                                    </a>
                                    <a href={item.link.contract} className="link-item">
                                        <img src={`${item.chain}.png`} alt="dapp-link" width={20} height={20} />
                                    </a>
                                    <a href={item.link.chart} className="link-item">
                                        <img src={BSCScanChartImg} alt="dapp-link" width={20} height={20} />
                                    </a>
                                    <a href={item.link.telegram} className="link-item">
                                        <img src={TelegramImg} alt="dapp-link" width={20} height={20} />
                                    </a>
                                </div>

                            </td>
                            <td>

                                <div className="tokens">
                                    <a className='chain' href={chainLinks[item.chain]}>
                                        <Tooltip title={`Chain ${item.chain}`} placement="top" arrow>
                                            <img src={`${item.chain}_CHAIN.png`} width={20} alt='chain' />
                                        </Tooltip>
                                    </a>
                                    <a className="token" href={tokenLinks[item.token]}>
                                        <Tooltip title={`${item.token}`} placement="top" arrow>
                                            <img src={`${item.token}_TOKEN.png`} width={20} alt='token' />
                                        </Tooltip>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <Tooltip title={`${item.tooltip_fee_in_out}`} placement="top" arrow>
                                    <Button style={{ color: 'black' }}>{item.fee_in_out}</Button>
                                </Tooltip>
                            </td>
                            <td>
                                <Tooltip title={`${item.tooltip_daily}`} placement="top" arrow>
                                    <Button style={{ color: 'black' }}>{item.daily}</Button>
                                </Tooltip>
                            </td>
                            <td>
                                <div className="security-info">
                                    <div>
                                        {
                                            item.audit === "Pending" ?
                                                (<Tooltip title={`${item.audit}`} placement="left" arrow>
                                                    <img src={UnsafeIcon} alt='unsafe' width={20} height={20} />
                                                </Tooltip>)
                                                : <Tooltip title={`${item.audit}`} placement="left" arrow>
                                                    <img src={SafeIcon} alt="safe" width={20} height={20} />
                                                </Tooltip>
                                        }
                                    </div>
                                    <div className="info-icon">
                                        <Tooltip title={`${item.description}`} placement="left" arrow>
                                            <img src={InfoIcon} alt="info" width={20} height={20} />
                                        </Tooltip>
                                    </div>
                                </div>
                            </td>
                            <td>{getPeriod(item.age)}</td>
                            <td>
                                <p className={`${item.tvl_24h > 0 ? "positive" : "negative"}`}>
                                    {item.tvl_24h < 0 ? item.tvl_24h : '+' + item.tvl_24h}%
                                </p>
                            </td>
                            <td>
                                <p className={`${item.tvl_7d > 0 ? "positive" : "negative"}`}>
                                    {item.tvl_7d < 0 ? item.tvl_7d : '+' + item.tvl_7d}%
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const style = {
    avoid: {
        color: 'white',
        backgroundColor: 'rgb(211,47, 47)',
    },
    active: {
        color: 'rgb(8, 26, 112)',
        backgroundColor: 'rgb(203, 250, 207)',
    },
    scam: {
        color: 'white',
        backgroundColor: 'rgb(211,47, 47)',
    },
    new: {
        color: 'white',
        backgroundColor: 'rgb(46, 125, 50)',
    },
    over: {
        color: 'white',
        backgroundColor: 'rgb(128, 128, 128)',
    },
    warning: {
        color: 'white',
        backgroundColor: 'rgb(237, 108, 2)',
    }
}

export default SortableTable;