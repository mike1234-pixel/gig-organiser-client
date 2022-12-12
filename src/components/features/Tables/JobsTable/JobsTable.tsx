import { useMemo } from "react";
import { Row, useTable, useSortBy, Column } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";
import { Badge } from "../../../common/Badge";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import styles from "./JobsTable.module.css";
import {
  DateCell,
  PriorityBadgeCell,
  ActionsCell,
  badgeVariants,
  EditButton,
  DeleteButton,
} from "./cells";

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

export const JobsTable = () => {
  const { jobs: jobsData } = useJobs();

  const jobs = useMemo(() => jobsData, [jobsData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: jobs || [],
      },
      useSortBy
    );

  return (
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
        {rows.map((row) => {
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
  );
};
