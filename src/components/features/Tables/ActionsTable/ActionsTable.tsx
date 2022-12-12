import { useMemo } from "react";
import { useTable, useSortBy, Row } from "react-table";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useActions } from "../../../../hooks/useActions";
import { useJobs } from "../../../../hooks/useJobs";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useActionToUpdate } from "../../../../context/UpdateActionContext";
import { ActionI } from "../../../../types/Action_Object";
import { ActionButton } from "../../../common/ActionButton";
import { useDeleteAction } from "../../../../hooks/useDeleteAction";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "./ActionsTable.module.css";
import classNames from "classnames";

const DateCell = ({ date }: { date: string }) => {
  const actionDate = new Date(date);
  let color = "green";

  const inThePast = actionDate < new Date();

  return (
    <div
      className={classNames(styles.dateTime, inThePast && styles.dateTimePast)}
    >
      <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>{" "}
      <span className={styles.time}>{new Date(date).toLocaleTimeString()}</span>
    </div>
  );
};

const JobCell = ({ jobId }: { jobId: number }) => {
  const { jobs } = useJobs();

  const job = jobs?.find((job) => job.ID === jobId);

  return (
    <div>
      <span className={styles.jobTitle}>{job?.title}</span> @{" "}
      <span>{job?.organisation}</span>
    </div>
  );
};

const EditButton = ({ action }: { action: ActionI }) => {
  const { setActionToUpdate } = useActionToUpdate();

  const { setTogglePanel, togglePanel } = useTogglePanel();

  const { setForm } = useTogglePanel();

  const handleClick = () => {
    setForm("UpdateAction");
    setActionToUpdate(action);
    setTogglePanel(!togglePanel);
  };

  return <ActionButton variant="edit" onClick={handleClick} />;
};

const DeleteButton = ({ action }: { action: ActionI }) => {
  const { mutate } = useDeleteAction();

  return <ActionButton variant="delete" onClick={() => mutate(action)} />;
};

const CompletedCell = ({ completed }: { completed: boolean }) => {
  return (
    <span className={styles.completed}>
      {completed ? (
        <BsCheck2Circle className={styles.icon} />
      ) : (
        <AiOutlineEllipsis />
      )}
    </span>
  );
};

const columns: any = [
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
