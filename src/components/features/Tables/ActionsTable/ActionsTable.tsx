import { useMemo } from "react";
import { useTable, useSortBy, Row, Column } from "react-table";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useActions } from "../../../../hooks/useActions";
import styles from "./ActionsTable.module.css";
import {
  DateCell,
  JobCell,
  CompletedCell,
  EditButton,
  DeleteButton,
} from "./cells";

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

export const ActionsTable = () => {
  const { actions: actionsData } = useActions();

  const actions = useMemo(() => actionsData, [actionsData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: actions || [],
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
