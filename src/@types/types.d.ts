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

// Detail Page

interface DAppData {
    name: string,
    chain: string,
    token: string,
    tvl: number,
    tvl_usd: number,
    fees: string,
    daily_rate: string,
    age: string,
    audit: string,
    ref: string,
    update: string,
    links: Links,
}

interface DAppDataProps {
    data: DAppData
}

interface DetailData {
    name: string,
    description: string,
    added: string,
}

interface DetailDataProps {
    data: DetailData
}