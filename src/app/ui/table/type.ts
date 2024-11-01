

export interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  tsupply: string;
}

export interface IAssetTable {
  styles?: string;
  colmumHeads: Array<'Coin' | 'Code' | 'Price' | 'Total Supply'>; // Note the space here
}


export type ColumnTitle = 'Coin' | 'Code' | 'Price' | 'Total Supply';

export type ColumnImages = Record<string, string>;

