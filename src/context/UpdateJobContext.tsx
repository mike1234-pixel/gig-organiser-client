import { createContext, ReactNode, useContext, useState } from "react";
import { JobI } from "../types/Job_Object";

type UpdateJobContextValue = {
  jobToUpdate: JobI;
  setJobToUpdate: (job: JobI) => void;
};

const jobInit = {
  CreatedAt: "",
  DeletedAt: "",
  ID: 0,
  UpdatedAt: "",
  userid: "",
  description: "",
  organisation: "",
  priority: 0,
  status: "",
  title: "",
};

const UpdateJobContext = createContext<UpdateJobContextValue>({
  jobToUpdate: jobInit,
  setJobToUpdate: () => {},
});

const useJobToUpdate = (): UpdateJobContextValue => {
  const context = useContext(UpdateJobContext);

  if (!context) {
    throw new Error(
      "useJobToUpdate must be used within a UpdateJobContextProvider"
    );
  }

  return context;
};

const UpdateJobContextProvider = ({ children }: { children: ReactNode }) => {
  const [jobToUpdate, setJobToUpdate] = useState<JobI>(jobInit);

  return (
    <UpdateJobContext.Provider
      value={{
        jobToUpdate,
        setJobToUpdate,
      }}
    >
      {children}
    </UpdateJobContext.Provider>
  );
};

export { useJobToUpdate, UpdateJobContextProvider };
