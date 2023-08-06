import { flexRender, HeaderGroup, RowModel } from "@tanstack/react-table"

import Pagination from "./Pagination"

type Props<T> = {
  getHeaderGroups: () => HeaderGroup<T>[]
  getPageCount: () => number
  setPageIndex: (page: number) => void
  getRowModel: () => RowModel<T>
}

const Table = <T extends object>({
  getPageCount,
  setPageIndex,
  getHeaderGroups,
  getRowModel,
}: Props<T>) => {
  return (
    <>
      <table className="divide-y-2 shadow-md rounded-lg max-w-6xl mx-auto lg:w-full divide-gray-200 bg-gray-200 text-sm">
        <thead className="">
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="whitespace-nowrap capitalize px-2 md:px-4 py-2 sm:py-3 text-xs sm:text-sm text-start font-medium text-gray-900"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y w-full divide-gray-200">
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white">
              {row.getVisibleCells().map((cell) => (
                <td
                  className="whitespace-nowrap capitalize px-2 md:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-800"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {getPageCount() && (
        <div className="self-center mx-auto">
          <Pagination pageCount={getPageCount()} changePage={setPageIndex} />
        </div>
      )}
    </>
  )
}

export default Table
