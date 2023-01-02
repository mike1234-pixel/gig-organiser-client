import { useMemo, useState } from "react";
import { useTable, useSortBy, Row, Column, usePagination } from "react-table";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useActions } from "../../../../hooks/useActions";
import {
  DateCell,
  JobCell,
  CompletedCell,
  EditButton,
  DeleteButton,
  DescriptionCell,
} from "./cells";
import { ActionI } from "../../../../types/Action_Object";
import styles from "./ActionsTable.module.css";
import { Pagination } from "../Pagination";

const columns: Column[] = [
  {
    Header: "Action",
    accessor: "name",
    Cell: ({ value }: { value: string }) => (
      <span className={styles.name}>{value}</span>
    ),
  },
  {
    Header: "Description",
    accessor: "description",
    disableSortBy: true,
    Cell: ({ value }: { value: string }) => (
      <DescriptionCell description={value} />
    ),
  },
  {
    Header: "Complete By",
    accessor: "complete_by",
    Cell: ({ value }: { value: string }) => <DateCell date={value} />,
  },
  {
    Header: "Job",
    accessor: "jobid",
    Cell: ({ value }: { value: number }) => <JobCell jobId={value} />,
  },
  {
    Header: "Completed",
    accessor: "completed",
    Cell: ({ value }: { value: boolean }) => (
      <CompletedCell completed={value} />
    ),
  },
  {
    Header: "",
    id: "edit",
    Cell: ({ row }: { row: Row<any> }) => <EditButton action={row.original} />,
  },
  {
    Header: "",
    id: "delete",
    Cell: ({ row }: { row: Row<any> }) => (
      <DeleteButton action={row.original} />
    ),
  },
];

const searchActions = (searchText: string, action: ActionI) => {
  return action.name.toLowerCase().includes(searchText.toLowerCase());
};

export const ActionsTable = () => {
  const { actions: actionsData } = useActions();

  const [searchText, setSearchText] = useState("");

  const actions = useMemo(() => {
    if (!searchText) return actionsData;
    return actionsData?.filter((action) => searchActions(searchText, action));
  }, [actionsData, searchText]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    prepareRow,
  } = useTable(
    {
      columns: columns,
      data: actions || [],
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Search actions..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchInput}
        />
        <table {...getTableProps()} className={styles.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className={styles.row}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={styles.th}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span className={styles.sortArrow}>
                      {column.isSorted &&
                        (column.isSortedDesc ? (
                          <AiOutlineArrowDown />
                        ) : (
                          <AiOutlineArrowUp />
                        ))}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className={styles.td} {...cell.getCellProps()}>
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
      <Pagination
        setPageSize={setPageSize}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageOptions={pageOptions}
        pageCount={pageCount}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </>
  );
};
