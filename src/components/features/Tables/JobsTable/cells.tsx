import classNames from "classnames";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useJobToUpdate } from "../../../../context/UpdateJobContext";
import { useActions } from "../../../../hooks/useActions";
import { useDeleteJob } from "../../../../hooks/useDeleteJob";
import { JobI } from "../../../../types/Job_Object";
import { ActionButton } from "../../../common/ActionButton";
import { BadgeProps } from "../../../common/Badge/Badge";
import styles from "./JobsTable.module.css";

export const badgeVariants: { [key: string]: BadgeProps["variant"] } = {
  pending: "warning",
  success: "success",
  declined: "danger",
};

export const DateCell = ({ date }: { date: string }) => {
  return (
    <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
  );
};

export const PriorityBadgeCell = ({ priority }: { priority: string }) => {
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
      <span
        className={classNames(
          styles[getPriorityClass(priorityInt)],
          styles.priorityValue
        )}
      >
        {priority}
      </span>
    </div>
  );
};

export const ActionsCell = ({ jobId }: { jobId: number }) => {
  const { actions } = useActions();

  const jobActions = actions?.filter((action) => action.jobid === jobId);

  return jobActions?.length ? (
    <ul className={styles.actionsList}>
      {jobActions.map((action) => {
        return <li key={action.ID}>{action.name}</li>;
      })}
    </ul>
  ) : (
    <AiOutlineEllipsis />
  );
};

export const EditButton = ({ job }: { job: JobI }) => {
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

export const DeleteButton = ({ job }: { job: JobI }) => {
  const { mutate } = useDeleteJob();

  return <ActionButton variant="delete" onClick={() => mutate(job)} />;
};
