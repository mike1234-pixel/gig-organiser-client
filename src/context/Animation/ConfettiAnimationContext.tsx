import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ConfettiAnimationI {
  renderConfetti: boolean;
  resetRenderConfetti: () => void;
  confettiPieces: number;
  setConfettiPieces: Dispatch<SetStateAction<number>>;
}

export const ConfettiAnimationContext = createContext<ConfettiAnimationI>({
  renderConfetti: false,
  resetRenderConfetti: () => {},
  confettiPieces: 150,
  setConfettiPieces: () => {},
});

export const ConfettiAnimationContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [renderConfetti, setRenderConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(150);

  const resetRenderConfetti = () => {
    setConfettiPieces(150);
    setRenderConfetti(true);

    setTimeout(() => {
      setConfettiPieces(0);
    }, 2000);

    setTimeout(() => {
      setRenderConfetti(false);
    }, 7000);
  };

  return (
    <ConfettiAnimationContext.Provider
      value={{
        renderConfetti,
        resetRenderConfetti,
        confettiPieces,
        setConfettiPieces,
      }}
    >
      {children}
    </ConfettiAnimationContext.Provider>
  );
};
