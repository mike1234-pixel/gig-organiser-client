import classNames from "classnames";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useActionToUpdate } from "../../../../context/UpdateActionContext";
import { useDeleteAction } from "../../../../hooks/useDeleteAction";
import { useJobs } from "../../../../hooks/useJobs";
import { ActionI } from "../../../../types/Action_Object";
import { ActionButton } from "../../../common/ActionButton";
import { marked } from "marked";
import styles from "./ActionsTable.module.css";

export const DescriptionCell = ({ description }: { description: string }) => {
  const markdownString = description;

  const html = marked(markdownString);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export const DateCell = ({ date }: { date: string }) => {
  const actionDate = new Date(date);

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

export const JobCell = ({ jobId }: { jobId: number }) => {
  const { jobs } = useJobs();

  const job = jobs?.find((job) => job.ID === jobId);

  return (
    <div>
      {job ? (
        <>
          <span className={styles.jobTitle}>{job?.title}</span> @{" "}
          <span>{job?.organisation}</span>
        </>
      ) : (
        <AiOutlineEllipsis />
      )}
    </div>
  );
};

export const EditButton = ({ action }: { action: ActionI }) => {
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

export const DeleteButton = ({ action }: { action: ActionI }) => {
  const { mutate } = useDeleteAction();

  const handleClick = () => {
    mutate(action);
  };

  return <ActionButton variant="delete" onClick={handleClick} />;
};

export const CompletedCell = ({ completed }: { completed: boolean }) => {
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
