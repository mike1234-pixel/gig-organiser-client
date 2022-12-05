import { useJobs } from "../../../hooks/useJobs";
import { JobI } from "../../../types/Job_Object";
import { Job } from "../Job/Job";

export const Jobs = () => {
  const { jobs, isLoading, error } = useJobs();

  if (isLoading) return <>loading</>;

  if (error) return <>error</>;

  return (
    <>
      {jobs.map((job: JobI) => {
        return (
          <div key={job.ID}>
            <Job job={job} />
          </div>
        );
      })}
    </>
  );
};
