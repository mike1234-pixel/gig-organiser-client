import { createContext, ReactNode, useContext, useState } from "react";

type TogglePanelState = boolean;

type SetTogglePanel = (toggle: TogglePanelState) => void;

type TogglePanelContextValue = {
  togglePanel: TogglePanelState;
  setTogglePanel: SetTogglePanel;
};

const TogglePanelContext = createContext<TogglePanelContextValue>({
  togglePanel: false,
  setTogglePanel: () => {},
});

const useTogglePanel = (): TogglePanelContextValue => {
  const context = useContext(TogglePanelContext);

  console.log("run");

  if (!context) {
    throw new Error(
      "useTogglePanel must be used within a TogglePanelContextProvider"
    );
  }

  return context;
};

const TogglePanelContextProvider = ({ children }: { children: ReactNode }) => {
  const [togglePanel, setTogglePanel] = useState<TogglePanelState>(false);

  return (
    <TogglePanelContext.Provider
      value={{
        togglePanel,
        setTogglePanel,
      }}
    >
      {children}
    </TogglePanelContext.Provider>
  );
};

export { useTogglePanel, TogglePanelContextProvider };
