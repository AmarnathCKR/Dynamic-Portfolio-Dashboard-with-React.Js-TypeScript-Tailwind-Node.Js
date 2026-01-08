/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useStockTable } from "@/components/stock-table/useStockTable";
import { stockColumns } from "./Columns";
import { ComputedStock } from "@/components/stock-table/types";
import GlobalSearch from "../GlobalSearch";

interface Props {
  data: ComputedStock[];
}

const StockDataTable: React.FC<Props> = ({ data }) => {
  const table = useStockTable(data, stockColumns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
  } = table as any;

  const { globalFilter } = state;

  return (
    <div className="space-y-3">
      <GlobalSearch
        value={globalFilter ?? ""}
        onChange={setGlobalFilter}
      />

      <div className="table-container">
        <table {...getTableProps()} className="table">
          <thead className="table-head">
            {headerGroups.map((hg: any) => (
              <tr {...hg.getHeaderGroupProps()} key={'hg.id'}>
                {hg.headers.map((col: any) => (
                  <th
                    {...col.getHeaderProps(col.getSortByToggleProps())}
                    key={col.id}
                    className="table-head-cell cursor-pointer select-none"
                  >
                    <span className="flex items-center gap-1">
                      {col.render("Header")}
                      {col.isSorted ? (
                        col.isSortedDesc ? " 🔽" : " 🔼"
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              const gainLoss = row.original.gainLoss;

              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="table-row"
                >
                  {row.cells.map((cell: any) => {
                    const isGainLoss = cell.column.id === "gainLoss";

                    return (
                      <td
                        {...cell.getCellProps()}
                        key={cell.column.id}
                        className={`table-cell ${
                          isGainLoss
                            ? gainLoss >= 0
                              ? "cell-gain"
                              : "cell-loss"
                            : ""
                        }`}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(StockDataTable);
