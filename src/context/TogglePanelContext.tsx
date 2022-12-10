import { createContext, ReactNode, useContext, useState } from "react";

type TogglePanelContextValue = {
  togglePanel: boolean;
  setTogglePanel: (toggle: boolean) => void;
  addJob: boolean;
  setAddJob: (addJob: boolean) => void;
};

const TogglePanelContext = createContext<TogglePanelContextValue>({
  togglePanel: false,
  setTogglePanel: () => {},
  addJob: false,
  setAddJob: () => {},
});

const useTogglePanel = (): TogglePanelContextValue => {
  const context = useContext(TogglePanelContext);

  if (!context) {
    throw new Error(
      "useTogglePanel must be used within a TogglePanelContextProvider"
    );
  }

  return context;
};

const TogglePanelContextProvider = ({ children }: { children: ReactNode }) => {
  const [togglePanel, setTogglePanel] = useState<boolean>(false);
  const [addJob, setAddJob] = useState<boolean>(false); // this controls whether the form displayed is for adding a job or upddating a job
  // to make this more flexible this could just be a string that specifies a form

  return (
    <TogglePanelContext.Provider
      value={{
        togglePanel,
        setTogglePanel,
        addJob,
        setAddJob,
      }}
    >
      {children}
    </TogglePanelContext.Provider>
  );
};

export { useTogglePanel, TogglePanelContextProvider };
