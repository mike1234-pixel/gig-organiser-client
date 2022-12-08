import { useMemo } from "react";
import { useTable } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Organisation",
    accessor: "organisation",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Priority",
    accessor: "priority",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

export const JobsTable = () => {
  const { jobs: jobsData, isLoading, error } = useJobs();

  const jobs = useMemo(() => jobsData, [jobsData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columns,
      data: jobs,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
