import React from "react";
import { ICoinData } from "../ui/table/type";

interface MobileLayoutProps {
  paginatedData: ICoinData[];
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ paginatedData }) => {
  return (
    <div className="md:hidden  ">
      {paginatedData.map((item, index) => (
        <div
          key={item.id}
          className={`p-1 flex justify-between items-center gap-1 ${
            index % 2 === 0 ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col gap-2 px-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                💰
                <p className="text-left text-[14px] md:text-[20px]/[21px] text-black text-light-200 font-bold">
                  Coin
                </p>
              </div>

              <span className="text-black text-[14px] font-[500] ">
                {item.name}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                🤑
                <p className="text-left text-[14px] md:text-[20px]/[21px] text-black text-light-200 font-bold">
                  Price
                </p>
                </div>
                <span className="text-black text-[14px] font-[500] ">
                  ${parseFloat(item.price_usd).toFixed(2)}
                </span>
             
            </div>
           
          </div>
          <div className="flex flex-col gap-2 w-1/2">
          <div className="flex flex-col text-black text-[14px] font-[500] ">
              <div className="flex items-center gap-1">
                📄
                <p className="text-left text-[14px] md:text-[20px]/[21px] text-black text-light-200 font-bold">
                  Symbol
                </p>
                </div>
                <span>{item.symbol}</span>
            
            </div>
            <div className="text-black flex flex-col text-[14px] font-[500] ">
              <div className="flex items-center gap-1">
                📉
                <p className="text-left text-[14px] md:text-[20px]/[21px] text-black text-light-200 font-bold">
                  Total Supply
                </p>
                </div>
                <span className="text-wrap">
                  {parseFloat(item.tsupply).toLocaleString()} {item.symbol}
                </span>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileLayout;
