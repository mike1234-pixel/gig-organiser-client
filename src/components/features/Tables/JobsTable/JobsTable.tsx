import { useMemo } from "react";
import { Row, useTable } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { Badge } from "../../../common/Badge";
import { BadgeProps } from "../../../common/Badge/Badge";
import { ActionButton } from "../../../common/ActionButton";
import classNames from "classnames";
import { JobI } from "../../../../types/Job_Object";
import { useJobToUpdate } from "../../../../context/UpdateJobContext";
import { useDeleteJob } from "../../../../hooks/useDeleteJob";
import styles from "../TableStyles/Table.module.css";

const badgeVariants: { [key: string]: BadgeProps["variant"] } = {
  pending: "warning",
  success: "success",
  declined: "danger",
};

const DateCell = ({ date }: { date: string }) => {
  return <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>;
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

const EditButton = ({ job }: { job: JobI }) => {
  const { setJobToUpdate } = useJobToUpdate();

  const { setTogglePanel, togglePanel } = useTogglePanel();

  const { setAddJob } = useTogglePanel();

  const handleClick = () => {
    setAddJob(false);
    setJobToUpdate(job);
    setTogglePanel(!togglePanel);
  };

  return <ActionButton variant="edit" onClick={handleClick} />;
};

const DeleteButton = ({ job }: { job: JobI }) => {
  const { mutate } = useDeleteJob();

  return <ActionButton variant="delete" onClick={() => mutate(job)} />;
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
    Header: "Created",
    accessor: "CreatedAt",
    sortable: true,
    Cell: ({ value }: { value: string }) => <DateCell date={value} />,
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
    useTable({
      columns: columns,
      data: jobs || [],
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
