import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface SuccessAnimationI {
  handleAction: () => void;
  handleAnimationIteration: () => void;
  animationTriggered: boolean;
  setAnimationTriggered: Dispatch<SetStateAction<boolean>>;
}

export const SuccessAnimationContext = createContext<SuccessAnimationI>({
  handleAction: () => {},
  handleAnimationIteration: () => {},
  animationTriggered: false,
  setAnimationTriggered: () => {},
});

export const SuccessAnimationContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleAction = () => {
    setAnimationTriggered(true);
  };

  const handleAnimationIteration = () => {
    setAnimationTriggered(false);
  };

  return (
    <SuccessAnimationContext.Provider
      value={{
        animationTriggered,
        setAnimationTriggered,
        handleAction,
        handleAnimationIteration,
      }}
    >
      {children}
    </SuccessAnimationContext.Provider>
  );
};
