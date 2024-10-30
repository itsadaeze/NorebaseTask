

export interface ICoinData {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price_usd: string; 
  tsupply: string; 
}

export interface IAssetTable {
  colmumHeads: string[];
  styles?: string;
}
