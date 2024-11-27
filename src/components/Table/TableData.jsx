import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineSort,
} from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";

export default function TableData({ data, columns }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });

  return (
    <>
      <table width="100%" className={`overflow-x-scroll`}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize() }}
                  className={`text-text-caption font-medium text-xs text-start bg-bg-secondary py-md px-lg `}
                >
                  <span className="flex flex-row items-center gap-x-md">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    <span className="flex flex-row">
                      {header.column.getCanSort() && (
                        <button
                          aria-label="sorting button"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <RxCaretSort size={17} />
                        </button>
                      )}
                      {/* icon sorting asc and desc */}
                      {
                        {
                          asc: <MdOutlineArrowDropUp size={17} />,
                          desc: <MdOutlineArrowDropDown size={17} />,
                        }[header.column.getIsSorted()]
                      }
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b border-border-primary px-lg py-md text-xs text-text-primary"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-4 px-2 py-1">
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-xs text-text-primary">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            type="button"
            className="disabled:opacity-30 w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-300 rounded-full"
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            type="button"
            className="disabled:opacity-30"
          >
            <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-300 rounded-full">
              {">"}
            </div>
          </button>
        </div>
        <div className="flex flex-row">
          <p className="text-xs text-text-primary">Rows per page: </p>
          <select
            aria-label="page number"
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="text-xs text-text-primary"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
