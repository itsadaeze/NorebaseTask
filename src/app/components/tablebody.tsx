
import React from 'react';
import { ICoinData } from '../ui/table/type';


interface TableBodyProps {
  paginatedData: ICoinData[];
}

const TableBody: React.FC<TableBodyProps> = ({ paginatedData }) => {
  return (
    <tbody className=''>
      {paginatedData.map((item, index) => (
        <tr key={item.id} className={`h-[35px] px-2 cursor-pointer mb-4 hover:rounded-[18px] ${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}`}>
          <td className="px-2 text-left text-[18px]/[21px] text-light-200 font-semibold">
            <span className="text-black text-[14px] font-[500]">{item.name}</span>
          </td>
          <td className="px-2 text-left text-[18px]/[21px] text-light-200 font-semibold">
            <span className="text-black text-[14px] font-[500]">{item.symbol}</span>
          </td>
          <td className="px-2 text-left text-[18px]/[21px] text-light-200 font-semibold">
            <span className="text-black text-left text-[14px] font-[500]">${parseFloat(item.price_usd).toFixed(2)}</span>
          </td>
          <td className="text-left text-[18px]/[21px] text-light-200 font-semibold">
            <span className="text-black text-left text-[14px] font-[500]">{parseFloat(item.tsupply).toLocaleString()} {item.symbol}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
