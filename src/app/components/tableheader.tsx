

import React from 'react';

interface TableHeaderProps {
  colmumHeads: string[];
  columnImages: Record<string, string>;
}

const TableHeader: React.FC<TableHeaderProps> = ({ colmumHeads, columnImages }) => (
  <thead>
     <tr className="h-[35px] px-4">
      {colmumHeads.map((head) => (
        <th key={head} scope="col" className="text-left text-[14px] md:text-[18px]/[21px] text-black px-2 text-light-200 font-bold">
          {columnImages[head] || ''} {head}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;


