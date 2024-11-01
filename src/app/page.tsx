

import React from 'react';
import AssetTableDisplay from './ui/table/assetTableDisplay';

export default function AssetTable() {
  return (
    <div className='bg-gray-200 w-full h-screen md:h-[100vh] py-6 px-4'>
      <AssetTableDisplay
        styles="col-span-1"
        colmumHeads={['Coin', 'Code', 'Price', 'Total Supply']}
      />
    </div>
  );
}
