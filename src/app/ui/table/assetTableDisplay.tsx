
'use client';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ColumnImages, IAssetTable, ICoinData } from './type';
import TableHeader from '@/app/components/tableheader';
import TableBody from '@/app/components/tablebody';
import MobileLayout from '@/app/components/mobilelayout';
import Pagination from '@/app/components/pagination';

const columnImages: ColumnImages = {
  Coin: "💰",
  Code: "📄",
  Price: "🤑",
  'Total Supply': "📉",
};

const AssetTableDisplay: FC<IAssetTable> = ({ styles, colmumHeads }) => {
  const [data, setData] = useState<ICoinData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coinlore.net/api/tickers/');
        setData(response.data.data);
        setCurrentPage(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className={`bg-table-gradient rounded-[5px] pb-1 md:bg-white shadow-zinc-500  shadow-lg min-h-[300px] max-w-[600px] mx-auto   ${styles}`}>
      <div className="overflow-x-auto md:overflow-visible ">
        <table className="min-w-full hidden md:table ">
          <TableHeader colmumHeads={colmumHeads} columnImages={columnImages} />
          <TableBody paginatedData={paginatedData} />
        </table>
        <MobileLayout paginatedData={paginatedData} />
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handleNext={() => setCurrentPage(currentPage + 1)} 
        handlePrevious={() => setCurrentPage(currentPage - 1)} 
      />
    </div>
  );
};

export default AssetTableDisplay;

