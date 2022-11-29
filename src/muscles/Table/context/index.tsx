import { createContext } from "react";

export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
  order: Order;
  orderBy: OrderBy;
  onOrderChange: (data: { dataIndex: OrderBy }) => void;
  checkedRows: any[];
  handleCheckRow: (value: { rowId: any }) => void;
  isAllRowsChecked: boolean;
  onCheckAllRows: () => void;
  onSelectRow: (value: any) => void;
  selectedRow: any;
}

export const TableContext = createContext<TableContextProps>({
  order: undefined,
  orderBy: undefined,
  onOrderChange: () => ({}),
  checkedRows: [],
  handleCheckRow: () => ({}),
  isAllRowsChecked: false,
  onCheckAllRows: () => ({}),
  onSelectRow: () => ({}),
  selectedRow: undefined,
});
