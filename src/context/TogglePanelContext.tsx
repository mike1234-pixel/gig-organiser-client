import { createContext, ReactNode, useContext, useState } from "react";

type TogglePanelContextValue = {
  togglePanel: boolean;
  setTogglePanel: (toggle: boolean) => void;
  form: "AddJob" | "UpdateJob" | "AddAction" | "UpdateAction" | null;
  setForm: (formName: TogglePanelContextValue["form"]) => void;
};

const TogglePanelContext = createContext<TogglePanelContextValue>({
  togglePanel: false,
  setTogglePanel: () => {},
  form: null,
  setForm: () => {},
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

  const [form, setForm] = useState<TogglePanelContextValue["form"]>(null);

  return (
    <TogglePanelContext.Provider
      value={{
        togglePanel,
        setTogglePanel,
        form,
        setForm,
      }}
    >
      {children}
    </TogglePanelContext.Provider>
  );
};

export { useTogglePanel, TogglePanelContextProvider };
