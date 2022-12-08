import { useMemo } from "react";
import { useTable } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";
import styles from "../TableStyles/Table.module.css";
import { useTogglePanel } from "../../../../context/EditPanel";
import { Badge } from "../../../common/Badge";
import { BadgeProps } from "../../../common/Badge/Badge";
import { ActionButton } from "../../../common/ActionButton";
import classNames from "classnames";

const badgeVariants: { [key: string]: BadgeProps["variant"] } = {
  pending: "warning",
  success: "success",
  declined: "danger",
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const getPriorityClass = (priority: number) => {
    if (priority < 4) {
      return "danger";
    } else if (priority < 8) {
      return "warning";
    } else {
      return "success";
    }
  };

  const priorityInt = parseInt(priority);

  return (
    <div className={styles.priority}>
      <p
        className={classNames(
          styles[getPriorityClass(priorityInt)],
          styles.priorityValue
        )}
      >
        {priority}
      </p>
    </div>
  );
};

const columns: any = [
  {
    Header: "Title",
    accessor: "title",
    Cell: ({ value }: { value: string }) => (
      <p style={{ fontWeight: 600 }}>{value}</p>
    ),
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
    Cell: ({ value }: { value: string }) => <PriorityBadge priority={value} />,
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
    Cell: () => <ActionButton variant="edit" />,
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
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={styles.row}>
            {headerGroup.headers.map((column) => (
              <th className={styles.th} {...column.getHeaderProps()}>
                {column.render("Header")}
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
