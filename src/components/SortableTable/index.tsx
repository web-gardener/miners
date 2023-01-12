import React from 'react';
import Chip from '@mui/material/Chip';
import DAppImg from '../../assets/image/dapp.png';
import BSCScanChartImg from '../../assets/image/bscscan_chart.svg';
import TelegramImg from '../../assets/image/telegram-icon.svg';
import './style.scss';

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
    const getClassNamesFor = (name: string) => {
        if (sortConfig === undefined) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="sortable-table">
            <table>
                <caption>Products</caption>
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
                                onClick={() => requestSort('stock')}
                                className={getClassNamesFor('stock')}
                            >
                                In Stock
                                {(getClassNamesFor('stock') === "ascending") && "↑"}
                                {(getClassNamesFor('stock') === "descending" || getClassNamesFor('stock') === undefined) && "↓"}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td >
                                <Chip label={capitalizeFirstLetter(item.status)} style={{ ...style[item.status] }} />
                            </td>
                            <td>${item.tvl}</td>
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
                            <td>{item.stock}</td>
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