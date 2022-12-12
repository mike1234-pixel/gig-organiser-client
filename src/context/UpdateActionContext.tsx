import { createContext, ReactNode, useContext, useState } from "react";
import { ActionI } from "../types/Action_Object";

type UpdateActionContextValue = {
  actionToUpdate: ActionI;
  setActionToUpdate: (action: ActionI) => void;
};

const actionInit = {
  ID: 0,
  CreatedAt: "",
  UpdatedAt: "",
  DeletedAt: null,
  userid: 0,
  jobid: 0,
  name: "",
  description: "",
  complete_by: "",
  completed: false,
};

const UpdateActionContext = createContext<UpdateActionContextValue>({
  actionToUpdate: actionInit,
  setActionToUpdate: () => {},
});

const useActionToUpdate = (): UpdateActionContextValue => {
  const context = useContext(UpdateActionContext);

  if (!context) {
    throw new Error(
      "useActionToUpdate must be used within a UpdateActionContextProvider"
    );
  }

  return context;
};

const UpdateActionContextProvider = ({ children }: { children: ReactNode }) => {
  const [actionToUpdate, setActionToUpdate] = useState<ActionI>(actionInit);

  return (
    <UpdateActionContext.Provider
      value={{
        actionToUpdate,
        setActionToUpdate,
      }}
    >
      {children}
    </UpdateActionContext.Provider>
  );
};

export { useActionToUpdate, UpdateActionContextProvider };
