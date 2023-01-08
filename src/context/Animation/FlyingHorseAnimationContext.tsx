import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface FlyingHorseAnimationI {
  handleAction: () => void;
  handleAnimationIteration: () => void;
  animationTriggered: boolean;
  setAnimationTriggered: Dispatch<SetStateAction<boolean>>;
}

export const FlyingHorseAnimationContext = createContext<FlyingHorseAnimationI>(
  {
    handleAction: () => {},
    handleAnimationIteration: () => {},
    animationTriggered: false,
    setAnimationTriggered: () => {},
  }
);

export const FlyingHorseAnimationContextProvider = ({
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
    <FlyingHorseAnimationContext.Provider
      value={{
        animationTriggered,
        setAnimationTriggered,
        handleAction,
        handleAnimationIteration,
      }}
    >
      {children}
    </FlyingHorseAnimationContext.Provider>
  );
};
