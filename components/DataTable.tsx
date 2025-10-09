import React from 'react';

interface DataTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  wide?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ headers, rows, wide = false }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden border border-gray-200/80">
        <thead className="bg-violet-600 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={`p-3 font-semibold text-sm ${wide ? 'md:p-4 md:text-base' : 'md:p-3 md:text-sm'}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-100 last:border-b-0 even:bg-violet-50/50">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={`p-3 text-center text-gray-700 text-sm whitespace-pre-line ${wide ? 'md:p-4 md:text-sm' : 'md:p-3 md:text-sm'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
