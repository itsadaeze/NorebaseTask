

'use client';
import React, { FC, useEffect, useState } from 'react';
import { IAssetTable, ICoinData } from './type';
import Image from 'next/image';
import { assest } from '@/assets';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import axios from 'axios';

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
  
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className={`bg-table-gradient md:rounded-[5px] pb-1 bg-white shadow-zinc-500 shadow-lg min-h-[300px] max-w-[500px] mx-auto  ${styles}`}>
      <div className="overflow-x-auto md:overflow-visible">
        {/* Desktop Layout */}
        <table className="min-w-full hidden md:table ">
          <thead className="bg-transparent">
            <tr className="h-[35px] px-4">
              {colmumHeads.map((title, index) => (
                <th key={index} scope="col" className="text-left text-[14px] md:text-[18px]/[21px] text-black text-light-200 font-semibold ">
                  <div className={`flex items-center px-2`}>
                    {title !== '' && (
                      <Image src={assest.avatar} className="hidden md:flex w-[10px] h-[10px]" alt="sort-icon" width={10} />
                    )}
                    <span className="text-light-60 text-center text-[13px] font-bold">{title}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className={`h-[35px] cursor-pointer mb-4 hover:rounded-[18px] ${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}`}>
                <td className="px-2  text-left text-[18px]/[21px] text-light-200 font-semibold">
                  <span className="text-black text-[14px] font-[500]">{item.name}</span>
                </td>
                <td className="px-2 text-left text-[18px]/[21px] text-light-200 font-semibold">
                  <span className="text-black text-[14px] font-[500]">{item.symbol}</span>
                </td>
                <td className="px-2  text-left text-[18px]/[21px] text-light-200 font-semibold">
                  <span className="text-black text-left text-[14px] font-[500]">{parseFloat(item.price_usd).toFixed(2)} </span>
                </td>
                <td className="text-left text-[18px]/[21px] text-light-200 font-semibold">
                  <span className="text-black text-left text-[14px] font-[500]">{parseFloat(item.tsupply).toLocaleString()} {item.symbol}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {paginatedData.map((item, index) => (
            <div key={item.id} className={`p-4 border flex justify-between items-center gap-8   ${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}`}>
              <div className='flex flex-col gap-6'>
                <div className="flex flex-col  mb-2">
                  <p>Coin</p>
                  <span className="text-black text-[14px] font-[500] font-montserrat">{item.name}</span>
                </div>
                <div className="flex flex-col text-black text-[14px] font-[500] font-montserrat">
                  <p>Symbol</p>
                  <span>{item.symbol}</span>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className="flex flex-col  mb-2">
                  <p>Price</p>
                  <span className="text-black text-[14px] font-[500] font-montserrat">{parseFloat(item.price_usd).toFixed(2)}</span>
                </div>
                <div className="text-black flex flex-col text-[14px] font-[500] font-montserrat">
                  <p>Total Supply</p>
                  <span>{parseFloat(item.tsupply).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
      {/* Pagination Section */}
      <div className="flex justify-between mt-1 items-center">
        {currentPage > 0 ? (
          <button onClick={handlePrevious} className="text-black flex font-bold items-center gap-1 px-2 rounded">
            <HiArrowNarrowLeft />
            Previous
          </button>
        ) : (
          <span className="text-black px-4 rounded opacity-50 hidden font-bold items-center gap-1 cursor-not-allowed">
            <HiArrowNarrowLeft />
            Previous
          </span>
        )}

     
        <div className="flex-grow" />
        
        {currentPage < totalPages - 1 ? (
          <button onClick={handleNext} className="text-black px-4 flex items-center font-bold gap-1 rounded">
            Next
            <HiArrowNarrowRight className='font-bold' />
          </button>
        ) : (
          <span className="text-black px-4 rounded opacity-50 flex font-bold items-center gap-1 cursor-not-allowed">
            Next
            <HiArrowNarrowRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default AssetTableDisplay;
