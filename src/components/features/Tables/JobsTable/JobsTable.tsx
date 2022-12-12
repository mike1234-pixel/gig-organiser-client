import { useMemo } from "react";
import { Row, useTable, useSortBy } from "react-table";
import { useJobs } from "../../../../hooks/useJobs";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { Badge } from "../../../common/Badge";
import { BadgeProps } from "../../../common/Badge/Badge";
import { ActionButton } from "../../../common/ActionButton";
import classNames from "classnames";
import { JobI } from "../../../../types/Job_Object";
import { useJobToUpdate } from "../../../../context/UpdateJobContext";
import { useDeleteJob } from "../../../../hooks/useDeleteJob";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import styles from "./JobsTable.module.css";
import { useActions } from "../../../../hooks/useActions";

const badgeVariants: { [key: string]: BadgeProps["variant"] } = {
  pending: "warning",
  success: "success",
  declined: "danger",
};

const DateCell = ({ date }: { date: string }) => {
  return <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>;
};

const PriorityBadgeCell = ({ priority }: { priority: string }) => {
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

const ActionsCell = ({ jobId }: { jobId: number }) => {
  const { actions } = useActions();

  const jobActions = actions?.filter((action) => action.jobid === jobId);

  return (
    <ul className={styles.actionsList}>
      {jobActions?.map((action) => {
        return <li key={action.ID}>{action.name}</li>;
      })}
    </ul>
  );
};

const EditButton = ({ job }: { job: JobI }) => {
  const { setJobToUpdate } = useJobToUpdate();

  const { setTogglePanel, togglePanel } = useTogglePanel();

  const { setForm } = useTogglePanel();

  const handleClick = () => {
    setForm("UpdateJob");
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
