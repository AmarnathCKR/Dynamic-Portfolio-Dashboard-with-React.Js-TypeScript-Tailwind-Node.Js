/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useTable,
  useSortBy,
  usePagination,
  Column,
  TableOptions,
} from "react-table";

export const useStockTable = <T extends object>(
  data: T[],
  columns: Column<T>[],
  pageSize = 10
) => {
  const options: TableOptions<T> = {
    data,
    columns,
    initialState: {
      pageIndex: 0,
      pageSize,
    } as Partial<any>,
  };

  return useTable(options, useSortBy, usePagination);
};
