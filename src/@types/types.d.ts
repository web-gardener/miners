// Sortable Table
interface SortableTablePorps {
    products: SortableTableData[]
}

interface SortableTableData {
    id: number,
    name: string,
    status: "avoid" | "active" | "scam" | "new" | "over" | "warning",
    tvl: number,
    tvl_usd: number,
    stock: number,
    chain: 'BSC' | 'ETH' | 'POLYGON' | 'POOCHAIN',
    link: Links
    token: 'BNB' | 'USDT' | 'ETH' | 'POOP' | 'BUSD' | 'MATIC',
    age: string,
    tooltip_status: string,
}

interface Links {
    dapp: string,
    contract: string,
    chart: string,
    telegram: string,
}

interface SortConfig {
    key: keyof SortableTableData,
    direction: string,
}