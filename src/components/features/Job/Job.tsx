import { JobI } from "../../../types/Job_Object";

interface JobProps {
  job: JobI;
}

export const Job = ({ job }: JobProps) => {
  return (
    <div key={job.ID}>
      <p>{job.title}</p>
      <p>{job.organisation}</p>
      <p>{job.description}</p>
      <p>{job.priority}</p>
      <p>{job.status}</p>
    </div>
  );
};
