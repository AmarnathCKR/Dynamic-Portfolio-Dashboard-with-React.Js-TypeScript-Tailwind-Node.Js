/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { Column } from "react-table";

export function useStockTable<T extends object>(
  data: T[],
  columns: Column<T>[],
  pageSize = 10
) {
  return useTable<T>(
    {
      data,
      columns,
      initialState: {
        pageSize,
      } as Partial<any>, 
    },
    useGlobalFilter, 
    useSortBy,       
    usePagination
  );
}
