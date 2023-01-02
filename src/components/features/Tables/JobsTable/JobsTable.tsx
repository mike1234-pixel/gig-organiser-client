import { useMemo, useState } from "react";
import { Row, useTable, useSortBy, Column, usePagination } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";
import { Badge } from "../../../common/Badge";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  DateCell,
  DescriptionCell,
  PriorityBadgeCell,
  ActionsCell,
  badgeVariants,
  EditButton,
  DeleteButton,
} from "./cells";
import { JobI } from "../../../../types/Job_Object";
import styles from "./JobsTable.module.css";
import { Pagination } from "../Pagination";

const columns: Column[] = [
  {
    Header: "Title",
    accessor: "title",
    Cell: ({ value }: { value: string }) => (
      <span style={{ fontWeight: 600 }}>{value}</span>
    ),
  },
  {
    Header: "Organisation",
    accessor: "organisation",
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
    Header: "Created",
    accessor: "CreatedAt",
    Cell: ({ value }: { value: string }) => <DateCell date={value} />,
  },
  {
    Header: "Priority",
    accessor: "priority",
    Cell: ({ value }: { value: string }) => (
      <PriorityBadgeCell priority={value} />
    ),
  },
  {
    Header: "Actions",
    accessor: "ID",
    Cell: ({ value }: { value: number }) => <ActionsCell jobId={value} />,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: { value: string }) => (
      <Badge variant={badgeVariants[value]}>{value}</Badge>
    ),
  },
  {
    Header: "",
    id: "edit",
    Cell: ({ row }: { row: Row<any> }) => <EditButton job={row.original} />,
  },
  {
    Header: "",
    id: "delete",
    Cell: ({ row }: { row: Row<any> }) => <DeleteButton job={row.original} />,
  },
];

const searchJobs = (searchText: string, job: JobI) => {
  return job.title.toLowerCase().includes(searchText.toLowerCase());
};

export const JobsTable = () => {
  const { jobs: jobsData } = useJobs();

  const [searchText, setSearchText] = useState("");

  const jobs = useMemo(() => {
    if (!searchText) return jobsData;
    return jobsData?.filter((job) => searchJobs(searchText, job));
  }, [jobsData, searchText]);

  const {
    getTableProps,
    getTableBodyProps,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageOptions,
    headerGroups,
    page,
    state: { pageIndex, pageSize },
    prepareRow,
  } = useTable(
    {
      columns: columns,
      data: jobs || [],
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Search jobs..."
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
