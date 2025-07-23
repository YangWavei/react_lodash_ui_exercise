import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  type ColumnDef,
  flexRender,
} from '@tanstack/react-table';

// 1. 定义数据类型
type Person = {
  id: number;
  name: string;
  age: number;
  department: string;
};

// 2. 创建模拟数据
const defaultData: Person[] = [
  { id: 1, name: 'John Doe', age: 30, department: 'Engineering' },
  { id: 2, name: 'Jane Smith', age: 28, department: 'Marketing' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance' },
  { id: 4, name: 'Alice Brown', age: 32, department: 'HR' },
  { id: 5, name: 'Charlie Wilson', age: 40, department: 'Engineering' },
  { id: 6, name: 'Diana Miller', age: 26, department: 'Marketing' },
  { id: 7, name: 'Evan Davis', age: 33, department: 'Finance' },
  { id: 8, name: 'Fiona Clark', age: 29, department: 'HR' },
];

// 3. 定义表格列配置
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
  },
  {
    accessorKey: 'name',
    header: 'Full Name',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
];

const MyTanstackTable = () => {
  // 4. 使用 React Table 钩子
  const [data] = React.useState<Person[]>(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // 启用分页
    initialState: {
      pagination: {
        pageSize: 5, // 默认每页显示数量
      },
    },
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>

      {/* 5. 渲染表格 */}
      <div className="border rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ width: header.getSize() }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 6. 分页控件 */}
      <div className="flex items-center justify-between mt-4">
        <div>
          显示 {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          -
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            defaultData.length
          )} 条数据，共 {defaultData.length} 条
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            上一页
          </button>
          <span>
            第 {table.getState().pagination.pageIndex + 1} 页 / 共 {table.getPageCount()} 页
          </span>
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTanstackTable;
