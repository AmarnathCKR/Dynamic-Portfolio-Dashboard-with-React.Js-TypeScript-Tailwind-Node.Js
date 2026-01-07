/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useStockTable } from "@/components/stock-table/useStockTable";
import { stockColumns } from "./Columns";
import { ComputedStock } from "@/components/stock-table/types";

interface Props {
  data: ComputedStock[];
}

const StockDataTable: React.FC<Props> = ({ data }) => {
  const table = useStockTable(data, stockColumns);
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    table as any;
console.log(headerGroups)
  return (
    <table {...getTableProps()} className="min-w-full border">
      <thead className="bg-gray-50">
        {headerGroups.map((hg: any,) => (
          <tr {...hg.getHeaderGroupProps()} key={1132}>
            {hg.headers.map((col: any) => (
              <th  {...col.getHeaderProps()} key={col?.Header} className="px-3 py-2 text-left">
                {col.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row: any) => {
          prepareRow(row);
          return (
            <tr  {...row.getRowProps()} key={row?.id}>
              {row.cells.map((cell: any, index: number) => (
                <td  {...cell.getCellProps()} key={row?.id + index} className="px-3 py-2">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(StockDataTable);
