import { Button, PageButton } from "./TableButton";
import "regenerator-runtime/runtime";
import React from "react";
import {
  Column,
  Row,
  TableState,
  useAsyncDebounce,
  useGlobalFilter,
  useTable,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { SortDownIcon, SortIcon, SortUpIcon } from "../general/Icons";

type Props = {
  columns: any;
  data: any;
};

function Table({ columns, data }: Props) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Define a default UI for filtering
  function GlobalFilter({
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
  }: {
    preGlobalFilteredRows: any;
    setGlobalFilter: (filterValue: any) => void;
    globalFilter: any;
  }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState<any>(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);

    return (
      <label className="flex gap-x-2 items-baseline">
        <span className="text-gray-700">Search: </span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </label>
    );
  }

  // Render the UI for your table
  return (
    <>
      {/* <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      /> */}
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? (
            <div className="flex items-center gap-1 pt-2 px-4" key={column.id}>
              <label className="text-xs md:text-sm" htmlFor={column.id}>
                {column.render("Header")}:{" "}
              </label>
              {column.render("Filter")}
            </div>
          ) : null
        )
      )}

      <div className="w-full mt-2 flex flex-col">
        <div className="w-full -my-2 overflow-x-auto">
          <div className="w-full py-2 align-middle inline-block min-w-full sm:px-2 lg:px-4">
            <div className="w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-100 dark:bg-gray-600 ">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="group px-2 md:px-6 py-1 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 tracking-wider"
                          // {...column.getHeaderProps(
                          //   column.getSortByToggleProps()
                          // )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                            {/* Add a sort direction indicator */}
                            {/* <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                                )
                              ) : (
                                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                              )}
                            </span> */}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white dark:bg-slate-800 divide-y divide-gray-200 text-xs"
                >
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-2 md:px-4 py-1 md:py-2"
                              role="cell"
                            >
                              {/* whitespace-nowrap */}
                              {/* {cell.column.Cell.name === "defaultRenderer" ? (
                                <div className="text-sm text-gray-500">
                                  {cell.render("Cell")}
                                </div>
                              ) : (
                                cell.render("Cell")
                              )} */}
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
        </div>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center justify-between px-4 pb-12">
        <div className="flex-1 text-xs md:text-lg flex justify-between sm:hidden">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className=""
          >
            قبلی
          </Button>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className=""
          >
            بعدی
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-center text-xs md:text-sm">
            <select
              className="dark:bg-slate-800 dark:border-2 outline-none rounded-lg p-1 "
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  نمایش {pageSize} تایی
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-700 dark:text-gray-100">
              صفحه <span className="font-medium">{state.pageIndex + 1}</span> از{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
          </div>

          <div className="">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
              aria-label="Pagination"
            >
              {/* last */}
              <PageButton
                className="rounded-r-md dark:bg-slate-800"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </PageButton>

              {/* next */}
              <PageButton
                className="dark:bg-slate-800"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>

              {/* previous */}
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="dark:bg-slate-800"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>

              {/* go to first */}
              <PageButton
                className="rounded-l-md dark:bg-slate-800"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
      {/* <div>
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div> */}
    </>
  );
}
export default Table;
