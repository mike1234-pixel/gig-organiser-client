import { useJobs, Job } from "../../hooks/useJobs";

const Jobs = () => {
  const { jobs, isLoading, error } = useJobs();

  if (isLoading) return <>loading</>;

  if (error) return <>error</>;

  return (
    <>
      {jobs.map((job: Job) => {
        return (
          <div key={job.ID}>
            <p>{job.title}</p>
            <p>{job.organisation}</p>
            <p>{job.description}</p>
            <p>{job.priority}</p>
            <p>{job.status}</p>
          </div>
        );
      })}
    </>
  );
};

export default Jobs;
