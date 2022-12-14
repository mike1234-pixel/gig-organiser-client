import { createContext, ReactNode, useContext, useState } from "react";

type TogglePanelI = {
  togglePanel: boolean;
  setTogglePanel: (toggle: TogglePanelI["togglePanel"]) => void;
  form: "AddJob" | "UpdateJob" | "AddAction" | "UpdateAction" | null;
  setForm: (formName: TogglePanelI["form"]) => void;
};

const TogglePanelContext = createContext<TogglePanelI>({
  togglePanel: false,
  setTogglePanel: () => {},
  form: null,
  setForm: () => {},
});

const useTogglePanel = (): TogglePanelI => {
  const context = useContext(TogglePanelContext);

  if (!context) {
    throw new Error(
      "useTogglePanel must be used within a TogglePanelContextProvider"
    );
  }

  return context;
};

const TogglePanelContextProvider = ({ children }: { children: ReactNode }) => {
  const [togglePanel, setTogglePanel] =
    useState<TogglePanelI["togglePanel"]>(false);

  const [form, setForm] = useState<TogglePanelI["form"]>(null);

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
