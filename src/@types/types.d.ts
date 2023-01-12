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
    tvl_7d: number,
    tvl_24h: number,
    chain: 'BSC' | 'ETH' | 'POLYGON' | 'POOCHAIN',
    link: Links
    token: 'BNB' | 'USDT' | 'ETH' | 'POOP' | 'BUSD' | 'MATIC',
    age: string,
    tooltip_status: string,
    tooltip_daily: string,
    tooltip_fee_in_out: string,
    fee_in_out: string,
    sum_fee_in_out: number,
    daily: string,
    max_daily: number,
    audit: string,
    description: string,
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