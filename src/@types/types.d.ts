// Sortable Table
interface SortableTablePorps {
    products: SortableTableData[]
}

interface SortableTableData {
    id: number,
    name: string,
    status: "avoid" | "active" | "scam" | "new" | "over" | "warning",
    tvl: number,
    stock: number,
    chain: 'BSC' | 'ETH' | 'POLYGON' | 'POOCHAIN',
    link: Links
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