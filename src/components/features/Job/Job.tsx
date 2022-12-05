import { JobI } from "../../../types/Job_Object";
import { Accordion } from "../../common/Accordion";

interface JobProps {
  job: JobI;
}

export const Job = ({ job }: JobProps) => {
  const content = (
    <>
      <p>{job.organisation}</p>
      <p>{job.description}</p>
      <p>{job.priority}</p>
      <p>{job.status}</p>
    </>
  );

  return <Accordion title={job.title} content={content} />;
};
