import styles from "./App.module.css";
import { Job, useJobs } from "./hooks/useJobs";

function App() {
  const jobs = useJobs();

  console.log(jobs);

  return (
    <div className={styles.app}>
      {jobs ? (
        jobs.map((job: Job) => {
          return (
            <div key={job.ID}>
              <p>{job.title}</p>
              <p>{job.organisation}</p>
              <p>{job.description}</p>
              <p>{job.priority}</p>
              <p>{job.status}</p>
            </div>
          );
        })
      ) : (
        <>loading...</>
      )}
    </div>
  );
}

export default App;
