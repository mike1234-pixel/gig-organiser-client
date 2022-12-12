import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import styles from "./ActionsTable.module.css";
import { useActions } from "../../../../hooks/useActions";
import { useJobs } from "../../../../hooks/useJobs";

const DateCell = ({ date }: { date: string }) => {
  return (
    <p>
      <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>{" "}
      <span className={styles.time}>{new Date(date).toLocaleTimeString()}</span>
    </p>
  );
};

const JobCell = ({ jobId }: { jobId: number }) => {
  const { jobs } = useJobs();

  const job = jobs?.find((job) => job.ID === jobId);

  return <p>{job?.title}</p>;
};

const columns: any = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ value }: { value: string }) => (
      <p className={styles.name}>{value}</p>
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
